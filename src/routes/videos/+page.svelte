<script>
    import Section from "$lib/components/Section.svelte";
    import Card from "$lib/components/Card.svelte";
    import Button from "$lib/components/ui/Button.svelte";
    import Icon from "@iconify/svelte";

    export let data;
    const { videos: activeVideos } = data;

    const maxSlots = 30;

    const slots = Array.from({ length: maxSlots }, (_, i) => {
        if (i < activeVideos.length) {
            return { ...activeVideos[i], active: true };
        }
        return {
            name: "Üres videós",
            icon: "mdi:youtube",
            active: false,
        };
    });
</script>

<svelte:head>
    <title>Videósok | BetterMC</title>
</svelte:head>

<div class="page-container">
    <Section title="Videósok" id="videos">
        <div class="grid">
            {#each slots as video}
                <Card
                    title={video.name}
                    icon={video.icon}
                    active={video.active}
                >
                    {#if video.active}
                        <div class="mt-4">
                            <Button
                                variant="outline"
                                block
                                href={video.url}
                                target="_blank"
                            >
                                <Icon
                                    icon="solar:round-alt-arrow-right-bold"
                                    slot="icon"
                                />
                                Megtekintés
                            </Button>
                        </div>
                    {:else}
                        <div class="video-placeholder">
                            <span class="muted">Hamarosan...</span>
                        </div>
                    {/if}
                </Card>
            {/each}
        </div>
    </Section>
</div>

<style>
    .page-container {
        padding-top: 2rem;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
    }

    .video-placeholder {
        margin-top: 1rem;
        color: var(--color-text-muted);
        font-size: 0.9rem;
    }

    .muted {
        opacity: 0.6;
    }

    .mt-4 {
        margin-top: 1rem;
        width: 100%;
    }
</style>
