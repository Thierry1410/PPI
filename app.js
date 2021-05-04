const H = document.querySelector("#element_1");
const He = document.querySelector("#element_2");
const Li = document.querySelector("#element_3");
const Be = document.querySelector("#element_4");
const B = document.querySelector("#element_5");


const detalhes = document.querySelector("#detalhes");
const distr = document.querySelector(".subtitle");
const aparencia = document.querySelector('#aparencia');
const nome_do_elemento = document.querySelector('.title');
const ponto_de_fusao = document.querySelector('#ponto_de_fusao');
const img = document.getElementsByClassName(".image is-4by4");



/*  


tudo que está entre chaves [] é para substituir!!!!

Passo 1:

const (Simbolo do elemento) = document.querySelector("#element_[numero do elemento]");

Passo 2: 
var element_1 = {
    nome: "Hidrogênio",                         //nome do elemento
    numero_atomico: 1,                          //número do elemento
    massa_atomica: "1.0008",                    //massa atomica dentro de aspas, e com , 
    ponto_de_fusao: "14,025 K (-259,2°C)",      //Temperatura em Kelvin e dps em Celsius
    ponto_de_ebulicao: "20,28 K (-252,87°C)",   //Temperatura em Kelvin e dps em Celsius
    de: "1s<sup>1</sup>",                       //<sup>número</sup> para colocar o numero superescrito
    aparencia: "(nas CNTP)"                     // aparencia na CNTP


}

Passo 3:
    [simbolo_do_elemento].addEventListener("click", function() {

    detalhes.classList.remove("n-display");
    ClearTable()
    aparencia.insertAdjacentText("afterbegin", element_[n-elemento].aparencia);
    massa_atomica.insertAdjacentText("afterbegin", element_[n-elemento].massa_atomica);
    ponto_de_fusao.insertAdjacentText("afterbegin", element_[n-elemento].ponto_de_fusao);
    ponto_de_ebulicao.insertAdjacentText("afterbegin", element_[n-elemento].ponto_de_ebulicao);
    numero_atomico.insertAdjacentText("afterbegin", element_[n-elemento].numero_atomico);
    distr.insertAdjacentHTML("afterbegin", element_[n-elemento].de);
    nome_do_elemento.insertAdjacentText("afterbegin", element_[n-elemento].nome);
    adicionarImagem(element_1);


})
*/
var element_1 = {
    nome: "Hidrogênio",
    numero_atomico: 1,
    massa_atomica: 1.0008,
    ponto_de_fusao: "14,025 K (-259,2°C)",
    ponto_de_ebulicao: "20,28 K (-252,87°C)",
    de: "1s<sup>1</sup>",
    aparencia: "Gás incolor (nas CNTP)",
    img: "C:/Users/Thierry/Documents/GitHub/PPI/Imgs/Tabela/Hidrogenio.png"
}

var element_2 = {
    nome: "Hélio",
    numero_atomico: 2,
    massa_atomica: "4,002602",
    ponto_de_fusao: "0,95 K (-272.2)",
    ponto_de_ebulicao: "4,22 K (-268,93",
    de: "1s<sup>2</sup>", //  <sup>número</sup>
    aparencia: "Gás incolor (nas CNTP)",
    img: "/Imgs/Tabela/Hélio.png"
}
var element_3 = {
    nome: "Lítio",
    numero_atomico: 3,
    massa_atomica: "6,941",
    ponto_de_fusao: "0)",
    ponto_de_ebulicao: "203123,28 K (-312387°C)",
    de: "1s<sup>2</sup>2s<sup>2",
    aparencia: "Gás inc323olor (na CNTP)",
    img: "/Imgs/Tabela/Lítio.png"
}

var element_4 = {
    nome: "Berílio", //nome do elemento
    numero_atomico: 4, //número do elemento
    massa_atomica: "9,012182", //massa atomica dentro de aspas, e com , 
    ponto_de_fusao: "1560 K (1286,85°C)", //Temperatura em Kelvin e dps em Celsius
    ponto_de_ebulicao: "2754 K (2480,85°C)", //Temperatura em Kelvin e dps em Celsius
    de: "1s<sup>2</sup>2s<sup>2</sup>", //<sup>número</sup> para colocar o numero superescrito
    aparencia: "Sólido, Cinza Metálico", // aparencia na CNTP
    img: "/Imgs/Tabela/Berílio.png"

}
var element_5 = {
    nome: "Boro",
    numero_atomico: 5,
    massa_atomica: "18,8",
    ponto_de_fusao: "2348 K (2704,85°C)",
    ponto_de_ebulicao: "4273 K (3999,85°C)",
    de: "1s<sup>2</sup>2s<sup>2</sup>2p<sup>1</sup>",
    aparencia: "Sólido, Marrom/Preto",
    img: "/Imgs/Tabela/Boro.png"




}


H.addEventListener("click", function() {
    FazerTudo(element_1);
})
He.addEventListener("click", function() {
    FazerTudo(element_2);
})
Li.addEventListener("click", function() {
    FazerTudo(element_3);
})
Be.addEventListener("click", function() {
    FazerTudo(element_4);
})
B.addEventListener("click", function() {
    FazerTudo(element_5);
})

var ClearTable = function() {
    aparencia.innerHTML = "";
    massa_atomica.innerHTML = "";
    ponto_de_fusao.innerHTML = "";
    ponto_de_ebulicao.innerHTML = "";
    numero_atomico.innerHTML = "";
    distr.innerHTML = "";
    nome_do_elemento.innerHTML = "";
    document.getElementById('imagem-tabela').innerHTML = "";
}

var FazerTudo = function(element) {
    detalhes.classList.remove("n-display");
    ClearTable()
    aparencia.insertAdjacentText("afterbegin", element.aparencia);
    massa_atomica.insertAdjacentText("afterbegin", element.massa_atomica);
    ponto_de_fusao.insertAdjacentText("afterbegin", element.ponto_de_fusao);
    ponto_de_ebulicao.insertAdjacentText("afterbegin", element.ponto_de_ebulicao);
    numero_atomico.insertAdjacentText("afterbegin", element.numero_atomico);
    distr.insertAdjacentHTML("afterbegin", element.de);
    nome_do_elemento.insertAdjacentText("afterbegin", element.nome);
    var img = document.createElement("IMG");
    img.src = element.img;
    document.getElementById('imagem-tabela').appendChild(img);
};