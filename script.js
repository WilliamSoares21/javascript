function adicionarTarefa() {
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim()//trim polda para que o espaçamento no começo e final sejam ajustados

  if (tarefa == "") {
    let mensagemVazia = "Área vazia, tente adicionar uma tarefa";
    document.getElementById("mensagem").textContent = mensagemVazia;
  } else {
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    document.getElementById("mensagem").textContent = mensagemSucesso;

    let listaTarefas = document.getElementById("listaTarefas")

    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa

    listaTarefas.appendChild(novaTarefa)
  }
  //limpa o inpput do usuário
  inputTarefa.value = ""

}
