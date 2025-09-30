const inputTarefa = document.getElementById("nova-tarefa-input");
const btnAdicionar = document.getElementById("adicionar-tarefa-btn");
const ulLista = document.getElementById("lista-de-tarefas");
const btnLimpar = document.getElementById("limpar-lista-btn");

let tarefas = [
  { texto: "Passear com o cachorro", concluida: true },
  { texto: "Estudar JavaScript", concluida: true },
  { texto: "Arrumar a casa", concluida: false },
];

// Desenhar a Lista
function renderizarLista() {
  ulLista.innerHTML = "";

  // Percorre o Array de tarefas
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("form-check");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input", "me-1");
    checkbox.checked = tarefa.concluida;
    checkbox.id = `tarefa-${index}`;

    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.textContent = tarefa.texto;
    label.htmlfor = `tarefa-${index}`;

    li.appendChild(checkbox);
    li.appendChild(label);

    if (tarefa.concluida) {
      label.style.textDecoration = "line-through";
      label.style.color = "#6c757d";
    }

    ulLista.appendChild(li);
  });
}

function adicionarTarefa() {
  const textoTarefa = inputTarefa.value.trim(); // Pega o texto e remove espaços

  if (textoTarefa !== "") {
    tarefas.push({
      texto: textoTarefa,
      concluida: false,
    });

    renderizarLista();

    inputTarefa.value = "";
  } else {
    alert("Digite uma tarefa");
  }
}

function limparLista() {
  tarefas = [];

  renderizarLista();
}

function alternarConclusao(index) {
  tarefas[index].concluida = !tarefas[index].concluida;
  renderizarLista();
}
ulLista.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    const id = event.target.id;
    const index = parseInt(id.split("-")[1]);
    alternarConclusao(index);
    return;
  }
});

inputTarefa.addEventListener("keypress", function (event) {
  if (event.key === "Enter" || event.keyCode === 13) {
    event.preventDefault(); // Evita o comportamento padrão do Enter
    adicionarTarefa();
  }
});

btnAdicionar.addEventListener("click", adicionarTarefa);

renderizarLista();

btnLimpar.addEventListener("click", limparLista);
