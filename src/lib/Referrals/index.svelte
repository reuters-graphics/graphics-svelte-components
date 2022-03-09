<script>
  import { browser } from '$app/env';
  import Referrals from './Referrals.svelte';
  import IntersectionObserver from './IntersectionObserver.svelte';

  export let referrals = [];

  export let monocolourLogo = false;
  export let lightLogo = false;
</script>

<section class="referral-container">
  <figure>
    {#if monocolourLogo && lightLogo}
      <img
        class="logo reuters-graphics"
        src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/reuters-logo-light.svg"
        alt="Reuters logo"
      />
    {:else if monocolourLogo}
      <img
        class="logo reuters-graphics"
        src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/reuters-logo-dark.svg"
        alt="Reuters logo"
      />
    {:else if lightLogo}
      <img
        class="logo reuters-graphics"
        src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/reuters-logo-color-light.svg"
        alt="Reuters logo"
      />
    {:else}
      <img
        class="logo reuters-graphics"
        src="https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-logo/svg/reuters-logo-color-dark.svg"
        alt="Reuters logo"
      />
    {/if}
  </figure>

  {#if browser}
    <IntersectionObserver let:intersecting top="{2400}" once="{true}">
      {#if intersecting}
        <Referrals referrals="{referrals}" />
      {/if}
    </IntersectionObserver>
  {/if}
</section>

<style>
  figure {
    text-align: center;
  }
</style>
