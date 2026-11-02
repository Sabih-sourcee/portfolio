import { projects } from "../data/projects";
import { getFaviconUrl } from "@/lib/favicon";

export function ProjectsSection() {
	return (
		<div className='flex flex-col gap-3 items-start relative shrink-0 w-full' id='work'>
			<p className='text-olive-400 dark:text-olive-600 text-sm mb-3 uppercase font-mono'>Work</p>
			<div className='flex flex-col gap-3 items-start relative shrink-0 w-full'>
				{projects.map((project) => {
					const body = (
						<div className='basis-0 flex gap-4 grow items-start min-h-px min-w-px relative shrink-0'>
							{project.url ? (
								<div className='relative shrink-0 size-5 mt-0.5'>
									<img
										alt=''
										className='absolute inset-0 max-w-none object-cover pointer-events-none size-full'
										src={getFaviconUrl(project.url)}
										width={20}
										height={20}
									/>
								</div>
							) : null}
							<div className='basis-0 flex gap-2 grow items-baseline min-h-px min-w-px relative shrink-0 flex-wrap'>
								<p className='font-semibold relative shrink-0 text-olive-800 dark:text-olive-100 text-sm group-hover:underline underline-offset-4'>
									{project.name}
								</p>
								<p className='relative shrink-0 text-xs text-olive-500'>/</p>
								<p className='basis-0 grow min-w-[12rem] relative text-olive-500 dark:text-olive-100 text-sm'>
									{project.description}
								</p>
							</div>
						</div>
					);

					if (!project.url) {
						return (
							<div key={project.id} className='flex gap-4 items-start relative w-full'>
								{body}
							</div>
						);
					}

					return (
						<a
							key={project.id}
							href={project.url}
							target='_blank'
							rel='noopener noreferrer'
							className='flex gap-4 items-start relative w-full group'>
							{body}
						</a>
					);
				})}
			</div>
		</div>
	);
}
