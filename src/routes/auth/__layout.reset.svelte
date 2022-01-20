<script>
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import user from '$lib/stores/auth-store'
	import supabase from '$lib/supabase'

	onMount(() => {
		user.set(supabase.auth.user())
		if ($user) goto('/')

		supabase.auth.onAuthStateChange((event, session) => {
			user.set(session?.user)
			if (session?.user) goto('/')
		})
	})
</script>

<slot />
