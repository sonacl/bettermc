import { videos } from '$lib/data.js';

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        videos: videos.filter(v => v.active)
    };
}
