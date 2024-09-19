/*quando clicar no personagem da listagem temos que esconder o cartao do personagem aberto e mostrar o cartao correspondente*/


const listaSelecaoPersonagens = document.querySelectorAll('.cabeca1')
const personagensCard = document.querySelectorAll('cartao-personagem')


listaSelecaoPersonagens.forEach(personagem =>{
    personagem.addEventListener('click', () =>  {
        const cartaoPersonagemAberto = document.querySelector('.aberto')
        cartaoPersonagemAberto.classList.remove('aberto')

        const idPersonagemSelecionado = personagem.attributes.id.value

        const cartaoPersonagemParaAbrir = document.getElementById('cartao-' + idPersonagemSelecionado)
        cartaoPersonagemParaAbrir.classList.add('aberto')






    })
    
})
