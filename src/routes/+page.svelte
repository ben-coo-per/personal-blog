<script lang="ts">
	import BlogPostCard from '$lib/components/ui/blogPostCard.svelte';
	import Header from '$lib/components/ui/header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Header>
	<h3 class="font-mono text-xl">bcLOG</h3>
</Header>
<div class="container mx-auto grid gap-4 pt-10 md:grid-cols-2">
	{#each data.blogPosts as blogPost}
		<BlogPostCard {blogPost}></BlogPostCard>
	{/each}
</div>
