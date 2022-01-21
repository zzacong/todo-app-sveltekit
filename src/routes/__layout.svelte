<script>
	import { onMount } from 'svelte'

	import user from '$lib/stores/auth-store'
	import supabase from '$lib/supabase'
	import '../app.css'

	onMount(() => {
		user.set(supabase.auth.user())
		supabase.auth.onAuthStateChange((_event, session) => {
			user.set(session?.user)
		})
	})
</script>

<svelte:head>
	<title>Todo App | SvelteKit</title>
</svelte:head>

<div class="container mx-auto pt-6 px-6 max-w-4xl">
	<slot />
</div>
