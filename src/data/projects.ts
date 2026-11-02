export interface Project {
	id: string;
	name: string;
	description: string;
	url?: string;
}

export const projects: Project[] = [
	{
		id: "interior-ai",
		name: "Interior AI",
		description: "Got him into the AI Seekho online hackathon, top 750 out of 10,000+.",
		url: "https://interior-ai-sigma-ten.vercel.app",
	},
	{
		id: "the-vc-brain",
		name: "The VC Brain",
		description: "Built at the HackNation hackathon. Next.js, React.",
		url: "https://the-vc-brain.vercel.app",
	},
	{
		id: "simplecrm",
		// Text only. Never add a link or demo — the product exposes company CRM keys.
		name: "SimpleCRM",
		description: "Top 10 out of 1,100 applications. Pitched at NASTP at age 15, the youngest there.",
	},
	{
		id: "bawany-enterprises",
		name: "Bawany Enterprises",
		description:
			"Full React rebuild of the Bawany Enterprises website, started from a structured audit of a reference site, fixed a non-functional lead-gen form, missing mobile nav, and dead anchor links.",
		url: "https://bawanyenterprises.com",
	},
	{
		id: "bawany-mobile",
		name: "Bawany Mobile",
		description:
			"Built and launched bawanymobile.com (React), deployed on Namecheap/cPanel, handled SSL certificate renewal and FTP deployment via FileZilla.",
		url: "https://bawanymobile.com",
	},
];
