<!-- https://static01.nyt.com/newsgraphics/2019/10/23/turkey-syria-video-upload/71ab097907156ca46fb7ffd4d21dfbd119fb47e8/syria-turkey-reconstruct-7-1600.mp4 -->
<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/dist/ScrollTrigger';
  export let src = '';
  export let size = 'normal';
  export let startOffset = 0.1;

  let time = 0;

  let duration = 0;
  let videoEl, scrollerEl;
  let tl;

  function once(el, event, fn, opts) {
    var onceFn = function (e) {
      el.removeEventListener(event, onceFn);
      fn.apply(this, arguments);
    };
    el.addEventListener(event, onceFn, opts);
    return onceFn;
  }

  onMount(() => {
    videoEl.onloadeddata = (event) => {
      console.log('video loaded');
    };

    once(document.documentElement, 'touchstart', function (e) {
      videoEl.play();
      videoEl.pause();
    });

    gsap.registerPlugin(ScrollTrigger);

    tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: scrollerEl,
        start: 'top bottom',
        end: 'bottom top',
        markers: true,
        scrub: true,
      },
    });

    once(videoEl, 'loadedmetadata', () => {
      tl.fromTo(
        videoEl,
        {
          currentTime: 0,
        },
        {
          currentTime: videoEl.duration || 1,
        }
      );
    });
  });

  $: console.log(time);
</script>

<!-- https://codepen.io/melo07/pen/Jjozjgw -->


<section class="video-onscroll graphic {size}">
  <div class="wrapper">
    <div class="video">
      <video
        bind:this="{videoEl}"
        preload="auto"
        playsinline
        bind:duration
        muted
        src="{src}"
        type="video/mp4"></video>
    </div>
    <div class="scroller" bind:this="{scrollerEl}"></div>
  </div>
</section>

<style lang="scss">
  .wrapper {
    position: relative;
  }
  .video {
    position: sticky;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    video {
      width: 100%;
    }
  }
  .scroller {
    height: 100vh;
    outline: 1px solid red;
  }
</style>
