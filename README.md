# docusaurus-theme-frontmatter

This package enhances the Docusaurus classic theme by exposing the [docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter), [blog](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter), and [pages](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages) front matter to the following components and their children:

* [BlogPostPage](https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme/BlogPostPage)
* [DocItem](https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme/DocItem)
* [MDXPage](https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-classic/src/theme/MDXPage)

Furthermore, this allows you to define and access ***custom*** front matter.

[![Release Version](https://img.shields.io/npm/v/docusaurus-theme-frontmatter.svg)](https://www.npmjs.com/package/docusaurus-theme-frontmatter)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Install

```sh
yarn add docusaurus-theme-frontmatter
```

Then, include the plugin in your `docusaurus.config.js` file.

```diff
// docusaurus.config.js
module.exports = {
  ...
+ themes: ['docusaurus-theme-frontmatter'],
  ...
}
```

### TypeScript support

To enable TypeScript support, the TypeScript configuration should be updated to add the `docusaurus-theme-frontmatter` type definitions. This can be done in the `tsconfig.json` file:

```diff
{
  "extends": "@tsconfig/docusaurus/tsconfig.json",
  "compilerOptions": {
    ...
+    "types": ["docusaurus-theme-frontmatter"]
  }
}
```

## How to use

The `useFrontMatter()` hook is made available to any of your components through the `@theme/useFrontMatter` import. For example, you might have a component that creates a gallery of images.

```mdx
---
title: Miniature fairy doors of NYC
hide_table_of_contents: true
gallery:
  - /images/117-first-avenue.jpg
  - /images/lower-east-side.jpg
  - /images/my-guinness.jpg
  - /images/hundred-years.jpg
---
import Galley from '@theme/Galley';

<Galley />
```

```jsx
import React from 'react';
import ImageGallery from 'react-image-gallery';
import useFrontMatter from '@theme/useFrontMatter';

export default function GalleyComponent () {
  const { gallery } = useFrontMatter();

  if (Array.isArray(gallery)) {
    const images = gallery.map((image) => ({
      original: image
    }));

    return <ImageGallery items={images} />;
  }

  return null;
}
```

## Public API

### `useFrontMatter<T extends FrontMatter>()`

Returns the front matter for the current context.

```ts
import useFrontMatter from '@theme/useFrontMatter';

interface CustomFrontMatter {
  gallery?: string[];
}

const MyComponent = () => {
  const { gallery } = useFrontMatter<CustomFrontMatter>();
  return (<... />);
}
```

### `Context`

The current front matter context.

Generally, this is something to be left alone and operates behind the scenes. This is how it is used to [enhance DocItem](https://github.com/roydukkey/docusaurus-theme-frontmatter/blob/master/src/theme/DocItem.tsx) scaffolding the hook:

```js
import { Context } from '@theme/useFrontMatter';
import DocItem from '@theme-init/DocItem';
import React from 'react';

export default (props) => <Context.Provider value={props.content.frontMatter}>
	<DocItem {...props} />
</Context.Provider>;
```

### `FrontMatter`, `DocItemFrontMatter`, `BlogPostPageFrontMatter`, `MDXPageFrontMatter`

These types are provided to assist in describing the values returned by the `useFrontMatter()` hook.

```ts
import useFrontMatter from '@theme/useFrontMatter';
import type { DocItemFrontMatter } from '@theme/useFrontMatter';

const MyComponent = () => {
  const { id, title, keywords } = useFrontMatter<DocItemFrontMatter>();
  return (<... />);
}
```

## Project Longevity

This project was originally created to provide a useful feature that was lacking in Docusaurus v2. Since the release of this plugin, the Docusaurus team has began a [plan to expose FrontMatter](https://github.com/facebook/docusaurus/issues/6885) and other data through hooks. So long their resulting work provides access to **custom** front matter, this project is likely to deprecate. However until that day comes, I will do my best to keep this project up-to-date with upstream changes.

Here are some issues to review if you want to see where all this is headed:

* [RFC: allow routes to declare a React context](https://github.com/facebook/docusaurus/issues/6885)
* [refactor(docs,theme): split DocItem comp, useDoc hook](https://github.com/facebook/docusaurus/pull/7644)
* [refactor(theme): split BlogPostItem into smaller theme subcomponents](https://github.com/facebook/docusaurus/pull/7716)
