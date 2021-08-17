<script>
  export let headline = 'Reuters Graphics Interactive';
  export let deck;
  export let section;
  export let sectionColour = 'red';
</script>

<section class="headline">
  <slot name="crown"></slot>
  <div class="title">
    {#if section}
      <p class={`section-title color-${sectionColour}`}>{section}</p>
    {/if}
    <h2>{headline}</h2>
    {#if deck}
      <p>{deck}</p>
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
  p {
    margin: 0;
  }
  aside.article-metadata {
    padding: 10px 0;
    .byline-container {
      margin-bottom: 0;
    }
    .dateline-container {
      margin-top: 2px;
    }
  }
</style>

