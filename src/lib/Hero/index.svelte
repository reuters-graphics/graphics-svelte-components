<script>
  export let hed = 'Reuters Graphics Interactive';
  export let hedColour = 'white';
  export let dek;
  export let section;
  export let sectionColour = 'red';
  export let overlay = true;

  export let top = false;
  export let bottom = false;
  export let left = false;
  export let right = false;
</script>


<section class="hero-title">
  <figure>
    <slot name='image'></slot>
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