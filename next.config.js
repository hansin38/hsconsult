/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  trailingSlash: true,
  webpack(config) {
    config.resolve.alias['@'] = '/src';
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
  compilerOptions: {
    emotion: true,
  }
};

module.exports = nextConfig;
