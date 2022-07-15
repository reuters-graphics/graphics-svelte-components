<script context="module">
  export const themes = {
    default: {
      background: '#fff',
      primary: '#404040',
      rules: '#d0d0d0',
    },
    dark: {
      background: '#333',
      primary: '#eee',
      rules: '#999',
    },
  };
</script>

<script>
  import QuickLinks from './QuickLinks.svelte';
  import CompanyLinks from './CompanyLinks.svelte';
  import LegalLinks from './LegalLinks.svelte';

  import data from './data.json';

  export let theme = {};

  const navTheme = { ...themes.default, ...theme };
</script>

<footer
  style="{`
    --nav-background: ${navTheme.background};
    --nav-primary: ${navTheme.primary};
    --nav-rules: ${navTheme.rules};
  `}"
>
  <QuickLinks links="{data[0]}" />
  <CompanyLinks links="{data[0]}" />
  <LegalLinks links="{data[0]}" />
</footer>

<style lang="scss">
  footer {
    background-color: var(--nav-background, #fff);
  }
</style>
