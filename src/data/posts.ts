/**
 * Blog posts. To add one, copy an existing object and replace the slug,
 * title, description, date, and blocks. Then run `npm run build`.
 * Paragraph text may include markdown links: [label](https://example.com)
 */
export type PostBlock =
	| { type: "heading"; text: string }
	| { type: "paragraph"; text: string }
	| { type: "image"; src: string; alt: string; width: number; height: number };

export interface Post {
	slug: string;
	title: string;
	/** Used for the meta description and link previews. */
	description: string;
	/** Optional label such as "November 2026". Leave empty if there is no date. */
	date: string;
	/** ISO date for BlogPosting schema. Not shown on the page. */
	published?: string;
	blocks: PostBlock[];
}

export const posts: Post[] = [
	{
		slug: "techjuice-featured-smartpet",
		title: "TechJuice Featured Smartpet",
		description:
			"TechJuice wrote about Smartpet, the voice AI tutor I am building in Karachi.",
		date: "November 2026",
		published: "2026-11-17",
		blocks: [
			{
				type: "paragraph",
				text: "Today TechJuice published an article about Smartpet. Abdul Wasay wrote it after talking to me about what I am building and how my day works.",
			},
			{
				type: "paragraph",
				text: "Read it here: [A 16-Year-Old in Karachi Built an AI Tutor That Breaks Any Goal Into 10 Steps](https://www.techjuice.pk/sabih-ur-rehman-smartpet-ai-tutor-karachi/)",
			},
			{ type: "heading", text: "What Smartpet is" },
			{
				type: "paragraph",
				text: "Smartpet is a voice AI tutor for complete beginners. When you open it, it talks to you. It asks your name and what you want to learn. Then it breaks that goal into 10 simple steps and guides you through them in the language you want.",
			},
			{
				type: "paragraph",
				text: "The problem is simple. Everyone knows the end goal, but most people don't know where to start or what the process looks like. Smartpet gives them the first step and the order of the steps.",
			},
			{
				type: "paragraph",
				text: "You can try it live inside the article. It is embedded right there.",
			},
			{ type: "heading", text: "My normal day" },
			{
				type: "paragraph",
				text: "I wake up at 9 and check that the code is working and the server is responding. At 11 I go to my office job, where I work as an AI engineer. When I come home, I spend the rest of the day adding features to Smartpet and fixing what breaks. On alternate days I have O Level coaching classes, since I am doing O Levels privately.",
			},
			{ type: "heading", text: "What comes next" },
			{
				type: "paragraph",
				text: "The website is only version 1. Version 2 is about hardware. Smartpet will watch a student build a circuit through a live camera and tell them right away when a wire is in the wrong place. It will act like a hardware teacher sitting next to you.",
			},
			{
				type: "paragraph",
				text: "The part that still feels magical to me is that it can watch in real time. You don't have to send a prompt and wait for an answer. It just sees what you are doing.",
			},
			{
				type: "paragraph",
				text: "I am waiting on a hardware grant to build the physical version, and I have applied to Y Combinator with Smartpet.",
			},
			{ type: "heading", text: "Who it is for" },
			{
				type: "paragraph",
				text: "Schools first, especially in places like Pakistan where students read about computers in books but rarely get to learn by doing. After that, any home where someone wants to learn something and doesn't know where to begin.",
			},
			{ type: "heading", text: "Thanks" },
			{
				type: "paragraph",
				text: "Thanks to Abdul Wasay and TechJuice for the feature.",
			},
		],
	},
	{
		slug: "first-hackathon-top-750",
		title: "How I Placed in the Top 750 of 10,000+ in My First Hackathon",
		description:
			"At 15, with a new job and too much free time, I entered AI Seekho 2026 on a whim. Here's how Interior-AI got me into the top 750.",
		date: "November 2026",
		published: "2026-11-04",
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
				type: "image",
				src: "/assets/ai-seekho-2026-swag.webp",
				alt: "Google swag from AI Seekho 2026: Gemini cap, Google mug, tote bag and stickers",
				width: 310,
				height: 414,
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
