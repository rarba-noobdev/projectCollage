import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = (formData.get('rrn') + '@crescent.education') as string;
		const password = formData.get('password') as string;
		const { error } = await supabase.auth.signUp({ email, password });
		if (error) {
			console.log(error);
			redirect(303, '/register/error');
		} else {
			redirect(303, '/private');
		}
	}
};
