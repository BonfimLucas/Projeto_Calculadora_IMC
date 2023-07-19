
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#ipeso');
    const inputAltura = e.target.querySelector('#ialtura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if(!altura){
        setResultado('Altura invalida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelIMC}).`
    setResultado(msg, true);
});

function criaP(className){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p)
}

function getNivelIMC(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return nivel[5];  
    if(imc >= 34.9) return nivel[4];
    if(imc > 29.9)  return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5)  return nivel[0];
}

function getIMC(peso, altura){
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}