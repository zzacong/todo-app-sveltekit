import { z } from 'zod';

export type Todo = z.infer<typeof todoSchema>;

export const newTodoSchema = z.object({
	text: z
		.string({ required_error: 'Todo text is required' })
		.trim()
		.min(3, { message: 'Todo text must contain at least 3 characters' }),
});

export const todoSchema = newTodoSchema.merge(
	z.object({
		id: z.string(),
		completed: z.boolean(),
		user_id: z.string(),
	})
);
