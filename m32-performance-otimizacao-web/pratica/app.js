// Lógica para abrir os detalhes do destino escolhido
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

            // Preenche o painel com os dados
            titulo.textContent = `Detalhes sobre: ${destino}`;
            texto.textContent = informacao;

            // Mostra o painel
            painel.classList.remove('oculto');
            
            // Rola a página suavemente até o painel
            painel.scrollIntoView({ behavior: 'smooth' });
        });
    });

    btnFechar.addEventListener('click', () => {
        painel.classList.add('oculto');
    });
});