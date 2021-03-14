<script>
  import SvelteSeo from "svelte-seo"
</script>

<svelte:head>
  <title>Makuza Mugabo Verite</title>
</svelte:head>

<SvelteSeo
  openGraph={{
    title: "Makuza Mugabo Verite",
    description: "Verite' Personal website",
    url: "https://veritem.me/",
    type: "website",
    images: [
      {
        url: "https://veritem.me/logo.jpg",
        width: 850,
        height: 650,
        alt: "Logo",
      },
    ],
  }}
  twitter={{
    site: "@makuza_mugabo_verite",
    title: "Makuza Mugabo Verite",
    description: "Verite's personal website site",
    image: "https://veritem.me/logo.jpg",
    imageAlt: "Logo",
  }}
/>

<section class="flex h-5/6 justify-center flex-col items-center font-sans">
  <div class="w-1/2 md:w-1/2 sm:w-4/5">
    <h2
      class="text-gray-100 text-5xl  md:text-5xl sm:text-4xl mb-8 font-bold capitalize"
    >
      Hi! I'm Makuza Mugabo verite
    </h2>
    <p class="text-base sm:text-base md:text-lg text-gray-400 mb-4">
      I'm a curious software Engineer and <a
        href="https://github.com/makuzaverite"
        target="__blank"
        class=" text-blue-500">open source fanitic</a
      >
      . I spend the majority of my time designing, using open source software, and
      <a href="https://codekin.tech" class="text-blue-500" target="__blank"
        >blogging</a
      > about my experiences.
    </p>
    <p class="text-base sm:text-base md:text-lg text-gray-400">
      You can contact me via <a
        href="mailto:mugaboverite@gmail.com"
        class="text-blue-500">email</a
      >
      or
      <a href="https://twitter.com/makuza_mugabo_v" class="text-blue-500"
        >Twitter (DMs)</a
      >. Meeting new people always makes me smile.
    </p>
  </div>
</section>
