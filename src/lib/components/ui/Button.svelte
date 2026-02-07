<script>
    export let variant = "primary"; // 'primary', 'secondary', 'outline', 'ghost'
    export let size = "md"; // 'sm', 'md', 'lg'
    export let href = "";
    export let target = "";
    export let block = false;
    let clazz = "";
    export { clazz as class };

    const baseClass = "btn";
</script>

{#if href}
    <a
        {href}
        {target}
        class="{baseClass} {variant} {size} {block ? 'block' : ''} {clazz}"
        {...$$restProps}
    >
        <slot />
    </a>
{:else}
    <button
        class="{baseClass} {variant} {size} {block ? 'block' : ''} {clazz}"
        {...$$restProps}
        on:click
    >
        <slot />
    </button>
{/if}

<style>
    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
        font-family: inherit;
        line-height: 1.2;
    }

    .btn.block {
        width: 100%;
        display: flex;
    }

    .sm {
        padding: 0.4rem 0.8rem;
        font-size: 0.85rem;
    }
    .md {
        padding: 0.6rem 1.2rem;
        font-size: 1rem;
    }
    .lg {
        padding: 1rem 2rem;
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .primary {
        background: var(--color-primary);
        color: white;
    }
    .primary:hover {
        background: #2563eb;
        transform: translateY(-2px);
    }

    .secondary {
        background: transparent;
        color: var(--color-text-muted);
        border: 1px solid transparent;
    }
    .secondary:hover {
        color: white;
        background: rgba(255, 255, 255, 0.05);
    }

    .outline {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: white;
    }
    .outline:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.2);
    }

    .ghost {
        background: transparent;
        color: var(--color-text-muted);
        padding: 0.5rem;
    }
    .ghost:hover {
        color: white;
        background: rgba(255, 255, 255, 0.05);
    }

    .copy {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        padding: 0.4rem 0.8rem;
        font-size: 0.85rem;
    }
    .copy:hover {
        background: rgba(255, 255, 255, 0.2);
    }
</style>
