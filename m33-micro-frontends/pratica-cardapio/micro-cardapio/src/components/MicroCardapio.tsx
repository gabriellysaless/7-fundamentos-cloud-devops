import styles from "../styles/MicroCardapio.module.css";

export default function MicroCardapio() {
    const cardapio = ['Macarrão à Carbonara', 'Filé à Parmegiana', 'Lasanha']

    return(
        <div className={styles.cardapio}>
            <h2 className={styles.titulo}>Micro Cardápio</h2>
            <ul className={styles.lista}>
                {cardapio.map((produto) =>(
                    <li key={produto} className={styles.item}>
                        <span className={styles.nome}>
                            {produto}
                        </span>
                        <button
                            className={styles.botao}
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
        </div>
    )
}