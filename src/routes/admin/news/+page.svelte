<script>
    import { enhance } from "$app/forms";
    import AdminPage from "$lib/components/admin/AdminPage.svelte";
    import AdminActionButtons from "$lib/components/admin/AdminActionButtons.svelte";
    import AdminFormField from "$lib/components/admin/AdminFormField.svelte";
    import Button from "$lib/components/ui/Button.svelte";
    import Icon from "@iconify/svelte";

    export let data;
    let editing = null;

    function edit(item) {
        editing = item;
        document.getElementById("form").scrollIntoView({ behavior: "smooth" });
    }

    function cancel() {
        editing = null;
    }

    function formatDate(date) {
        return new Date(date).toLocaleDateString("hu-HU");
    }
</script>

<AdminPage title="Hírek kezelése">
    <div slot="list" class="news-list">
        {#each data.news as item}
            <div class="news-card">
                <div class="news-info">
                    <div class="news-header">
                        <h3>{item.title}</h3>
                        <div class="meta">
                            <Icon icon="solar:calendar-bold" width="14" />
                            {formatDate(item.date)}
                        </div>
                    </div>
                    <p>{item.content}</p>
                </div>
                <AdminActionButtons
                    id={item.id}
                    onEdit={() => edit(item)}
                    confirmMessage="Biztosan törlöd ezt a hírt?"
                />
            </div>
        {/each}
    </div>

    <div slot="form">
        <h2 class="form-title">
            {editing ? "Hír szerkesztése" : "Új hír közzététele"}
        </h2>
        <form
            method="POST"
            action={editing ? "?/update" : "?/create"}
            use:enhance
        >
            {#if editing}
                <input type="hidden" name="id" value={editing.id} />
            {/if}

            <AdminFormField
                id="title"
                label="Hír címe"
                required
                value={editing?.title || ""}
            />
            <AdminFormField
                id="content"
                label="Tartalom"
                type="textarea"
                required
                value={editing?.content || ""}
            />

            <div class="form-actions">
                <Button variant="primary" type="submit" block>
                    {editing ? "Frissítés" : "Közzététel"}
                </Button>
                {#if editing}
                    <Button
                        variant="ghost"
                        type="button"
                        block
                        on:click={cancel}>Mégse</Button
                    >
                {/if}
            </div>
        </form>
    </div>
</AdminPage>

<style>
    .news-list {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    .news-card {
        background: #1e293b;
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
        transition: all 0.2s;
    }

    .news-card:hover {
        border-color: rgba(59, 130, 246, 0.2);
        transform: translateY(-2px);
    }

    .news-info {
        flex: 1;
    }

    .news-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8rem;
    }

    h3 {
        margin: 0;
        font-size: 1.15rem;
        color: white;
        font-weight: 700;
    }

    .meta {
        font-size: 0.8rem;
        color: #64748b;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-weight: 600;
    }

    p {
        margin: 0;
        color: #94a3b8;
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .form-title {
        margin: 0 0 1.5rem 0;
        font-size: 1.3rem;
    }

    .form-actions {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-top: 2rem;
    }
</style>
