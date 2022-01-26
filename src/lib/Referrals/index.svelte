<script>
  import { browser } from '$app/env';
  import Referrals from './Referrals.svelte';
  import IntersectionObserver from './IntersectionObserver.svelte';
</script>

<section class="referral-container">
  <figure>
    <img
      src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/logo-color.svg"
      alt="Reuters logo"
    />
  </figure>

  {#if browser}
    <IntersectionObserver let:intersecting top="{2400}" once="{true}">
      {#if intersecting}
        <Referrals />
      {/if}
    </IntersectionObserver>
  {/if}
</section>

<style>
  figure {
    text-align: center;
  }
</style>
