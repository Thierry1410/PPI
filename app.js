const H = document.querySelector("#element_1");
const He = document.querySelector("#element_2");
const Li = document.querySelector("#element_3");

const detalhes = document.querySelector("#detalhes");
const distr = document.querySelector(".subtitle");
const aparencia = document.querySelector('#aparencia');
const nome_do_elemento = document.querySelector('.title');
const ponto_de_fusao = document.querySelector('#ponto_de_fusao')

/*  

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
    aparencia: "Gás incolor (nas CNTP)"
}

var element_2 = {
    nome: "Hélio",
    numero_atomico: 2,
    massa_atomica: "4,002602",
    ponto_de_fusao: "0,95 K (-272.2)",
    ponto_de_ebulicao: "4,22 K (-268,93",
    de: "1s<sup>2</sup>", //  <sup>número</sup>
    aparencia: "Gás incolor (nas CNTP)" //no caso de gás, coloque que está na CNTP
}

var element_3 = {
    nome: "Lítio",
    numero_atomico: 3,
    massa_atomica: "6,941",
    ponto_de_fusao: "0)",
    ponto_de_ebulicao: "203123,28 K (-312387°C)",
    de: "1s<sup>231231</sup>",
    aparencia: "Gás inc323olor (na CNTP)"
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

var ClearTable = function() {
    aparencia.innerHTML = "";
    massa_atomica.innerHTML = "";
    ponto_de_fusao.innerHTML = "";
    ponto_de_ebulicao.innerHTML = "";
    numero_atomico.innerHTML = "";
    distr.innerHTML = "";
    nome_do_elemento.innerHTML = "";
}