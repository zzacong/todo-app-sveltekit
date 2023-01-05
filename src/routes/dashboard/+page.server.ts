import type { Actions, PageServerLoad } from './$types';
import { fail, error as serror } from '@sveltejs/kit';
import { z, ZodError } from 'zod';
import { newTodoSchema, type Todo } from '$lib/todo';

export const actions: Actions = {
	newTodo: async ({ locals, request }) => {
		const formData = Object.fromEntries(await request.formData());
		try {
			const input = newTodoSchema.parse(formData);

			if (!locals.session) throw serror(401, { message: 'Not authorized' });

			const { error } = await locals.sb
				.from('todos')
				.insert({
					completed: false,
					user_id: locals.session.user.id,
					text: input.text,
				})
				.select();

			if (error) {
				throw serror(500, {
					message: error.message,
				});
			}

			return { success: true, data: null, errors: null };
		} catch (error) {
			if (error instanceof ZodError) {
				const { fieldErrors: errors } = error.flatten();
				console.log(error.flatten());
				return fail(400, {
					success: false,
					data: formData,
					errors,
				});
			}
		}
	},

	deleteTodo: async ({ locals, request }) => {
		const input = z.object({ id: z.string() }).parse(Object.fromEntries(await request.formData()));
		await locals.sb.from('todos').delete().eq('id', input.id);
		return { success: true, data: null, errors: null };
	},

	toggleTodo: async ({ locals, request }) => {
		const input = z
			.object({ id: z.string(), completed: z.enum(['on']).optional() })
			.parse(Object.fromEntries(await request.formData()));
		await locals.sb
			.from('todos')
			.update({ completed: Boolean(!input.completed) })
			.eq(' id', input.id);
		return { success: true, data: null, errors: null };
	},
};

export const load = (async ({ locals }) => {
	const { data } = await locals.sb.from('todos').select().order('created_at', { ascending: true });
	return { todos: data as Todo[] };
}) satisfies PageServerLoad;
