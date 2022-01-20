<script>
	import TodoForm from '../components/TodoForm.svelte';
	import Todo from '../components/Todo.svelte';
	import TodoStore from '../stores/todo-store';
</script>

<main>
	<h1 class="text-3xl font-bold text-center text-gray-800 md:text-4xl">Welcome to SvelteKit</h1>

	<TodoForm />

	<ul class="flex flex-col space-y-4 pt-4">
		{#each $TodoStore as todo (todo.id)}
			<Todo {todo} />
		{/each}
	</ul>
</main>
