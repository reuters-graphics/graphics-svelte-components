<script>
  /* This component wraps ai2svelte graphics. */
  export let AiGraphic;
  export let id = '';
  export let ariaHidden = 'true';

  // normal, wide, wider, widest or fluid
  export let size = 'normal';
  export let onAiMounted = () => {};

  // Make ariaHidden all lowercase
  ariaHidden = ariaHidden.toLocaleLowerCase();
</script>

<section class="ai2svelte-container graphic {size}" id="{id}">
  {#if $$slots.title}
    <slot name="title" />
  {/if}
  {#if $$slots.srDescription}
    <slot name="srDescription" />
  {/if}
  <div class="ai-wrapper" aria-hidden="{ariaHidden}">
    <svelte:component this="{AiGraphic}" onAiMounted="{onAiMounted}" />
  </div>
  {#if $$slots.notes}
    <slot name="notes" />
  {/if}
</section>
