<script>
  export let src = '';
  export let size = 'wide';

  let scrollY;
  let time;
  let duration;

  $: {
    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    time = duration * (scrollY / totalScroll);
  }
</script>

<svelte:window bind:scrollY />

<section class="video-onscroll graphic {size}">
  <div class="video-wrapper">
    <video
      bind:currentTime="{time}"
      bind:duration
      preload="metadata"
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
