<script>
  import { afterUpdate } from 'svelte';
  import { activeSection } from './../stores';
  import StoryCard from './StoryCard/index.svelte';
  import Spinner from './Spinner/index.svelte';

  let stories = [];
  let lastFetched = null;

  afterUpdate(async () => {
    if (lastFetched === $activeSection) return;
    await fetch(
      'https://www.reuters.com/pf/api/v3/content/fetch/recent-stories-by-sections-v1?' +
        new URLSearchParams({
          query: JSON.stringify({
            section_ids: $activeSection,
            size: 4,
            website: 'reuters',
          }),
        })
    )
      .then((response) => response.json())
      .then((data) => {
        stories = data.result.articles;
        lastFetched = $activeSection;
      });
  });

  $: console.log(stories);
</script>

<div class="dropdown">
  <div class="dropdown-container">
    <div class="inner">
      <div class="submenu">
        <div class="inner">
          <slot />
        </div>
      </div>
      <div class="stories-container">
        <div class="inner">
          {#if stories.length > 0}
            <span class="latest">Trending stories</span>
            <ul class="story-list">
              {#each stories as story}
                <li class="story-item">
                  <StoryCard story="{story}" />
                </li>
              {/each}
            </ul>
          {:else}
            <div class="spinner">
              <Spinner />
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import '../../scss/_colors.scss';
  @import '../../scss/_breakpoints.scss';
  @import '../../scss/_eases.scss';
  @import '../../scss/_grids.scss';
  @import '../../scss/_z-indexes.scss';

  $nav-height: 64px;
  $mobile-nav-height: 56px;

  .dropdown {
    position: absolute;
    z-index: $zindex-dropdown;
    left: 0;
    top: $nav-height;
    width: 100%;

    @include for-mobile {
      top: $mobile-nav-height;
    }
  }

  .dropdown-container {
    border-top: 1px solid $tr-muted-grey;
    box-shadow: 0 10px 16px rgba(black, 0.1);
    overflow: hidden;
    background: white;

    > .inner {
      @include responsive-columns(12);
      @include spacing-single(padding-left padding-right);
      @include max-width;
      margin: 0 auto;
    }
  }

  .submenu,
  .stories-container {
    padding: 24px 0;
    grid-row: 1;

    .inner {
      position: relative;
      height: 100%;
    }
  }

  .submenu {
    grid-column: 1 / span 4;

    .hide-stories & {
      grid-column: 1 / -1;
    }

    @include for-extra-wide-desktop {
      grid-column: 2 / span 3;
    }

    @include at-4-columns {
      grid-column: 1 / span 2;
    }
  }

  .stories-container {
    grid-column: 5 / span 8;
    min-height: 300px;

    .inner {
      @include spacing-single(padding-left);
      border-left: 1px solid $tr-muted-grey;
    }

    @include for-extra-wide-desktop {
      grid-column: 5 / span 7;
    }

    @include at-4-columns {
      grid-column: 3 / span 2;
    }
  }

  .story-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @include spacing-single(grid-column-gap);
    list-style: none;
    padding: 0;
    margin: 20px 0 0 0;

    @include at-4-columns {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .story-item {
    padding-bottom: 20px;
    animation: fadein 0.5s both $easeOutExpo;

    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: 1px solid $tr-muted-grey;
    }

    &:nth-child(3),
    &:nth-child(4) {
      padding-top: 20px;
    }

    @include at-4-columns {
      &:nth-child(2) {
        padding-top: 20px;
      }
      &:nth-child(3) {
        border-bottom: 1px solid $tr-muted-grey;
      }
    }
  }

  .spinner {
    width: 40px;
    margin-left: -20px;
    position: absolute;
    top: 60px;
    left: 50%;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .more-sections {
    position: relative;

    @include for-tablet-down {
      display: flex;
      flex-direction: row;
      column-gap: 64px;

      .group-container {
        width: 50%;
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        height: 100%;
        border-right: 1px solid $tr-muted-grey;
      }
    }
  }

  .more-section-group {
    &.has-children {
      margin-bottom: 20px;
    }

    .subsections {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @include spacing-single(grid-column-gap);
      padding: 0;
      margin: 0;
      list-style: none;
    }

    .section-link {
      grid-column: 1 / -1;
      margin-bottom: 4px;
    }
  }

  span.latest {
    font-size: 16px;
    @media (min-width: 1300px) {
      font-size: 18px;
    }
  }
</style>
