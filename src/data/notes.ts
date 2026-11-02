export interface Note {
	id: string;
	text: string;
	date: string;
}

export const notes: Note[] = [
	{
		id: "first-c",
		date: "2020",
		text: "I wrote my first C program in Turbo C++ at age 11.",
	},
	{
		id: "first-job",
		date: "march 2026",
		text: "I got my first job at 15 as an AI Engineer at a company.",
	},
	{
		id: "ai-seekho",
		date: "july 2026",
		text: "I joined my first hackathon, AI Seekho by GDG Pakistan, and placed in the top 750 out of 10,000+.",
	},
	{
		id: "builders-day",
		date: "august 2026",
		text: "I ranked in the top 10 of 1,100 applicants at GDG Builders Day, the youngest at NASTP.",
	},
	{
		id: "research",
		date: "2028",
		text: "I'm working on AI/ML research, aiming to publish my first paper by 2028.",
	},
	{
		id: "aptech",
		date: "",
		text: "I was awarded High Achiever status in the advanced ACCP-AI program at Aptech.",
	},
	{
		id: "project-month",
		date: "",
		text: "I won Project of the Month, outperforming the cohort while serving as Team Leader of the batch.",
	},
];
