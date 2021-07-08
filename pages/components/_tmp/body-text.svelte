<script>
  import { SEO } from '$lib';
  import Nav from '$lib/_docs/Nav/index.svelte';

  import Docs, { metadata } from '$lib/BodyText/docs.svx';
  import '$lib/_docs/styles/main.scss';
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
<Docs />



<style lang="scss">
  @import '~@reuters-graphics/style-main/scss/fonts/font-faces';
  :global {
    @import '@reuters-graphics/style-theme-eisbaer/scss/main';
  }
</style>
