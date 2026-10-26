
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'container',
        filename: 'static/chunks/remoteEntry.js',
        remotes: { //remoteEntry.js: é o arquivo gerado pelo Module Federation que permite localizar os componentes expostos.
          micro_cardapio: 'micro_cardapio@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          micro_pedido: 'micro_pedido@http://localhost:3002/_next/static/chunks/remoteEntry.js',
        },
      })
    );

    return config;
  },
};

export default nextConfig;
