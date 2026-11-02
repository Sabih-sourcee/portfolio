import { projects } from "../data/projects";

export function ProjectsSection() {
	return (
		<div className='flex flex-col gap-3 items-start relative shrink-0 w-full' id='work'>
			<p className='text-olive-400 dark:text-olive-600 text-sm mb-3 uppercase font-mono'>Work</p>
			<ul className='flex flex-col gap-3 w-full list-disc pl-5 marker:text-olive-500'>
				{projects.map((project) => (
					<li key={project.id} className='text-sm text-olive-800 dark:text-olive-100'>
						{project.url ? (
							<a
								href={project.url}
								target='_blank'
								rel='noopener noreferrer'
								className='font-semibold hover:underline underline-offset-4'>
								{project.name}
							</a>
						) : (
							<span className='font-semibold'>{project.name}</span>
						)}
						<span className='text-olive-500 dark:text-olive-100'> / {project.description}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
