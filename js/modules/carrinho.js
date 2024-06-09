const quantidadeCarrinho = document.getElementById('numero');
const btnAddCarrinho = document.querySelector('.addCarrinho');

const bodyDetalhes = document.getElementById('detalhes');
let quantidade = 0;

function adicionarItenCarrinho() {
  if (quantidade < 10) {
    quantidade++;
  }
  quantidadeCarrinho.innerHTML = quantidade;
}
if (bodyDetalhes) {
  btnAddCarrinho.addEventListener('click', adicionarItenCarrinho);
}
