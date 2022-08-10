<script lang="ts">
  type ColumnWidth = 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider' | 'widest' | 'fluid';
  
  /** Width of the section within the article well. */
  export let width: ColumnWidth = 'normal';

  /** Add an id to the section tag to target it with custom CSS. */
  export let id: string = '';
  /** Add extra classes to the section tag to target it with custom CSS. */
  export let cls: string = '';
</script>

<section {id} class="{width} {cls}">
  <!-- Section content -->
  <slot></slot>
</section>

<style lang="scss">
  section {
    max-width: var(--normal-column-width, 660px);
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    &.narrower {
      max-width: var(--narrower-column-width, 330px);
    }

    &.narrow {
      max-width: var(--narrow-column-width, 330px);
    }

    &.wide {
      max-width: var(--wide-column-width, 930px);
    }

    &.wider {
      max-width: var(--wider-column-width, 1200px);
    }

    &.widest {
      max-width: 100%;
    }

    &.fluid {
      width: calc(100% + 30px);
      margin-left: -15px;
      max-width: none;
    }
  }
</style>
