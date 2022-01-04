<script>
  /*
  Ticks through images with a dot indicator on top
  Example: https://www.dropbox.com/s/clzcs8bwzm5lw3o/ImageTicker.mp4?dl=0
  @props
    fNames: array of objects with following properties:
    [
      {
        path: 'path/to/file',
        label: 'Label for the top of the ticker'
      },
      ...
    ]
    interval: number - the time between ticks in milliseconds
    width: string - body-text|wide|wider|fluid
    control: string - "autoplay" | "button"
  */

  export let fNames = [];
  export let width = 'body-text';
  export let interval = 1500;
  export let control = 'a';

  import { onMount } from 'svelte';

  let currentIndex = 0;
  let start = Date.now();

  // load next image
  // direction: 1 = forward, -1 = backward
  function tick(direction = 1) {
    if (direction === 1) currentIndex++;
    else currentIndex--;

    // go back to first image if reached the end of the array
    currentIndex = currentIndex % fNames.length;
    // go to last image if reached the beginning of the array
    if (currentIndex === -1) currentIndex = fNames.length - 1;

    // reset start time
    start = Date.now();
  }

  function autoplay() {
    const t = +Date.now() - start;
    // check if interval has elapsed since last tick
    if (t >= interval) {
      tick();
    }
    requestAnimationFrame(autoplay);
  }

  // Call any extra, non-svelte JS after the component "mounts"
  // so we're sure svelte is done doing its bit and
  // we can then do whatever DOM manipulations we want.
  onMount(() => {
    if (control === 'autoplay') autoplay();
  });
</script>

<section id="image-ticker-container" class="{width} mt-5 mb-5">
  <p id="image-ticker-date">{fNames[currentIndex].label}</p>
  <div id="image-ticker-progress-dots" class="mb-2">
    {#each fNames as image, index}
      <div
        class="progress-dot-{index === currentIndex ? 'active' : 'inactive'}"
        id="progress-dot-{index}"
      ></div>
    {/each}
  </div>
  <div id="image-ticker-photo-container">
    {#each fNames as image, index}
      <img
        class="image-ticker-{index === currentIndex ? 'active' : 'inactive'}"
        id="image-ticker-{index}"
        alt=""
        src="{image.path}"
      />
    {/each}
  </div>

  {#if control === 'button'}
    <button
      id="image-ticker-button"
      class="btn btn-primary"
      on:click="{tick(1)}"
    >
      Next
    </button>
    <button
      id="image-ticker-button"
      class="btn btn-primary"
      on:click="{tick(-1)}"
    >
      Previous
    </button>
  {/if}
</section>

<style type="text/scss">
  #image-ticker-container {
    #image-ticker-photo-container {
      position: relative;
      img {
        width: 100%;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
        &:not(#image-ticker-1) {
          position: absolute;
          top: 0;
          left: 0;
        }
        &.image-ticker-inactive {
          opacity: 0;
        }
      }
    }

    #image-ticker-progress-dots {
      width: 100%;
      text-align: center;
      > div {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;

        margin: 0 5px;
      }
      .progress-dot-inactive {
        border: 1px solid #3a3a3a;
      }
      .progress-dot-active {
        border: none;
        background-color: #3a3a3a;
      }
    }
    #image-ticker-date {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      text-shadow: 3px 3px 3px #ede6d1;
    }
  }
</style>
