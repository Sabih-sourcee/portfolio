export interface Note {
	id: string;
	text: string;
	date: string;
}

/** Dates are only the ones already attached to this copy. Nothing new was invented. */
export const notes: Note[] = [
	{
		id: "hack-nation",
		date: "july 2026",
		text: "Shortlisted from 5,500+ global applications for the MIT-affiliated Hack-Nation Global AI Hackathon — July 2026.",
	},
	{
		id: "ai-seekho",
		date: "2026",
		text: "AI Seekho Silver Tier 2026. Ranked in the top 750 out of 10,000+ participants at a Google Developer Groups event.",
	},
	{
		id: "journeyman",
		date: "season 2026",
		text: "A journeyman this window — minutes spread across 19 clubs, most at Sabih-sourcee/Terminal-Performance-Manager.",
	},
	{
		id: "weekday",
		date: "season 2026",
		text: "A weekday professional — trains on schedule, 77% of touches Mon–Fri.",
	},
	{
		id: "scout",
		date: "season 2026",
		text: "Scout's verdict: Sabih-sourcee is a box-to-box engine — links maintenance to launches, covers every blade of grass. Standout attribute: BUILD 99. 20 matchdays in the observed window. Verdict: sign before the window closes.",
	},
	{
		id: "aptech",
		date: "",
		text: "Awarded prestigious High Achiever status in the advanced ACCP-AI program at Aptech.",
	},
	{
		id: "project-month",
		date: "",
		text: "Won Project of the Month outperforming the cohort while serving as Team Leader of the batch.",
	},
];
