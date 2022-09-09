//  primeiro objetivo e conseguir adicionar uma função,  que quando
// o mouse passar por cima do produto surgirá uma nova imagem 
// um pouco maior mostrando um pouco mais de informações sobre o
// propduto, sendo valores, formas de pagamento, etc.
// objetivo comprido



//-- proximo plano e conseguir integrar a pagina com o banco de dados,
// tendo o adm acesso a todos os produtos, podenso fazer alterações, 
//removendo ou adicionando produtos, alerando preço, etc...


// função que dispara uma segunda tela quando for clicado no produto;


function cor1(){
    var obj = document.getElementById("teste")
    var apare = document.getElementById("segunda-tela")
     apare.style.display="flex"
}


function msg(){
    // alert("funcionado")
    addEventListener("click", cor1)
}
function seg12(){
    var obj = document.getElementById("teste")
    var apare = document.getElementById("segunda-tela")
     apare.style.display="none"

}
function fechar(){
    addEventListener("click", seg12)
    
}


// no momento vou fazer uma função para cada item, até ver como fazer 
//um unico que possa servir para todos os intens, sendo mostrado o item que 
//foi clicado, e não o primeiro, que é o que está acontecendo no momento.

function cor2(){
    var obj = document.getElementById("teste2")
    var apare = document.getElementById("footer2")
     apare.style.display="flex"
}


function msg2(){
    // alert("funcionado")
    addEventListener("click", cor2)
}
function seg2(){
    var obj = document.getElementById("teste2")
    var apare = document.getElementById("footer2")
     apare.style.display="none"

}
function fechar2(){
    addEventListener("click", seg2)
    
}
// vou continuar vfazendo at´pe preencher a primeira linha, quando der lembrar de pesquisar um novo jeito para deixar masi facil


function cor3(){
    var obj = document.getElementById("teste3")
    var apare = document.getElementById("footer3")
     apare.style.display="flex"
}


function msg3(){
    // alert("funcionado")
    addEventListener("click", cor3)
}
function seg3(){
    var obj = document.getElementById("teste3")
    var apare = document.getElementById("footer3")
     apare.style.display="none"

}
function fechar3(){
    addEventListener("click", seg3)
    
}


// quarto e ultimo produto

function cor4(){
    var obj = document.getElementById("teste4")
    var apare = document.getElementById("footer4")
     apare.style.display="flex";
}


function msg4(){
    // alert("funcionado")
    addEventListener("click", cor4)
}
function seg4(){
    var obj = document.getElementById("teste4")
    var apare = document.getElementById("footer4")
     apare.style.display="none"

}
function fechar4(){
    addEventListener("click", seg4)
    
}