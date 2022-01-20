import { writable } from 'svelte/store'
import supabase from '$lib/supabase'

export const TodoStore = writable([])

export const loadTodos = async () => {
	const { data, error } = await supabase.from('todos').select()
	if (error) return console.error(error)
	TodoStore.set(data)
}

export const addTodo = async ({ text, user_id }) => {
	const { data, error } = await supabase.from('todos').insert({ text, completed: false, user_id })
	if (error) return console.error(error)
	TodoStore.update((curr) => [...curr, data[0]])
}

export const deleteTodo = async (id) => {
	const { error } = await supabase.from('todos').delete().match({ id })
	if (error) return console.error(error)
	TodoStore.update((curr) => curr.filter((todo) => todo.id !== id))
}

export const toggleTodo = async ({ id, currentState }) => {
	const { error } = await supabase.from('todos').update({ completed: !currentState }).match({ id })
	if (error) return console.error(error)

	TodoStore.update((curr) =>
		curr.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
	)
}

// loadTodos();

export default TodoStore
