// 1. Selecionar os elementos do HTML
const form = document.getElementById("diaryForm");
const inputTitulo = document.getElementById("titulo");
const inputDesc = document.getElementById("desc");
const inputData = document.getElementById("data");
const entryList = document.getElementById("entryList");

// 2. Buscar os registros salvos no navegador (ou iniciar um array vazio)
let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

function saveAndRender() {
    localStorage.setItem("diaryEntries", JSON.stringify(entries)); //como o localStorage só aceita texto, o JSON.stringify pega esse array (entries) e transforma em um texto formatado em JSON para poder caber no localStorage
    renderEntries();
}

// 3. Função para LISTAR os registros na tela
function renderEntries() {
    entryList.innerHTML = ""; //Limpa a lista antes de desenhar de novo

    if (entries.length === 0) {
        entryList.innerHTML = "<p>Nenhum registro encontrado.</p>";
        return;
    }

    entries.forEach((entry, index) => {
        const div = document.createElement("div");
        div.classList.add("entry");
        div.innerHTML = `
            <h3>${entry.title}</h3>
            <p><strong>Data:</strong> ${entry.date}</p>
            <p>${entry.description}</p>
            <button onClick="removeEntry(${index})">Excluir</button>
        `;
        entryList.appendChild(div);
    });
}

// 4. Função para CRIAR um novo registro (capturando o submit do formulário)
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const newEntry = {
        title: inputTitulo.value,
        description: inputDesc.value,
        date: inputData.value,
    };

    entries.push(newEntry); //adiciona no array

    saveAndRender(); //salva e atualiza na tela

    form.reset(); //limpa o formulário
})

// 5. Função para EXCLUIR um registro pelo seu índice (posição no array)
window.removeEntry = function(index) {
    entries.splice(index, 1); //(posição, quantidade)
    saveAndRender();
}
//Como esse HTML é gerado dinamicamente por texto, para o navegador conseguir enxergar e executar essa função de dentro do botão, ela precisa estar pendurada no escopo global (window).

//Roda a listagem assim a página recarrega pela primeira vez
renderEntries(); 

// Registra o Service Worker para habilitar o funcionamento offline e PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then((registration) => {
                console.log('Service Worker registrado com sucesso! Escopo:', registration.scope);
            })
            .catch((error) => {
                console.log('Falha ao registrar o Service Worker:', error);
            });
    });
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    // Guarda o evento para disparar quando o usuário clicar no seu botão
    deferredPrompt = e;
    
    console.log('O app está pronto para ser instalado!');
    // Se quiser, aqui você poderia exibir um botão de "Instalar" na tela.
});