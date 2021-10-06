<script>
  import marked from 'marked';

  export let index;
  export let steps = [];
  export let preload = 1;
  export let embedded;
  const totalSteps = steps.length;
</script>

{#if !embedded}
  {#each steps as step, i}
    <!-- Load the step(s) before and after the active one, only -->
    {#if preload === 0 || (i >= index - preload && i <= index + preload)}
      <!-- Visible/hidden logic for 2-step scroll -->
      {#if totalSteps <= 2}
        <div class="step-background step-{i + 1}" class:hidden="{i !== index}">
          <svelte:component
            this="{step.background}"
            {...step.backgroundProps || {}}
          />
        </div>
      {:else}
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
  }
  .step-background.hidden {
    opacity: 0;
  }

  // embed styles
  .stacked-foreground {
    margin-top: 4rem;
  }
  :global(.stacked-foreground p:last-child) {
    margin-bottom: 0.5rem;
  }
  .stacked-background {
    margin-bottom: 4rem;
  }
</style>
