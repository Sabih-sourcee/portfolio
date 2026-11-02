/**
 * Site Configuration
 *
 * Adapted from the designerdada.com template. Personal fields are Sabih's.
 */

export const siteConfig = {
	name: "sabihrehman.tech",
	title: "Sabih Ur Rehman",
	description:
		"AI Engineer at a company in Karachi. Building interactive products with LLMs, automation, and precise frontend craft.",
	url: "https://sabihrehman.tech",
	locale: "en-US",

	author: {
		name: "Sabih Ur Rehman",
		handle: "@Sabih-sourcee",
		jobTitle: "AI Engineer at a company",
		bio: "I'm Sabih Ur Rehman, an AI Engineer at a company in Karachi. I build interactive products with LLMs, automation, and precise frontend craft.",
	},

	social: {
		github: "https://github.com/sabih-source/",
		githubProfile: "https://github.com/Sabih-sourcee",
		githubCard: "https://githubfc.com/Sabih-sourcee",
	},

	images: {
		profile: "/assets/sabih.webp",
	},
};

export function getCanonicalUrl(path: string = ""): string {
	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	return `${siteConfig.url}${cleanPath === "/" ? "" : cleanPath}`;
}
