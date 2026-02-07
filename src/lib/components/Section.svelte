<script>
    import { onMount } from "svelte";
    export let title = "";
    export let id = "";

    let visible = false;
    let sectionRef;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visible = true;
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 },
        );

        if (sectionRef) observer.observe(sectionRef);

        return () => {
            if (sectionRef) observer.unobserve(sectionRef);
        };
    });
</script>

<section {id} bind:this={sectionRef} class:visible class="section-container">
    {#if title}
        <h2 class="section-title">
            <span class="highlight">#</span>
            {title}
        </h2>
    {/if}
    <div class="content">
        <slot />
    </div>
</section>

<style>
    .section-container {
        padding: 4rem 1rem;
        margin: 2rem auto;
        max-width: 1200px;
        opacity: 0;
        transform: translateY(20px);
        transition:
            opacity 0.6s ease-out,
            transform 0.6s ease-out;
    }

    .section-container.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .section-title {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: white;
        position: relative;
        display: inline-block;
    }

    .highlight {
        color: var(--color-primary);
        margin-right: 0.5rem;
    }

    @media (max-width: 768px) {
        .section-container {
            padding: 2rem 1rem;
        }
        .section-title {
            font-size: 1.5rem;
        }
    }
</style>
