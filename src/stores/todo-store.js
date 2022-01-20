import { writable } from 'svelte/store';

const TodoStore = writable([]);

export const addTodo = (text) => {
	TodoStore.update((curr) => [...curr, { text, complete: false, id: Date.now() }]);
};

export const deleteTodo = (id) => {
	TodoStore.update((curr) => curr.filter((todo) => todo.id !== id));
};

export const toggleTodo = (id) => {
	TodoStore.update((curr) =>
		curr.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
	);
};

export default TodoStore;
