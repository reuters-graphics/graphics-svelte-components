<script>
  import marked from 'marked';

  export let index;
  export let steps = [];
  export let preload = 1;
  export let stackBackground = 'true';
  export let embedded;
</script>

{#if !embedded}
  {#each steps as step, i}
    <!-- Load the step(s) before and after the active one, only -->
    {#if preload === 0 || (i >= index - preload && i <= index + preload)}
      {#if stackBackground === 'true'}
        <div
          class="step-background step-{i + 1}"
          class:visible="{i <= index}"
          class:hidden="{i > index}"
        >
          <svelte:component
            this="{step.background}"
            {...step.backgroundProps || {}}
          />
        </div>
      {:else}
        <div
          class="step-background step-{i + 1}"
          class:visible="{i === index}"
          class:hidden="{i !== index}"
        >
          <svelte:component
            this="{step.background}"
            {...step.backgroundProps || {}}
          />
        </div>
      {/if}
    {/if}
  {/each}
{:else}
  {#each steps as step, i}
    <!-- Foreground text above each graphic -->
    <div class="stacked-foreground step-{i + 1}">
      {#if typeof step.foreground === 'string'}
        {@html marked(step.foreground)}
      {:else}
        <svelte:component
          this="{step.foreground}"
          {...step.foregroundProps || {}}
        />
      {/if}
    </div>
    <!-- Load all background graphics, stacked -->
    <div class="stacked-background step-{i + 1}">
      <svelte:component
        this="{step.background}"
        {...step.backgroundProps || {}}
      />
    </div>
  {/each}
{/if}

<style lang="scss">
  .step-background {
    width: 100%;
    position: absolute;
    transition: 0.5s opacity ease;

    &.hidden {
      opacity: 0;
    }
  }
</style>
