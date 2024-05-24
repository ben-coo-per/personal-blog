<script lang="ts">
	import type { PageData } from './$types';
	import Header from '$lib/components/ui/header.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { toHTML } from '@portabletext/to-html';
	export let data: PageData;
</script>

<Header>
	<Breadcrumb.Root>
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
</Header>

<div class="prose prose-slate dark:prose-invert container mx-auto max-w-6xl pt-10">
	{@html toHTML(data.blogPost.body)}
</div>
