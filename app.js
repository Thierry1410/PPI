const H = document.querySelector("#element_1");
const He = document.querySelector("#element_2");
const Li = document.querySelector("#element_3");
const Be = document.querySelector("#element_4");

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
    img: "data:image/jpeg;base64,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"
}

var element_2 = {
    nome: "Hélio",
    numero_atomico: 2,
    massa_atomica: "4,002602",
    ponto_de_fusao: "0,95 K (-272.2)",
    ponto_de_ebulicao: "4,22 K (-268,93",
    de: "1s<sup>2</sup>", //  <sup>número</sup>
    aparencia: "Gás incolor (nas CNTP)",
    img: "/Hélio.png" //no caso de gás, coloque que está na CNTP
}

var element_3 = {
    nome: "Lítio",
    numero_atomico: 3,
    massa_atomica: "6,941",
    ponto_de_fusao: "0)",
    ponto_de_ebulicao: "203123,28 K (-312387°C)",
    de: "1s<sup>231231</sup>",
    aparencia: "Gás inc323olor (na CNTP)",
    img: "/Lítio.png"
}

var element_4 = {
    nome: "Berílio", //nome do elemento
    numero_atomico: 4, //número do elemento
    massa_atomica: "9,012182", //massa atomica dentro de aspas, e com , 
    ponto_de_fusao: "1560 K (1286,85°C)", //Temperatura em Kelvin e dps em Celsius
    ponto_de_ebulicao: "2754 K (2480,85°C)", //Temperatura em Kelvin e dps em Celsius
    de: "1s<sup>2</sup>2s<sup>2</sup>", //<sup>número</sup> para colocar o numero superescrito
    aparencia: "Sólido, Cinza Metálico", // aparencia na CNTP
    img: "/Berílio.png"

}




H.addEventListener("click", function() {

    detalhes.classList.remove("n-display");
    ClearTable()
    aparencia.insertAdjacentText("afterbegin", element_1.aparencia);
    massa_atomica.insertAdjacentText("afterbegin", element_1.massa_atomica);
    ponto_de_fusao.insertAdjacentText("afterbegin", element_1.ponto_de_fusao);
    ponto_de_ebulicao.insertAdjacentText("afterbegin", element_1.ponto_de_ebulicao);
    numero_atomico.insertAdjacentText("afterbegin", element_1.numero_atomico);
    distr.insertAdjacentHTML("afterbegin", element_1.de);
    nome_do_elemento.insertAdjacentText("afterbegin", element_1.nome);
    img.insertAdjacentHTML("afterbegin", `<img src="${element_1.img}">`);


})

He.addEventListener("click", function() {

    detalhes.classList.remove("n-display");
    ClearTable()
    aparencia.insertAdjacentText("afterbegin", element_2.aparencia);
    massa_atomica.insertAdjacentText("afterbegin", element_2.massa_atomica);
    ponto_de_fusao.insertAdjacentText("afterbegin", element_2.ponto_de_fusao);
    ponto_de_ebulicao.insertAdjacentText("afterbegin", element_2.ponto_de_ebulicao);
    numero_atomico.insertAdjacentText("afterbegin", element_2.numero_atomico);
    distr.insertAdjacentHTML("afterbegin", element_2.de);
    nome_do_elemento.insertAdjacentText("afterbegin", element_2.nome);



})

Li.addEventListener("click", function() {

    detalhes.classList.remove("n-display");
    ClearTable()
    aparencia.insertAdjacentText("afterbegin", element_3.aparencia);
    massa_atomica.insertAdjacentText("afterbegin", element_3.massa_atomica);
    ponto_de_fusao.insertAdjacentText("afterbegin", element_3.ponto_de_fusao);
    ponto_de_ebulicao.insertAdjacentText("afterbegin", element_3.ponto_de_ebulicao);
    numero_atomico.insertAdjacentText("afterbegin", element_3.numero_atomico);
    distr.insertAdjacentHTML("afterbegin", element_3.de);
    nome_do_elemento.insertAdjacentText("afterbegin", element_3.nome);



})
Be.addEventListener("click", function() {

    detalhes.classList.remove("n-display");
    ClearTable()
    aparencia.insertAdjacentText("afterbegin", element_4.aparencia);
    massa_atomica.insertAdjacentText("afterbegin", element_4.massa_atomica);
    ponto_de_fusao.insertAdjacentText("afterbegin", element_4.ponto_de_fusao);
    ponto_de_ebulicao.insertAdjacentText("afterbegin", element_4.ponto_de_ebulicao);
    numero_atomico.insertAdjacentText("afterbegin", element_4.numero_atomico);
    distr.insertAdjacentHTML("afterbegin", element_4.de);
    nome_do_elemento.insertAdjacentText("afterbegin", element_4.nome);



})
var ClearTable = function() {
    aparencia.innerHTML = "";
    massa_atomica.innerHTML = "";
    ponto_de_fusao.innerHTML = "";
    ponto_de_ebulicao.innerHTML = "";
    numero_atomico.innerHTML = "";
    distr.innerHTML = "";
    nome_do_elemento.innerHTML = "";
}