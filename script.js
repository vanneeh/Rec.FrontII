//pega o botao pra mostrar os produtos na lista
const btnMostrarProdutos = document.getElementById("showProducts");
const listaDeProdutos = document.getElementById('list');
const novaListaProdutos = document.getElementById('newList');

/* let lista = JSON.parse(localStorage.getItem('items')); */

novaListaProdutos.addEventListener('click', () => {
    // fetch funcionando pra salvar a lista no localStorage
    fetch('https://fakestoreapi.com/products?limit=5')
        .then((resposta) => resposta.json())
        .then((produtos) => {
            console.log(produtos)
            localStorage.setItem('items', JSON.stringify(produtos))
        })
        .catch((erro) => console.log(erro))

});

const mostrarProdutos = () => {
    let lista = JSON.parse(localStorage.getItem('items'));
    listaDeProdutos.innerHTML = "";
    lista.forEach(function (el) {
        const item = document.createElement('div');
        const conteudo = `
        <li class="item">
        <p class="title">${el.title}</p>
        </li>
        `;
        item.classList.add('produto');
        item.id = el.id;
        item.innerHTML = conteudo;

        item.appendChild(BotaoDeleta());

        listaDeProdutos.appendChild(item);
    });
};

//botao de deletar
const BotaoDeleta = () => {
    const BotaoDeleta = document.createElement('button');
    BotaoDeleta.classList.add('delete-button');
    BotaoDeleta.innerText = 'Deletar';
    BotaoDeleta.addEventListener('click', removerItem);
    return BotaoDeleta;
};

//função de remover o item da lista
const removerItem = (event) => {
    let lista = JSON.parse(localStorage.getItem('items'));
    localStorage.removeItem('items');
    let removerItem = event.target;
    let itemRemovido = removerItem.parentElement.id;

    console.log(itemRemovido);
   /* console.log(nova);
    nova = lista.filter((item) => item.id !== itemRemovido);
    console.log(nova); */
    localStorage.setItem('items', JSON.stringify(lista.filter((item) => item.id !== itemRemovido)));

    mostrarProdutos();
};


// listener pra quando clicar no botão chamar a função que mostra na tela
btnMostrarProdutos.addEventListener('click', mostrarProdutos);
