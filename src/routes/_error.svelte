<script lang="ts">
  export let status: number
  export let error: Error

  const dev = process.env.NODE_ENV === "development"
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<section
  class="bg-primary h-screen w-screen text-white font-sans flex justify-center items-center flex-col"
>
  <h1 class="text-9xl pb-6">{status}</h1>

  <p class="text-xl">{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</section>
