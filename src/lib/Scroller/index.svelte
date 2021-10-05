<script>
  /* This component wraps a scroller for ai2svelte graphics. */
  import Scroller from '@sveltejs/svelte-scroller';
  import Background from './Background.svelte';
  import Foreground from './Foreground.svelte';

  export let id = '';
  export let steps = [];

  // normal, wide, wider, widest or fluid
  export let backgroundSize = 'fluid';

  // middle, left, right, left opposite or right opposite
  export let foregroundPosition = 'middle';
  export let preload = 1;

  // Passed to svelte-scroller
  export let threshold = 0.5;
  export let top = 0;
  export let bottom = 1;
  export let parallax = false;

  // Embed options
  export let embedded;

  let index = 0;
  let offset, progress;
</script>

{#if !embedded}
  <section class="scroller-container fluid" id="{id}">
    <Scroller
      bind:index
      bind:offset
      bind:progress
      threshold="{threshold}"
      top="{top}"
      bottom="{bottom}"
      parallax="{parallax}"
      query="{'section.step-foreground-container'}"
    >
      <div
        slot="background"
        class="background"
        class:right="{foregroundPosition === 'left opposite'}"
        class:left="{foregroundPosition === 'right opposite'}"
      >
        <div class="scroller-graphic-well">
          <section
            class="background-container graphic {backgroundSize}"
            step="{index + 1}"
          >
            <Background
              index="{index}"
              steps="{steps}"
              preload="{preload}"
              embedded="{embedded}"
            />
          </section>
        </div>
      </div>

      <div slot="foreground" class="foreground {foregroundPosition}">
        <Foreground steps="{steps}" />
      </div>
    </Scroller>
  </section>
{:else}
  <Background
    index="{index}"
    steps="{steps}"
    preload="{preload}"
    embedded="{embedded}"
  />
{/if}

<style lang="scss">
  .scroller-container {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  div.background {
    min-height: 100vh;
    position: relative;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  div.background.left {
    width: 100%;
    float: left;
  }
  @media (max-width: 1200px) {
    div.background.left {
      justify-content: center;
      float: initial;
    }
  }
  div.background.right {
    width: 100%;
    float: right;
  }
  @media (max-width: 1200px) {
    div.background.right {
      justify-content: center;
      float: initial;
    }
  }
  div.background div.scroller-graphic-well {
    padding: 0 15px;
    width: 100%;
  }
  div.background
    div.scroller-graphic-well
    section.graphic.background-container {
    margin-top: 0;
    margin-bottom: 0;
    min-height: 100vh;
    display: flex;
    // justify-content: center;
    margin-left: 0;
    align-items: center;
    position: relative;
  }
  div.background
    div.scroller-graphic-well
    section.graphic.background-container.fluid {
    margin: 0 0 0 -15px;
  }

  div.foreground {
    width: 100%;
  }
  div.foreground.right {
    width: 50%;
    float: right;
  }
  @media (max-width: 1200px) {
    div.foreground.right {
      width: 100%;
      float: initial;
    }
  }
  div.foreground.left {
    width: 50%;
    float: left;
  }
  @media (max-width: 1200px) {
    div.foreground.left {
      width: 100%;
      float: initial;
    }
  }
</style>
