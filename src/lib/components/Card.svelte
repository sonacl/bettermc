<script>
    import Icon from "@iconify/svelte";
    export let title = "";
    export let icon = "";
    export let active = false; // Default false
</script>

<div class="card" class:active>
    {#if icon}
        <div class="icon-wrapper">
            <Icon {icon} width="32" height="32" />
        </div>
    {/if}
    <h3 class="title">{title}</h3>
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .card {
        background: rgba(30, 41, 59, 0.7);
        padding: 1.5rem;
        transition:
            transform 0.2s ease,
            background 0.2s;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border-radius: 8px;
        height: 100%;
        border: 1px solid transparent; /* Placeholder for active state */
    }

    .card:hover {
        transform: translateY(-5px);
        background: rgba(30, 41, 59, 1);
    }

    .card.active {
        border-color: var(--color-primary);
        background: rgba(30, 41, 59, 0.9);
    }

    .icon-wrapper {
        margin-bottom: 1rem;
        color: white;
        background: var(--color-primary);
        padding: 1rem;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .title {
        margin: 0.5rem 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: white;
    }

    .content {
        font-size: 0.9rem;
        color: var(--color-text-muted);
        width: 100%;
    }
</style>
