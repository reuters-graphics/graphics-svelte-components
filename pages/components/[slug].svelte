<script context="module">
  import components from '@component-docs:components';

  export async function load({ params }) {
    const metadata = components.find((c) => c.slug === params.slug);
    return {
      props: {
        metadata,
      },
    };
  }
</script>

<script>
  import { onMount, afterUpdate } from 'svelte';
  import { SEO } from '$lib';
  import Nav from '$lib/_docs/Nav/index.svelte';
  import Menu from '$lib/_docs/Menu/index.svelte';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faCode } from '@fortawesome/free-solid-svg-icons/faCode.js';

  import '$lib/_docs/styles/main.scss';

  export let metadata;

  let Docs;

  onMount(async () => {
    Docs = (await import(`../../src/lib/${metadata.path}/docs.svx`)).default;
  });
  afterUpdate(async () => {
    Docs = (await import(`../../src/lib/${metadata.path}/docs.svx`)).default;
  });
</script>

<SEO
  seoTitle="{`Reuters Graphics components - ${metadata.title}`}"
  seoDescription="{metadata.description}"
  shareTitle="{`Reuters Graphics components - ${metadata.title}`}"
  shareDescription="{metadata.description}"
  shareImgPath="images/reuters-graphics.jpg"
  lang="en"
  hostname="reuters-graphics.github.io"
/>

<Nav>
  <div class="breadcrumb font-display">
    > <span>{metadata.title}</span>
    <a
      href="{`https://github.com/reuters-graphics/graphics-svelte-components/tree/master/src/lib/${metadata.path}/index.svelte`}"
      target="_blank"
      title="Source code"
    >
      <Fa fw icon="{faCode}" />
    </a>
  </div>
</Nav>
<Menu components="{components}" />

<svelte:component this="{Docs}" />

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  @import '~@reuters-graphics/style-main/scss/fonts/font-faces';
  @import '~@reuters-graphics/style-main/scss/fonts/mixins';
  :global {
    @import '@reuters-graphics/style-theme-eisbaer/scss/main';
    body {
      background-color: #eee;
    }
    p,
    ul > li,
    ol > li {
      @include font-sans;
      font-weight: 200;
    }
    ul {
      margin-bottom: 1.5rem;
    }
    li {
      font-size: 1rem;
    }

    p > code,
    li > code {
      background: #ccc;
      padding: 1px 4px;
      border: 1px solid #aaa;
      border-radius: 4px;
      font-size: 1rem;
    }
  }

  div.breadcrumb {
    line-height: 43px;
    padding-left: 10px;
    font-weight: 200;
    span {
      margin-left: 12px;
      font-size: 1.2rem;
      line-height: 1rem;
    }
    a {
      margin-left: 5px;
      font-size: 1rem;
      line-height: 1rem;
      color: #999;
      &:hover {
        color: #3182bd;
      }
    }
  }
</style>
