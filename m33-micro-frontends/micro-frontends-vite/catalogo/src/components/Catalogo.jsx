export default function Catalogo() {
    const produtos = ['Notebook', 'Celular', 'Fone de Ouvido']

    return (
        <>
            <h2>Catálogo</h2>
            <ul>
                {produtos.map((produto) => (
                    <li key={produto}>
                        {produto}
                        <button
                            onClick={() => {
                                window.dispatchEvent( //dispara o evento para que o Carrinho possa escutá-lo depois
                                    new CustomEvent('adicionarCarrinho', { 
                                        detail: produto //cria um evento personalizado contendo o produto selecionado.
                                    }),
                                )
                            }}
                        >
                            Adicionar
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}