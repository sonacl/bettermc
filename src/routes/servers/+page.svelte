<script>
    import Section from "$lib/components/Section.svelte";
    import Card from "$lib/components/Card.svelte";
    import Button from "$lib/components/ui/Button.svelte";
    import Badge from "$lib/components/ui/Badge.svelte";

    export let data;
    const { servers: activeServers } = data;

    const maxSlots = 30;

    const slots = Array.from({ length: maxSlots }, (_, i) => {
        if (i < activeServers.length) {
            return { ...activeServers[i], active: true };
        }
        return { name: "Üres hely", active: false, icon: "mdi:lock-outline" };
    });
</script>

<svelte:head>
    <title>Szerverek | BetterMC</title>
</svelte:head>

<div class="page-container">
    <Section title="Szervereink" id="servers">
        <div class="grid">
            {#each slots as server}
                <Card
                    title={server.name}
                    icon={server.icon}
                    active={server.active}
                >
                    {#if server.active}
                        <div class="mb-4">
                            <Badge text="ONLINE" variant="online" />
                        </div>
                        <p class="type">{server.type}</p>
                    {:else}
                        <Badge text="Elérhető" variant="offline" />
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

    .type {
        margin-bottom: 1rem;
        color: var(--color-text-muted);
        font-size: 0.9rem;
    }

    .mb-4 {
        margin-bottom: 0.5rem;
    }
</style>
