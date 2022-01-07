<script>
  /*
  partly copied from: https://codepen.io/josephwong2004/pen/NWRGxdR
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
    width: string - body-text | wide | wider | fluid
  */

  export let fNames = [];
  export let width = 'body-text';

  let sliderPos = 50;
  let slider = null;
  let beforeImg = null;

  import { onMount } from 'svelte';

  // Call any extra, non-svelte JS after the component "mounts"
  // so we're sure svelte is done doing its bit and
  // we can then do whatever DOM manipulations we want.
  onMount(() => {});
</script>

<section id="ba-container" class="{width} mt-5 mb-5">
  <div id="ba-photo-container">
    <div class="ba-before-container">
      <div
        class="ba-label ba-label-before"
        style="clip-path: inset(0 {100 - sliderPos + 1}% 0 0);"
      >
        {fNames[0].label}
      </div>
      <img
        bind:this="{beforeImg}"
        class="ba-image ba-before"
        alt="Before"
        src="{fNames[0].path}"
        style="clip-path: inset(0 {100 - sliderPos}% 0 0);"
      />
    </div>

    <div class="ba-after-container">
      <div class="ba-label ba-label-after">{fNames[1].label}</div>
      <img class="ba-image ba-after" alt="After" src="{fNames[1].path}" />
    </div>

    <input
      bind:value="{sliderPos}"
      bind:this="{slider}"
      type="range"
      min="1"
      max="100"
      class="slider"
      name="slider"
      id="ba-slider"
    />

    <!-- <div class="slider-button" style="left: calc({sliderPos}% - 13px);"></div> -->
  </div>
</section>

<style type="text/scss">
  #ba-container {
    #ba-photo-container {
      position: relative;
      .ba-image {
        width: 100%;
        height: 100%;
        opacity: 1;
      }
      @mixin center() {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .slider {
        position: absolute;
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 100%;
        background: none;
        outline: none;
        margin: 0;
        bottom: 0;
        left: 0;
        top: 0;
        @include center;
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 3px;
          height: 100%;
          background: white;
          cursor: pointer;
        }
        &::-moz-range-thumb {
          width: 3px;
          height: 100%;
          background: white;
          cursor: pointer;
        }
      }

      .slider-button {
        $size: 20px;
        position: absolute;
        pointer-events: none;
        width: $size;
        height: $size;
        border-radius: 50%;
        background-color: white;
        border: 1px solid #5d5d5d90;
        top: 100%;
        @include center;

        // @mixin arrow-helper() {
        //   content: '';
        //   padding: 2px;
        //   display: inline-block;
        //   border: solid #5d5d5d;
        //   border-width: 0 1px 1px 0;
        // }
        // &:after {
        //   @include arrow-helper();
        //   transform: rotate(-45deg);
        // }
        // &:before {
        //   @include arrow-helper();
        //   transform: rotate(135deg);
        // }
      }
    }

    .ba-label {
      font-size: 1.2rem;
      font-family: sans-serif;
      color: white;
      text-shadow: 1px 1px 1px black;
      width: 100%;
      height: 100%;
      position: absolute;
      display: inline-block;
      z-index: 1;
      &.ba-label-before {
        padding-left: 5px;
      }
      &.ba-label-after {
        text-align: right;
        padding-right: 5px;
      }
    }

    // z indexing
    .ba-before-container {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    .ba-after-container {
      position: relative;
      z-index: 0;
    }
    .slider {
      z-index: 2;
    }
  }
</style>
