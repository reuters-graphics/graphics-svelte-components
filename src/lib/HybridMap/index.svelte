<script>
  /* This component creates a basic setup to use a D3 map with ai2svelte basemap */

  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import setExtents from './setExtents';

  // Map extents from QGIS as x1, y1, x2, y2
  export let qgisExtents = [];
  export let bboxPrecision = 10;

  export let showLoader = true;
  export let loaderMessage = 'Loading map...';

  export let size = 'normal';
  export let artboardAspect = 1.5;
  export let customMaxWidth = false;

  export let aiBasemap;
  export let d3Map;

  export let ariaHidden = true;
  export let ariaDescription = null;

  if (ariaHidden && !ariaDescription) {
    console.warn(
      'Must provide aria description for ai2svelte components if ariaHidden is true.'
    );
  }

  let bbox = setExtents(...qgisExtents, bboxPrecision);

  let windowWidth, windowHeight;
  let loaded = false;

  onMount(() => {
    loaded = true;
  });
</script>

<svelte:window
  bind:innerWidth="{windowWidth}"
  bind:innerHeight="{windowHeight}"
/>

<section
  class="graphic wrapper {size}"
  class:customMaxWidth
  style="--maxWidth:{Math.round(windowHeight * artboardAspect)}px"
>
  <!-- Loading spinner -->
  {#if showLoader}
    <div class="map-loader" transition:fade>
      <div class="loader__inner">
        <div class="loader__content">
          {loaderMessage}<span class="spinner mx-auto"></span>
        </div>
      </div>
    </div>
  {/if}

  <!-- Basemap ai2svelte goes here -->
  <div class="base-map">
    <svelte:component this="{aiBasemap}" />
  </div>

  <!-- D3 map goes here -->
  {#if loaded}
    <div class="d3-map">
      <svelte:component this="{d3Map}" bind:loading="{showLoader}" bind:bbox />
    </div>
  {/if}
</section>

<style lang="scss">
  .wrapper {
    position: relative;

    &.customMaxWidth {
      max-width: var(--maxWidth);

      section.graphic {
        max-width: var(--maxWidth);
      }
    }
  }

  .d3-map {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
  }

  .base-map {
    opacity: 1;
    pointer-events: none;
  }

  .map-loader {
    position: absolute;
    width: 100%;
    z-index: 200;
    height: 110%;
    background-color: rgba(255, 255, 255, 0.55);

    .loader__inner {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .loader__content {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .spinner {
      width: 3rem;
      height: 3rem;
      display: block;
      border-width: 3px;
      border-color: #333;
      border-top-color: #fff;
      animation: spin 1s infinite linear;
      border-radius: 100%;
      border-style: solid;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
