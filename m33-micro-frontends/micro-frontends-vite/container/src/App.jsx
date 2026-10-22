import { lazy, Suspense } from 'react'

const Catalogo = lazy(() => import('catalogo/Catalogo')) //lazy(): permite carregar cada componente sob demanda.
const Carrinho = lazy(() => import('carrinho/Carrinho'))

function App() {
  

  return (
    <>
      <h1>Minha Aplicação de Micro Frontends</h1>

      <Suspense fallback={<p>Carregando micro frontends...</p>}> {/* Suspense: exibe uma mensagem enquanto os componentes estão sendo carregados. */}
        <Catalogo/>
        <hr/>
        <Carrinho/>
      </Suspense>
    </>
  )
}

export default App
