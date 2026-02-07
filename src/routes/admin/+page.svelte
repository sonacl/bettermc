<script>
    import Icon from "@iconify/svelte";
    export let data;
    const { stats } = data;
</script>

<div class="header">
    <h1>Vezérlőpult</h1>
    <p>Üdvözlünk újra! Itt egy gyors áttekintés az oldal állapotáról.</p>
</div>

<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-icon servers">
            <Icon icon="solar:server-bold" width="24" />
        </div>
        <div class="stat-info">
            <span class="label">Szerverek</span>
            <span class="value">{stats.servers}</span>
        </div>
    </div>

    <div class="stat-card">
        <div class="stat-icon news">
            <Icon icon="solar:document-text-bold" width="24" />
        </div>
        <div class="stat-info">
            <span class="label">Hírek</span>
            <span class="value">{stats.news}</span>
        </div>
    </div>

    <div class="stat-card">
        <div class="stat-icon partners">
            <Icon icon="solar:users-group-two-rounded-bold" width="24" />
        </div>
        <div class="stat-info">
            <span class="label">Partnerek</span>
            <span class="value">{stats.partners}</span>
        </div>
    </div>

    <div class="stat-card">
        <div class="stat-icon videos">
            <Icon icon="solar:videocamera-record-bold" width="24" />
        </div>
        <div class="stat-info">
            <span class="label">Videósok</span>
            <span class="value">{stats.videos}</span>
        </div>
    </div>
</div>

<style>
    .header {
        margin-bottom: 3rem;
    }

    h1 {
        margin: 0 0 0.5rem 0;
        font-size: 1.8rem;
    }

    .header p {
        color: #94a3b8;
        margin: 0;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1.5rem;
    }

    .stat-card {
        background: #1e293b;
        padding: 1.5rem;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        align-items: center;
        gap: 1.2rem;
    }

    .stat-icon {
        width: 48px;
        height: 48px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .stat-icon.servers {
        background: rgba(59, 130, 246, 0.1);
        color: #3b82f6;
    }
    .stat-icon.news {
        background: rgba(16, 185, 129, 0.1);
        color: #10b981;
    }
    .stat-icon.partners {
        background: rgba(245, 158, 11, 0.1);
        color: #f59e0b;
    }
    .stat-icon.videos {
        background: rgba(239, 68, 68, 0.1);
        color: #ef4444;
    }

    .stat-info {
        display: flex;
        flex-direction: column;
    }

    .stat-info .label {
        color: #94a3b8;
        font-size: 0.85rem;
        font-weight: 500;
    }

    .stat-info .value {
        font-size: 1.5rem;
        font-weight: 700;
    }
</style>
