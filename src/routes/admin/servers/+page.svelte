<script>
    import { enhance } from "$app/forms";
    import AdminPage from "$lib/components/admin/AdminPage.svelte";
    import AdminActionButtons from "$lib/components/admin/AdminActionButtons.svelte";
    import AdminFormField from "$lib/components/admin/AdminFormField.svelte";
    import Button from "$lib/components/ui/Button.svelte";
    import Badge from "$lib/components/ui/Badge.svelte";
    import Icon from "@iconify/svelte";

    export let data;
    let editing = null;

    function edit(server) {
        editing = server;
        document.getElementById("form").scrollIntoView({ behavior: "smooth" });
    }

    function cancel() {
        editing = null;
    }
</script>

<AdminPage title="Szerverek kezelése">
    <div slot="list" class="admin-table-container">
        <table>
            <thead>
                <tr>
                    <th>Név</th>
                    <th>Típus</th>
                    <th>Státusz</th>
                    <th>Műveletek</th>
                </tr>
            </thead>
            <tbody>
                {#each data.servers as server}
                    <tr>
                        <td>
                            <div class="name-col">
                                <Icon icon={server.icon} width="20" />
                                {server.name}
                            </div>
                        </td>
                        <td>{server.type}</td>
                        <td>
                            <Badge
                                variant={server.active ? "online" : "offline"}
                                text={server.active ? "Aktív" : "Inaktív"}
                            />
                        </td>
                        <td>
                            <AdminActionButtons
                                id={server.id}
                                onEdit={() => edit(server)}
                                confirmMessage="Biztosan törlöd ezt a szervert?"
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <div slot="form">
        <h2 class="form-title">
            {editing ? "Szerver szerkesztése" : "Új szerver hozzáadása"}
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
                id="name"
                label="Szerver neve"
                required
                value={editing?.name || ""}
            />
            <AdminFormField
                id="type"
                label="Típus (pl. Survival)"
                required
                value={editing?.type || ""}
            />

            <div class="icon-group">
                <AdminFormField
                    id="icon"
                    label="Ikon (Iconify ID)"
                    required
                    value={editing?.icon || "mdi:minecraft"}
                />
                <a
                    href="https://icon-sets.iconify.design/"
                    target="_blank"
                    class="help-link"
                >
                    <Icon icon="solar:info-circle-bold" /> Ikonok
                </a>
            </div>

            <AdminFormField
                id="active"
                label="Láthatóság"
                type="checkbox"
                value={editing ? editing.active : true}
            >
                Publikusan megjelenítve
            </AdminFormField>

            <div class="form-actions">
                <Button variant="primary" type="submit" block>
                    {editing ? "Változtatások mentése" : "Szerver létrehozása"}
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
    .name-col {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-weight: 600;
        color: white;
    }

    .form-title {
        margin: 0 0 1.5rem 0;
        font-size: 1.3rem;
    }

    .icon-group {
        position: relative;
    }

    .help-link {
        position: absolute;
        top: 0;
        right: 0;
        color: #64748b;
        text-decoration: none;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }

    .help-link:hover {
        color: #3b82f6;
    }

    .form-actions {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-top: 2rem;
    }
</style>
