export default function MicroCardapio() {
    const cardapio = ['Macarrão à Carbonara', 'Filé à Parmegiana', 'Lasanha']

    return(
        <>
            <h2>Micro Cardápio</h2>
            <ul>
                {cardapio.map((produto) =>(
                    <li key={produto}>
                        {produto}
                        <button
                            onClick={() => {
                                window.dispatchEvent( //dispara o evento para que o MicroPedido possa "escutá-lo" depois
                                    new CustomEvent('adicionarProduto', {
                                        detail: produto //cria um evento personalizado que carrega o produto em 'detail'.
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