import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    federation({
      name: 'carrinho',
      filename: 'remoteEntry.js', //define o arquivo de entrada usado para carregar os módulos expostos.
      exposes: {
        './Carrinho': './src/components/Carrinho.jsx',
      },
      shared: ['react', 'react-dom'],
      dts: false,
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    port: 5002,
    strictPort: true, // impede que o Vite escolha silenciosamente outra porta se a desejada estiver ocupada.
  },
})
