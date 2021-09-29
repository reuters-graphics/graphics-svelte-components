<script>
  import { onMount } from 'svelte';

  export let componentName;
  export let component = null;
  export let id;
  export let size;

  let Ai2svelteGraphic = component;

  onMount(async () => {
    // Allow passing the component directly as a prop
    if (Ai2svelteGraphic) return;
    try {
      Ai2svelteGraphic = (await import(`./ai2html/${componentName}.svelte`)).default;
    } catch (e) {
      console.log(`Unable to load ai2svelte component at: ai2html/${componentName}.svelte.`, e);
    }
  });
</script>

<section class="ai2svelte graphic {size}" id="{id}">
  {#if $$slots.title}
    <slot name="title" />
  {/if}

  <svelte:component this="{Ai2svelteGraphic}" />

  {#if $$slots.notes}
    <slot name="notes" />
  {/if}
</section>
