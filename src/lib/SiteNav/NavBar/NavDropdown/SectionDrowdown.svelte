<script>
  import { normalizeUrl } from '../utils';

  import NavDropdown from './index.svelte';

  export let section = {};
  export let headingText;
</script>

<NavDropdown headingText="{headingText}">
  <a href="{normalizeUrl(section.url)}">
    <span class="heading">
      Browse {section.name}
    </span>
  </a>
  <ul class="sections">
    {#each section.children as sub}
      <li>
        <a class="subsection-link" href="{normalizeUrl(sub.url)}">
          {sub.name}
        </a>
      </li>
    {/each}
  </ul>
</NavDropdown>

<style lang="scss">
  @import '../../scss/_colors.scss';

  .sections {
    list-style: none;
    padding: 0;
    margin: 12px 0 0 0;
  }

  .sections .subsection {
    line-height: 1.55;
  }

  .section-link,
  .subsection-link {
    &:hover {
      text-decoration: underline;
    }
  }

  span.heading {
    line-height: 1.333;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    letter-spacing: 0;
    text-decoration: none;
    text-transform: none;
    font-smooth: always;
    color: var(--nav-primary, $tr-dark-grey);
    -webkit-font-smoothing: antialiased;
    @media (min-width: 1300px) {
      font-size: 18px;
    }
  }

  li > a {
    line-height: 1.75;
    letter-spacing: 0;
    font-size: 16px;
    color: var(--nav-primary, $tr-dark-grey);
    font-weight: 400;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    @media (min-width: 1300px) {
      font-size: 18px;
    }
  }
</style>
