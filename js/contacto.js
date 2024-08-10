//variables
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const texto = document.querySelector('#texto');
const errorMensaje = document.querySelector('.form__errorMensaje');
const btnenviar = document.querySelector('#enviar');


eventListeners();

function eventListeners(){

    nombre.addEventListener('focusout', ()=>{

        if(nombre.value === ''){

        nombre.classList.remove('form__field--success');
        nombre.classList.add('form__field--error');


        }else{

        nombre.classList.remove('form__field--error');
        nombre.classList.add('form__field--success');


        }

    });
    
    correo.addEventListener('focusout', () =>{

        if(correo.value === ''){

            correo.classList.remove('form__field--success');
            correo.classList.add('form__field--error');
            

    
            }else{
    
            correo.classList.remove('form__field--error');
            correo.classList.add('form__field--success');

    
            }

    });

    telefono.addEventListener('focusout', ()=>{

        if(telefono.value === ''){

            telefono.classList.remove('form__field--success');
            telefono.classList.add('form__field--error');
            

    
            }else{
    
            telefono.classList.remove('form__field--error');
            telefono.classList.add('form__field--success');

    
            }


    });


    texto.addEventListener('focusout', ()=>{

        if(texto.value === ''){

            texto.classList.remove('form__field--success');
            texto.classList.add('form__field--error');
            

    
            }else{
    
            texto.classList.remove('form__field--error');
            texto.classList.add('form__field--success');

            }

    });

    btnenviar.addEventListener('click', validarCampo);

}


function validarCampo (){

    if(nombre.value !== '' && correo.value !== '' && telefono.value !== '' && texto.value !== ''){

         errorMensaje.textContent = "Formulario completado con éxito"
         errorMensaje.classList.remove('form__field--error');
         errorMensaje.classList.add('form__field--success');
         
    }else{

        errorMensaje.textContent = "Faltan campos";
        errorMensaje.classList.remove('form__field--success');
        errorMensaje.classList.add('form__field--error');


    }

}
