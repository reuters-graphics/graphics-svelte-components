<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

  // @ts-ignore
  import componentDocs from './stories/docs/component.md?raw';

  import ReutersLogo from './ReutersLogo.svelte';

  import {
    withComponentDocs
  } from '$docs/utils/withParams';

  const meta = {
    title: 'Components/ReutersLogo',
    component: ReutersLogo,
    ...withComponentDocs(componentDocs),
    argTypes: {
      logoColour: { control: 'color' },
      textColour: { control: 'color' },
    }
  };
</script>

<Meta {...meta} />

<Template let:args>
  <ReutersLogo {...args} />
</Template>

<Story
  name="Default"
/>
