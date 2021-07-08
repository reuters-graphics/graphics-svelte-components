<script context="module">
  import components from '@component-docs';

  export async function load({ page }) {
    const metadata = components.find(c => c.slug === page.params.slug);
    return {
      props: {
        metadata,
      }
    };
  };
</script>

<script>
  import { onMount } from 'svelte';
  import { SEO } from '$lib';
  import Nav from '$lib/_docs/Nav/index.svelte';

  import '$lib/_docs/styles/main.scss';

  export let metadata;

  let Docs;

  onMount(async () => {
    Docs = (await import(`../../src/lib/${metadata.path}/docs.svx`)).default;
  })
</script>

<SEO
  seoTitle={`Reuters Graphics components - ${metadata.title}`}
  seoDescription={metadata.description}
  shareTitle={`Reuters Graphics components - ${metadata.title}`}
  shareDescription={metadata.description}
  shareImgPath="images/reuters-graphics.jpg"
  lang="en"
  hostname="reuters-graphics.github.io"
/>

<Nav />

<svelte:component this={Docs}>
</svelte:component>



<style lang="scss">
  @import '~@reuters-graphics/style-main/scss/fonts/font-faces';
  :global {
    @import '@reuters-graphics/style-theme-eisbaer/scss/main';
  }
</style>
