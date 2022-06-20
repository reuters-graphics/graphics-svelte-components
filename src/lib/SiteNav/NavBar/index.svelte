<script>
  import DownArrow from './DownArrow.svelte';
  import { activeSection } from './stores';
  import SectionDrowdown from './NavDropdown/SectionDrowdown.svelte';
  import MoreDropdown from './NavDropdown/MoreDropdown.svelte';
  import { normalizeUrl } from './utils/index';

  export let sections = [];

  let windowWidth = 1200;

  $: getDisplayCount = () => {
    if (windowWidth >= 1300) return 7;
    return 5;
  };

  $: displayCount = getDisplayCount();
  $: displaySections = sections.slice(0, displayCount);
  $: hiddenSections = sections.slice(displayCount);
</script>

<svelte:window bind:innerWidth="{windowWidth}" />

<div class="nav-bar">
  <nav aria-label="Main navigation">
    <ul class="nav-list">
      {#each displaySections as section}
        {#if section.children}
          <li
            class="nav-item category link"
            on:mouseover="{() => activeSection.set(section.id)}"
            on:focus="{() => activeSection.set(section.id)}"
          >
            <div
              class="nav-button link"
              class:open="{section.id === $activeSection}"
            >
              <a href="{normalizeUrl(section.url)}">
                {section.name}
              </a>
              <button class="button">
                <DownArrow />
              </button>
            </div>
            {#if $activeSection === section.id}
              <SectionDrowdown section="{section}" />
            {/if}
          </li>
        {:else}
          <li class="nav-item category link">
            <div class="nav-button link">
              <a href="{normalizeUrl(section.url)}">
                {section.name}
              </a>
            </div>
          </li>
        {/if}
      {/each}
      <li
        class="nav-item"
        on:mouseover="{() => activeSection.set('more')}"
        on:focus="{() => activeSection.set('more')}"
        on:mouseout="{() => activeSection.set(null)}"
        on:blur="{() => activeSection.set(null)}"
      >
        <div class="nav-button more" class:open="{$activeSection === 'more'}">
          <button class="button">
            More <DownArrow />
          </button>
        </div>
        {#if $activeSection === 'more'}
          <MoreDropdown hiddenSections="{hiddenSections}" />
        {/if}
      </li>
    </ul>
  </nav>
</div>

<style lang="scss">
  @import './../scss/_colors.scss';
  @import './../scss/_breakpoints.scss';
  @import './../scss/_z-indexes.scss';
  @import '@reuters-graphics/style-main/scss/fonts/mixins';

  $nav-height: 64px;
  $mobile-nav-height: 56px;

  .nav-bar {
    margin-left: auto;

    @include for-mobile {
      display: none;
    }
  }

  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    display: inline-flex;
    padding: 0 10px;
    @include font-display;
    font-weight: 500;
    font-size: 16px;

    .nav-button {
      position: relative;
      height: $nav-height;
      display: flex;
      align-items: center;
      cursor: pointer;

      a {
        color: #404040;
        &:hover,
        &:active {
          text-decoration: none;
        }
      }

      @include for-mobile {
        height: $mobile-nav-height;
      }

      &.open:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        height: 4px;
        background: $tr-orange;
      }
    }

    .link {
      position: relative;
      line-height: 64px;

      &:hover:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        height: 4px;
        background: $tr-orange;
      }
    }
  }

  .button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: unset;
    appearance: none;
    cursor: pointer;
    @include font-display;
    font-weight: 500;
    font-size: 16px;

    &:not(.focused) {
      outline: none;
    }
  }

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

  .category {
    display: none;

    // Hide all but first 4
    @include for-tablet-down {
      &:nth-child(-n + 4) {
        display: inline-flex;
      }
    }

    // Hide all but first 5
    @include for-desktop {
      &:nth-child(-n + 5) {
        display: inline-flex;
      }
    }

    // Hide all but first 7
    @include for-wide-desktop {
      &:nth-child(-n + 7) {
        display: inline-flex;
      }
    }
  }
</style>
