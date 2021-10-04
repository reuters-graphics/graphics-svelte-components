<script>
  import { onMount } from 'svelte';
  import AnimationMaker from './AnimationMaker.js';
  import marked from 'marked';
  export let id;
  export let blurbs = '';
  export let playbackConst = '75';
  export let withRatio = 1.78;
  export let fullFrame = 'false';
  export let includeSmall = 'false';
  export let smallWidthRatio = 1;

  onMount(() => {
    const lottieObject = new AnimationMaker({
      id: id,
      blurbs: blurbs,
      playbackConst: playbackConst,
      widthRatio: Number(withRatio),
      fullFrame: fullFrame === 'true',
      includeSmall: includeSmall === 'true',
      smallWidthRatio: Number(smallWidthRatio),
    });
  });
</script>

<div id="lottie-{id}" class="lottie-target">
  <div class="lottie-container" data-id="{id}">
    <div class="canvas-holder">
      <canvas id="{id}"></canvas>
    </div>
    <div class="scroll-trigger">
      {#each blurbs as blurb}
        <div class="blurb" seconds="{blurb.seconds}">
          {@html marked(blurb.text)}
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .blurb {
    max-width: 550px;
    width: 90%;
    padding: 1rem 2.5rem 1rem 2.5rem;
    font-size: 1.2rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: rgba(255, 255, 255, 0.8);
  }

  .lottie-container {
    width: calc(100% + 30px);
    margin-left: -15px;
    max-width: none;
    position: relative;
  }

  :global(.lottie-container.stuck) {
    padding-top: 100vh;
    .canvas-holder {
      position: fixed;
      top: 0;
    }
  }
  :global(.lottie-container.un-stuck) {
    padding-top: 0px;
    padding-bottom: 100vh;
    .canvas-holder {
      position: absolute;
      top: auto;
      bottom: 0px;
    }
  }

  .canvas-holder {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    canvas {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .scroll-trigger {
    position: relative;
  }
</style>
