![](https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg)

# ⚙️ graphics-svelte-components

Svelte components for graphics pages.

## Quickstart

```bash
yarn add @reuters-graphics/graphics-svelte-components
```

```svelte
<script>
  import { Nav } from '@reuters-graphics/graphics-svelte-components';
</script>

<Nav />
```

[Read the docs](https://reuters-graphics.github.io/graphics-svelte-components/) for details on using all the components included.

### With SvelteKit/Vite

If you're using this package with [SvelteKit](https://kit.svelte.dev/) (which uses [Vite](https://vitejs.dev/)), you'll likely need to add some of its dependencies to Vite's [dependency pre-bundling config](https://vitejs.dev/guide/dep-pre-bundling.html). For example:

```javascript
export default {
  // ...
  kit: {
    // ...
    vite: {
      // ...
      optimizeDeps: {
        include: ['lodash-es', 'pym.js', 'classnames', 'ua-parser-js'],
      },
    },
  },
};
```

If you're using the [graphics kit](https://github.com/reuters-graphics/bluprint_graphics-kit) this config is already included.

## Developing components

Add your component in a folder one level below `src/lib`, for example:

```bash
src/
  lib/
    MyComponent/
      index.svelte
```

To document your component, add a `docs.svx` file in your component directory:

```bash
MyComponent/
  docs.svx
  index.svelte
```

Use [Svelte in Markdown](https://mdsvex.com/) syntax to document your component's features in your docs.

**IMPORTANT:** You MUST add some frontmatter data to your docs, including a title, description and slug.

```markdown
---
title: MyComponent
description: A component that does things.
slug: my-component
---

# MyComponent

etc.
```

Once you've completed documenting your component, commit it and then version the package to release:

```bash
npm version patch
```
