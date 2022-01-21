<script>
	import { goto } from '$app/navigation'
	import user from '$lib/stores/auth-store'
	import supabase from '$lib/supabase'

	const logout = () => {
		supabase.auth.signOut()
		goto('/auth/signin')
	}
</script>

<header class="flex justify-between items-center mb-8 space-x-8 h-16">
	<span class="text-gray-600 font-mono">{$user?.email}</span>
	<nav class="grow space-x-4">
		<a href="/dashboard">
			<button
				class="bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-indigo-600 hover:border hover:border-gray-200 py-2 px-6 rounded-lg"
				>Dashboard</button
			>
		</a>
		<a href="/fonts">
			<button
				class="bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-indigo-600 hover:border hover:border-gray-200 py-2 px-6 rounded-lg"
				>Fonts</button
			>
		</a>
	</nav>
	<button
		on:click={logout}
		class="text-white bg-gradient-to-r from-blue-400 to-indigo-500 hover:opacity-75 py-2 px-6 rounded-lg"
		>Log out</button
	>
</header>
