/**
 * Blog posts. To add one, copy an existing object and replace the slug,
 * title, description, date, and blocks. Then run `npm run build`.
 */
export type PostBlock =
	| { type: "heading"; text: string }
	| { type: "paragraph"; text: string };

export interface Post {
	slug: string;
	title: string;
	/** Used for the meta description and link previews. */
	description: string;
	/** Optional label such as "November 2026". Leave empty if there is no date. */
	date: string;
	blocks: PostBlock[];
}

export const posts: Post[] = [
	{
		slug: "first-hackathon-top-750",
		title: "How I Placed in the Top 750 of 10,000+ in My First Hackathon",
		description:
			"At 15, with a new job and too much free time, I entered AI Seekho 2026 on a whim. Here's how Interior-AI got me into the top 750.",
		date: "November 2026",
		blocks: [
			{
				type: "paragraph",
				text: "A few months ago, I had a problem most people would envy: free time. I had just started my first job, my evenings were empty, and I had no idea what to do with them.",
			},
			{
				type: "paragraph",
				text: "So I did what I usually do when I'm stuck. I opened a chat with Claude and started thinking out loud. What should I be doing with my life? Where are the people who care about computer science as much as I do?",
			},
			{
				type: "paragraph",
				text: "That second question mattered more than I realized. I didn't just want something to do. I wanted to be around builders.",
			},
			{
				type: "paragraph",
				text: "That's when I found AI Seekho 2026.",
			},
			{ type: "heading", text: "Signing up without a plan" },
			{
				type: "paragraph",
				text: "I had never entered a hackathon before. I didn't have a team, a pitch deck, or a polished idea. I signed up anyway, because waiting until I felt ready would have meant never signing up at all.",
			},
			{ type: "heading", text: "From blank page to Interior-AI" },
			{
				type: "paragraph",
				text: "The hardest part wasn't the code. It was the idea.",
			},
			{
				type: "paragraph",
				text: "I went through idea after idea, throwing most of them away, until one stuck: Interior-AI, a tool that uses AI to help people design their interiors. It was specific, it was useful, and most importantly, I could actually build it.",
			},
			{
				type: "paragraph",
				text: "So I built it. I shipped it. I submitted it.",
			},
			{ type: "heading", text: "The result" },
			{
				type: "paragraph",
				text: "More than 10,000 people applied. I finished in the top 750, and Google sent me swag to prove it.",
			},
			{
				type: "paragraph",
				text: "It wasn't first place. But for a 15-year-old's first hackathon, entered on a whim from Karachi, it felt like a win. In every way that mattered, it was one.",
			},
			{ type: "heading", text: "What I took away" },
			{
				type: "paragraph",
				text: "You don't need to be ready. You need to start. A boring evening and one honest conversation led me to my first hackathon, my first shipped AI product, and a community of people who think like me.",
			},
			{
				type: "paragraph",
				text: "This was the first one. It won't be the last.",
			},
			{
				type: "paragraph",
				text: "-- Sabih Rehman",
			},
		],
	},
];

export function getPost(slug: string): Post | undefined {
	return posts.find((post) => post.slug === slug);
}
