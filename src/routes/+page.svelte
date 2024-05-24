<script lang="ts">
	import BlogPostCard from '$lib/components/ui/blogPostCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container mx-auto grid max-w-5xl gap-4 pt-10 md:grid-cols-2">
	{#each data.blogPosts as blogPost}
		<BlogPostCard {blogPost}></BlogPostCard>
	{/each}
</div>
