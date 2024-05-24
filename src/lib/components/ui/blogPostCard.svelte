<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { BlogPost } from '$lib/sanity-utils/client';
	import { formatDate } from '$lib/sanity-utils/index';

	export let blogPost: BlogPost;
</script>

<Card.Root class="hover:bg-slate-100 hover:dark:bg-slate-800">
	<Card.Header>
		<Card.Title>{blogPost.title}</Card.Title>
		<Card.Description>{formatDate(blogPost._createdAt)}</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>{blogPost.excerpt}</p>
	</Card.Content>
</Card.Root>
