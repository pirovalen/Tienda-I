// Rating Initialization

const Allstar = document.querySelectorAll('.survey__star');
const valor = document.querySelector('#valor');
const resultado = document.querySelector('.m-valor');

console.log(Allstar);

Allstar.forEach((survey__star, i) => {

    survey__star.onclick = function () {

        //definicion de variable control
        let survey__starActual = i + 1;

        Allstar.forEach((survey__star, j) => {


            if (survey__starActual >= j + 1) {

                survey__star.innerHTML = '&#9733'; //unicode de estrtella con relleno
                valor.textContent = survey__starActual;

            } else {

                survey__star.innerHTML = '&#9734'; //unicode de estrella sin relleno
                valor.textContent = survey__starActual;

            }

        });

        calc(survey__starActual);
    }

});

function calc(actual) {

    let x = actual;

    switch (true) {

        case (x <= 3): mostrarHtml('Muy deficiente');
            break;
        case (x > 3 && x <= 5): mostrarHtml('Insuficiente');
            break;
        case (x > 5 && x <= 6): mostrarHtml('Suficiente');
            break;
        case (x > 6 && x <= 7): mostrarHtml('Bien');
            break;
        case (x > 7 && x <= 9): mostrarHtml('Notable');
            break;
        case (x > 9): mostrarHtml('Sobresaliente');
            break;
        default: mostrarHtml('Seleccione una opción');
            break
    }

}

function mostrarHtml(valor) {


    resultado.textContent = valor;


}

