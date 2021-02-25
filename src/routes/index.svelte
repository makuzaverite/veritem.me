<script>
  import SvelteSeo from "svelte-seo"
</script>

<svelte:head>
  <title>Verite</title>
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
    description: "Verite's site",
    image: "https://veritem.me/logo.jpg",
    imageAlt: "Logo",
  }}
/>

<section
  class="bg-primary h-screen w-screen flex justify-center flex-col items-center font-sans"
>
  <div class="w-1/2">
    <h2 class="text-gray-100  text-5xl mb-8 font-bold capitalize">
      Hi! I'm Makuza Mugabo verite
    </h2>
    <p class="text-base sm:text-base md:text-lg text-gray-400 mb-4">
      I'm a curious software developer and <a
        href="https://github.com/makuzaverite"
        target="__blank"
        class=" text-blue-500">open source enthusiast</a
      >
      . I spend most of my time writing open source tools and
      <a href="https://codekin.tech" class="text-blue-500" target="__blank"
        >writting</a
      > my opinions around them.
    </p>
    <p class="text-base sm:text-base md:text-lg text-gray-400">
      You can reach out to me by using an <a
        href="mailto:mugaboverite@gmail.com"
        class="text-blue-500">email</a
      >
      or DM on
      <a href="https://twitter.com/makuza_mugabo_v" class="text-blue-500"
        >twitter</a
      > I'm always happy to meet with new people
    </p>
  </div>
</section>
