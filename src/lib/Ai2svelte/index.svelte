<script>
  /* This component wraps ai2svelte graphics. */
  import { assets } from '$app/paths';

  export let AiGraphic;
  export let id = '';
  // normal, wide, wider, widest or fluid
  export let size = 'normal';
</script>

<section class="ai2svelte-container graphic {size}" id="{id}">
  {#if $$slots.title}
    <slot name="title" />
  {/if}

  <svelte:component this="{AiGraphic}" assets="{assets}" />

  {#if $$slots.notes}
    <slot name="notes" />
  {/if}
</section>
