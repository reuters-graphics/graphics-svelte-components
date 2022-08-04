import '@reuters-graphics/style-theme-eisbaer/scss/main.scss';
import './preview.scss';

import ArticleWrapper from './ArticleWrapper.svelte';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import svelte from './svelte-highlighting.js';

SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('svelte', svelte);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'docs',
  controls: {
    expanded: true,
    sort: 'requiredFirst',
    matchers: {
      color: /(background|colour|Colour)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  options: {
    storySort: {
      method: 'configure',
      includeNames: true,
      order: [
        'Intro',
        '*',
      ],
    },
  }
};

export const decorators = [() => ({ Component: ArticleWrapper })];
