import { notes } from "@/data/notes";

export function NotesSection() {
	return (
		<div className='flex flex-col gap-3 items-start relative shrink-0 w-full' id='notes'>
			<p className='text-olive-400 dark:text-olive-600 text-sm mb-3 uppercase font-mono'>Notes</p>
			<div className='flex flex-col gap-3 items-start relative shrink-0 w-full'>
				{notes.map((note) => (
					<div
						key={note.id}
						className='flex items-start justify-between gap-4 relative text-justify w-full'>
						<p className='font-semibold relative min-w-0 text-olive-800 dark:text-olive-100 text-sm'>
							{note.text}
						</p>
						{note.date ? (
							<p className='relative shrink-0 text-sm text-olive-500 dark:text-olive-400 font-mono uppercase'>
								{note.date}
							</p>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
}
