<script lang="ts">
	let CURRENTYEAR = new Date().getFullYear();
</script>

<footer class="text-white text-sm sm:text-base md:text-base w-full text-center fixed">
	Makuza Mugabo Verite &copy;{CURRENTYEAR}
</footer>

<style>
	footer {
		border-top: 1px solid #262c36;
		padding: 1rem;
		position: fixed;
		bottom: 0;
		background: #050505;
	}
	@supports (backdrop-filter: none) {
		footer {
			background-color: #050505c4;
			backdrop-filter: saturate(200%) blur(5px);
		}
	}
</style>
