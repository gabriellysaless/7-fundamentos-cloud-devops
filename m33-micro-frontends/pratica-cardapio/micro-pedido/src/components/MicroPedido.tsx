import { useEffect, useState } from "react";
import styles from "../styles/MicroPedido.module.css";

export default function MicroPedido() {
    
    const [produtos, setProdutos] = useState<string[]>([]);

    useEffect(() => {
            function adicionarItem(event : Event) {
                const evento = event as CustomEvent<string>;
                setProdutos((prev) => [...prev, evento.detail])
            }
            window.addEventListener('adicionarProduto', adicionarItem)
    
            return () => {
                window.removeEventListener('adicionarProduto', adicionarItem)
            }
        }, [])
    return (
        <div className={styles.pedido}>
            <h2 className={styles.titulo}>Pedido</h2>
            {produtos.length === 0 ? (
                <p className={styles.vazio}>Nenhum produto adicionado</p>
            ) : (
                    <ul className={styles.lista}>
                        {produtos.map((produto, index) => (
                            <li key={`${produto}-${index}`} className={styles.item}>
                                {produto}
                            </li>
                        ))}
                    </ul>
            )}
        </div>
    )
}