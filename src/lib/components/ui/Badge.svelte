<script>
    import Icon from "@iconify/svelte";

    export let variant = "default";
    export let icon = "";
    export let text = "";

    const getVariantClass = (v) => {
        switch (v) {
            case "online":
                return "bg-green-soft text-green";
            case "offline":
                return "bg-white-soft text-muted";
            case "owner":
                return "bg-yellow-soft text-yellow";
            default:
                return "bg-gray-soft text-muted";
        }
    };
</script>

<div class="badge {getVariantClass(variant)}">
    {#if icon}
        <Icon {icon} class="mr-1" />
    {/if}
    <slot>{text}</slot>
</div>

<style>
    .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.2rem 0.6rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.5px;
    }

    .mr-1 {
        margin-right: 0.3rem;
    }

    .bg-green-soft {
        background: rgba(46, 204, 113, 0.2);
    }
    .text-green {
        color: #2ecc71;
    }

    .bg-white-soft {
        background: rgba(255, 255, 255, 0.1);
    }
    .text-muted {
        color: var(--color-text-muted);
    }

    .bg-yellow-soft {
        background: rgba(241, 196, 15, 0.2);
        border: 1px solid rgba(241, 196, 15, 0.3);
        border-radius: 20px;
        padding: 0.3rem 0.8rem;
        font-weight: 500;
    }
    .text-yellow {
        color: #f1c40f;
    }

    .bg-gray-soft {
        background: rgba(255, 255, 255, 0.05);
    }
</style>
