<script>
import Fa from 'svelte-fa/src/fa.svelte';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import { dev } from '$app/env';
</script>

{#if dev}
<div>
  <a rel="external" href="/embed-previewer">
    <Fa icon={faWindowRestore} />
  </a>
</div>
{/if}


<style lang="scss">
  div {
    position: fixed;
    bottom: 5px;
    left: 10px;
    font-size: 18px;
    a {
      color: #ccc;
      &:hover {
        color: #666;
      }
    }
  }
</style>