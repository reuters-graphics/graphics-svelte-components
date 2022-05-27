<script>
  import { onMount } from 'svelte';
  export let src = '';
  export let size = 'normal';

  let scrollY;
  let time = 0;
  let duration = 0;
  let vid, vidSection;

  onMount(() => {
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
    time = +(duration * (scrollY / totalScroll)).toPrecision(6);
    console.log({ duration, time });
  }
</script>

<svelte:window bind:scrollY />

<section class="video-onscroll graphic {size}" bind:this="{vidSection}">
  <div class="video-wrapper">
    <video
      bind:this="{vid}"
      preload="metadata"
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
