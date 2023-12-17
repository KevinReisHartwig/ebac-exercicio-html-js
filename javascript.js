const form = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const buttonSubmit = document.getElementById('submit');

function validarNumero(numberA, numberB){
    return parseInt(numberA) < parseInt(numberB); 
}



form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();  
    const msgSucesso = `Enviado com sucesso: O campo A é <b>${campoA.value}</b> e o campo B é <b>${campoB.value}</b> sendo assim o campo B é maior que A`;
    const error = `ERROR: O campo A é maior ou igual a B então não pode`;

    formValido = validarNumero(campoA.value, campoB.value);
    if(formValido){
        const containerMsgSucesso = document.querySelector('.msg-sucess');
        containerMsgError = document.querySelector('.msg-error');
        containerMsgError.style.display = 'none';
        containerMsgSucesso.innerHTML = msgSucesso;
        containerMsgSucesso.style.display = 'block';               
        campoA.value = '';
        campoB.value = '';
    }
    else{
        const containerMsgError = document.querySelector('.msg-error');
        containerMsgSucesso = document.querySelector('.msg-sucess');
        containerMsgSucesso.style.display = 'none'; 
        containerMsgError.innerHTML = error;
        containerMsgError.style.display = 'block';
    }



})

campoA.addEventListener('keyup' , function(e){   
    const formValido = validarNumero(campoA.value, campoB.value);
    
    if(!formValido){
        campoA.classList.add('error');
        campoB.classList.add('error');
        document.querySelector('.msg-error').style.display = block; 
    }else{
        campoA.classList.remove('error');        
        campoB.classList.remove('error');       
        document.querySelector('.msg-error').style.display = none;        
}
})

campoB.addEventListener('keyup' , function(e){   
    const formValido = validarNumero(campoA.value, campoB.value);
    
    if(!formValido){
        campoA.classList.add('error');
        campoB.classList.add('error');
    document.querySelector('.msg-error').style.display = block;
        
    }else{
        campoA.classList.remove('error');
        campoB.classList.remove('error');
    document.querySelector('.msg-error').style.display = none;
    }

})

buttonSubmit.addEventListener('hover', function () {
    const formValido = validarNumero(campoA.value, campoB.value);
    if (!formValido) {
        buttonSubmit.style.backgroundColor = 'red';
    } else {
        buttonSubmit.style.backgroundColor = 'green';
    }
});