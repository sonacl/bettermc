<script>
    import Icon from "@iconify/svelte";
    import Button from "$lib/components/ui/Button.svelte";

    export let subTitle = "The Ultimate Minecraft Experience";
    export let ctaText = "Csatlakozz";
    export let ctaLink = "#servers";
</script>

<section class="hero">
    <div class="bg-layer"></div>
    <div class="content">
        <h1 class="logo-title">
            <span class="better">Better</span><span class="mc">MC</span>
        </h1>
        <p class="subtitle">{subTitle}</p>

        <div class="actions">
            <Button href={ctaLink} size="lg" variant="primary">{ctaText}</Button
            >
            <Button
                href="https://discord.gg/GayyMNyseU"
                target="_blank"
                variant="secondary"
                size="lg"
            >
                <Icon icon="ic:baseline-discord" width="24" class="mr-2" />
                Discord
            </Button>
        </div>
    </div>

    <div class="scroll-indicator">
        <Icon icon="mdi:chevron-down" width="32" class="bounce" />
    </div>
</section>

<style>
    .hero {
        position: relative;
        height: 80vh;
        min-height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        overflow: hidden;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .bg-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
                to bottom,
                rgba(15, 23, 42, 0.6),
                rgba(15, 23, 42, 1)
            ),
            url("/127166.jpg");
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        z-index: -1;
        filter: brightness(0.6) contrast(1.1);
    }

    .logo-title {
        font-size: 5rem;
        font-weight: 800;
        letter-spacing: -2px;
        margin-bottom: 1rem;
        color: white;
    }

    .better {
        margin-right: 0.2rem;
    }
    .mc {
        color: var(--color-primary);
    }

    .subtitle {
        font-size: 1.5rem;
        color: var(--color-text-muted);
        max-width: 600px;
        margin: 0 auto 3rem;
        line-height: 1.4;
    }

    .actions {
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }

    .scroll-indicator {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        color: rgba(255, 255, 255, 0.3);
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0) translateX(-50%);
        }
        40% {
            transform: translateY(-10px) translateX(-50%);
        }
        60% {
            transform: translateY(-5px) translateX(-50%);
        }
    }

    @media (max-width: 768px) {
        .logo-title {
            font-size: 3rem;
        }
        .subtitle {
            font-size: 1.1rem;
            padding: 0 1rem;
        }
        .actions {
            flex-direction: column;
            gap: 1rem;
        }
    }
</style>
