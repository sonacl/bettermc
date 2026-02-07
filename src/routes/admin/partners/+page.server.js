import { db } from '$lib/server/db';
import { partner as partnerTable } from '$lib/server/schema';
import { eq } from 'drizzle-orm';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const partners = await db.select().from(partnerTable);
    return { partners };
}

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const name = String(data.get('name'));
        const url = String(data.get('url'));
        const icon = String(data.get('icon'));
        const active = data.has('active');

        await db.insert(partnerTable).values({
            name,
            url,
            icon,
            active,
            updatedAt: new Date()
        });
    },
    delete: async ({ request }) => {
        const data = await request.formData();
        const id = Number(data.get('id'));
        await db.delete(partnerTable).where(eq(partnerTable.id, id));
    },
    update: async ({ request }) => {
        const data = await request.formData();
        const id = Number(data.get('id'));
        const name = String(data.get('name'));
        const url = String(data.get('url'));
        const icon = String(data.get('icon'));
        const active = data.has('active');

        await db.update(partnerTable)
            .set({
                name,
                url,
                icon,
                active,
                updatedAt: new Date()
            })
            .where(eq(partnerTable.id, id));
    }
};
