import { news } from '$lib/data.js';

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        news: [...news].sort((a, b) => new Date(b.date) - new Date(a.date))
    };
}
