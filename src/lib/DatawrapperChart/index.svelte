<script>
  import { onMount } from 'svelte';
  export let title = 'My title';
  export let ariaLabel = 'Arial label';
  export let id = 'id';
  export let src = '';
  export let scrolling = 'no';
  export let size = 'normal'; // options: wide, wider, widest, fluid

  onMount(() => {
    if (window) {
      // eslint-disable-next-line no-unused-expressions
      !(function () {
        'use strict';
        window.addEventListener('message', function (e) {
          if (void 0 !== e.data['datawrapper-height']) {
            const t = document.querySelectorAll('iframe');
            for (const a in e.data['datawrapper-height']) {
              for (let r = 0; r < t.length; r++) {
                if (t[r].contentWindow === e.source) {
                  t[r].style.height = e.data['datawrapper-height'][a] + 'px';
                }
              }
            }
          }
        });
      })();
    }
  });
</script>

<section class="graphic {size}">
  {#if $$slots.title}
    <div class="chatter-container">
      <slot name="title" />
    </div>
  {/if}

  <div class="datawrapper-chart">
    <iframe
      title="{title}"
      aria-label="{ariaLabel}"
      id="{id}"
      src="{src}"
      scrolling="{scrolling}"
      frameborder="0"
      style="width: 0; min-width: 100% !important; border: none;"></iframe>
  </div>

  {#if $$slots.notes}
    <div class="chatter-container">
      <slot name="notes" />
    </div>
  {/if}
</section>

<style lang="scss">
  @import '~@reuters-graphics/style-theme-eisbaer/scss/components/containers/widths';
  .chatter-container {
    @extend .well;
  }
  .datawrapper-chart {
    margin: auto;
  }
</style>
