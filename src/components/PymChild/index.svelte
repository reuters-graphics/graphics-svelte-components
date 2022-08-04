<script>
import { onMount } from 'svelte';
import pym from 'pym.js';

let pymChild;
export let polling = 500;

onMount(() => {
  pymChild = new pym.Child({ polling });
});
</script>