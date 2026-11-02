import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPost, posts } from "@/data/posts";

export function generateStaticParams() {
	return posts.map((post) => ({ slug: post.slug }));
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
					{post.sample ? (
						<p className='text-olive-400 dark:text-olive-600 text-sm uppercase font-mono'>Sample</p>
					) : null}
					<h1 className='font-medium text-xl'>{post.title}</h1>
					{post.date ? <p className='text-sm text-olive-500 font-mono uppercase'>{post.date}</p> : null}
					{post.paragraphs.map((paragraph) => (
						<p key={paragraph} className='text-sm/6'>
							{paragraph}
						</p>
					))}
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
