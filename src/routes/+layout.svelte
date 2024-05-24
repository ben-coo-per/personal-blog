<script>
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/ui/header.svelte';
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	if (!dev) {
		// just for funsies, don't worry - I can't see really any details about the people who visit the site, I'll assume most are bots. https://vercel.com/products/observability
		inject({ mode: 'production' });
	}
</script>

<ModeWatcher />
<Header />
<slot />
