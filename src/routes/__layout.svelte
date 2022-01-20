<script>
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'

	import Navbar from '$lib/components/Navbar.svelte'
	import user from '$lib/stores/auth-store'
	import supabase from '$lib/supabase'
	import '../app.css'

	onMount(() => {
		user.set(supabase.auth.user())
		if (!$user) goto('/auth/signin')

		supabase.auth.onAuthStateChange((event, session) => {
			console.log('event', event)
			console.log('session', session)
			user.set(session?.user)
			if (!session?.user) goto('/auth/signin')
		})
	})
</script>

<div class="container mx-auto my-6 px-6 max-w-4xl">
	{#if $user}
		<Navbar />
	{/if}
	<slot />
</div>
