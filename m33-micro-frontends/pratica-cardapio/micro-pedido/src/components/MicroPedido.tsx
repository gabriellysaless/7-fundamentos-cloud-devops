import { useEffect, useState } from "react";

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
        <>
            <h2>Pedido</h2>
            {produtos.length === 0 ? (
                <p>Nenhum produto adicionado</p>
            ) : (
                    <ul>
                        {produtos.map((produto, index) => (
                            <li key={`${produto}-${index}`}>{produto}</li>
                        ))}
                    </ul>
            )}
        </>
    )
}