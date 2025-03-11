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
  let i = 0;
  for (i; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefas[i]
    listaTarefas.appendChild(novaTarefa)
  }




}
