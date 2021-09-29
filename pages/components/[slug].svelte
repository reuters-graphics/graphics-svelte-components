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
  import { onMount, afterUpdate } from 'svelte';
  import { SEO } from '$lib';
  import Nav from '$lib/_docs/Nav/index.svelte';
  import Menu from '$lib/_docs/Menu/index.svelte';

  import '$lib/_docs/styles/main.scss';

  export let metadata;

  let Docs;

  onMount(async () => {
    Docs = (await import(`../../src/lib/${metadata.path}/docs.svx`)).default;
  })
  afterUpdate(async () => {
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

<Nav>
  <div class='breadcrumb font-display'>
    > <span>{metadata.title}</span>
  </div>
</Nav>
<Menu {components} />

<svelte:component this={Docs}>
</svelte:component>


<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  @import '~@reuters-graphics/style-main/scss/fonts/font-faces';
  @import "~@reuters-graphics/style-main/scss/fonts/mixins";
  :global {
    @import '@reuters-graphics/style-theme-eisbaer/scss/main';
    body {
      background-color: #eee;
    }
    p {
      @include font-sans;
      font-weight: 200;
    }
  }
  

  div.breadcrumb {
    line-height: 43px;
    padding-left: 10px;
    font-weight: 200;
    span{
      margin-left: 12px;
    }
  }
</style>
