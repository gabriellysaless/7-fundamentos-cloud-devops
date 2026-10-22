import { useEffect } from "react";
import { useState } from "react"

export default function Carrinho() {

    const [itens, setItens] = useState([]);

    useEffect(() => {
        function adicionarItem(event) {
            setItens((prev) => [...prev, event.detail])
        }
        window.addEventListener('adicionarCarrinho', adicionarItem)

        return () => {
            window.removeEventListener('adicionarCarrinho', adicionarItem)
        }
    }, [])
    
    return(
        <>
            <h2>Carrinho</h2>

            {itens.length === 0 ? (
                <p>Nenhum item no carrinho</p>
            ) : (
                <ul>
                    {itens.map((item, index) => (
                        <li key={`${item}-${index}`}>{item}</li>
                    ))}
                </ul>
            )}
        </>
    )
}