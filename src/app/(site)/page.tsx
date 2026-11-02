import Link from "next/link";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NotesSection } from "@/components/NotesSection";
import { ProjectsSection } from "@/components/ProjectsSection";

const SKILLS = [
	{ title: "Frontend", items: "React, Next.js, TypeScript, Tailwind CSS, GSAP, Vite" },
	{ title: "AI & LLMs", items: "Gemini API, LLM API Integration, RAG Chatbots, AI Agents, Prompt Engineering" },
	{ title: "Automation & CRM", items: "GoHighLevel / Exterly, WhatsApp-commerce, Google Sheets, Lead Qualification Bots" },
	{ title: "Backend & Media", items: "Node.js, Supabase, FFmpeg, REST APIs" },
	{ title: "Deploy & Ops", items: "Namecheap / cPanel, FTP / FileZilla, SSL, GitHub Pages, Git" },
];

export default function Home() {
	return (
		<div className='bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10'>
			<div className='flex flex-col gap-6 items-center w-full max-w-xl px-4 m-0'>
				<div className='animate-in w-full'>
					<Header activePage='home' />
				</div>

				<div className='font-normal min-w-full relative shrink-0 text-olive-800 dark:text-olive-100 text-sm/6 flex flex-col gap-4'>
					<p className='relative animate-in animate-delay-1'>
						I&apos;m Sabih Ur Rehman, an AI Engineer at a company in Karachi. I build interactive products
						with LLMs, automation, and precise frontend craft.
					</p>
					<p className='animate-in animate-delay-2'>
						I specialize in performant, pixel-perfect, and highly interactive user interfaces, blending
						cutting-edge web technologies with creative design intuition to engineer scalable digital
						experiences.
					</p>
					<p className='animate-in animate-delay-3'>
						<Link href='/contact' className='link'>
							Open to opportunities.
						</Link>{" "}
						AI Engineer at a company.
					</p>
				</div>

				<div className='animate-in animate-delay-4'>
					<Divider />
				</div>

				<div className='animate-in animate-delay-5 w-full'>
					<ProjectsSection />
				</div>

				<div className='animate-in animate-delay-6'>
					<Divider />
				</div>

				<div className='animate-in animate-delay-7 w-full'>
					<NotesSection />
				</div>

				<div className='animate-in animate-delay-8 w-full'>
					<div className='flex flex-col gap-3 items-start w-full'>
						<p className='text-olive-400 dark:text-olive-600 text-sm mb-3 uppercase font-mono'>Skills</p>
						{SKILLS.map((group) => (
							<p key={group.title} className='text-sm text-olive-800 dark:text-olive-100'>
								<span className='font-semibold'>{group.title}</span>
								<span className='text-olive-500'> / {group.items}</span>
							</p>
						))}
					</div>
				</div>

				<div className='w-full'>
					<div className='flex flex-col gap-2 items-start w-full text-sm text-olive-800 dark:text-olive-100'>
						<p className='text-olive-400 dark:text-olive-600 text-sm mb-3 uppercase font-mono'>GitHub</p>
						<p>
							@Sabih-sourcee · &ldquo;The Engine&rdquo; · 1st season · class of 2026. Gold, overall 76.
							Commits 94%.
						</p>
						<p className='text-olive-500'>build 99 · review 42 · ship 99 · volume 99 · impact 40</p>
						<p className='text-olive-500'>last 5 matchdays: D · D · W · D · W</p>
						<p>Terminal-Performance-Manager · The-VC-Brain · INTERIOR-AI</p>
						<p className='text-olive-500'>TypeScript ×15 · JavaScript ×3 · Python ×2</p>
						<p>
							<a href='https://githubfc.com/Sabih-sourcee' className='link' target='_blank' rel='noopener noreferrer'>
								View the card
							</a>
							{" · "}
							<a href='https://github.com/Sabih-sourcee' className='link' target='_blank' rel='noopener noreferrer'>
								GitHub profile
							</a>
						</p>
					</div>
				</div>

				<div className='animate-in animate-delay-9'>
					<Divider />
				</div>

				<div className='animate-in animate-delay-10 w-full'>
					<Footer />
				</div>
			</div>
		</div>
	);
}
