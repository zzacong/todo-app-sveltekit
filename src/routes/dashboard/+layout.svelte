<script lang="ts">
	import { onMount } from 'svelte';

	import { user } from '$lib/stores/auth-store';
	import { supabase } from '$lib/supabase';
	import Navbar from '$lib/components/Navbar.svelte';

	onMount(async () => {
		user.set((await supabase.auth.getUser()).data.user);
		supabase.auth.onAuthStateChange((_event, session) => {
			user.set(session?.user);
		});
	});
</script>

<div class="container mx-auto pt-6 px-6 max-w-4xl">
	{#if $user}
		<Navbar />
	{/if}
	<slot />
</div>
