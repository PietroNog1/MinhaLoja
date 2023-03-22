import { data } from "./database.js";

let meuCarrinho = []

let quantidade = document.querySelector('#cont')

let valorTotal = 0 

const div1 = document.querySelector('.cart-empty')

const produtos = document.querySelector('.cart-products')

const botaoTodos = document.querySelector('.btn1')

const botaoAcessorios = document.querySelector('.btn2')

const botaoCamisetas = document.querySelector('.btn3')

const inputBusca = document.querySelector('.search-input')

const botaoBusca = document.querySelector('.search-button')


function addCarts(){
    for(let i = 0;i < data.length; i++){
        let item = data[i]

        let ul = document.querySelector('#comeco')

        let li = document.createElement('li');
        li.setAttribute('class', 'caixa');
        ul.appendChild(li);

        let figura = document.createElement('figure');
        li.appendChild(figura);

        let imagem = document.createElement('img');
        imagem.setAttribute('class', 'imagem');
        imagem.src = item.img;
        imagem.alt = item.nameItem;
        figura.appendChild(imagem);

        let div = document.createElement('div');
        div.setAttribute('class', 'tagDiv');
        li.appendChild(div);

        let texto1 = document.createElement('h2');
        texto1.setAttribute('class', 'idProduto');
        texto1.innerHTML = `${item.tag}`;
        div.appendChild(texto1);

        let nomeProduto = document.createElement('h3');
        nomeProduto.setAttribute('class', 'title');
        nomeProduto.innerHTML = `${item.nameItem}`;
        li.appendChild(nomeProduto);

        let paragrafo = document.createElement('p');
        paragrafo.setAttribute('class', 'text');
        paragrafo.innerHTML = `${item.description}`;
        li.appendChild(paragrafo);

        let preco = document.createElement('p');
        preco.setAttribute('class', 'price');
        preco.innerHTML = `R$ ${item.value},00`;
        li.appendChild(preco);

        let botao = document.createElement('button');
        botao.setAttribute('class', 'addToCart');
        botao.innerHTML = `${item.addCart}`;
        li.appendChild(botao);

        botao.addEventListener('click',()=>{
            quantidade.innerHTML++
            valorTotal += item.value
            document.querySelector('#valorTotal').innerHTML = `R$${valorTotal.toFixed(2)}`
            criarCarrinho(item.img, item.nameItem, item.value)
            div1.classList.add('hidden')
            produtos.classList.remove('hidden')
        })
    }
}
addCarts()

function criarCarrinho(imagem, coisa, valor){

    let ul2 = document.querySelector('.cart-list')

    let li2 = document.createElement('li')
    li2.setAttribute('class', 'caixa2')
    ul2.appendChild(li2)

    let imagem2 = document.createElement('img')
    imagem2.setAttribute('class', 'imagem2')
    imagem2.src = imagem
    imagem2.alt = coisa
    li2.appendChild(imagem2)

    let div2 = document.createElement('div')
    div2.setAttribute('class', 'parteTextos')
    li2.appendChild(div2)

    let textoCarrinho = document.createElement('h3')
    textoCarrinho.setAttribute('class','texto2')
    textoCarrinho.innerHTML = coisa
    div2.appendChild(textoCarrinho)

    let preco2 = document.createElement('p')
    preco2.setAttribute('class', 'textoPreco')
    preco2.innerHTML = `R$${valor},00`
    div2.appendChild(preco2)

    let botao2 = document.createElement('p')
    botao2.setAttribute('class', 'remover')
    botao2.innerHTML = `Remover do Carrinho`
    div2.appendChild(botao2)

    botao2.addEventListener('click',()=>{
        quantidade.innerHTML--
        valorTotal -= valor
        document.querySelector('#valorTotal').innerHTML = `R$${valorTotal.toFixed(2)}`
        li2.remove()
        if(quantidade.innerHTML === '0'){
            div1.classList.remove('hidden')
            produtos.classList.add('hidden')
        }
    })

}


botaoAcessorios.addEventListener('click', ()=>{
    const tag = document.querySelectorAll('.idProduto')
    for(let i = 0; i < tag.length; i++){
        const li = tag[i].closest('.caixa')
        if(tag[i].innerHTML === 'Acessórios'){
            li.classList.remove('hidden')
        }else{
            li.classList.add('hidden')
        }
    }
})


botaoCamisetas.addEventListener('click', ()=>{
    const tag = document.querySelectorAll('.idProduto')
    for(let i = 0; i < tag.length; i++){
        const li = tag[i].closest('.caixa')
        if(tag[i].innerHTML === 'Camisetas'){
            li.classList.remove('hidden')
        }else{
            li.classList.add('hidden')
        }
    }
})

botaoTodos.addEventListener('click', ()=>{
    const tag = document.querySelectorAll('.idProduto')
    for(let i = 0; i < tag.length; i++){
        const li = tag[i].closest('.caixa')
        li.classList.remove('hidden')
    }
})

inputBusca.addEventListener('input', () => {
    const tag = document.querySelectorAll('.idProduto')
    const nome = document.querySelectorAll('.title')
    for (let i = 0 ; i < tag.length; i++) {
        const li = tag[i].closest('.caixa')
        const tagL = tag[i].innerHTML.toUpperCase()
        const nomeL = nome[i].innerHTML.toUpperCase()
        const busca = inputBusca.value.toUpperCase()
        let letraTag = ''
        let palavraNome = ''
        let pesquisa = ''
        for(let j=0; j< busca.length; j++) {
            letraTag += tagL[j]
            palavraNome += nomeL[j]
            pesquisa += busca[j]
            if(letraTag === pesquisa || palavraNome === pesquisa ){
                li.classList.remove('hidden')
            }else{
                li.classList.add('hidden')
            }

        }
    }
})