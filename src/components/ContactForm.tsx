"use client";

import { useForm, ValidationError } from "@formspree/react";

const fieldClass =
	"bg-transparent border-b border-olive-300 dark:border-olive-600 py-2 text-olive-800 dark:text-olive-100 outline-none";

export function ContactForm() {
	const [state, handleSubmit] = useForm("xkjjpjnn");

	if (state.succeeded) {
		return <p className='text-sm/6'>Thanks. Your message was sent.</p>;
	}

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
			<label className='flex flex-col gap-1 text-sm text-olive-500'>
				Name
				<input name='name' autoComplete='name' required className={fieldClass} />
			</label>
			<ValidationError field='name' errors={state.errors} className='text-sm text-olive-800 dark:text-olive-100' />
			<label className='flex flex-col gap-1 text-sm text-olive-500'>
				Email
				<input name='email' type='email' autoComplete='email' required className={fieldClass} />
			</label>
			<ValidationError field='email' errors={state.errors} className='text-sm text-olive-800 dark:text-olive-100' />
			<label className='flex flex-col gap-1 text-sm text-olive-500'>
				Message
				<textarea name='message' rows={5} required className={fieldClass} />
			</label>
			<ValidationError field='message' errors={state.errors} className='text-sm text-olive-800 dark:text-olive-100' />
			<button
				type='submit'
				disabled={state.submitting}
				className='self-start text-xs font-semibold uppercase tracking-wide bg-olive-200 dark:bg-olive-700 rounded-full px-4 py-2 disabled:opacity-60'>
				{state.submitting ? "Sending" : "Send message"}
			</button>
		</form>
	);
}
