<script>
  import { onMount } from 'svelte';

  export let path;
  export let id;
  export let size;

  let Ai2svelteGraphic = null;

  onMount(async () => {
    try {
      Ai2svelteGraphic = (await import(`./ai2html/${path}.svelte`)).default;
    } catch (e) {
      console.log(`Unable to load ai2svelte component at: ${path}.`, e);
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
