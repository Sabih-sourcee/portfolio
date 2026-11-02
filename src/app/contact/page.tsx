import Link from "next/link";
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
					<form className='flex flex-col gap-4'>
						<label className='flex flex-col gap-1 text-sm text-olive-500'>
							Name
							<input name='name' autoComplete='name' className='bg-transparent border-b border-olive-300 dark:border-olive-600 py-2 text-olive-800 dark:text-olive-100 outline-none' />
						</label>
						<label className='flex flex-col gap-1 text-sm text-olive-500'>
							Email
							<input name='email' type='email' autoComplete='email' className='bg-transparent border-b border-olive-300 dark:border-olive-600 py-2 text-olive-800 dark:text-olive-100 outline-none' />
						</label>
						<label className='flex flex-col gap-1 text-sm text-olive-500'>
							Message
							<textarea name='message' rows={5} className='bg-transparent border-b border-olive-300 dark:border-olive-600 py-2 text-olive-800 dark:text-olive-100 outline-none' />
						</label>
						<button type='button' className='self-start text-xs font-semibold uppercase tracking-wide bg-olive-200 dark:bg-olive-700 rounded-full px-4 py-2'>
							Send message
						</button>
					</form>
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
