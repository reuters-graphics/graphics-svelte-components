<script>
  import { onMount } from 'svelte';
  import Link from './Link.svelte';

  let metadata;

  onMount(() => {
    fetch(
      'https://graphics.thomsonreuters.com/data/reuters-graphics/homepage/graphics.json'
    )
      .then((resp) => resp.json())
      .then((data) => {
        metadata = data
          .filter(({ canonical }) => {
            const pathname = window.location.pathname
              .replace(/\/index\.html$/, '')
              .replace(/\/$/, '');
            if (!pathname) return true;
            return !canonical.includes(pathname);
          })
          .slice(0, 4)
          .map(({ url, image, title, description }) => ({
            url,
            image,
            title,
            description,
          }));
      });
  });
</script>

{#if metadata}
  <nav class="referral-rail row">
    {#each metadata as referral}
      <Link {...referral} />
    {/each}
  </nav>
{/if}
