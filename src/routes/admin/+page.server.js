import { db } from '$lib/server/db.js';
import { server as serverTable, news as newsTable, partner as partnerTable, video as videoTable } from '$lib/server/schema.js';
import { sql } from 'drizzle-orm';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const [serverCount] = await db.select({ count: sql`count(*)` }).from(serverTable);
    const [newsCount] = await db.select({ count: sql`count(*)` }).from(newsTable);
    const [partnerCount] = await db.select({ count: sql`count(*)` }).from(partnerTable);
    const [videoCount] = await db.select({ count: sql`count(*)` }).from(videoTable);

    return {
        stats: {
            servers: serverCount.count,
            news: newsCount.count,
            partners: partnerCount.count,
            videos: videoCount.count
        }
    };
}
