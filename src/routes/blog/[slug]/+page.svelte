<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/components/ui/header.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { toHTML } from '@portabletext/to-html';
	import { formatDate } from '$lib/sanity-utils';
	import { LucideGithub } from 'lucide-svelte';

	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';

	export let data: PageData;
</script>

<div class="border-b bg-slate-100 py-16 dark:bg-slate-800">
	<div class="container mx-auto max-w-5xl">
		<div class="flex items-start justify-between">
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
			<div class="flex gap-2">
				{#if data.blogPost.time_spent}
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Time spent</Card.Title>
						</Card.Header>
						<Card.Content>
							<div class="p-1 text-2xl font-bold">
								~ {data.blogPost.time_spent}
								<span class="text-muted-foreground text-xs">hours</span>
							</div>
						</Card.Content>
					</Card.Root>
				{/if}
				{#if data.blogPost.github_link}
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Link to project</Card.Title>
						</Card.Header>
						<Card.Content>
							<Button class="mt-1" href={data.blogPost.github_link} target="_blank" variant="ghost">
								<LucideGithub class="mr-2 h-4 w-4" />
								View on GitHub
							</Button>
						</Card.Content>
					</Card.Root>
				{/if}
			</div>
		</div>
	</div>
</div>
<div class="prose prose-slate dark:prose-invert container mx-auto max-w-5xl pb-72 pt-8">
	{@html toHTML(data.blogPost.body)}
</div>
