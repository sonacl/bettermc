import { partners } from '$lib/data.js';

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        partners: partners.filter(p => p.active)
    };
}
