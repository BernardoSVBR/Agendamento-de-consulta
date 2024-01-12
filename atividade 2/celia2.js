var consultas = []

function agendarConsulta(event) {
  event.preventDefault()

  var nome = document.getElementById("nome").value
  var endereco = document.getElementById("endereco").value
  var bairro = document.getElementById("bairro").value
  var cep = document.getElementById("cep").value
  var estado = document.getElementById("estado").value
  var pais = document.getElementById("pais").value

  consultas.push({ nome: nome, endereco: endereco, bairro: bairro, cep: cep, estado: estado, pais: pais })

  document.getElementById("nome").value = ""
  document.getElementById("endereco").value = ""
  document.getElementById("bairro").value = ""
  document.getElementById("cep").value = ""
  document.getElementById("estado").value = ""
  document.getElementById("pais").value = ""

  mostrarResultados(nome, endereco, bairro, cep, estado, pais)
}

function mostrarResultados(nome, endereco, bairro, cep, estado, pais) {
  let resultados = document.getElementById("resultados")
  resultados.innerHTML = ""

  let header = document.createElement("h1")
  header.innerText = "Aqui está seu endereço de entrega"
  resultados.appendChild(header)

  if (consultas.length === 0) {
    let mensagem = document.createElement("p")
    mensagem.innerText = "Nenhum endereço de entrega encontrado."
    resultados.appendChild(mensagem)
    return
  }

  let tabela = document.createElement("table")
  let cabecalho = tabela.createTHead()
  let linhaCabecalho = cabecalho.insertRow()
  let colunaNome = linhaCabecalho.insertCell()
  let colunaEndereco = linhaCabecalho.insertCell()
  let colunaBairro = linhaCabecalho.insertCell()
  let colunaCep = linhaCabecalho.insertCell()
  let colunaEstado = linhaCabecalho.insertCell()
  let colunaPais = linhaCabecalho.insertCell()
  colunaNome.innerText = "Nome"
  colunaEndereco.innerText = "Endereço"
  colunaBairro.innerText = "Bairro"
  colunaCep.innerText = "CEP"
  colunaEstado.innerText = "Estado"
  colunaPais.innerText = "País"

  let corpoTabela = tabela.createTBody()
  for (let consulta of consultas) {
    let linha = corpoTabela.insertRow()
    let colunaNome = linha.insertCell()
    let colunaEndereco = linha.insertCell()
    let colunaBairro = linha.insertCell()
    let colunaCep = linha.insertCell()
    let colunaEstado = linha.insertCell()
    let colunaPais = linha.insertCell()
    colunaNome.innerText = consulta.nome
    colunaEndereco.innerText = consulta.endereco
    colunaBairro.innerText = consulta.bairro
    colunaCep.innerText = consulta.cep
    colunaEstado.innerText = consulta.estado
    colunaPais.innerText = consulta.pais
  }

  let mensagem = document.createElement("p")
  mensagem.innerText = `Caro ${nome}, seu endereço de entrega é ${endereco}, ${bairro}, ${cep}, ${estado}, ${pais}.`
  resultados.appendChild(mensagem)

  resultados.appendChild(tabela)
}

function exibirImagem() {
  let container = document.querySelector(".container")
  container.classList.add("concluido")
}
