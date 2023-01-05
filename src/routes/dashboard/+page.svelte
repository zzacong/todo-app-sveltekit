<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';
	import clsx from 'clsx';
	import Todo from '$lib/components/Todo.svelte';

	export let data: PageData;
	export let form: ActionData;
</script>

<main>
	<h1 class="text-3xl font-bold text-center text-gray-800 md:text-4xl lg:text-6xl">Todo App</h1>

	<form method="POST" action="?/newTodo" class="my-6 flex flex-col space-y-4" use:enhance>
		<div class="flex flex-col space-y-2 ">
			<label for="text" class="font-semibold text-gray-800">Todo</label>
			<input
				type="text"
				id="text"
				name="text"
				value={form?.data?.text ?? ''}
				placeholder="What you wanna do?"
				class={clsx('shadow-sm rounded-lg border-gray-200', form?.errors?.text && 'border-red-500')}
				aria-invalid={!!form?.errors?.text}
				aria-errormessage="err1"
			/>
			{#if form?.errors?.text}
				<span id="err1" class="text-sm text-red-500">{form?.errors?.text[0]}</span>
			{/if}
		</div>

		<button
			type="submit"
			class="shadow-sm rounded-lg bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
			>Add todo</button
		>
	</form>

	<ul class="flex flex-col space-y-4 pt-4">
		{#each data.todos as todo (todo.id)}
			<Todo {todo} />
		{/each}
	</ul>
</main>
