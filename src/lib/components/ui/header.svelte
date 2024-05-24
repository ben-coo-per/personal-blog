<script lang="ts">
	import Lightswitch from './lightswitch/lightswitch.svelte';
</script>

<div
	class="flex w-full items-center justify-between border-b border-red-700 px-12 py-4 dark:border-gray-100"
>
	<slot />
	<Lightswitch />
</div>
