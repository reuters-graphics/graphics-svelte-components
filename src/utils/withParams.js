export const withSource = (source, otherOptions = {}) => {
  const language = Object.keys(source)[0];
  const code = source[language];
  const docs = {
    ...otherOptions?.parameters?.docs,
    source: { code, language },
  };
  const parameters = { docs };
  return { parameters };
};

export const withStoryDocs = (storyDocs, otherOptions = {}) => {
  const docs = {
    ...otherOptions?.parameters?.docs,
    description: { story: storyDocs },
  };
  const parameters = { docs };
  return { parameters };
};

export const withComponentDocs = (componentDocs, otherOptions = {}) => {
  const docs = {
    ...otherOptions?.parameters?.docs,
    description: { component: componentDocs },
  };
  const parameters = { docs };
  return { parameters };
};
