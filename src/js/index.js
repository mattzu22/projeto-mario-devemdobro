const button = document.querySelector('.botao-trailer')
const modal =  document.querySelector('.modal')
const fecharModal = document.querySelector('.fechar-modal')


button.addEventListener('click', () =>{
   modal.classList.add('aberto')
})

fecharModal.addEventListener('click', () =>{
    const modalComAberto = document.querySelector('.modal.aberto')
    modalComAberto.classList.remove('aberto')
})

