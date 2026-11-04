import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { getPost, posts, type PostBlock } from "@/data/posts";
import { buildMetadata } from "@/lib/metadata";
import { personId } from "@/lib/schema";

export function generateStaticParams() {
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) return { title: "Not found" };

	const image = post.blocks.find((block) => block.type === "image");
	const ogImage = image
		? { url: image.src, width: image.width, height: image.height, alt: image.alt }
		: undefined;

	return buildMetadata({
		title: `${post.title} | ${siteConfig.author.name}`,
		description: post.description,
		path: `/blog/${post.slug}/`,
		type: "article",
		publishedTime: post.published,
		image: ogImage,
		card: image ? "summary_large_image" : "summary",
	});
}

function PostBlockView({ block }: { block: PostBlock }) {
	if (block.type === "heading") {
		return <h2 className='font-medium text-base mt-2'>{block.text}</h2>;
	}

	if (block.type === "image") {
		return (
			<img
				src={block.src}
				alt={block.alt}
				width={block.width}
				height={block.height}
				className='w-full h-auto'
			/>
		);
	}

	return <p className='text-sm/6'>{block.text}</p>;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) notFound();

	const image = post.blocks.find((block) => block.type === "image");
	const canonical = getCanonicalUrl(`/blog/${post.slug}/`);

	return (
		<div className='bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10'>
			<JsonLd
				data={{
					"@context": "https://schema.org",
					"@type": "BlogPosting",
					headline: post.title,
					description: post.description,
					image: image ? `${siteConfig.url}${image.src}` : `${siteConfig.url}${siteConfig.images.profile}`,
					datePublished: post.published,
					author: { "@id": personId },
					publisher: { "@id": personId },
					mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
					url: canonical,
					inLanguage: "en",
				}}
			/>
			<div className='flex flex-col gap-6 items-center w-full max-w-xl px-4 m-0'>
				<Header activePage='blog' />
				<article className='w-full flex flex-col gap-4 text-olive-800 dark:text-olive-100'>
					<h1 className='font-medium text-xl'>{post.title}</h1>
					{post.date ? <p className='text-sm text-olive-500 font-mono uppercase'>{post.date}</p> : null}
					<div className='article-body flex flex-col gap-4'>
						{post.blocks.map((block, index) => (
							<PostBlockView key={`${block.type}-${index}`} block={block} />
						))}
					</div>
					<p className='text-sm'>
						<Link href='/blog' className='link'>
							All posts
						</Link>
					</p>
				</article>
				<Footer />
			</div>
		</div>
	);
}
