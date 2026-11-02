/**
 * Blog posts. To add one, copy the sample object, give it a new slug, and
 * replace the title and paragraphs. Then run `npm run build`.
 * The sample can be deleted once a real post exists.
 */
export interface Post {
	slug: string;
	title: string;
	/** Optional label such as "March 2026". Leave empty if there is no date. */
	date: string;
	/** Set only on placeholder posts. Real posts should omit this. */
	sample?: boolean;
	paragraphs: string[];
}

export const posts: Post[] = [
	{
		slug: "hello-world",
		title: "Sample post: Hello, world",
		date: "",
		sample: true,
		paragraphs: [
			"This is a sample post. It is not a project, a note, or a record of anything that happened.",
			"Replace it by adding another object to this file. Use a short lowercase slug for the URL.",
		],
	},
];

export function getPost(slug: string): Post | undefined {
	return posts.find((post) => post.slug === slug);
}
