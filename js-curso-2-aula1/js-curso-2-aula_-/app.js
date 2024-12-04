let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let ranking = 1;

function registraJogador(){
    let jogador = prompt('Insira seu nome');
    ranking++;
}

registraJogador();

function inserirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}

function exibirMensagemInicial(){
    inserirTexto('h1','Jogo do Número Secreto da PIA');
    inserirTexto('p', 'Escolha seu número entre 1 e 10');
}

exibirMensagemInicial();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 +1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        inserirTexto('h1','Acertou');
        let palavraTentativa = tentativas>1? 'tentativas' :'tentativa';
        let mensagemTentativas = `Vc descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
        inserirTexto('p', mensagemTentativas);
        //let resultado = console.log(`O jogador ${jogador} venceu em ${tentativas} tentativas`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            inserirTexto('p', 'O número secreto é menor')
        }else{
            inserirTexto('p', 'O número secreto é maior')
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    registraJogador();
}


if(ranking==5){
    if (tentativas == 1) {console.log(resultado);
}else if (tentativas ==2){console.log(resultado);
    }else if (tentativas ==3){console.log(resultado);
    }else if (tentativas ==4){console.log(resultado);
    }else if (tentativas ==5){console.log(resultado);
           }else if (tentativas ==6){console.log(resultado);
           }else if (tentativas ==7){console.log(resultado);}
}