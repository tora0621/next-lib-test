/** @type {import('next').NextConfig} */

const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placekitten.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  //外部から画像を読み込む場合ココにドメインを指定,ref:https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: ['placekitten.com'],
  },
  withBundleAnalyzer,
};

module.exports = nextConfig;

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   //外部から画像を読み込む場合ココにドメインを指定,ref:https://nextjs.org/docs/basic-features/image-optimization#domains
//   images: {
//     domains: ['placekitten.com'],
//   },
// };

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({
//   // 他の設定
// });
