function escolheuPapel(min, max){
    sorteados = max - min;
    var images = document.getElementsByClassName("div2");
    var tentativa = parseInt(document.getElementById("tentativa").innerHTML);
    var acerto = parseInt(document.getElementById("acerto").innerHTML);
    var erro = parseInt(document.getElementById("erro").innerHTML);
    var num1 = Math.random() * sorteados;
    if(true){
        if(num1 > 2){
            alert('Você escolheu Papel e ganhou de Pedra')
        tentativa += 1;
        document.getElementById('tentativa').innerHTML = tentativa;
        acerto +=1;
        if(acerto == 2){
            alert('Parabéns! Você conseguiu ganhar!');
            window.location.reload()
        }
        document.getElementById('acerto').innerHTML = acerto;
        } else if(num1 > 1){
            alert('Você escolheu Papel e perdeu para Tesoura')
        tentativa +=1;
        document.getElementById('tentativa').innerHTML = tentativa;
        erro += 1;
        if(erro == 2){
            alert('Infelizmente, Você não conseguiu ganhar! Tente novamente!');
            window.location.reload()
        }
        document.getElementById('erro').innerHTML = erro;
        } else {
            alert('Você escolheu Papel e empatou com Papel!')
        tentativa +=1;
        document.getElementById('tentativa').innerHTML = tentativa;
        }
    }
}

function escolheuPedra(min, max){
    sorteados = max - min;
    var images = document.getElementsByClassName("div1");
    var tentativa = parseInt(document.getElementById("tentativa").innerHTML);
    var acerto = parseInt(document.getElementById("acerto").innerHTML);
    var erro = parseInt(document.getElementById("erro").innerHTML);
    var num1 = Math.random() * sorteados;
    if(true){
        if(num1 > 2){
            alert('Você escolheu Pedra e ganhou de Tesoura')
            tentativa += 1;
            document.getElementById('tentativa').innerHTML = tentativa;
            acerto +=1;
            if(acerto == 2){
                alert('Parabéns! Você conseguiu ganhar!');
                window.location.reload()
            }
            document.getElementById('acerto').innerHTML = acerto;
        } else if(num1 > 1){
            alert('Você escolheu Pedra e perdeu para o Papel')
            tentativa +=1;
            document.getElementById('tentativa').innerHTML = tentativa;
            erro += 1;
            if(erro == 2){
                alert('Infelizmente, Você não conseguiu ganhar! Tente novamente!');
                window.location.reload()
            }
            document.getElementById('erro').innerHTML = erro;
        } else {
            alert('Você escolheu Pedra e empatou com Pedra!')
            tentativa +=1;
            document.getElementById('tentativa').innerHTML = tentativa;
        }
    }
}
function escolheuTesoura(min, max){
    sorteados = max - min;
    var images = document.getElementsByClassName("div3");
    var tentativa = parseInt(document.getElementById("tentativa").innerHTML);
    var acerto = parseInt(document.getElementById("acerto").innerHTML);
    var erro = parseInt(document.getElementById("erro").innerHTML);
    var num1 = Math.random() * sorteados;
    if(true){
        if(num1 > 2){
            alert('Você escolheu Tesoura e ganhou de Papel')
            tentativa += 1;
            document.getElementById('tentativa').innerHTML = tentativa;
            acerto +=1;
            if(acerto == 2){
                alert('Parabéns! Você conseguiu ganhar!');
                window.location.reload()
            }
            document.getElementById('acerto').innerHTML = acerto;
        } else if(num1 > 1){
            alert('Você escolheu Tesoura e perdeu para Pedra')
            tentativa +=1;
            document.getElementById('tentativa').innerHTML = tentativa;
            erro += 1;
            if(erro == 2){
                alert('Infelizmente, Você não conseguiu ganhar! Tente novamente!');
                window.location.reload()
            }
            document.getElementById('erro').innerHTML = erro;
        } else {
            alert('Você escolheu Tesoura e empatou com Tesoura!')
            tentativa +=1;
            document.getElementById('tentativa').innerHTML = tentativa;
        }
    }
}
