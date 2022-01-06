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
    labelPosition: "tl" | "tc" (default) | "tr" | "bl" | "bc" | "br" (t = top, b = bottom, r = right, l = left, c = centre)
  */

  export let fNames = [];
  export let width = 'body-text';
  export let interval = 1500;
  export let control = 'autoplay';
  export let labelPosition = 'tc';

  import { onMount } from 'svelte';

  let currentIndex = 0;
  let start = Date.now();

  // load next image
  // direction: 1 = forward, -1 = backward
  function tick(direction = 1) {
    console.log('bleh');
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
  {#if labelPosition[0] === 't'}
    <p id="image-ticker-label" class="label-{labelPosition[1]}">
      {fNames[currentIndex].label}
    </p>
  {/if}

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
    {#if control === 'button'}
      <div class="image-ticker-button-container">
        <div
          id="image-ticker-button-previous"
          class="image-ticker-button"
          on:click="{() => tick(-1)}"
        >
          <p>&lt;</p>
        </div>
        <div
          id="image-ticker-button-next"
          class="image-ticker-button"
          on:click="{() => tick(1)}"
        >
          <p>&gt;</p>
        </div>
      </div>
    {/if}
  </div>
  {#if labelPosition[0] === 'b'}
    <p
      id="image-ticker-label"
      class="label-{labelPosition[1]} label-{labelPosition[0]}"
    >
      {fNames[currentIndex].label}
    </p>
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

      .image-ticker-button-container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        // buttons are light arrows on the image
        .image-ticker-button {
          height: 100%;
          width: 50px;
          top: 0;
          position: absolute;
          text-align: center;
          font-size: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          p {
            margin: 0;
            pointer-events: none;
          }

          &#image-ticker-button-next {
            right: 0;
            background-image: linear-gradient(to left, #3a3a3a15, #3a3a3a00);
          }

          &#image-ticker-button-previous {
            left: 0;
            background-image: linear-gradient(to right, #3a3a3a15, #3a3a3a00);
          }
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

    #image-ticker-label {
      font-size: 1.5rem;
      font-weight: bold;
      &.label-c {
        text-align: center;
      }
      &.label-l {
        text-align: left;
      }
      &.label-r {
        text-align: right;
      }
      &.label-b {
        margin-bottom: 0;
        margin-top: 1.2rem;
      }
    }
  }
</style>
