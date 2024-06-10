const quantidadeCarrinho = document.getElementById('numero');
const btnAddCarrinho = document.querySelector('.addCarrinho');
const modal_carrinho = document.querySelector('.modal-carrinho');
const icone_carrinho = document.querySelector('#carrinho img');
const bodyDetalhes = document.getElementById('detalhes');
let quantidade = 0;

function showModal() {
  modal_carrinho.classList.toggle('hidden');
}

function adicionarItenCarrinho() {
  if (quantidade < 10) {
    quantidade++;
  }
  quantidadeCarrinho.innerHTML = quantidade;
}
if (bodyDetalhes) {
  btnAddCarrinho.addEventListener('click', adicionarItenCarrinho);
  icone_carrinho.addEventListener('click', showModal);
}
