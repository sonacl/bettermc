<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import "../app.css";
</script>

<div class="app-layout">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app-layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		width: 100%;
		margin: 0 auto;
	}
</style>
