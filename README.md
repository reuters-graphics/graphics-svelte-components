![](https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg)

# ⚙️ graphics-svelte-components

[![npm version](https://badge.fury.io/js/%40reuters-graphics%2Fgraphics-svelte-components.svg)](https://badge.fury.io/js/%40reuters-graphics%2Fgraphics-svelte-components)


Svelte components for graphics pages.


### ➡️ [Components demos & docs site](https://reuters-graphics.github.io/graphics-svelte-components/)



Built with:

<a href="https://kit.svelte.dev/" target="_blank">
<img src="https://kit.svelte.dev/images/svelte-kit-horizontal.svg" height="40" />
</a>


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

### 📚 [Read the docs...](https://reuters-graphics.github.io/graphics-svelte-components/)

... for details on using all the components included.

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

## Developing new components

First step: make a branch for your new component.

Next, add your component in a folder one level below `src/lib`, for example:

```bash
src/
  lib/
    MyComponent/ 👈
      index.svelte 👈
```

Be sure to export your component from the library's entry module, `src/lib/index.js`:

```javascript
// src/lib/index.js
export { default as MyComponent } from './MyComponent/index.svelte';
```

To document and demo your component, add a `docs.svx` file in your component directory:

```bash
MyComponent/
  docs.svx 👈
  index.svelte
```

Use [Svelte in Markdown](https://mdsvex.com/) syntax to demo your component and document its features.

Note, you **must** add some basic frontmatter data -- a title, description and slug -- to make your demo page discoverable in the demo site.

#### Example

````markdown
---
title: MyComponent
description: A component that does things.
slug: my-component
---

<script>
  import MyComponent from './index.svelte';
  import DemoContainer from '../_docs/DemoContainer/index.svelte';
</script>

# MyComponent

A component that does things.

```svelte
<script>
  import { MyComponent } from '@reuters-graphics/graphics-svelte-components';
</script>

<MyComponent />
```

<DemoContainer>
  <MyComponent />
</DemoContainer>
````

When you're ready, make a pull pequest for your component.

#### Publishing

Once you've completed documenting your component, commit it and then version the package, which will publish the library to npm:

```bash
git add .
git commit -m "my new component added"
git push origin master
npm version patch
```
