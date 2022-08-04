<script>
  import * as lottie from 'lottie-web';
  import { onMount, afterUpdate } from 'svelte';
  import Scroller from '@sveltejs/svelte-scroller';

  export let lottieData;
  export let height = 10000;

  export let scrollerProgress;
  export let scrollerIndex;
  export let scrollerOffset;

  let lottieContainer;
  let animation;
  let durationSeconds = 0;
  let durationFrames = 0;
  let framesPerSecond = 0;
  let currentFrame = 0;
  let currentSeconds = 0;
  let animationFrame;

  onMount(() => {
    animation = lottie.loadAnimation({
      container: lottieContainer,
      renderer: 'canvas',
      loop: false,
      autoplay: false,
      animationData: lottieData,
      rendererSettings: {
        scaleMode: 'noScale',
        clearCanvas: true,
      },
    });
    durationSeconds = animation.getDuration(false);
    durationFrames = animation.getDuration(true);
    framesPerSecond = durationFrames / durationSeconds;
    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  });

  afterUpdate(() => {
    if (!animation) return;
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    const normalizedProgress = Math.min(Math.max(0, scrollerProgress), 1);
    const nextFrame = Math.round(normalizedProgress * durationFrames);
    currentFrame = animation.currentFrame;
    const stepToFrame = () => {
      if (currentFrame === nextFrame) return;
      if (nextFrame < currentFrame) {
        currentFrame -= 1;
      } else {
        currentFrame += 1;
      }
      currentSeconds = currentFrame * framesPerSecond;
      animation.goToAndStop(currentFrame, true);
      animationFrame = window.requestAnimationFrame(stepToFrame);
    };
    animationFrame = window.requestAnimationFrame(stepToFrame);
  });
</script>

<Scroller
  bind:progress="{scrollerProgress}"
  bind:index="{scrollerIndex}"
  bind:offset="{scrollerOffset}"
>
  <div class="background" slot="background">
    {#if $$slots['background:before']}
      <slot
        name="background:before"
        scrollerProgress="{scrollerProgress}"
        scrollerOffset="{scrollerOffset}"
        scrollerIndex="{scrollerIndex}"
        currentFrame="{currentFrame}"
        currentSeconds="{currentSeconds}"
        durationFrames="{durationFrames}"
        durationSeconds="{durationSeconds}"
      />
    {/if}
    <div bind:this="{lottieContainer}"></div>
  </div>
  <div class="foreground" slot="foreground" style="{`height: ${height}px;`}">
    <section></section>
  </div>
</Scroller>

<style lang="scss">
  div.background {
    height: 100vh;
    display: flex;
    position: relative;
    align-items: center;
  }
</style>
