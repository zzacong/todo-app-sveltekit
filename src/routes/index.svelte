<script>
	import TodoForm from '$lib/components/TodoForm.svelte'
	import Todo from '$lib/components/Todo.svelte'
	import todos, { loadTodos } from '$lib/stores/todo-store'
	import user from '$lib/stores/auth-store'

	if ($user) loadTodos()
</script>

<main>
	<h1 class="text-3xl font-bold text-center text-gray-800 md:text-4xl">Welcome to SvelteKit</h1>

	<TodoForm />

	<ul class="flex flex-col space-y-4 pt-4">
		{#each $todos as todo (todo.id)}
			<Todo {todo} />
		{/each}
	</ul>
</main>
