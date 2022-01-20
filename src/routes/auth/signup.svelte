<script>
	import supabase from '$lib/supabase'

	let loading = false
	let email, password

	const handleSignUp = async () => {
		try {
			loading = true
			const { error } = await supabase.auth.signUp({ email, password })
			if (error) throw error
		} catch (error) {
			console.error(error)
			alert(error.error_description || error.message)
		} finally {
			loading = false
		}
	}
</script>

<div class="h-screen grid place-items-center">
	<main class="bg-slate-100 rounded-xl shadow-xl py-10 px-8 container max-w-xl">
		<div class="mb-4">
			<h1 class="text-3xl md:text-4xl font-bold text-center text-gray-800">Sign Up</h1>
			<p class="pt-2 text-sm text-gray-800 text-center">Sign up via email and password below.</p>
		</div>

		<form on:submit|preventDefault={handleSignUp} class="flex flex-col space-y-4 pt-4">
			<div class="flex flex-col space-y-4 text-sm">
				<label for="email" class="font-semibold text-gray-800">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Your email"
					bind:value={email}
					class="shadow-sm border-gray-200 focus:border-gray-500 rounded-lg"
				/>
			</div>

			<div class="flex flex-col space-y-4 text-sm">
				<label for="password" class="font-semibold text-gray-800">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Your password"
					bind:value={password}
					class="shadow-sm border-gray-200 focus:border-gray-500 rounded-lg"
				/>
			</div>

			<div class="pt-8">
				<button
					type="submit"
					disabled={loading}
					class="w-full bg-gradient-to-r from-pink-300 to-indigo-600 text-white font-semibold text-lg rounded-lg py-2 px-4 disabled:opacity-75"
					>Sign up</button
				>
			</div>
		</form>

		<p class="text-center text-gray-800 text-sm pt-4">
			Already have an account? <a
				href="/auth/signin"
				class="font-medium text-blue-500 hover:underline">Sign in</a
			>.
		</p>
	</main>
</div>
