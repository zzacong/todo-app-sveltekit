<div class="container mx-auto pt-10">
	<header>
		<div class="grid grid-cols-3 mb-4">
			<div class="flex justify-start items-center">
				<a href="/" class="text-gray-600 hover:cursor-pointer hover:bg-gray-100 px-2 py-2 rounded"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg></a
				>
			</div>
			<nav class="flex justify-center space-x-10">
				<a href="/fonts/sans" class="hover:cursor-pointer hover:bg-gray-100 px-8 py-2 rounded"
					>Sans</a
				>
				<a href="/fonts/serif" class="hover:cursor-pointer hover:bg-gray-100 px-8 py-2 rounded"
					>Serif</a
				>
			</nav>
		</div>
		<hr class="bg-gray-800 w-32 mx-auto" />
	</header>

	<slot />
</div>
