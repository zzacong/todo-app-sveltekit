import type { LayoutServerLoad } from './$types';
import { getServerSession } from '@supabase/auth-helpers-sveltekit';
// import { redirect } from '@sveltejs/kit';

export const load = (async (event) => {
	// const { session } = await getSupabase(event);
	// return { session };
	console.log('Ran layout load');
	const session = await getServerSession(event);
	// if (!session) throw redirect(307, '/auth/signin');
	return { session };
}) satisfies LayoutServerLoad;
