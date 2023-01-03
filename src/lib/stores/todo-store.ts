import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';

export const todo = writable<Todo[]>([]);

export const loadTodos = async () => {
	const { data, error } = await supabase.from('todos').select();
	if (error) return console.error(error);
	todo.set(data);
};

export const addTodo = async ({ text, user_id }: Pick<Todo, 'text' | 'user_id'>) => {
	const { data, error } = await supabase.from('todos').insert({ text, completed: false, user_id });
	if (error) return console.error(error);
	todo.update((curr) => [...curr, data[0] as unknown as Todo]);
};

export const deleteTodo = async (id: string) => {
	const { error } = await supabase.from('todos').delete().match({ id });
	if (error) return console.error(error);
	todo.update((curr) => curr.filter((todo) => todo.id !== id));
};

export const toggleTodo = async ({ id, currentState }: { id: string; currentState: boolean }) => {
	const { error } = await supabase.from('todos').update({ completed: !currentState }).match({ id });
	if (error) return console.error(error);

	todo.update((curr) =>
		curr.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
	);
};

export type Todo = {
	id: string;
	text: string;
	completed: boolean;
	user_id: string;
};
