<script lang="ts">
	import type { Todo } from '$lib/todo';
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import clsx from 'clsx';

	export let todo: Todo;
</script>

<li
	transition:fade
	class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg py-2 px-4"
>
	<form method="POST" action="?/toggleTodo" use:enhance>
		<input type="hidden" name="id" value={todo.id} />
		<input type="checkbox" name="completed" checked={todo.completed} class="sr-only" />
		<button
			aria-label="Toggle todo"
			type="submit"
			class={clsx(
				'mr-4 h-4 w-4 rounded border hover:cursor-pointer inline-grid place-items-center',
				todo.completed ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-400'
			)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="w-3 h-3 text-white"
			>
				<path
					fill-rule="evenodd"
					d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</form>

	<span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>

	<form method="POST" action="?/deleteTodo" use:enhance>
		<input type="hidden" name="id" value={todo.id} />
		<button type="submit" class="text-red-500 hover:bg-gray-50 p-2 rounded">
			<!-- trash icon -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</form>
</li>
