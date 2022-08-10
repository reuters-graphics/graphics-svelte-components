<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // Don't lose the "?raw" in markdown imports!
  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import customLayoutsDocs from './stories/docs/customLayouts.md?raw';

  import Section from './Section.svelte';
  import Article from '../Article/Article.svelte';

  import { withComponentDocs, withStoryDocs } from '$docs/utils/withParams.js';

  const meta = {
    title: 'Layout/Section',
    component: Section,
    ...withComponentDocs(componentDocs),
    // https://storybook.js.org/docs/svelte/essentials/controls
    argTypes: {
      width: {
        control: 'select',
        options: ['narrower', 'narrow', 'normal', 'wide', 'wider', 'widest', 'fluid'],
      },
    },
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Article id="section-demo-article">
    <div class="article-boundaries">
      <div class="label">Article</div>
      <Section {...args}>
        <div class="label">Section</div>
      </Section>
    </div>
  </Article>
</Template>

<Story
  name="Basic"
  args="{{
    width: 'normal',
  }}"
/>

<Story name="Custom layouts" {...withStoryDocs(customLayoutsDocs)}>
  <Section width="fluid">
    <!-- Enter bootstrap grid! -->
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col">
          Column
        </div>
        <div class="col-6">
          Column
        </div>
        <div class="col">
          Column
        </div>
      </div>
      <div class="row">
        <div class="col">
          Column
        </div>
        <div class="col">
          Column
        </div>
      </div>
    </div>
  </Section>
</Story>


<style lang="scss">
  :global {
    #section-demo-article {
      background-color: #ddd;
      position: relative;
      width: calc(100% + 30px);
      margin-left: -15px;
      
      .article-boundaries {
        padding: 0 0 18px;
        width: 100%;
        height: 100%;
        background-color: #bbb;
      }

      section {
        height: 100px;
        background: #81a1c1;
      }
      .label {
        padding-left: 3px;
        color: white;
      }
    }
  }

  div.container-fluid {
    padding: 25px 0;
    div.row > div {
      background-color: rgb(211, 132, 123);
      border: 1px solid white;
      border-radius: 4px;
      padding: 20px;
      color: white;
    }
    div.row:first-child {
      div {
        background: #81a1c1;
      }
    }
  }
</style>