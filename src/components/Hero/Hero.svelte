<script lang="ts">
  /**
    * Headline
    */
  export let hed: string = 'Reuters Graphics Interactive';
  /**
    * Hedline colour
    */
  export let hedColour = 'white';
  /**
    * Dek
    */
  export let dek: string | null = null;
  /**
    * Section title
    */
  export let section: string | null = null;
  /**
    * Section colour
    */
  export let sectionColour: string = 'red';

  export let imgSrc: string;
  export let imgAltText: string;

  

  export let overlay: boolean | string = true;

  export let top = false;
  export let bottom = false;
  export let left = false;
  export let right = false;
</script>


<section class="hero-title">
  <figure>
    {#if $$slots.image}
      <slot name='image'></slot>
    {:else}
      <img src="{imgSrc}" alt="{imgAltText}" />
    {/if}
    {#if overlay}
      <div
        class="overlay"
        class:lightest={overlay === 'lightest'}
        class:lighter={overlay === 'lighter'}
        class:light={overlay === 'light'}
        class:dark={overlay === 'dark'}
        class:darker={overlay === 'darker'}
        class:darkest={overlay === 'darkest'}
      ></div>
    {/if}
  </figure>
  <div
    class="title color-white"
    class:top={top}
    class:bottom={bottom}
    class:left={left}
    class:right={right}
  >
    {#if section}
      <p class={`section-title color-${sectionColour} text-shadow`}>{section}</p>
    {/if}
    
    {#if $$slots.hed}
       <slot name="hed"></slot>
    {:else}
      <h2
        class={`text-shadow-darker color-${hedColour} important`}
      >{hed}</h2>
    {/if}

    {#if $$slots.dek}
       <slot name="dek"></slot>
    {:else}
      {#if dek}
        <p class="text-shadow-darkest">{dek}</p>
      {/if}
    {/if}
  </div>
</section>

<style lang="scss">
@import "@reuters-graphics/style-color/scss/categorical/base";

@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/_mixins";
@import "bootstrap/scss/_utilities";

section.hero-title {
  @extend .clearfix;
  @extend .well !optional;
  @extend .widest !optional;

  position: relative;

  figure {
    position: relative;
    margin-left: -15px;
    width: 100vw;
    height: calc(100vh - 60px);
    max-height: 150vw;

    @include media-breakpoint-down(sm) {
      height: calc(70vh);
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      &.crop-left {
        object-position: 100% 0;
      }

      &.crop-right {
        object-position: 0 0;
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);

      &.darker {
        background-color: rgba(0, 0, 0, 0.25);
      }

      &.darkest {
        background-color: rgba(0, 0, 0, 0.5);
      }

      &.light {
        background-color: rgba(255, 255, 255, 0.2);
      }

      &.lighter {
        background-color: rgba(255, 255, 255, 0.4);
      }

      &.lightest {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  .title {
    width: 100%;
    position: absolute;
    top: calc(50% - 60px);
    text-align: center;

    &.top {
      top: 20px;
    }

    &.bottom {
      top: auto;
      bottom: 20px;
    }

    &.left {
      text-align: left;
    }

    &.right {
      text-align: right;
    }

    h2,
    p {
      @extend .font-sans !optional;
    }

    h2 {
      margin: 0;
      font-size: 4rem;
      line-height: 4rem;

      @include media-breakpoint-down(sm) {
        font-size: 2.5rem;
        line-height: 2.5rem;
      }
    }

    p.section-title {
      @extend .spaced-least !optional;
      @extend .uppercase !optional;

      margin: 0 0 2px;
      font-weight: 600;
      font-size: 0.8rem;
    }
  }
}
</style>