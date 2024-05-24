<script lang="ts">
	import Lightswitch from './lightswitch/lightswitch.svelte';
</script>

<div class="w-full border-b px-12 py-4 dark:border-gray-100">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/">
			<h3
				class="font-mono text-xl transition-all duration-300 ease-in-out hover:scale-105 hover:text-orange-500 hover:dark:text-orange-400"
			>
				bcLOG
			</h3>
		</a>
		<Lightswitch />
	</div>
</div>
