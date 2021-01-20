module.exports = {
  stories: [],
  addons: ['@storybook/addon-knobs/register'],
  //
  webpackFinal: (config, {configType}) => {
    const path  = require('path');

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules=true'],
      include: path.resolve(__dirname, '../'),
    });
    
    return config;
  }
  //
}