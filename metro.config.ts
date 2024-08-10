const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { assetExts, sourceExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: ['ttf', 'png', 'jpg', 'jpeg', 'svg'],
      sourceExts: ['jsx', 'js', 'ts', 'tsx'],
    },
  };
})();
