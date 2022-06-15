<script>
  import { assets } from '$app/paths';
  import urljoin from 'proper-url-join';
  import IntersectionObserver from 'svelte-intersection-observer';
  import Controls from './Controls.svelte';

  /// //////////////////////////////////
  /// /////////// Props ////////////////
  /// //////////////////////////////////
  export let src = '';
  export let ariaHidden = true;
  export let ariaDescription = null;
  export let caption = '';

  export let size = 'normal'; // normal, wide, wider, widest or fluid
  export let preloadVideo = 'auto'; // preload the video by default; this is ignored if autoplay is true; can also be none or metadata
  export let loopVideo = true; // whether the video should loop
  export let muteVideo = true; // whther video should have sound or not
  export let playVideoWhenInView = true; // whether the video should play when it comes into view or just on page load
  export let playVideoThreshold = 0.5; // if video plays with intersection observer, how much of it should be into view to start playing
  export let possibleToPlayPause = true; // whether to have the option to pause and play video
  export let showControls = true; // whetner to show the play / pause buttons
  export let separateReplyIcon = false; // whether to use a separate replay icon or use the play icon for replay as well
  export let controlsColour = '#333'; // change the colour of the play/pause button
  export let controlsOpacity = 0.5; // change the opacity of the play/pause button
  export let controlsPosition = 'top left'; // have four options for controls position - top right, top left, bottom right, bottom left

  /// //////////////////////////////////
  /// /////// Internal Logic ///////////
  /// //////////////////////////////////
  // Internal props
  let time = 0;
  let duration;
  let paused = true;
  $: resetCondition = time >= duration; // - 0.1;

  // Dimensions etc other useful things
  let heightVideo;
  let widthVideo;
  let heightVideoContainer;
  let widthVideoContainer;
  const controlsBorderOffset = 50;

  // For intersection observer
  let intersecting;
  let element;
  let videoElement;

  // Play the video if it's intersecting; pause when it's no longer intersecting
  $: if (playVideoWhenInView && intersecting && muteVideo) paused = false; // You will have to manually click on video to play if it has sound
  $: if (playVideoWhenInView && !intersecting) paused = true;

  $: if (!possibleToPlayPause) showControls = true;

  // To get the pause state passed up from the Controls
  const pausePlayEvent = (e) => {
    const result = e.detail.text;
    paused = result;
  };

  // Warining to missing aria attributes
  if (ariaHidden && !ariaDescription) {
    console.warn(
      'Must provide aria description for video components if ariaHidden is true.'
    );
  }
</script>

<section class="video-container graphic {size}">
  {#if (ariaHidden && ariaDescription) || !ariaHidden}
    {#if ariaDescription}
      <p class="visually-hidden">{ariaDescription}</p>
    {/if}

    {#if playVideoWhenInView}
      <!-- Video element with Intersection Observer -->
      <IntersectionObserver
        element="{element}"
        bind:intersecting
        threshold="{playVideoThreshold}"
        once="{false}"
      >
        <div
          bind:this="{element}"
          class="video-wrapper"
          aria-hidden="{ariaHidden}"
          bind:clientWidth="{widthVideoContainer}"
          bind:clientHeight="{heightVideoContainer}"
        >
          {#if possibleToPlayPause}
            {#if showControls}
              <Controls
                on:pausePlayEvent="{pausePlayEvent}"
                paused="{paused}"
                controlsOpacity="{controlsOpacity}"
                controlsPosition="{controlsPosition}"
                widthVideoContainer="{widthVideoContainer}"
                heightVideoContainer="{heightVideoContainer}"
                controlsBorderOffset="{controlsBorderOffset}"
                resetCondition="{resetCondition}"
                separateReplyIcon="{separateReplyIcon}"
                controlsColour="{controlsColour}"
              />
            {:else}
              <button
                on:click="{() => {
                  paused === true ? (paused = false) : (paused = true);
                }}"
                style="top: 0; left: 0; width: {widthVideoContainer}px; height: {heightVideoContainer}px;"
              ></button>
            {/if}
          {/if}
          <video
            bind:this="{videoElement}"
            src="{urljoin(assets, src)}"
            width="100%"
            muted="{muteVideo}"
            playsinline
            preload="{preloadVideo}"
            loop="{loopVideo}"
            bind:currentTime="{time}"
            bind:duration
            bind:paused
            bind:clientWidth="{widthVideo}"
            bind:clientHeight="{heightVideo}"
            style="{showControls
              ? 'position: relative'
              : 'position: absolute; top: 0; left: 0;'}"
          >
            <track kind="captions" />
          </video>
        </div>
      </IntersectionObserver>
    {:else}
      <!-- Video element without Intersection observer -->
      <div
        class="video-wrapper"
        aria-hidden="{ariaHidden}"
        bind:clientWidth="{widthVideoContainer}"
        bind:clientHeight="{heightVideoContainer}"
      >
        {#if possibleToPlayPause}
          {#if showControls}
            <Controls
              on:pausePlayEvent="{pausePlayEvent}"
              paused="{paused}"
              controlsOpacity="{controlsOpacity}"
              controlsPosition="{controlsPosition}"
              widthVideoContainer="{widthVideoContainer}"
              heightVideoContainer="{heightVideoContainer}"
              controlsBorderOffset="{controlsBorderOffset}"
              resetCondition="{resetCondition}"
              separateReplyIcon="{separateReplyIcon}"
              controlsColour="{controlsColour}"
            />
          {:else}
            <button
              on:click="{() => {
                paused === true ? (paused = false) : (paused = true);
              }}"
              style="top: 0; left: 0; width: {widthVideoContainer}px; height: {heightVideoContainer}px;"
            ></button>
          {/if}
        {/if}
        <video
          bind:this="{videoElement}"
          src="{urljoin(assets, src)}"
          width="100%"
          muted="{muteVideo}"
          playsinline
          preload="{preloadVideo}"
          loop="{loopVideo}"
          bind:currentTime="{time}"
          bind:duration
          bind:paused
          autoplay
          bind:clientWidth="{widthVideo}"
          bind:clientHeight="{heightVideo}"
          style="{showControls
            ? 'position: relative'
            : 'position: absolute; top: 0; left: 0;'}"
        >
          <track kind="captions" />
        </video>
      </div>
    {/if}
    {#if caption}
      <figcaption>{caption}</figcaption>
    {/if}
  {/if}
</section>

<style lang="scss">
  .video-wrapper {
    position: relative;
    video {
      pointer-events: none;
    }
  }
  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    white-space: nowrap !important;
    border: 0 !important;
  }
  figcaption {
    font-size: 0.8rem;
    color: #666666;
  }
</style>
