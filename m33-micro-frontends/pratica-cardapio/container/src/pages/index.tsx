import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const MicroCardapio = dynamic(() => import("micro_cardapio/MicroCardapio"), {ssr:false}); //ssr: false para evitar que o componente seja renderizado no servidor.
const MicroPedido = dynamic(() => import("micro_pedido/MicroPedido"), {ssr:false}); 
// Quando escrevemos import, o TS procura o arquivo no projeto. Como nossos componentes vêm de outros microfrontends, ele não os encontra da maneira habitual. Por isso criamos o "remotes.d.ts"
export default function Home() {
  return (
    <main className={styles.pagina}>
      <h1 className={styles.titulo}>Cardápio e Pedido</h1>

      <div className={styles.conteudo}>
        <MicroCardapio />
        <MicroPedido />
      </div>
    </main>
  );
}
