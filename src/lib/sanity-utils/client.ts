import { createClient } from '@sanity/client';
import type { Slug } from '@sanity/types';
import groq from 'groq';
import type { PortableTextBlock } from '@portabletext/types';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error(
		'You must include the sanity project ID and dataset in your environment variables.'
	);
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

export async function getList(): Promise<BlogPost[]> {
	return await client.fetch(
		groq`*[_type == "blogPost"] | order(_createdAt desc) { title, slug, mainImage, excerpt, _createdAt }`
	);
}

export async function getBlogPostDetail(slug: string): Promise<BlogPost> {
	return await client.fetch(groq`*[_type == "blogPost" && slug.current == $slug][0]`, {
		slug
	});
}

export interface BlogPost {
	_type: 'blogPost';
	_createdAt: string;
	title: string;
	slug: Slug;
	body: PortableTextBlock[];
	excerpt: string;
	released: boolean;
	github_link: string;
	time_spent: number;
}
