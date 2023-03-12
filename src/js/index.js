// Objetivo, quando clicar no botão temos que mostrar a imagem de fundo correspondente.
/*  Passo 1 - pegar os elementos
    Passo 2 - identificar o clique de usuario no botao
    passo 3 - desmarcar o botao selecionado anterior
    passo 4 - marcar o botão clicado como se estivesse selecionado
    passo 5 - esconder a imagem anterior
    passo 6 - fazer aparecer a imagem de fundo correspondete ao botao clicado */
//passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.Imagem');

//passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log(indice);
        //passo 3
        desmacarBotao();
        //passo 4
        marcarBotao(botao);
        //passo 5
        esconderImagemAtiva();
        //passo 6
        mostrarImagemDeFundo(indice);

    } )
} )

function marcarBotao(botao) {
    botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function desmacarBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}
