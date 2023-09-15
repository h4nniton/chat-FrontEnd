'use strict'

const mensagens = [

    {
        nome: 'Emily',
        mensagem: 'NO!! she is the other woman.',
        tempo: 'há 30 minutos',
        contato: 'Victor',
        imagem: 'emily.jpg',
        media: 'twitter.svg',
        numero: '4'
    },

    {
        nome: 'Victor',
        mensagem: 'I felt i should be with you always...',
        tempo: 'há 29 minutos',
        contato: 'Victoria',
        imagem: 'victor.jpg',
        media: 'twitter.svg',
        numero: '3'
    },

    {
        nome: 'Victoria',
        mensagem: 'Victor is with a dead woman, a corpse bride!!!',
        tempo: 'há 28 minutos',
        contato: 'Priest',
        imagem: 'victoria.jpg',
        media: 'twitter.svg',
        numero: '2'
    },

    {
        nome: 'Maggot',
        mensagem: 'If he only knew.. the you that we know :/',
        tempo: 'há 27 minutos',
        contato: 'Emily',
        imagem: 'minhoca.jpg',
        media: 'twitter.svg',
        numero: '1'
    },

]

function mostrarCards (mensagens) {
    const cardContainer = document.getElementById('card-container')

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.classList.add('icon')
    imagem.src = `./icon-perfil/${mensagens.imagem}`
    imagem.alt = mensagens.nome
    
    const cardDescription = document.createElement('div')
    cardDescription.classList.add('card-description')

    const nome = document.createElement('h2')
    nome.textContent = mensagens.nome

    const mensagem = document.createElement('p')
    mensagem.textContent = mensagens.mensagem

    const tempo = document.createElement('div')
    tempo.classList.add('tempo')
    tempo.textContent = mensagens.tempo

    const contato = document.createElement('div')
    contato.classList.add('contato')
    contato.textContent = mensagens.contato

    const media = document.createElement('img')
    media.classList.add('media')
    media.src = `./icon-socialmedia/${mensagens.media}`
    media.alt = mensagens.media


    const numero = document.createElement('numero')
    numero.classList.add('numero')
    numero.textContent = mensagens.numero



    cardDescription.replaceChildren(nome, mensagem, tempo, contato, numero)
    card.replaceChildren(imagem, media, cardDescription)
    cardContainer.appendChild(card)
}

mensagens.forEach(mostrarCards)