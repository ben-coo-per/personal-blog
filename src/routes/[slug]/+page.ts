import { getBlogPostDetail, getDownloadUrl } from '$lib/sanity-utils/client';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const blogPost = await getBlogPostDetail(params.slug);
	let downloadUrl;

	if (!blogPost) {
		error(404, 'Not found');
	}

	if (blogPost.downloadable_file) {
		downloadUrl = await getDownloadUrl(params.slug);
	}

	return {
		blogPost,
		downloadUrl
	};
}) satisfies PageLoad;
