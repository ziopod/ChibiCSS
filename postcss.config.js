module.exports = {
  sitemap: true,
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env'),
    require('cssnano')({ preset: 'default' }),
    require('postcss-csso')
  ]
}
