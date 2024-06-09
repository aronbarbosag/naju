const btn_filtro = document.querySelectorAll('.filtro button');
const nomeElementos = document.querySelectorAll('.indice');
const nomeDoces = document.querySelectorAll('.nomedoce');
const lupa = document.getElementById('iconePesquisa');
const searchInput = document.querySelector('.search input');
function focusInput() {
  searchInput.focus();
}

lupa.addEventListener('click', focusInput);

function filtroAtivo(event) {
  btn_filtro.forEach((btn) => {
    btn.classList.remove('ativo');
  });
  if (!event.target.classList.contains('ativo')) {
    event.target.classList.add('ativo');
  }

  pegarNomeBottao();
}

btn_filtro.forEach((btn) => {
  btn.addEventListener('click', filtroAtivo);
});

// pegar o nome do bottao que esta selecionado

function pegarNomeBottao() {
  btn_filtro.forEach((btn) => {
    if (btn.classList.contains('ativo')) {
      const nomeBotao = btn.innerHTML.toLowerCase();

      nomeElementos.forEach((elemento) => {
        if (nomeBotao == 'todos') {
          elemento.parentElement.classList.remove('hidden');
          return;
        }
        if (!nomeBotao.includes(elemento.innerHTML.toLowerCase())) {
          elemento.parentElement.classList.add('hidden');
        } else {
          elemento.parentElement.classList.remove('hidden');
        }
      });
    }
  });
}

function pesquisarItem() {
  const texto = this.value.toLowerCase();

  // nomeElementos.forEach((elemento) => {
  //   if (texto != '') {
  //     if (!elemento.innerHTML.toLowerCase().includes(texto)) {
  //       elemento.parentElement.classList.add('hidden');
  //     } else {
  //       elemento.parentElement.classList.remove('hidden');
  //     }
  //   }
  // });

  nomeDoces.forEach((doces) => {
    if (texto != '') {
      if (!doces.innerHTML.toLowerCase().includes(texto)) {
        doces.parentElement.classList.add('hidden');
      } else {
        doces.parentElement.classList.remove('hidden');
      }
    } else {
      doces.parentElement.classList.remove('hidden');
    }
  });
}

searchInput.addEventListener('keyup', pesquisarItem);
