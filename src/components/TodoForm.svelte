<script>
	import { addTodo } from '../stores/todo-store';

	let todo = '';

	const handleSubmit = () => {
		addTodo(todo);
		todo = '';
	};
</script>

<form class="my-6 flex flex-col space-y-4" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col space-y-2 ">
		<label for="todo" class="font-semibold text-gray-800">Todo</label>
		<input
			type="text"
			id="todo"
			name="todo"
			placeholder="What you wanna do?"
			class="shadow-sm rounded-lg border-gray-200 "
			bind:value={todo}
		/>
	</div>

	<button
		type="submit"
		class="shadow-sm rounded-lg bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Add todo</button
	>
</form>
