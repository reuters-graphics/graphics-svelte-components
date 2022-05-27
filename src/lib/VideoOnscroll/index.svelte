<script>
  export let src = '';
  export let size = 'normal';

  let scrollY;
  let time;
  let duration;

  $: {
    const totalScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    time = duration * (scrollY / totalScroll);
    // time = +Number.parseFloat(duration * (scrollY / totalScroll)).toFixed(5);
    // console.log({ duration, time });
  }
</script>

<svelte:window bind:scrollY />

<section class="video-onscroll graphic {size}">
  <div class="video-wrapper">
    <video
      preload="metadata"
      bind:currentTime="{time}"
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
