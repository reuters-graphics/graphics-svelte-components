<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';
  // @ts-ignore
  import defaultSnippet from './stories/snippets/default.svelte?raw';

  import Visible from './Visible.svelte';

  import {
    withSource,
    withComponentDocs
  } from '$docs/utils/withParams';

  const meta = {
    title: 'Utilities/Visible',
    component: Visible,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Visible {...args} let:visible>
    {#if visible}
      <p>Visible!</p>
    {:else}
      <p>Not yet visible.</p>
    {/if}
  </Visible>
</Template>

<Story
  name="Default"
  {...withSource({ svelte: defaultSnippet })}
/>
