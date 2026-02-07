import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: ({ cookies }) => {
        cookies.delete('session', { path: '/' });
        throw redirect(302, '/admin/login');
    }
};
