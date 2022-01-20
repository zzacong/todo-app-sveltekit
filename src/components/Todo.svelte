<script>
	import { deleteTodo, toggleTodo } from '../stores/todo-store';

	export let todo;
</script>

<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg py-2 px-4">
	<input
		type="checkbox"
		name="completed"
		checked={todo.completed}
		on:change={() => toggleTodo(todo.id)}
		class="mr-2 rounded hover:cursor-pointer"
	/>

	<span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>

	<button on:click={() => deleteTodo(todo.id)} class="text-red-500 hover:bg-gray-50 p-2 rounded ">
		<!-- trash icon -->
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				fill-rule="evenodd"
				d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
</li>
