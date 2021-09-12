<script>
  export let hed = 'Reuters Graphics Interactive';
  export let dek;
  export let section;
  export let sectionColour = 'red';
</script>

<section class="headline">
  <slot name="crown"></slot>
  <div class="title">
    {#if section}
      <p class={`section-title color-${sectionColour}`}>{section}</p>
    {/if}
    {#if $$slots.hed}
      <slot name="hed"></slot>
    {:else}
      <h2>{hed}</h2>
    {/if}
    {#if dek}
      <p>{dek}</p>
    {/if}
  </div>
  {#if ($$slots.byline || $$slots.dateline)}
    <aside class="article-metadata">
      {#if $$slots.byline}
        <div class="byline-container">
          <div class="byline">
            <slot name="byline"></slot>
          </div>
        </div>
      {/if}
      {#if $$slots.dateline}
        <div class="dateline-container">
          <div class="published">
            <slot name="dateline"></slot>
          </div>
        </div>
      {/if}
    </aside>
  {/if}
</section>

<style lang="scss">
</style>

