import { NextFederationPlugin } from '@module-federation/nextjs-mf';


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'micro_pedido',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './MicroPedido': './src/components/MicroPedido.tsx',
        },
      })
    );

    return config;
  },
};

export default nextConfig;
