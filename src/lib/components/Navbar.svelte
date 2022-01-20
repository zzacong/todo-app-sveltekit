<script>
	import user from '$lib/stores/auth-store'
	import supabase from '$lib/supabase'

	const logout = () => supabase.auth.signOut()
</script>

<div class="flex justify-between items-center mb-8">
	<span class="text-gray-600 font-mono">{$user?.email}</span>
	<button
		on:click={logout}
		class="text-white bg-gradient-to-r from-blue-400 to-indigo-500 hover:opacity-75 py-2 px-6 rounded-lg"
		>Log out</button
	>
</div>
