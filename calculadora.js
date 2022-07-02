function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação(**)\n'));

    let n1 = Number(prompt('insira o primeiro valor')); //number converte a string pra numero
    let n2 = Number(prompt('insira o segundo valor'));
    let resultado;

    function soma(){
        resultado = n1+n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }
    function subtracao(){
        resultado = n1-n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
    }
    function multiplicacao(){
        resultado = n1*n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
    }
    function divisaoReal(){
        resultado = n1/n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
    }
    function divisaoInteira(){
        resultado = n1%n2;
        alert(`${n1} % ${n2} = ${resultado}`);
        novaOperacao();
    }
    function potenciacao(){
        resultado = n1**n2;
        alert(`${n1} ** ${n2} = ${resultado}`);
        novaOperacao();
    }

    function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação?\n 1-Sim\n2-Não');

        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2){
            alert('Até mais!');
        } else {
            alert('Digite uma opção válida!');
            novaOperacao();
        }
    }

    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        potenciacao();
    }

    console.log(operacao);
}

calculadora();