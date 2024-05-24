<script>
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/ui/header.svelte';
	import '../app.css';
</script>

<ModeWatcher />
<Header />
<slot />
