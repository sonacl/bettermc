import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { user as userTable } from '$lib/server/schema';
import { signToken } from '$lib/server/auth';
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        if (!username || !password) {
            return fail(400, { missing: true });
        }

        const users = await db.select()
            .from(userTable)
            .where(eq(userTable.username, String(username)))
            .limit(1);

        const user = users[0];

        if (!user || !(await bcrypt.compare(String(password), user.password))) {
            return fail(400, { incorrect: true });
        }

        const token = signToken(user);
        cookies.set('session', token, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        });

        throw redirect(302, '/admin');
    }
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    if (locals.user) {
        throw redirect(302, '/admin');
    }
}
