const button = document.querySelector('.botao-trailer')
const modal =  document.querySelector('.modal')


button.addEventListener('click', () =>{
   modal.classList.add('aberto')
})

const fecharModal = document.querySelector('.fechar-modal')

fecharModal.addEventListener('click', () =>{
    const modalComAberto = document.querySelector('.modal.aberto')
    modalComAberto.classList.remove('aberto')
})

