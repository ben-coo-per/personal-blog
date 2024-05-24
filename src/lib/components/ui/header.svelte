<script lang="ts">
	import Lightswitch from './lightswitch/lightswitch.svelte';
	import { PUBLIC_PATH_TO_MAIN_SITE } from '$env/static/public';
	import Button from './button/button.svelte';
	import { DoorOpen } from 'lucide-svelte';
</script>

<div class="w-full border-b py-4 dark:border-gray-100">
	<div class="max-w-8xl container mx-auto flex items-center justify-between">
		<a href="/">
			<h3
				class="font-mono text-xl transition-all duration-300 ease-in-out hover:scale-105 hover:text-orange-500 hover:dark:text-orange-400"
			>
				bcLOG
			</h3>
		</a>
		<div class="flex gap-2">
			<Button variant="outline" href={PUBLIC_PATH_TO_MAIN_SITE}>
				<DoorOpen class="mr-2 h-4 w-4" />
				bencooper.xyz
			</Button>
			<Lightswitch />
		</div>
	</div>
</div>
