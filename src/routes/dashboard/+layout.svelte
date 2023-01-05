<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabase';
	import Navbar from '$lib/components/Navbar.svelte';

	export let data: PageData;

	onMount(() => {
		if (!data.session) goto('/auth/signin');

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			console.log('Auth state change detected');
			invalidateAll();
		});
		return () => subscription.unsubscribe();
	});
</script>

<div class="container mx-auto py-6 px-6 max-w-4xl">
	{#if data.session}
		<Navbar />
	{/if}
	<slot />
</div>
