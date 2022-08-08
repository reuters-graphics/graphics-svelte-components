interface SourceType {
  /** Svelte source code */
  svelte?: string;
  /** CSS source code */
  css?: string;
  /** SCSS source code */
  scss?: string;
  /** JavaScript source code */
  js?: string;
}

interface DocsType {
  docs?: any;
}

interface OtherOptionsType {
  parameters?: DocsType;
}

/**
 * Use custom source code in the "Show code" pull down.
 * @param source Source code object, where key is the language of the source code and value is the code string.
 * @param otherOptions Other props object options, allowing chaining with other methods like withStoryDocs
 * @returns props object including parameters
 */
export const withSource = (source: SourceType, otherOptions: OtherOptionsType = {}) => {
  const language = Object.keys(source)[0];
  const code = source[language];
  const docs = {
    ...otherOptions?.parameters?.docs,
    source: { code, language },
  };
  const parameters = { docs };
  return { parameters };
};

/**
 * Add custom documentation to a story.
 * @param storyDocs Markdown string of docs
 * @param otherOptions Other props object options, allowing chaining with other methods like withSource
 * @returns props object including parameters
 */
export const withStoryDocs = (storyDocs: string, otherOptions: OtherOptionsType = {}) => {
  const docs = {
    ...otherOptions?.parameters?.docs,
    description: { story: storyDocs },
  };
  const parameters = { docs };
  return { parameters };
};

/**
 * Add custom documentation to the top of the component docs page.
 * @param componentDocs Markdown string of docs
 * @param otherOptions Other props object options, allowing chaining with other methods like withSource
 * @returns props object including parameters
 */
export const withComponentDocs = (componentDocs: string, otherOptions: OtherOptionsType = {}) => {
  const docs = {
    ...otherOptions?.parameters?.docs,
    description: { component: componentDocs },
  };
  const parameters = { docs };
  return { parameters };
};
