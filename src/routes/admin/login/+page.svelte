<script>
    import { enhance } from "$app/forms";
    import Button from "$lib/components/ui/Button.svelte";

    export let form;
</script>

<svelte:head>
    <title>Admin Login | BetterMC</title>
</svelte:head>

<div class="login-container">
    <div class="login-card">
        <h1>Admin Belépés</h1>

        <form method="POST" use:enhance>
            <div class="form-group">
                <label for="username">Felhasználónév</label>
                <input type="text" id="username" name="username" required />
            </div>

            <div class="form-group">
                <label for="password">Jelszó</label>
                <input type="password" id="password" name="password" required />
            </div>

            {#if form?.incorrect}
                <p class="error">Hibás felhasználónév vagy jelszó!</p>
            {/if}
            {#if form?.missing}
                <p class="error">Minden mezőt ki kell tölteni!</p>
            {/if}

            <div class="actions">
                <Button variant="primary" block>Belépés</Button>
            </div>
        </form>
    </div>
</div>

<style>
    .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        padding: 1rem;
    }

    .login-card {
        background: rgba(30, 41, 59, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.05);
        padding: 2rem;
        border-radius: 12px;
        width: 100%;
        max-width: 400px;
        backdrop-filter: blur(10px);
    }

    h1 {
        text-align: center;
        font-size: 1.8rem;
        margin-bottom: 2rem;
        color: white;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--color-text-muted);
        font-size: 0.9rem;
    }

    input {
        width: 100%;
        padding: 0.8rem;
        background: rgba(15, 23, 42, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        color: white;
        font-size: 1rem;
    }

    input:focus {
        outline: none;
        border-color: var(--color-primary);
    }

    .error {
        color: #ef4444;
        font-size: 0.9rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .actions {
        margin-top: 1rem;
    }
</style>
