<script>
  import { assets } from '$app/paths';
  import LoremIpsum from './loremIpsum.svelte';
  import { onMount } from 'svelte';
  import Scroller from '@sveltejs/svelte-scroller';

  export let src = '';
  export let id = '';
  export let ariaHidden = true;
  export let ariaDescription = null;
  // normal, wide, wider, widest or fluid
  export let size = 'normal';

  if (ariaHidden && !ariaDescription) {
    console.warn(
      'Must provide aria description for video components if ariaHidden is true.'
    );
  }

  // Custom video props
  export let loop = false;
  // These values are bound to properties of the video
  let time = 0;
  let duration;
  let paused = true;
  $: resetCondition = time >= duration - 0.1;

  // Scroller parameters
  let index; // int index of currently active foreground DOM element
  let offset; // float offset of currently active foreground DOM element - 0 to 1 value
  let progress; // float how far along the whole scrolly we currently are - 0 to 1 value
  let count; // int total num steps (=DOM elements) of the foreground

  // The vertical position that the top of the foreground must scroll past before the background becomes fixed, as a proportion of window height
  // think of it as the position in the viewport that the background 'starts' at i.e. the top of the background is at that position while the foreground is scrolling on top of it; best to keep it at 0 so it starts from the top and give the [slot="background"] a height: 100vh
  const top = 0;
  // Once the bottom of the foreground passes this point, the background becomes unfixed
  // Best to just keep it at 1 to avoid the background becoming unfixed and scrolling over other elements down the page unintentionally
  const bottom = 1;
  // Once a foreground step is this much visible in viewport, it becomes 'active'
  const threshold = 0.5;
</script>

<section class="video-container graphic {size}" id="{id}">
  <Scroller
    top="{top}"
    bottom="{bottom}"
    threshold="{threshold}"
    bind:index
    bind:offset
    bind:progress
    bind:count
  >
    <div slot="background">
      <div class="background-container">
        <p>
          This is the background content. It will stay fixed in place while the
          foreground scrolls over the top.
        </p>
        <p>
          <span>Index: </span>{index}, i.e. section #{index} is currently active
        </p>
        <p><span>Offset:</span> {offset}</p>
        <p><span>Progress:</span> {progress}</p>
        <p><span>Count:</span> {count}</p>
      </div>
    </div>
    <div slot="foreground">
      <section></section>
    </div>
  </Scroller>

  {#if (ariaHidden && (ariaDescription || $$slots.hidden)) || !ariaHidden}
    {#if $$slots.title}
      <slot name="title" />
    {/if}
    {#if ariaDescription}
      <p class="visually-hidden">{ariaDescription}</p>
    {/if}
    {#if $$slots.hidden}
      <div class="visually-hidden custom">
        <slot name="hidden" />
      </div>
    {/if}
    {#if $$slots.notes}
      <slot name="notes" />
    {/if}

    <!-- Video Controls -->
    <LoremIpsum />
    <LoremIpsum />
    <LoremIpsum />

    <!-- Video element -->
    <div class="video-wrapper" aria-hidden="{ariaHidden}">
      <button
        on:click="{() => {
          paused === true ? (paused = false) : (paused = true);
        }}"
      >
        {resetCondition ? 'replay' : paused === false ? 'stop' : 'play'}
      </button>
      <video
        src="{`${assets}/${src}`}"
        width="100%"
        muted
        playsinline
        preload="metadata"
        loop="{loop}"
        bind:currentTime="{time}"
        bind:duration
        bind:paused
      >
        <track kind="captions" />
      </video>
    </div>
  {/if}
</section>

<style lang="scss">
  // Make the wrapper taller for intersection observer
  .video-wrapper {
    position: relative;
    button {
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
    }
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

  /* 	Background */
  [slot='background'] {
    border-top: 10px solid black;
    border-bottom: 10px solid black;
    background-color: none;
    height: 100vh;
    margin: auto;
    display: flex; /* to centrally position the content inside the background */
    justify-content: center;
    align-items: center;
  }
  [slot='background'] .background-container {
    background-color: pink;
    overflow: hidden;
    padding: 1em;
    height: 500px;
    max-width: 700px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  /* 	Foreground */
  [slot='foreground'] {
    pointer-events: none;
  }

  [slot='foreground'] section {
    pointer-events: all;
    height: 200vh;
    width: 200px;
    background-color: rgba(pink, 0.5);
    color: white;
    padding: 0;
    margin: 30px auto;
  }

  // section div {
  // 	width: 100%;
  // 	background-color: white;
  // 	color: purple;
  // 	border: 3px solid purple;
  // 	padding: 15px;
  // 	font-size: 1.2rem;
  // }
</style>
