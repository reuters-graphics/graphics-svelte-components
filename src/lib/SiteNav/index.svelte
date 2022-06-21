<script context="module">
  export const themes = {
    default: {
      background: '#fff',
      primary: '#404040',
      accent: '#fa6400',
      rules: '#d0d0d0',
    },
    dark: {
      background: '#333',
      primary: '#eee',
      accent: '#fa6400',
      rules: '#999',
    },
  };
</script>

<script>
  import { ReutersLogo } from './../index.js';
  import NavBar from './NavBar/index.svelte';
  import data from './data.json';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let theme = {};

  const navTheme = { ...themes.default, ...theme };

  setContext('nav-theme', writable(navTheme));
  setContext('nav-active-section', writable(null));

  const { sections } = data;
</script>

<header
  style="{`
    --nav-background: ${navTheme.background};
    --nav-primary: ${navTheme.primary};
    --nav-accent: ${navTheme.accent};
    --nav-rules: ${navTheme.rules};
  `}"
>
  <div class="nav-container show-nav">
    <div class="scroll-container">
      <div class="inner">
        <div class="main-bar">
          <div class="logo-container">
            <div class="logo">
              <a href="https://www.reuters.com">
                <ReutersLogo
                  logoColour="{navTheme.accent}"
                  textColour="{navTheme.primary}"
                />
              </a>
            </div>
          </div>
          <NavBar sections="{sections}" />
          <!-- Space takes the place of the MyViewMenu, NavSearchBar & Account components... -->
          <div class="spacer-container">
            <div class="spacer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<style lang="scss">
  @import './scss/_grids.scss';
  @import './scss/_colors.scss';
  @import './scss/_eases.scss';
  @import './scss/_breakpoints.scss';
  @import './scss/_z-indexes.scss';

  $nav-height: 64px;
  $mobile-nav-height: 56px;
  $subnav-height: 48px;

  .nav-container {
    background-color: var(--nav-background, $white);
    position: relative;
    height: $nav-height;
    z-index: $zindex-sticky;
    --page-height: 0px;

    // @include for-tablet-down {
    //   height: ($nav-height + $subnav-height) !important;
    // }

    // @include for-mobile {
    //   height: ($mobile-nav-height + $subnav-height) !important;
    // }
  }

  .scroll-container {
    height: calc(var(--page-height) - 50vh);
    pointer-events: none;

    .inner {
      position: sticky;
      top: 0;
      background: var(--nav-background, $white);
      pointer-events: auto;
      border-bottom: 1px solid var(--nav-rules, $tr-muted-grey);

      // @include for-tablet-down {
      //   border-bottom: none;
      //   transition: transform 0.25s $principleDefaultEase;
      //   transform: translateY(-100%);
      //   will-change: transform;
      // }
    }
  }

  .main-bar {
    @include spacing-single(padding-left padding-right);
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    height: $nav-height;
    justify-content: space-between;
    @include max-width;

    @include for-mobile {
      height: $mobile-nav-height;
    }
  }

  .container.show-nav .inner,
  .container.in-view .inner,
  .container:hover .inner {
    transform: translateY(0);
  }

  .logo-container {
    align-self: center;

    .logo {
      display: block;
      font-size: 0;

      @include for-tablet-down {
        width: 127px;
        min-width: 127px;
      }

      @include for-desktop {
        width: 154px;
        min-width: 154px;
      }

      @include for-wide-desktop {
        width: 184px;
        min-width: 184px;
      }
    }
  }

  .spacer-container {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .spacer {
      width: 193.47px;
      height: 64px;
      @media (max-width: 1225px) {
        width: 88px;
      }
    }
  }

  .mobile-menu {
    @include for-tablet-up {
      display: none;
    }
  }

  .skiptolink {
    @include spacing-single(margin-left);
    margin-bottom: 16px;
  }
</style>
