function novaFuncao (){
    let mensagem = "oi"
    console.log (mensagem)
}
novaFuncao ()

// ---

let meuNome = "Aurelio"
function mostarNome (nome) {
    console.log (nome)
}
mostarNome (meuNome) 

// ---

let meuNIG = {
    nome: "Aurelio",
    idade: 22,
    genero: "MPB"
}
function mostarNIG (nig) {
    console.log (nig)
}
mostarNIG (meuNIG)

// ---

let meuFM = {
    filme: "Matrix",
    musica: "Cidade do Pecado"
}
function mostarFM (fm) {
    console.log (fm)
}
mostarFM (meuFM)

// ---

let n1 = 3
let n2 = 3
let triplo = n1 * n2 

function total (vt) {
    console.log (vt)
}
total (triplo)

// ---

let verdade = false
function veric (resposta) {
    if (resposta == true){
        console.log ("a variável é verdadeira")
    } else {
        console.log ("a variável é falsa")
    }
}
veric (verdade)