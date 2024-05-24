<script lang="ts">
	import BlogPostCard from '$lib/components/ui/blogPostCard.svelte';
	import Header from '$lib/components/ui/header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Header>Ben Cooper Blog</Header>
<div class=" container mx-auto grid gap-4 p-2 md:grid-cols-2">
	{#each data.blogPosts as blogPost}
		<BlogPostCard {blogPost}></BlogPostCard>
		<BlogPostCard {blogPost}></BlogPostCard>
		<BlogPostCard {blogPost}></BlogPostCard>
	{/each}
</div>
