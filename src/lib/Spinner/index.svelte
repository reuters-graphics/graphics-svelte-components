<script>
  export let colour = '#666';
  export let width = 40;
  export let ringWidth = 6;
  export let speed = 0.8;
</script>

<div
  style="
    --spinner-colour: {colour};
    --spinner-ring-width: {ringWidth}px;
    --spinner-ring-offset: -{ringWidth}px;
    --spinner-speed: {speed}s;
    width: {width}px;
    height: {width}px;
    margin: 0 auto;
  "
>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</div>

<style lang="scss">
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner-container {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    color: var(--spinner-colour, #666);
  }

  .spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: var(--spinner-ring-width, 6px) solid transparent;
    border-top-color: currentColor;
    animation: spinner var(--spinner-speed, 0.8s) linear infinite;
    box-sizing: border-box;

    &::before {
      content: '';
      position: absolute;
      display: block;
      left: var(--spinner-ring-offset, -6px);
      top: var(--spinner-ring-offset, -6px);
      width: 100%;
      height: 100%;
      border: var(--spinner-ring-width, 6px) solid currentColor;
      box-sizing: content-box;
      border-radius: 50%;
      opacity: 0.25;
    }
  }
</style>
