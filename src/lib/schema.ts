import { siteConfig } from "@/config/site";

export const personId = `${siteConfig.url}/#person`;
export const websiteId = `${siteConfig.url}/#website`;

export function siteStructuredData() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": websiteId,
				url: siteConfig.url,
				name: siteConfig.title,
				description: siteConfig.description,
				inLanguage: "en",
				publisher: { "@id": personId },
			},
			{
				"@type": "Person",
				"@id": personId,
				name: siteConfig.author.name,
				alternateName: "Sabih Rehman",
				url: siteConfig.url,
				image: `${siteConfig.url}${siteConfig.images.profile}`,
				jobTitle: siteConfig.author.jobTitle,
				description: siteConfig.description,
				homeLocation: {
					"@type": "Place",
					name: "Karachi",
				},
				sameAs: [
					siteConfig.social.github,
					siteConfig.social.githubProfile,
					siteConfig.social.githubCard,
				],
			},
		],
	};
}
