  
const itens = ['descricao', 'vencimento', 'valor',  'tipo']

const inicio = () => {
    const btn = document.getElementById('info')
    btn.onclick = informacoes
}

const informacoes = () => {
    const table = document.getElementById('tabInformacao')
    const tr = document.createElement('tr')
    const tBody = table.tBodies[0]
    tBody.appendChild(tr)
    itens.forEach(inputId => 
        novaColuna(tr, document.getElementById(inputId).value)
    )
}

const novaColuna = (line, content) => {
    const td = document.createElement('td')
    td.innerHTML = content
    line.appendChild(td)
}

inicio()