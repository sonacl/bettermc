<script>
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";
    import { slide } from "svelte/transition";
    import SocialLink from "$lib/components/ui/SocialLink.svelte";

    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    $: activePath = $page.url.pathname;
</script>

<nav class="navbar glass-panel">
    <a href="/" class="logo">
        <span class="better">Better</span><span class="mc">MC</span>
    </a>

    <!-- Desktop Menu -->
    <ul class="nav-links desktop">
        <li><a href="/" class:active={activePath === "/"}>Főoldal</a></li>
        <li>
            <a href="/servers" class:active={activePath === "/servers"}
                >Szerverek</a
            >
        </li>
        <li>
            <a href="/partners" class:active={activePath === "/partners"}
                >Partnerek</a
            >
        </li>
        <li>
            <a href="/videos" class:active={activePath === "/videos"}
                >Videósok</a
            >
        </li>
    </ul>

    <div class="socials desktop">
        <SocialLink
            href="https://www.tiktok.com/@bettermc8"
            icon="ic:baseline-tiktok"
            label="TikTok"
        />
        <SocialLink
            href="https://discord.gg/GayyMNyseU"
            icon="ic:baseline-discord"
            label="Discord"
        />
        <SocialLink
            href="https://www.youtube.com/@BetterMCHivatalos"
            icon="mdi:youtube"
            label="YouTube"
        />
    </div>

    <!-- Mobile Menu Button -->
    <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle Menu">
        <Icon
            icon={isMenuOpen ? "mdi:close" : "mdi:menu"}
            width="24"
            height="24"
        />
    </button>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
        <div class="mobile-menu glass-panel" transition:slide>
            <a
                href="/"
                class:active={activePath === "/"}
                on:click={() => (isMenuOpen = false)}>Főoldal</a
            >
            <a
                href="/servers"
                class:active={activePath === "/servers"}
                on:click={() => (isMenuOpen = false)}>Szerverek</a
            >
            <a
                href="/partners"
                class:active={activePath === "/partners"}
                on:click={() => (isMenuOpen = false)}>Partnerek</a
            >
            <a
                href="/videos"
                class:active={activePath === "/videos"}
                on:click={() => (isMenuOpen = false)}>Videósok</a
            >
            <div class="socials mobile">
                <SocialLink
                    href="https://www.tiktok.com/@bettermc8"
                    icon="ic:baseline-tiktok"
                    label="TikTok"
                />
                <SocialLink
                    href="https://discord.gg/GayyMNyseU"
                    icon="ic:baseline-discord"
                    label="Discord"
                />
                <SocialLink
                    href="https://www.youtube.com/@BetterMCHivatalos"
                    icon="mdi:youtube"
                    label="YouTube"
                />
            </div>
        </div>
    {/if}
</nav>

<style>
    .navbar {
        position: sticky;
        top: 20px;
        z-index: 1000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        margin: 0 auto 2rem;
        width: 90%;
        max-width: 1200px;
        transition: all 0.3s ease;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: -0.5px;
        user-select: none;
        text-decoration: none;
    }

    .better {
        color: white;
    }
    .mc {
        color: var(--color-primary);
    }

    .nav-links {
        display: flex;
        gap: 2rem;
    }

    .nav-links a {
        background: transparent;
        color: var(--color-text-muted);
        font-size: 1rem;
        font-weight: 500;
        transition: color 0.3s ease;
        padding: 0.5rem 0;
        position: relative;
    }

    .nav-links a:hover,
    .nav-links a.active {
        color: white;
    }

    .nav-links a.active::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--color-primary);
        border-radius: 2px;
    }

    .socials {
        display: flex;
        gap: 1rem;
    }

    .menu-toggle {
        display: none;
        background: none;
        border: none;
        color: white;
    }

    @media (max-width: 768px) {
        .navbar {
            padding: 1rem;
            width: 95%;
            top: 10px;
        }

        .desktop {
            display: none;
        }
        .menu-toggle {
            display: block;
        }

        .mobile-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            margin-top: 1rem;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            background: rgba(15, 23, 42, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--border-radius);
            backdrop-filter: blur(10px);
        }

        .mobile-menu a {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            padding: 0.5rem;
            width: 100%;
            text-align: center;
        }

        .socials.mobile {
            margin-top: 1rem;
            font-size: 1.5rem;
        }
    }
</style>
