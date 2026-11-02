import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
	activePage?: "home" | "work" | "notes" | "blog" | "contact";
}

export function Header({ activePage }: HeaderProps = {}) {
	const navLinks = [
		{ to: "/", label: "Home", key: "home" },
		{ to: "/#work", label: "Work", key: "work" },
		{ to: "/#notes", label: "Notes", key: "notes" },
		{ to: "/blog", label: "Blog", key: "blog" },
		{ to: "/contact", label: "Contact", key: "contact" },
	] as const;

	const navLinkClass = (key: string) =>
		`font-medium relative shrink-0 text-sm text-justify text-nowrap whitespace-pre transition-all ${
			activePage === key
				? "text-olive-800 dark:text-olive-100 font-semibold"
				: "text-olive-500 dark:text-olive-400 hover:text-olive-800 dark:hover:text-olive-100"
		}`;

	return (
		<div className='flex flex-col gap-4 items-start relative shrink-0 w-full'>
			<Link
				href='/'
				className='flex h-10 items-center justify-start relative shrink-0 w-full'
				aria-label='Go to home'>
				<img
					alt='Sabih Ur Rehman'
					className='size-10 rounded-full object-cover object-[center_18%]'
					src={siteConfig.images.profile}
					width={600}
					height={800}
				/>
			</Link>

			<Link
				href='/'
				className='flex gap-1 items-center w-full hover:opacity-70 transition-opacity'
				aria-label='Sabih Ur Rehman home'>
				<h1 className='font-medium relative shrink-0 text-olive-800 dark:text-olive-100 text-xl text-justify'>
					{siteConfig.author.name}
				</h1>
			</Link>

			<nav className='flex gap-4 items-center relative shrink-0 w-full' aria-label='Main navigation'>
				{navLinks.map(({ to, label, key }) => (
					<Link
						key={key}
						href={to}
						className={navLinkClass(key)}
						aria-current={activePage === key ? "page" : undefined}>
						{label}
					</Link>
				))}
				<ThemeToggle />
			</nav>
		</div>
	);
}
