import { getBlogPostDetail } from '$lib/sanity-utils/client';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const blogPost = await getBlogPostDetail(params.slug);

	if (blogPost) {
		return {
			blogPost
		};
	}

	error(404, 'Not found');
}) satisfies PageLoad;
