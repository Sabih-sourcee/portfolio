import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ContactPage() {
	return (
		<div className='bg-olive-100 dark:bg-olive-900 min-h-screen w-full flex justify-center py-10'>
			<div className='flex flex-col gap-6 items-center w-full max-w-xl px-4 m-0'>
				<Header activePage='contact' />
				<div className='w-full flex flex-col gap-4 text-olive-800 dark:text-olive-100'>
					<h1 className='font-medium text-xl'>Let&apos;s build something</h1>
					<p className='text-sm/6'>Open to opportunities. AI Engineer at a company.</p>
					<ContactForm />
					<p className='text-sm'>
						<Link href='/' className='link'>
							Home
						</Link>
					</p>
				</div>
				<Footer />
			</div>
		</div>
	);
}
