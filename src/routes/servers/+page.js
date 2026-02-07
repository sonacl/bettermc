import { servers } from '$lib/data.js';

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        servers: servers.filter(s => s.active)
    };
}
