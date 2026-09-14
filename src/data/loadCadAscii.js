const generatedAscii = import.meta.glob('./cad-assets/*.ascii.json', {
  import: 'default',
});

let builtInPromise;

const loadCadAscii = async (type) => {
  const generatedLoader = generatedAscii[`./cad-assets/${type}.ascii.json`];
  if (generatedLoader) {
    return generatedLoader();
  }

  builtInPromise ||= import('./cadAscii');
  const { default: assets } = await builtInPromise;
  return assets[type] || assets.robot;
};

export default loadCadAscii;
