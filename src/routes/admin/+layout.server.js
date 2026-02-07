import { redirect } from '@sveltejs/kit';
import { requireAuth } from '$lib/server/auth';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals, url }) {
    if (!locals.user && !url.pathname.startsWith('/admin/login')) {
        throw redirect(302, '/admin/login');
    }
}
