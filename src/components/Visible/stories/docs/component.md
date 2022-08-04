Wrap components or elements to determine if they are visible on the page using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

```svelte
<script>
  import { Visible } from '@reuters-graphics/graphics-svelte-components';
</script>

<Visible let:visible>
  {#if visible}
    <p>Visible!</p>
  {:else}
    <p>Not yet visible.</p>
  {/if}
</Visible>
```
