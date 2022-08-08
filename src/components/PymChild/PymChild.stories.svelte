<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import PymChild from './PymChild.svelte';

  import {
    withComponentDocs
  } from '$docs/utils/withParams';

  const meta = {
    title: 'Utilities/PymChild',
    component: PymChild,
    ...withComponentDocs(componentDocs),
  };
</script>

<Meta {...meta} />

<Template let:args>
  <PymChild {...args} />
</Template>

<Story
  name="Default"
/>
