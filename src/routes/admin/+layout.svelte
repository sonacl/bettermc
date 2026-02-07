<script>
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";
</script>

{#if $page.url.pathname === "/admin/login"}
    <slot />
{:else}
    <div class="admin-container">
        <header class="admin-nav">
            <div class="brand">
                <span class="better">Better</span><span class="mc">MC</span> Admin
            </div>

            <nav class="tabs">
                <a href="/admin" class:active={$page.url.pathname === "/admin"}>
                    Vezérlőpult
                </a>
                <a
                    href="/admin/servers"
                    class:active={$page.url.pathname.startsWith(
                        "/admin/servers",
                    )}
                >
                    Szerverek
                </a>
                <a
                    href="/admin/partners"
                    class:active={$page.url.pathname.startsWith(
                        "/admin/partners",
                    )}
                >
                    Partnerek
                </a>
                <a
                    href="/admin/videos"
                    class:active={$page.url.pathname.startsWith(
                        "/admin/videos",
                    )}
                >
                    Videósok
                </a>
                <a
                    href="/admin/news"
                    class:active={$page.url.pathname.startsWith("/admin/news")}
                >
                    Hírek
                </a>
            </nav>

            <div class="actions">
                <a href="/" class="view-site" target="_blank">Oldal</a>
                <form action="/admin/logout" method="POST">
                    <button type="submit" class="logout-btn">Kilépés</button>
                </form>
            </div>
        </header>

        <main class="admin-content">
            <slot />
        </main>
    </div>
{/if}

<style>
    :global(body) {
        background: #0f172a;
        margin: 0;
        font-family: inherit;
    }

    .admin-container {
        min-height: 100vh;
        color: white;
    }

    .admin-nav {
        background: #0f172a;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        padding: 0 4rem;
        display: flex;
        align-items: center;
        gap: 4rem;
        height: 70px;
        position: sticky;
        top: 0;
        z-index: 100;
        backdrop-filter: blur(12px);
    }

    .brand {
        font-weight: 800;
        font-size: 1.3rem;
        white-space: nowrap;
        letter-spacing: -0.02em;
    }

    .better {
        color: white;
    }
    .mc {
        color: #3b82f6;
    }

    .tabs {
        display: flex;
        gap: 0.5rem;
        height: 100%;
    }

    .tabs a {
        display: flex;
        align-items: center;
        padding: 0 1.2rem;
        color: #94a3b8;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        position: relative;
        transition: all 0.2s;
    }

    .tabs a:hover {
        color: white;
    }

    .tabs a.active {
        color: white;
    }

    .tabs a.active::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: #3b82f6;
        border-radius: 3px 3px 0 0;
        box-shadow: 0 -4px 12px rgba(59, 130, 246, 0.4);
    }

    .actions {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .view-site {
        color: #64748b;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        transition: color 0.2s;
    }

    .view-site:hover {
        color: white;
    }

    .logout-btn {
        background: rgba(239, 68, 68, 0.1);
        color: #ef4444;
        border: 1px solid rgba(239, 68, 68, 0.1);
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.85rem;
        font-weight: 600;
        transition: all 0.2s;
    }

    .logout-btn:hover {
        background: #ef4444;
        color: white;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
    }

    .admin-content {
        padding: 4rem 2rem;
        max-width: 1300px;
        margin: 0 auto;
    }
</style>
