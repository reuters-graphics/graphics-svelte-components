<script>
  import { SEO } from '$lib';
  import Nav from '$lib/_docs/Nav/index.svelte';
  import '$lib/_docs/styles/main.scss';
  import { base } from '$app/paths';
  import Cog from '$lib/_docs/Cog/index.svelte';

  import components from '@component-docs';
</script>

<SEO
  seoTitle="Reuters Graphics components"
  seoDescription="Svelte tools to build graphics pages"
  shareTitle="Reuters Graphics components"
  shareDescription="Svelte tools to build graphics pages"
  shareImgPath="images/reuters-graphics.jpg"
  lang="en"
  hostname="reuters-graphics.github.io"
/>

<Nav />

<article>
  <section>
    <h1><Cog/> Components</h1>

    <ul>
      {#each components as component}
        {#if (component.title && component.slug)}
          <li><a href="{`${base}/components/${component.slug}/`}">{component.title}</a></li>
        {/if}
      {/each}
    </ul>
  </section>
  
</article>



<style lang="scss">
  @import '~@reuters-graphics/style-main/scss/fonts/font-faces';
  @import "~@reuters-graphics/style-main/scss/fonts/mixins";
  :global {
    @import '@reuters-graphics/style-theme-eisbaer/scss/main';
    body {
      background-color: #eee;
    }
  }

  h1 {
    text-align: center;
    font-weight: 200;
    text-transform: uppercase;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    overflow: hidden;
    flex-wrap: wrap;

    li{
      display: inline-block;
      position: relative; 
      @include font-sans;
      padding: 5px 10px;
      font-size: 1.2rem;
      margin: 0 7px;
      a {
        color: #333;
        font-weight: 200;
      }
    }
  }
</style>
