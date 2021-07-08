![](https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg)

# ⚙️ graphics-svelte-components

Svelte components for making graphics pages.

[Read the docs.](https://reuters-graphics.github.io/graphics-svelte-components/)

## Developing

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

**IMPORTANT:** You MUST add minimal frontmatter data to your docs, including a title, description and slug.

```markdown
---
title: MyComponent
description: A component that does things.
slug: my-component
---

# MyComponent

etc.
```

Once you've completed documenting your component, run the build command to build the package and docs:

```bash
yarn release
```
