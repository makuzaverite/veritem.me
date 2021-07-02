<script>
	import Footer from '$lib/Footer.svelte';
	import '../app.postcss';
</script>

<main class="bg-primary h-screen w-full">
	<slot />
	<Footer />
</main>
