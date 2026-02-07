import { db } from '$lib/server/db';
import { news as newsTable } from '$lib/server/schema';
import { eq, desc } from 'drizzle-orm';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const news = await db.select()
        .from(newsTable)
        .orderBy(desc(newsTable.date));
    return { news };
}

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const title = String(data.get('title'));
        const content = String(data.get('content'));

        await db.insert(newsTable).values({
            title,
            content,
            updatedAt: new Date()
        });
    },
    delete: async ({ request }) => {
        const data = await request.formData();
        const id = Number(data.get('id'));
        await db.delete(newsTable).where(eq(newsTable.id, id));
    },
    update: async ({ request }) => {
        const data = await request.formData();
        const id = Number(data.get('id'));
        const title = String(data.get('title'));
        const content = String(data.get('content'));

        await db.update(newsTable)
            .set({
                title,
                content,
                updatedAt: new Date()
            })
            .where(eq(newsTable.id, id));
    }
};
