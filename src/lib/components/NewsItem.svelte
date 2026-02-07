<script>
    import Icon from "@iconify/svelte";

    export let title = "";
    export let content = "";
    export let date = "";
</script>

<div class="news-item">
    <div class="header">
        <Icon icon="mdi:newspaper-variant-outline" width="24" class="icon" />
        <h3 class="title">{title}</h3>
    </div>
    <div class="body">
        <p>{content}</p>
    </div>
    <div class="footer">
        <span class="date">{date}</span>
    </div>
</div>

<style>
    .news-item {
        background: rgba(30, 41, 59, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        padding: 1.5rem;
        transition: transform 0.2s;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .news-item:hover {
        transform: translateY(-2px);
        background: rgba(30, 41, 59, 0.9);
    }

    .header {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-bottom: 0.8rem;
    }

    .title {
        font-size: 1.25rem;
        color: white;
        margin: 0;
        font-weight: 700;
    }

    .body {
        flex: 1;
        margin-bottom: 1rem;
    }

    .body p {
        color: var(--color-text-muted);
        line-height: 1.5;
        font-size: 0.95rem;
    }

    .footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 0.8rem;
    }

    .date {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.4);
    }
</style>
