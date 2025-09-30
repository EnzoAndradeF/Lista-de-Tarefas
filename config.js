const inputTarefa = document.getElementById('nova-tarefa-input');
const btnAdicionar = document.getElementById('adicionar-tarefa-btn');
const ulLista = document.getElementById('lista-de-tarefas');
const btnLimpar = document.getElementById('limpar-lista-btn');

let tarefas = [];


// Desenhar a Lista
function renderizarLista(){

    // Limpa a lista existente no HTML para não duplicar
    ulLista.innerHTML = '';

    // Percorre o Array de tarefas
    for (const tarefa of tarefas){

        const li = document.createElement('li');

        li.textContent = tarefa;

        ulLista.appendChild(li);
    }
}

function adicionarTarefa(){
    const textoTarefa = inputTarefa.value.trim();  // Pega o texto e remove espaços

    if (textoTarefa !== ""){
        
        tarefas.push(textoTarefa);

        renderizarLista();

        inputTarefa.value = '';

    } else{
        alert("Digite uma tarefa, agora!");
    }
}

function limparLista(){

    tarefas = [];

    renderizarLista();
}


btnAdicionar.addEventListener('click', adicionarTarefa);

renderizarLista();

btnLimpar.addEventListener('click', limparLista);