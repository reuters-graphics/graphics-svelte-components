<script>
  import { faDesktop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { width } from './../stores.js';

  let container;

  const sliderWidth = 90;
  let windowInnerWidth = 1200;
  const minWidth = 320;
  $: maxWidth = Math.min(windowInnerWidth - 70, 1200);
  $: pixelRange = maxWidth - minWidth;
  $: if ($width > maxWidth) width.set(maxWidth);
  $: offset = ($width - minWidth) / pixelRange;

  let sliding = false;
  let isFocused = false;

  const roundToNearestFive = (d) => Math.ceil(d / 5) * 5;
  const getPx = () => Math.round(pixelRange * offset + minWidth);

  let pixelLabel = null;

  const move = (e) => {
    if (!sliding || !container) return;
    const { left } = container.getBoundingClientRect();
    offset = Math.min(Math.max(0, e.pageX - left), sliderWidth) / sliderWidth;
    pixelLabel = roundToNearestFive(getPx());
  };
  const handleKeyDown = (e) => {
    if (!isFocused) return;
    const { keyCode } = e;
    const pixelWidth = sliderWidth / pixelRange;
    // right
    if (keyCode === 39) {
      offset = Math.min(1, offset + pixelWidth / sliderWidth);
      // left
    } else if (keyCode === 37) {
      offset = Math.max(0, offset - pixelWidth / sliderWidth);
    }
    width.set(getPx());
  };
  const start = (e) => {
    sliding = true;
    move(e);
  };
  const end = () => {
    sliding = false;
    pixelLabel = null;
    width.set(roundToNearestFive(getPx()));
  };
  const onFocus = () => {
    isFocused = true;
  };
  const onBlur = () => {
    isFocused = false;
  };
  const increment = () => {
    if ($width + 10 < maxWidth) {
      width.update((n) => n + 10);
    } else {
      width.set(maxWidth);
    }
  };
  const decrement = () => {
    if ($width - 10 > minWidth) {
      width.update((n) => n - 10);
    } else {
      width.set(minWidth);
    }
  };
</script>

<svelte:window
  on:mousemove="{move}"
  on:mouseup="{end}"
  on:keydown="{handleKeyDown}"
  bind:innerWidth="{windowInnerWidth}"
/>

<div id="resizer">
  <div class="slider">
    <div class="label" style="{`opacity: ${sliding || isFocused ? 1 : 0};`}">
      {pixelLabel || $width}px
    </div>
    <div
      tabindex="0"
      class="icon left"
      on:click="{decrement}"
      on:focus="{onFocus}"
      on:mouseover="{onFocus}"
      on:mouseleave="{onBlur}"
    >
      <Fa icon="{faMobileAlt}" fw />
    </div>
    <div class="slider-container" bind:this="{container}">
      <div class="track"></div>
      <div
        class="handle"
        tabindex="0"
        style="left: calc({offset * 100}% - 5px);"
        on:mousedown="{start}"
        on:focus="{onFocus}"
        on:blur="{onBlur}"
      ></div>
    </div>
    <div
      tabindex="0"
      class="icon right"
      on:click="{increment}"
      on:focus="{onFocus}"
      on:mouseover="{onFocus}"
      on:mouseleave="{onBlur}"
    >
      <Fa icon="{faDesktop}" fw />
    </div>
  </div>
</div>

<style lang="scss">
  #resizer {
    width: 250px;
    position: fixed;
    bottom: 0px;
    right: 0px;
    padding: 15px;

    .slider {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      & > div {
        display: inline-block;
      }
    }

    div.label {
      font-family: monospace;
      font-size: 13px;
      line-height: 13px;
      text-align: center;
      transition: opacity 0.2s;
      color: grey;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 4px 8px;
      border-radius: 4px;
      margin-right: 5px;
    }
    div.icon {
      font-size: 14px;
      line-height: 14px;
      color: #aaa;
      cursor: pointer;
      &:active,
      &:focus {
        outline: none;
      }
      &:active {
        transform: translate(1px, 1px);
      }
      &.left {
        text-align: right;
        padding-right: 3px;
      }
      &.right {
        padding-left: 6px;
        text-align: left;
      }
    }
    div.slider-container {
      width: 90px;
      height: 20px;
      position: relative;

      div.track {
        height: 4px;
        width: 100%;
        position: absolute;
        border-radius: 2px;
        top: calc(50% - 2px);
        background-color: lightgrey;
      }
    }
  }

  .handle {
    z-index: 30;
    width: 10px;
    height: 20px;
    cursor: ew-resize;
    background: #bbb;
    user-select: none;
    position: absolute;
    border-radius: 4px;
    border: 1px solid grey;
    top: calc(50% - 10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    &:active,
    &:focus {
      outline: none;
    }
  }
</style>
