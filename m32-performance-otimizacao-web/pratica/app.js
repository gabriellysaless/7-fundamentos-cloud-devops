document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.btn-detalhes');
    const painel = document.getElementById('painel-detalhes');
    const titulo = document.getElementById('detalhe-titulo');
    const texto = document.getElementById('detalhe-texto');
    const btnFechar = document.getElementById('fechar-detalhes');
    botoes.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const destino = e.target.getAttribute('data-destino');
            const informacao = e.target.getAttribute('data-info');
            titulo.textContent = `Detalhes sobre: ${destino}`;
            texto.textContent = informacao;
            painel.classList.remove('oculto');
            painel.scrollIntoView({ behavior: 'smooth' });
        });
    });
    btnFechar.addEventListener('click', () => {
        painel.classList.add('oculto');
    });
});