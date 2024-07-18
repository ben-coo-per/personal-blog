<script lang="ts">
	import type { PageData } from './$types';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import SvelteMarkdown from 'svelte-markdown';
	import { formatDate } from '$lib/sanity-utils';
	import { Box, Download, LucideGithub, LucideInstagram } from 'lucide-svelte';
	import Image from '$lib/components/markdown/image.svelte';

	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';

	export let data: PageData;
</script>

<div class="border-b bg-slate-100 py-16 dark:bg-slate-800">
	<div class="container mx-auto max-w-5xl px-6">
		<div class="flex flex-col items-start justify-between gap-4 sm:flex-row">
			<div>
				<Breadcrumb.Root class="mb-6">
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator />
						<Breadcrumb.Item>
							<Breadcrumb.Page>{data.blogPost.title}</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
				<h1 class="mb-2 text-5xl font-bold dark:text-gray-100">{data.blogPost.title}</h1>
				<p class="text-gray-500 dark:text-gray-400">{formatDate(data.blogPost._createdAt)}</p>
			</div>
			<div class="flex flex-wrap gap-1 sm:justify-end">
				{#if data.blogPost.time_spent}
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="whitespace-nowrap text-sm font-medium">Time spent</Card.Title>
						</Card.Header>
						<Card.Content>
							<div class="whitespace-nowrap px-3 py-1 text-xl font-bold sm:text-2xl">
								<span
									class={data.blogPost.time_spent > 7
										? 'text-red-600 dark:text-red-300'
										: 'text-inherit'}
								>
									{data.blogPost.time_spent}
								</span>
								<span class="text-muted-foreground text-xs">hrs</span>
							</div>
						</Card.Content>
					</Card.Root>
				{/if}
				{#if data.blogPost.github_link || data.blogPost.instagram_link || data.blogPost.onshape_link}
					<Card.Root>
						<Card.Content class="flex h-full flex-col justify-center pb-0">
							{#if data.blogPost.github_link}
								<Button
									class="mt-1"
									href={data.blogPost.github_link}
									target="_blank"
									variant="ghost"
								>
									<LucideGithub class="mr-2 h-4 w-4" />
									View on GitHub
								</Button>
							{/if}
							{#if data.blogPost.instagram_link}
								<Button
									class="mt-1"
									href={data.blogPost.instagram_link}
									target="_blank"
									variant="ghost"
								>
									<LucideInstagram class="mr-2 h-4 w-4" />
									View on Instagram
								</Button>
							{/if}
							{#if data.blogPost.onshape_link}
								<Button
									class="mt-1"
									href={data.blogPost.onshape_link}
									target="_blank"
									variant="ghost"
								>
									<Box class="mr-2 h-4 w-4" />
									View in Onshape
								</Button>
							{/if}
						</Card.Content>
					</Card.Root>
				{/if}

				{#if data.downloadUrl}
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="whitespace-nowrap text-sm font-medium">Files</Card.Title>
						</Card.Header>
						<Card.Content>
							<Button class="mt-1" href={data.downloadUrl.url} target="_blank" variant="ghost">
								<Download class="mr-2 h-4 w-4" />
								{data.downloadUrl.title}
							</Button>
						</Card.Content>
					</Card.Root>
				{/if}
			</div>
		</div>
	</div>
</div>
<div class="prose prose-slate dark:prose-invert container mx-auto max-w-5xl pb-72 pt-8">
	<SvelteMarkdown source={data.blogPost.bodymd} renderers={{ image: Image }} />
</div>
