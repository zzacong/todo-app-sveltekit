<script>
	import Navbar from '$lib/components/Navbar.svelte'
	import user from '$lib/stores/auth-store'
</script>

{#if $user}
	<Navbar />
{/if}
<slot />
