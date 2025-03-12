let tarefas = []


function adicionarTarefa() {

  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim()//trim polda para que o espaçamento no começo e final sejam ajustados

  const mensagem = document.getElementById("mensagem")


  if (tarefa == "") {
    let mensagemVazia = "Área vazia, tente adicionar uma tarefa";
    mensagem.textContent = mensagemVazia;
  } else {
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;

    tarefas.push(tarefa)
    renderizarTarefas()
  }
  //limpa o inpput do usuário
  inputTarefa.value = ""

}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas")

  listaTarefas.innerHTML = ""

  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefas[i]

    let botaoRemover = document.createElement("button")
    botaoRemover.className = "remover"
    botaoRemover.textContent = "Remover"
    botaoRemover.onclick = () => removerTarefa(i)

    let botaoEditar = document.createElement("button")
    botaoEditar.className = "editar"
    botaoEditar.textContent = "Editar"
    botaoEditar.onclick = () => editarTarefa(i)



    novaTarefa.appendChild(botaoRemover)
    novaTarefa.appendChild(botaoEditar)
    listaTarefas.appendChild(novaTarefa)
  }

}

function removerTarefa(i) {

  tarefas.splice(i, 1)
  renderizarTarefas()
}


function editarTarefa(i) {
  let tarefaEditada = prompt("Edite a tarefa: ")
  if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada
    renderizarTarefas()

  }
}

function limparLista() {
  const mensagem = document.getElementById("mensagem");

  if (tarefas.length == 0) {
    mensagem.textContent = "Não é possível limpar uma lista Vazia !";
  } else {
    tarefas.length = 0;
    renderizarTarefas()
    mensagem.textContent = "Lista limpa com sucesso !"
  }

}
















