<!-- https://codepen.io/melo07/pen/Jjozjgw -->
<script>
  import { onMount } from 'svelte';
  export let src = '';
  export let size = 'normal';

  let scrollY;
  let time = 0;
  let duration = 0;
  let vid, vidSection;

  onMount(() => {
    vid.onloadeddata = (event) => {
      console.log('video loaded');
    };
    function scrollPlay() {
      vid.currentTime = time;
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
  });

  $: {
    const totalScroll = vidSection
      ? vidSection.getBoundingClientRect().height
      : 1;
    time = +(duration * (scrollY / totalScroll));
    console.log({ duration, time });
  }
</script>

<!-- https://codepen.io/shshaw/pen/vYKBPbv/9e810322d70c306de2d18237d0cb2d78?editors=0010 -->


<svelte:window bind:scrollY />

<section class="video-onscroll graphic {size}" bind:this="{vidSection}">
  <div class="video-wrapper">
    <video
      bind:this="{vid}"
      preload="auto"
      playsinline
      bind:duration
      muted
      src="{src}"
      type="video/mp4"></video>
  </div>
</section>

<style lang="scss">
  video {
    width: 100%;
  }
</style>
