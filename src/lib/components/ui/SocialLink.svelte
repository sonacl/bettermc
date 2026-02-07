<script>
    import Icon from "@iconify/svelte";
    export let href = "";
    export let icon = "";
    export let label = "";
</script>

<a {href} target="_blank" aria-label={label} class="social-link">
    <Icon {icon} />
</a>

<style>
    .social-link {
        color: var(--color-text-muted);
        transition: all 0.2s ease;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .social-link:hover {
        color: var(--color-primary);
        transform: translateY(-2px);
    }
</style>
