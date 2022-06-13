<script>
  import { ReutersLogo } from './../index.js';
  import NavMenu from './NavMenu/index.svelte';
</script>

<header>
  <div class="nav-container">
    <div class="scroll-container">
      <div class="inner">
        <div class="main-bar">
          <div class="logo-container">
            <div class="logo">
              <a href="https://www.reuters.com">
                <ReutersLogo />
              </a>
            </div>
          </div>
          <NavMenu />
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
    background-color: grey;
    position: relative;
    height: $nav-height;
    z-index: $zindex-sticky;
    --page-height: 0px;

    &.myview-active {
      height: ($nav-height + $subnav-height);
    }

    @include for-tablet-down {
      height: ($nav-height + $subnav-height) !important;
    }

    @include for-mobile {
      height: ($mobile-nav-height + $subnav-height) !important;
    }
  }

  .scroll-container {
    height: calc(var(--page-height) - 50vh);
    pointer-events: none;

    .inner {
      position: sticky;
      top: 0;
      background: white;
      pointer-events: auto;
      border-bottom: 1px solid $tr-muted-grey;

      @include for-tablet-down {
        border-bottom: none;
        transition: transform 0.25s $principleDefaultEase;
        transform: translateY(-100%);
        will-change: transform;
      }
    }
  }

  .with-mobile-leaderboard {
    .scroll-container {
      .inner {
        @include for-mobile {
          // top: 50px; // assuming there will be permanently fixed leaderboard adslot
        }
      }
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
    }

    // @include for-tablet-down {
    //     width: 180px;
    //     min-width: 180px;
    //   }

    //   @include for-desktop {
    //     width: 30%;
    //     min-width: 30%;
    //   }

    //   @include for-wide-desktop {
    //     width: 315px;
    //     min-width: 315px;
    //   }
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
