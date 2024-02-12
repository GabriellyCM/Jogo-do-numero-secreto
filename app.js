let lsitaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


//forma de encurtar usando tags
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
//funcao que serve para exibir as mensagens iniciais
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto.');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 10.');
}
exibirMensagemInicial();

//funcao para aparecer no console
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobiu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1' , 'Acertou!');
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p' , 'O numero secreto e menor');
        } else {
            exibirTextoNaTela('p' , 'O numero secreto e maior');
        }
        // tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
}
//codigo para gerar numero aleatorio
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = lsitaDeNumeroSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite) {
    lsitaDeNumeroSorteados = [];
   }

   if (lsitaDeNumeroSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    lsitaDeNumeroSorteados.push(numeroEscolhido);
    console.log(lsitaDeNumeroSorteados);
    return numeroEscolhido;
   }
}
//codigo para limpar o campo do numero toda vez errada
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
//funcao que serve para reiniciar o jogo com todos os parametros corretos
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}