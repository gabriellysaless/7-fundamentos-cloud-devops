import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    federation({ //configura o module federation
      name: 'catalogo',
      filename: 'remoteEntry.js',
      exposes: { /* Declara quais módulos outras aplicações poderão importar. */
        './Catalogo': './src/components/Catalogo.jsx'
      },
      shared: ['react', 'react-dom'],
      dts: false,
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    port: 5001,
    strictPort: true,
  },
})

// ./Catalogo será o nome usado pelo Container para solicitar o componente. O caminho ./src/components/Catalogo.jsx aponta para o arquivo real dentro do Catálogo.
