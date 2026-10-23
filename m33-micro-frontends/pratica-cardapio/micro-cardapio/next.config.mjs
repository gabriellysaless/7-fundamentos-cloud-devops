import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push( //config.plugins: é a lista de plugins que o Webpack utilizará.
      new NextFederationPlugin({ //cria o plugin que configura o Module Federation.
        name: 'micro_cardapio',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          /* Declara quais módulos outras aplicações poderão importar. */
          './MicroCardapio': './src/components/MicroCardapio.tsx'
        },
      })
    );
    return config;
  },
};

export default nextConfig;
