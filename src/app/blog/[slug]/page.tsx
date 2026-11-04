import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { getPost, posts, type PostBlock } from "@/data/posts";

export function generateStaticParams() {
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) return { title: "Not found" };

	const title = `${post.title} | ${siteConfig.author.name}`;
	const canonical = getCanonicalUrl(`/blog/${post.slug}/`);

	return {
		title: { absolute: title },
		description: post.description,
		alternates: { canonical },
		openGraph: {
			title,
			description: post.description,
			url: canonical,
			type: "article",
			siteName: siteConfig.title,
			locale: "en_US",
			images: [
				{
					url: siteConfig.images.profile,
					width: 600,
					height: 800,
					alt: siteConfig.author.name,
				},
			],
		},
		twitter: {
			card: "summary",
			title,
			description: post.description,
			images: [siteConfig.images.profile],
		},
	};
}

function PostBlockView({ block }: { block: PostBlock }) {
	if (block.type === "heading") {
		return <h2 className='font-medium text-base mt-2'>{block.text}</h2>;
	}

	return <p className='text-sm/6'>{block.text}</p>;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPost(slug);
	if (!post) notFound();

	return (
		<div className='bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10'>
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
