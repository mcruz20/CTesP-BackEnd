function nota_final(notap1,notap2,notap3){
    return notap1 * 0.3 + notap2 * 0.3 + notap3 * 0.4;
}

function mes(numero){
    switch(numero){
        case 1:
        {
            console.log("Janeiro");
            break;
        }
        case 2:
        {
            console.log("Fevereiro");
            break;
        }
        case 3:
        {
            console.log("Março");
            break;
        }
        case 4:
        {
            console.log("Abril");
            break;
        }
        case 5:
        {
            console.log("Maio");
            break;
        }
        case 6:
        {
            console.log("Junho");
            break;
        }
        case 7:
        {
            console.log("Julho");
            break;
        }
        case 8:
        {
            console.log("Agosto");
            break;
        }
        case 9:
        {
            console.log("Setembro");
            break;
        }
        case 10:
        {
            console.log("Outubro");
            break;
        }
        case 11:
        {
            console.log("Novembro");
            break;
        }
        case 12:
        {
            console.log("Dezembro");
            break;
        }
    }
}

function operacao(op){
    switch(op){
        case 1:
        {
            var numero1 = 5;
            var numero2 = 5;
            var soma = numero1 + numero2;
            console.log("A soma dos números é: " + soma);
            break;
        }
        case 2:
        {
            var numero1 = 5;
            var numero2 = 5;
            var multiplicacao = numero1 * numero2;
            console.log("A Multiplicação dos números é: " + multiplicacao);
            break;
        }
        case 3:
        {
            var numero1 = 5;
            var numero2 = 5;
            var divisao = numero1 / numero2;
            console.log("A divisão dos números é: " + divisao);
            break;   
        }
        case 4:
        {
            var numero1 = 10;
            var numero2 = 5;
            var subtracao = numero1 - numero2;
            console.log("A subtração dos números é: " + subtracao);
            break;
        }
        case 5:
        {
            var numero1 = 4;
            var numero2 = 3;
            var potencia = Math.pow(numero1,numero2);
            console.log("A potencia dos números é: " + potencia);
            break;
        }
    }
}

function factorial(num)
{
    
    if (num < 0) {
        return -1;
    }
    
    else if (num == 0) {
        return 1;
    }
   
    else {
        return (num * factorial(num - 1));
    }
}

function main(){
    var notap1 = 15;
    var notap2 = 12;
    var notap3 = 10;
    var notaF = nota_final(notap1, notap2, notap3);
    if (notaF < 9.5){
        console.log("Nota Final: " + notaF + ". Está Reprovado.");
    }
    else{
        console.log("Nota Final: " + notaF + ". Está Aprovado.");
    }
    

    var f = factorial(5);
    console.log("Fatorial: " + f);

    mes(2);

    operacao(5);

}

main()