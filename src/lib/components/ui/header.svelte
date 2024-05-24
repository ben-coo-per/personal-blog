<script lang="ts">
	import Lightswitch from './lightswitch/lightswitch.svelte';
</script>

<div class="w-full border-b border-red-700 px-12 py-4 dark:border-gray-100">
	<div class="container mx-auto flex items-center justify-between">
		<slot />
		<Lightswitch />
	</div>
</div>
