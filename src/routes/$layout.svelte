<script>
	import Footer from '$lib/Footer.svelte';
	import '../app.postcss';
</script>

<section class="bg-primary h-screen w-full">
	<slot />
	<Footer />
</section>
