//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = []

function adicionarAmigo() {
    const amigo = document.getElementById('amigo').value

    nomes.push(amigo)
    atualizarLista()
    amigo.textContent = ''
    amigo.focus()
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.textContent = ''
    
    nomes.forEach((amigo, index) => {
        const li = document.createElement('li')
        li.textContent = `${index +1}. ${amigo}`

        listaAmigos.appendChild(li)
    })
}

function sortearAmigo() {
    const nomeSorteado = nomes[Math.floor(Math.random() * nomes.length)]

    const resultado = document.getElementById('resultado')
    const p = document.createElement('p')
    p.textContent = 'Nome sorteado: ' + nomeSorteado

    resultado.appendChild(p)
}