<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import Sharer from './Sharer.svelte';

  import {
    withComponentDocs
  } from '$docs/utils/withParams';

  const meta = {
    title: 'Utilities/Sharer',
    component: Sharer,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Sharer {...args} />
</Template>

<Story
  name="Default"
/>
