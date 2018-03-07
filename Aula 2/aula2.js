<<<<<<< HEAD
function Imc(peso,altura){

    var imc = peso / (altura*altura);
    var total = parseFloat(imc.toFixed(2))

    if (total < 18.5){
        console.log("Estás abaixo do peso com o IMC de " + total);
    }
    else if(total >= 18.5 && total < 25){
        console.log("Estás no peso normal com o IMC de " + total);
    }
    else if(total >= 25 && total < 30){
        console.log("Estás acima do peso com o IMC de " + total);
    }
    else{
        console.log("Estás obeso com o IMC de " + total);
    }
}

function reverso(frase) {
    
    var frasef = "";
    var i = frase.length -1;

    while (i >= 0){
        frasef+=frase[i];
        i--;
    }
    return "Hoje e Domingo = " + frasef;

}

function nvogais(vogal){
    var vogalf = ['a','e','i','o','u'];
    var i,n=0;

    for (i=0;i<vogal.length;i++){
        for(j=0;j<vogalf.length;j++)
        if (vogal[i]==vogalf[j]){
            n++;
        }
        
    }
    if (n == 1){
        return "A tua palavra tem " + n + " uma vogal."
    }
    else{
        return "A tua palavra tem " + n + " vogais.";
    }
    
    
}

function nvezes(frase,letra){
    var n=0,len=frase.length,i;
    frase.toLower();
    letra.toLower();

    for(i=0;i<len;i++){
        
    }
}
  
Imc(67,1.70);
var resultado = reverso("Hoje e Domingo");
console.log(resultado);
var r = nvogais("ca");
console.log(r);


=======
function imc(peso, altura) {
    var imc = peso / (Math.pow(altura, 2));
    imc = imc.toPrecision(3);
    if (imc < 18.5) {
        return "Tem um IMC de " + imc + " .Esta abaixo do peso";
    }
    else if (imc >= 18.5 && imc <= 25) {
        return "Tem um IMC de " + imc + " .Esta com um peso normal";
    }
    else if (imc >= 25 && imc <= 30) {
        return "Tem um IMC de " + imc + " .Esta acima do peso";
    }
    else {
        return "Tem um IMC de " + imc + " .Esta OBESO!";
    }

}

function inverso(frase) {
    var contador = frase.length - 1;
    var fraseF = "";
    while (contador >= 0) {
        fraseF += frase[contador];
        contador--;
    }
    return fraseF;

    /* Inverter palavras e manter o seu estado
for x in range(0,lenght de palavra)
while(frase[x]!=","):
frasef+=frase[x]
adiciona palavra no array
qd acabar o for: contar arrays e criar variavel que vai adicionar uma string de cada vez inversa

*/
}

function vogais(contavogal) {
    var contador = contavogal.length;
    vog = 0;
    vogal = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (i = 0; i != contador; i++) {
        for (x = 0; x != vogal.length; x++) {
            if (contavogal[i] == vogal[x]) {
                vog++;
            }
        }
    }
    /* if (contavogal[i]=="a"||contavogal[i]=="e"||contavogal[i]=="i"||contavogal[i]=="o"||contavogal[i]=="u"){
         vog++;
     }
 else{}
 }*/
    return vog;
}
function vezlet(phrase, letra) {
    phrase.toLower();
    var conta = phrase.length;
    var vezesfinal = 0;
    for (i == 0; i != conta; i++) {
            if (phrase[i] == letra) {
                vezesfinal++;
            }
        }
    console.log(vezesfinal);
}

function main() {
    var resultado = imc(67, 1.70);
    console.log(resultado);
    var resf = inverso("Hoje e domingo!");
    console.log(resf);
    var vogaistotal = vogais("Mario");
    console.log("a palavra tem ", vogaistotal, " vogais");
    var vezesfinale = vezlet("Ana", "a");
    console.log(vezesfinale);
}
main();
>>>>>>> 28de46354396e175e755d83d7a199fdd28fe4f24
