<script>
  /* This component wraps ai2svelte graphics. */
  export let AiGraphic;
  export let id = '';
  // normal, wide, wider, widest or fluid
  export let size = 'normal';
  export let onAiMounted = () => {};
</script>

<section class="ai2svelte-container graphic {size}" id="{id}">
  {#if $$slots.title}
    <slot name="title" />
  {/if}

  <svelte:component this="{AiGraphic}" onAiMounted="{onAiMounted}" />

  {#if $$slots.notes}
    <slot name="notes" />
  {/if}
</section>
