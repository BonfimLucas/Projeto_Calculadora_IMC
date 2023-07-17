const form = document.querySelector('#form')
const peso = document.querySelector('#ipeso');
const altura = document.querySelector('#ialtura');
const valor = peso.value / (altura.value * altura.value);

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Evento previnido');
    setResultado('Olá mundo');
});

function criaP(className){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
}