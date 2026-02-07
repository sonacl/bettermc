import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { server as serverTable } from '$lib/server/schema';
import { eq } from 'drizzle-orm';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const servers = await db.select().from(serverTable);
    return { servers };
}

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const name = String(data.get('name'));
        const type = String(data.get('type'));
        const icon = String(data.get('icon'));
        const active = data.has('active');

        await db.insert(serverTable).values({
            name,
            type,
            icon,
            active,
            updatedAt: new Date()
        });
    },
    delete: async ({ request }) => {
        const data = await request.formData();
        const id = Number(data.get('id'));
        await db.delete(serverTable).where(eq(serverTable.id, id));
    },
    update: async ({ request }) => {
        const data = await request.formData();
        const id = Number(data.get('id'));
        const name = String(data.get('name'));
        const type = String(data.get('type'));
        const icon = String(data.get('icon'));
        const active = data.has('active');

        await db.update(serverTable)
            .set({
                name,
                type,
                icon,
                active,
                updatedAt: new Date()
            })
            .where(eq(serverTable.id, id));
    }
};
