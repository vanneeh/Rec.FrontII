// fetch funcionando pra salvar a lista no localStorage
fetch('https://fakestoreapi.com/products?limit=5')
        .then((resposta) => resposta.json())
        .then((produtos) => {
            console.log(produtos)
            localStorage.setItem('items', JSON.stringify([produtos]))
            })
        .catch((erro) => console.log(erro))

// pega o botao pra mostrar os produtos na lista
const btnMostrarProdutos = document.getElementById("showProducts");

const mostrarProdutos = () => {
    let lista = JSON.parse(localStorage.getItem('items'));
    lista.forEach(function (produtos) {
        document.querySelector("#list").innerHTML +=
            `
             <li class="item">
             <div class="descricao">
               <p class="nome">${produtos.title}</p>
             </div>
             </li>
            `;
    });
};




//const produtos = () => {
    //fetch('https://fakestoreapi.com/products?limit=5')
       // .then((resposta) => resposta.json())
       // .then((json) => console.log(json))
/* .then((produtos) => {
     produtos.forEach(function (produtos) {
         document.querySelector("#list").innerHTML +=
             `
              <li class="item">
              <div class="descricao">
                <p class="nome">${produtos.title}</p>
              </div>
              </li>
             `;
    // });
// });
//};

/*

produtos.forEach(function (produtos) {
 document.querySelector("#list").innerHTML +=
     `
      <li class="item">
      <div class="descricao">
        <p class="nome">${produtos.title}</p>
      </div>
      </li>
     `;
// });
//});
*/

// listener pra quando clicar no botão chamar a função que mostra na tela
btnMostrarProdutos.addEventListener('click', (mostrarProdutos));

const BotaoDeleta = () => {
    const BotaoDeleta = document.createElement('button');
    //cria botão
    BotaoDeleta.classList.add('delete-button');
    BotaoDeleta.innerText='Deletar';
    //texto do botao
    BotaoDeleta.addEventListener('click', removerItem);
    //escutador de evento
    return BotaoDeleta;
    //retorna o botão
};

const removerItem = (event) =>{
    const BotaoDeleta = event.target;
    //evento ocorre onde o cursor selecionar
    const itemDeletado = BotaoDeleta.parentElement;
    // o evento ecoará para o elemento pai
    itemDeletado.remove();
    //método de remoção
}



/* 
const item = document.createElement('div');
const listaProdutos = document.getElementById('list');
item.classList.add('produto');

let lista = localStorage.getItem('items');
const conteudo =`
    <div class="item">
    <div class="info">
        <h3>${lista.id}</h3>
        <p>${lista.title} </p>
    </div>
    </div>`;

item.innerHTML=conteudo;
item.appendChild(BotaoDeleta());

listaProdutos.appendChild(item); */