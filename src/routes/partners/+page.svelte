<script>
    import Section from "$lib/components/Section.svelte";
    import Card from "$lib/components/Card.svelte";
    import Button from "$lib/components/ui/Button.svelte";
    import Icon from "@iconify/svelte";

    export let data;
    const { partners: activePartners } = data;

    const maxSlots = 15;

    const slots = Array.from({ length: maxSlots }, (_, i) => {
        if (i < activePartners.length) {
            return { ...activePartners[i], active: true };
        }
        return {
            name: "Üres hely",
            active: false,
            icon: "mdi:emoticon-neutral-outline",
        };
    });
</script>

<svelte:head>
    <title>Partnerek | BetterMC</title>
</svelte:head>

<div class="page-container">
    <Section title="Partnereink" id="partners">
        <div class="grid">
            {#each slots as partner}
                <Card
                    title={partner.name}
                    icon={partner.icon}
                    active={partner.active}
                >
                    {#if partner.active}
                        <div class="mt-4">
                            <Button
                                variant="outline"
                                block
                                href={partner.url}
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
                        <div class="placeholder">Partnerünk lehetsz!</div>
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
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 1.5rem;
    }

    .placeholder {
        color: var(--color-text-muted);
        font-size: 0.9rem;
        margin-top: 1rem;
    }

    .mt-4 {
        margin-top: 1rem;
        width: 100%;
    }
</style>
