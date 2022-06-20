<div>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</div>

<style lang="scss">
  @import '../../../scss/_colors.scss';

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner-container {
    position: relative;
    height: 0;
    padding-bottom: 100%;
  }

  .spinner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top-color: currentColor;
    animation: spinner 0.6s linear infinite;
    box-sizing: border-box;

    &::before {
      content: '';
      position: absolute;
      display: block;
      left: -4px;
      top: -4px;
      width: 100%;
      height: 100%;
      border: 4px solid currentColor;
      box-sizing: content-box;
      border-radius: 50%;
      opacity: 0.25;
    }
  }

  .orange,
  .tr-orange {
    color: $tr-orange;
  }

  .muted-grey {
    color: $tr-muted-grey;
  }

  .dark-grey {
    color: $tr-dark-grey;
  }

  .white {
    color: white;
  }

  .black {
    color: black;
  }

  .inherit {
    color: inherit;
  }

  .screenreader-only {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    width: 1px;
    overflow: hidden;
    position: absolute !important;
    word-wrap: normal !important;
  }
</style>
