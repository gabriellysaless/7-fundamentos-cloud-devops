import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    federation({
      name: 'container',
      remotes: {
        catalogo: {
          type: 'module',
          name: 'catalogo',
          entry: 'http://localhost:5001/remoteEntry.js', //aponta para o remoteEntry.js de cada projeto.
        },
        carrinho: {
          type: 'module',
          name: 'carrinho',
          entry: 'http://localhost:5002/remoteEntry.js',
        },
      },
      shared: ['react', 'react-dom'],
      dts: false,
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    port: 5000,
    strictPort: true,
  },
})
