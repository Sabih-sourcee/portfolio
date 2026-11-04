import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { posts } from "@/data/posts";

const title = `Blog | ${siteConfig.author.name}`;
const description = "Writing by Sabih Ur Rehman.";

export const metadata: Metadata = {
	title: { absolute: title },
	description,
	alternates: { canonical: getCanonicalUrl("/blog/") },
	openGraph: {
		title,
		description,
		url: getCanonicalUrl("/blog/"),
		type: "website",
		siteName: siteConfig.title,
		locale: "en_US",
	},
	twitter: {
		card: "summary",
		title,
		description,
	},
};

export default function BlogPage() {
	return (
		<div className='bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10'>
			<div className='flex flex-col gap-6 items-center w-full max-w-xl px-4 m-0'>
				<Header activePage='blog' />
				<div className='w-full'>
					<p className='text-olive-400 dark:text-olive-600 text-sm mb-3 uppercase font-mono'>Blog</p>
					<div className='flex flex-col gap-3'>
						{posts.map((post) => (
							<Link
								key={post.slug}
								href={`/blog/${post.slug}`}
								className='flex items-baseline justify-between gap-4 text-sm group'>
								<p className='font-semibold text-olive-800 dark:text-olive-100 group-hover:underline underline-offset-4'>
									{post.title}
								</p>
								{post.date ? (
									<p className='shrink-0 text-olive-500 dark:text-olive-400 font-mono uppercase'>{post.date}</p>
								) : null}
							</Link>
						))}
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
