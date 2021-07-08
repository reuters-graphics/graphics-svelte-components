<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faCog } from '@fortawesome/free-solid-svg-icons/faCog.js';

  export let size = 'sm';
</script>

<Fa fw size={size} icon={faCog} primaryColor="#ccc" />