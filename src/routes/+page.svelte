<script>
    import Hero from "$lib/components/Hero.svelte";
    import Section from "$lib/components/Section.svelte";
    import Card from "$lib/components/Card.svelte";
    import NewsItem from "$lib/components/NewsItem.svelte";
    import Button from "$lib/components/ui/Button.svelte";
    import Badge from "$lib/components/ui/Badge.svelte";
    import Icon from "@iconify/svelte";

    export let data;
    const { news } = data;

    const serverInfo = {
        ip: "A szerver nincs megnyitva!",
        version: "1.21.8",
        owners: ["Sebici15", "GumikacsaGaga"],
    };
</script>

<svelte:head>
    <title>BetterMC | 2026</title>
</svelte:head>

<Hero
    subTitle="A legjobb Minecraft élmény, amit csak el tudsz képzelni."
    ctaText="Fedezd fel a szervereket"
    ctaLink="/servers"
/>

<Section title="Hírek" id="news">
    <div class="news-grid">
        {#each news as item}
            <NewsItem
                title={item.title}
                content={item.content}
                date={item.date}
            />
        {/each}
    </div>
</Section>

<Section title="Információk" id="info">
    <div class="info-grid">
        <Card title="Szerver IP" icon="mdi:server-network">
            <p class="highlight-text">{serverInfo.ip}</p>
            <Button variant="secondary" size="sm" class="copy-btn">
                <Icon icon="mdi:content-copy" slot="icon" />
                Másolás
            </Button>
        </Card>

        <Card title="Verzió" icon="mdi:minecraft">
            <p class="highlight-text">{serverInfo.version}</p>
        </Card>

        <Card title="Tulajdonosok" icon="mdi:crown">
            <div class="owners">
                {#each serverInfo.owners as owner}
                    <Badge text={owner} variant="owner" />
                {/each}
            </div>
        </Card>
    </div>
</Section>

<style>
    .news-grid {
        display: grid;
        gap: 1.5rem;
    }

    .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .highlight-text {
        font-size: 1.1rem;
        font-weight: 600;
        color: white;
        margin-bottom: 0.5rem;
    }

    .owners {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
    }
</style>
