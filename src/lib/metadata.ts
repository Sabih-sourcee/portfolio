import type { Metadata } from "next";
import { getCanonicalUrl, siteConfig } from "@/config/site";

export const portraitImage = {
	url: siteConfig.images.profile,
	width: 600,
	height: 800,
	alt: "Portrait of Sabih Ur Rehman",
};

export function buildMetadata({
	title,
	description,
	path,
	type = "website",
	publishedTime,
	image = portraitImage,
	card = "summary",
}: {
	title: string;
	description: string;
	path: string;
	type?: "website" | "article";
	publishedTime?: string;
	image?: { url: string; width: number; height: number; alt: string };
	card?: "summary" | "summary_large_image";
}): Metadata {
	const canonical = getCanonicalUrl(path);
	const shared = {
		title,
		description,
		url: canonical,
		siteName: siteConfig.title,
		locale: "en_US",
		images: [image],
	};

	return {
		title: { absolute: title },
		description,
		alternates: { canonical },
		openGraph:
			type === "article"
				? {
						...shared,
						type: "article",
						publishedTime,
						authors: [siteConfig.author.name],
					}
				: {
						...shared,
						type: "website",
					},
		twitter: {
			card,
			title,
			description,
			images: [image.url],
		},
	};
}
