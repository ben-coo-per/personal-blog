<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { LucideHome, LucidePlaneTakeoff } from 'lucide-svelte';
</script>

<div class="container flex max-w-xl flex-col justify-center pt-10 text-center">
	<h1 class="text-5xl font-bold">404</h1>
	<p>It looks like you're lost</p>
	<Button href="/" class="mt-4">
		<LucidePlaneTakeoff class="mr-2 h-6 w-6" />
		Come back home
		<LucideHome class="ml-2 h-6 w-6" />
	</Button>
</div>
