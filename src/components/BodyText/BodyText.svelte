<script lang="ts">
  /**
   * A markdown text string.
   * @type {string}
   * @required
   */
  export let text: string;

  import { marked } from 'marked';
</script>

<section class="body-text">
  {#if text}
    {@html marked.parse(text)}
  {/if}
</section>
