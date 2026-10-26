import dynamic from "next/dynamic";

const MicroCardapio = dynamic(() => import("micro_cardapio/MicroCardapio"), {ssr:false}); //ssr: false para evitar que o componente seja renderizado no servidor.
const MicroPedido = dynamic(() => import("micro_pedido/MicroPedido"), {ssr:false}); 
// Quando escrevemos import, o TS procura o arquivo no projeto. Como nossos componentes vêm de outros microfrontends, ele não os encontra da maneira habitual. Por isso criamos o "remotes.d.ts"
export default function Home() {
  return (
    <>
      <h1>Cardápio e Pedido</h1>
      <MicroCardapio />
      <MicroPedido />
    </>
  );
}
