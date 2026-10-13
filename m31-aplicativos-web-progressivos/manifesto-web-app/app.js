const form = document.getElementById('flashcard-form');
const flashcardsDiv = document.getElementById('flashcards');
const botaoInstalar = document.getElementById('btnInstall')


function salvaCards(cards) {
  localStorage.setItem('flashcards', JSON.stringify(cards));
}

function carregaCards() {
  return JSON.parse(localStorage.getItem('flashcards')) || [];
}

function deletaCard(index) {
  const cards = carregaCards();
  cards.splice(index, 1); // Remove o card selecionado da lista
  salvaCards(cards); // Salva a lista atualizada
  renderizaCards(); // Renderiza novamente na tela
}

function renderizaCards() {
  const cards = carregaCards();
  flashcardsDiv.innerHTML = '';

  cards.forEach((card, index) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = "card";

    // Span para conter a pergunta / resposta
    const textoSpan = document.createElement('span');
    textoSpan.className = 'card-texto';
    textoSpan.innerText = card.pergunta;

    // Alterna entre pergunta e resposta ao clicar no texto do card
    textoSpan.onclick = () => {
      textoSpan.innerText = textoSpan.innerText === card.pergunta ? card.resposta : card.pergunta;
    };

    // Criando o botão de excluir
    const btnExcluir = document.createElement('button');
    btnExcluir.className = "btn-excluir";
    btnExcluir.innerHTML = "&times;";
    btnExcluir.title = "Excluir flashcard";

    // Ação ao clicar no botão de excluir
    btnExcluir.onclick = (e) => {
      e.stopPropagation(); // Impede que o clique no botão ative a virada do card
      if (confirm('Deseja realmente excluir este flashcard?')) {
        deletaCard(index);
      }
    };

    // Monta a estrutura do card
    cardDiv.appendChild(textoSpan);
    cardDiv.appendChild(btnExcluir);
    flashcardsDiv.appendChild(cardDiv);
  });
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const pergunta = document.getElementById('pergunta').value;
    const resposta = document.getElementById('resposta').value;

    const cards = carregaCards();

    cards.push({
    pergunta: pergunta,
    resposta: resposta
    });

    salvaCards(cards);
    renderizaCards();
    form.reset();
});

// Registra o Service Worker para PWA
console.log(botaoInstalar);

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(() => console.log("Service Worker registrado"))
  .catch(err => console.error("Erro ao registrar o service worker:", err));
}

// Guardar o resultado do evento beforeinstallprompt (evento que o browser aciona quando descobre que o app pode ser instalado)
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault(); 
  deferredPrompt = e; // salvando o evento na nossa variável
  botaoInstalar.style.display = 'block';
});

botaoInstalar.addEventListener("click", () => {
  if(!deferredPrompt) return;

  deferredPrompt.prompt() // opção para o usuário instalar ou não o app
  deferredPrompt.useChoice.then((choice) => { // se o usuário aceitar sumimos com o botão
    console.log(choice.outcome);
    deferredPrompt = null;
    botaoInstalar.style.display = 'none';
  })
})

renderizaCards();