const nextConfig = {
  // reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  compiler: {
    emotion: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
