/**
 * Blog posts. To add one, copy an existing object and replace the slug,
 * title, description, date, and blocks. Then run `npm run build`.
 * Paragraph text may include markdown links: [label](https://example.com)
 */
export type PostBlock =
	| { type: "heading"; text: string }
	| { type: "paragraph"; text: string }
	| { type: "list"; items: string[] }
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
		title: "How I Got Featured on TechJuice",
		description:
			"How a LinkedIn message from TechJuice turned into an article about Smartpet, and what Smartpet actually is.",
		date: "November 2026",
		published: "2026-11-17",
		blocks: [
			{
				type: "paragraph",
				text: "On November 11, I got a LinkedIn message from Abdul Wasay, Senior Content Manager at TechJuice. He said they wanted to feature Smartpet, my AI tutor app, in an article.",
			},
			{
				type: "paragraph",
				text: "I replied in a minute. I said yes, but I wanted to know what kind of article it would be. I also told him one thing upfront: Smartpet is not just an app. I am building it for a robot, which is also in development by me.",
			},
			{
				type: "paragraph",
				text: "Then nothing for a day. I sent a \"?\". Next morning he explained: TechJuice regularly features startups and personal projects. They go deep into what the idea is, how it came about, and what problem it solves in the long run. He said he would send me some questions.",
			},
			{
				type: "paragraph",
				text: "Then nothing again. Another \"?\" from me. It turned out he was out of town for a couple of days.",
			},
			{
				type: "paragraph",
				text: "On November 16 the questions came. Five of them, and whatever I answered would be used word for word:",
			},
			{
				type: "list",
				items: [
					"What does a normal day of building Smartpet look like as a 16 year old?",
					"How does Smartpet work today?",
					"What is the most common mistake the AI is good at catching?",
					"Is it mainly a classroom tool for schools in emerging markets? What is the future?",
					"What part of building it still feels the most magical?",
				],
			},
			{
				type: "paragraph",
				text: "I was leaving for the office, so I told him I would answer once I reached. I typed all five answers from the office in one go, around 1 PM. He replied that it was great.",
			},
			{
				type: "paragraph",
				text: "Then I asked him a few questions of my own, like how many people read their articles. He said they have a 90K+ audience across their socials and website.",
			},
			{
				type: "paragraph",
				text: "Then he asked two things: a picture of me working on the project, and a public link to Smartpet so they could embed it in the article. The problem was I did not have a public link yet. I said I would make one by night. Around 4 PM I sent him smartpet.sabihrehman.tech and an iframe code to embed it, and told him it would be fully working by 9 PM. So I basically shipped the public version of Smartpet because an article needed it.",
			},
			{
				type: "paragraph",
				text: "On November 17 he followed up about the picture. At 1:04 PM he sent me the link. The article was live: [Karachi Teen Builds AI Tutor Smartpet, Applies to Y Combinator](https://www.techjuice.pk/sabih-ur-rehman-smartpet-ai-tutor-karachi/). Smartpet is embedded right inside it, and it works.",
			},
			{
				type: "paragraph",
				text: "Six days from the first message to a live article. Most of it was waiting, sending \"?\", and then building fast when it was actually needed.",
			},
			{ type: "heading", text: "What Smartpet is" },
			{
				type: "paragraph",
				text: "Smartpet is a voice AI tutor for complete beginners. When you open it, it talks to you. It asks your name and what you want to learn. Then it breaks that goal into 10 simple steps that even someone who has never touched a computer can follow, and it guides you through them in whatever language you want.",
			},
			{
				type: "paragraph",
				text: "For example, if your goal is to write articles in the most productive way, it will teach you that in 10 simple steps.",
			},
			{
				type: "paragraph",
				text: "The problem it solves is the start. Everyone knows the end goal, but nobody knows where to begin or what the process looks like. Smartpet gives you the first step and the order of the steps.",
			},
			{ type: "heading", text: "My normal day" },
			{
				type: "paragraph",
				text: "I am doing O Levels privately. I wake up at 9 and check that the code is working and the server is responding. At 11 I go to the office with my laptop, and some coding and debugging happens there too. When I come home, I spend the rest of the day adding features and making Smartpet better. On alternate days I go to coaching for studies.",
			},
			{ type: "heading", text: "What comes next" },
			{
				type: "paragraph",
				text: "Right now Smartpet is a website, and that is only version 1. I am waiting for a hardware grant so I can turn it into a real robot.",
			},
			{
				type: "paragraph",
				text: "Version 2 is only about hardware. Students learn software easily now because they have Claude. With hardware, like building robots, they get stuck and there is no one to help. Smartpet v2 will watch a student live through a camera while they do the wiring and tell them right away when something is wrong. Like a hardware professor sitting next to you.",
			},
			{
				type: "paragraph",
				text: "The part that still feels magical to me is exactly that. It does not wait for you to send a prompt and then generate instructions. It watches live.",
			},
			{
				type: "paragraph",
				text: "I have applied to Y Combinator with Smartpet.",
			},
			{ type: "heading", text: "Who it is for" },
			{
				type: "paragraph",
				text: "Schools first, so students learn computers by actually doing things, not only by reading books. After that, every home.",
			},
			{ type: "heading", text: "Thanks" },
			{
				type: "paragraph",
				text: "Thanks to Abdul Wasay and TechJuice for the feature. You can try Smartpet at [smartpet.sabihrehman.tech](https://smartpet.sabihrehman.tech).",
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
