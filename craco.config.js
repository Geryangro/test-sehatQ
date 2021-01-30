const path = require(`path`);

module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    webpack: {
      alias: {
          '@': path.join(path.resolve(__dirname, './src')),
          '@component': path.join(path.resolve(__dirname, './src/component')),
          '@pages': path.join(path.resolve(__dirname, './src/pages')),
          '@routes': path.join(path.resolve(__dirname, './src/routes')),
          '@service': path.join(path.resolve(__dirname, './src/service')),
          '@config': path.join(path.resolve(__dirname, './src/config')),
          '@store': path.join(path.resolve(__dirname, './src/store')),
      }
    }
  }