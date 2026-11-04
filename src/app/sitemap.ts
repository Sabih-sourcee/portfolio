import type { MetadataRoute } from "next";
import { getCanonicalUrl } from "@/config/site";
import { posts } from "@/data/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: getCanonicalUrl("/"),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: getCanonicalUrl("/blog/"),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		...posts.map((post) => ({
			url: getCanonicalUrl(`/blog/${post.slug}/`),
			changeFrequency: "yearly" as const,
			priority: 0.7,
		})),
	];
}
