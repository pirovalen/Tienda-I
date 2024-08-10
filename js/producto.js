//Variables
const valor = document.querySelector('#valor');
const rango = document.querySelector('.form-range');
const btn = document.querySelector('.btn');
const contenedor = document.querySelector('#cards-container');
const tablaCarrito = document.querySelector('#carritoTabla');
const carrito = document.querySelector('#carrito');
const cNeto = document.querySelector('#neto');
const cIva = document.querySelector('#iva');
const cEnvio = document.querySelector('#envio');
const cTotal = document.querySelector('#Total');
const cEmail = document.querySelector('#inputEmail');
const cNombre = document.querySelector('#inputNombre')
const cDireccion = document.querySelector('#inputDireccion')
const cComuna = document.querySelector('#inputComuna')
const cRegion = document.querySelector('#inputRegion')


//Globales
let mensaje;
let carro = [];
let neto;
let iva;
let envio;
let totalIva = 0;
let totalNeto = 0;
let total = 0;

let productos = [
{
    img:'/img/productos/1.jpg',
    codigo: '123456',
    Nombre:'Pijamas',
    descripcion:'Pijama de bebe color gris',
    precio: '15000',
    cantidad: '0',

},
{
    img:'/img/productos/10.webp',
    codigo: '123457',
    Nombre:'Cuadritos',
    descripcion:'Cuadritos decortativos',
    precio: '10000',
    cantidad: '0',
    Marca: 'Enmarcate',
    Tipo: 'Decoración',
},
{
    img:'/img/productos/11x.webp',
    codigo: '123458',
    Nombre:'Figurita de conejo',
    descripcion:'Figura decorativa para habitación de conejo',
    precio: '10000',
    cantidad: '0',
    Marca: 'Enmarcate',
    Tipo: 'Decoración'    
},
{
    img:'/img/productos/12.webp',
    codigo: '123459',
    Nombre:'Cuna Gris',
    descripcion:'Cuna tamaño compacto color gris',
    precio: '300000',
    cantidad: '0',
    Marca: 'Bebesit',
    Tipo: 'Muebles',
},
{
    img:'/img/productos/17.webp',
    codigo: '123460',
    Nombre:'Libro Infantil',
    descripcion:'Libro infantil "Pequeña Gota de Lluvia"',
    precio: '10000',
    cantidad: '0',
    Marca: 'Editorial bebe',
    Tipo: 'Cuentos infantiles',    
},
{
    img:'/img/productos/13.webp',
    codigo: '123461',
    Nombre:'Libro Infantil',
    descripcion:'Libro infantil "La Granja"',
    precio: '10000',
    cantidad: '0',
    Marca: 'Editorial bebe',
    Tipo: 'Cuentos infantiles',      
},
{
    img:'/img/productos/14.webp',
    codigo: '123462',
    Nombre:'Libro Infantil',
    descripcion:'Libro infantil "Te Amo Bebé"',
    precio: '10000',
    cantidad: '0',
    Marca: 'Editorial bebe',
    Tipo: 'Cuentos infantiles',    
},
{
    img:'/img/productos/16.webp',
    codigo: '123463',
    Nombre:'Libro Infantil',
    descripcion:'Libro infantil "La Orugita"',
    precio: '20000',
    cantidad: '0',
    Marca: 'Editorial bebe',
    Tipo: 'Cuentos infantiles',   
},
{
    img:'/img/productos/5.webp',
    codigo: '123464',
    Nombre:'Baberos',
    descripcion:'Baberos de animalitos',
    precio: '4990',
    cantidad: '0',
    Marca: 'Bebesit',
    Tipo: 'Ropa Bebé',        
},
{
    img:'/img/productos/6.webp',
    codigo: '123465',
    Nombre: 'Set Babero-Toalla',
    descripcion:'Set de Babero y Toalla para bebé de algodón',
    precio: '8990',
    cantidad: '0',
    Marca: 'Bebesit',
    Tipo: 'Ropa Bebé',       
},
{
    img:'/img/productos/19.webp',
    codigo: '123466',
    Nombre: 'Trajecito bebe',
    descripcion:'Trajecito de bebe de algodon',
    precio: '10000',
    cantidad: '0',
},
{
    img:'/img/productos/20.webp',
    codigo: '123467',
    Nombre: 'Cámara fotográfica de Jueguete',
    descripcion:'Cámara de juguete fabricada en madera',
    precio: '12000',
    cantidad: '0',
    Marca: 'Bebesit',
    Tipo: 'Ropa Bebé',      
}
];

//correo

/*const direccionInput = document.querySelector('#inputDireccion');
const comunaInput = document.querySelector('#inputComuna');
const regionInput = document.querySelector('#inputRegion');
const nombreInput = document.querySelector('#inputNombre');*/

eventListener();

//Eventos

function eventListener(){

    contenedor.addEventListener('click', leerDatosElemento);

    carrito.addEventListener('click', borrarElemento);

    document.addEventListener('DOMContentLoaded', ()=>{
       
        llenarProductos(productos);
        generarCantidad();
        carro =JSON.parse(localStorage.getItem('carrito')) || [];
        console.log('carrito desde el local')
        console.log(carro);
        mostrarCarrito(true);
        mandarBoleta();

    });

    //const btnBorrar = document.querySelector('.borrar-curso');

    rango.addEventListener('change', ()=>{

        valor.value = rango.value;

    });


}

function llenarProductos(productos){

    productos.forEach(function (producto){

      //div contenedor
      let contenedorC = document.createElement('div');
      contenedorC.classList.add('card', 'col-12', 'col-sm-6','col-lg-3');
      

      let cardBody= document.createElement('div');
      cardBody.classList.add('card-body');

      //imagen
      let img = document.createElement('img');
      img.classList.add('card-img-top');
      img.src = producto.img;
      contenedorC.appendChild(img);

      //parrafo-codigo
      let codigo = document.createElement('p');
      let codigoContainer = document.createElement('div');
      let codigoLabel = document.createElement('span')
      codigoContainer.classList.add('d-flex','justify-content-center', 'mb-2');
      codigoLabel.textContent = 'codigo: ';
      codigo.classList.add('card-text', 'codigo');
      codigo.textContent = `${producto.codigo}`;
      codigoContainer.appendChild(codigoLabel);
      codigoContainer.appendChild(codigo);
      contenedorC.appendChild(codigoContainer);

      //parrafo-nombre
      let nombre = document.createElement('h5');
      nombre.classList.add('card-title');
      nombre.textContent = producto.Nombre;
      cardBody.appendChild(nombre);
      contenedorC.appendChild(cardBody);

      //parrafo-descripcion
      let descripcion = document.createElement('p');
      descripcion.classList.add('card-text', 'description');
      descripcion.textContent = producto.descripcion;
      cardBody.appendChild(descripcion);
      contenedorC.appendChild(cardBody);

      //parrafo-precio
      let precio = document.createElement('p');
      let precioLabel = document.createElement('span')
      let precioContainer = document.createElement('div');
      precioContainer.classList.add('d-flex','justify-content-center', 'mb-2');
      precioLabel.textContent = 'Precio: ';
      precio.classList.add('card-text', 'price');
      precio.textContent = `${producto.precio}`;
      precioContainer.appendChild(precioLabel);
      precioContainer.appendChild(precio);
      cardBody.appendChild(precioContainer);
      contenedorC.appendChild(cardBody);

      //boton +
      let botonPlus = document.createElement('button');
      botonPlus.classList.add('plus');
      botonPlus.textContent = '+';
      cardBody.appendChild(botonPlus);
      contenedorC.appendChild(cardBody);

      //input text
      let input = document.createElement('input');
      input.type = 'text';
      input.classList.add('cantidad', 'border', 'border-colorLetra');
      input.value = '0';
      cardBody.appendChild(input);
      contenedorC.appendChild(cardBody);

      //boton - 
      let botonM = document.createElement('button');
      botonM.classList.add('minus');
      botonM.textContent = '-';
      cardBody.appendChild(botonM);
      contenedorC.appendChild(cardBody);
    
      //Link tipo boton
      let linkInput = document.createElement('a');
      linkInput.classList.add('btn', 'btn-colorLetra');
      linkInput.textContent = 'agregar';
      cardBody.appendChild(linkInput);
      contenedorC.appendChild(cardBody);
      contenedor.appendChild(contenedorC);

    });
}

function generarCantidad(){

    let textInput = document.querySelectorAll('.card-body .cantidad');
    let container2 = document.querySelectorAll('.card-body .plus');

    console.log(container2);

    container2.forEach(function(elemento, indice){

         elemento.addEventListener('click', ()=>{

            textInput[indice].value = parseInt(textInput[indice].value) + 1

         });   

    });

    let container3 = document.querySelectorAll('.card-body .minus');

    container3.forEach(function(elemento, indice){

         elemento.addEventListener('click', ()=>{

            textInput[indice].value = parseInt(textInput[indice].value) - 1

         });   

    });

}

function leerDatosElemento(e){

    if(e.target.classList.contains('btn')){
        
        const seleccionado = e.target.parentElement.parentElement;
        //e.target.classList.contains('cantidad').value = 0;
        llenarObjCarro(seleccionado);

    }

}


function llenarObjCarro(seleccionado){

    //console.log(seleccionado.querySelector('.cantidad').value);
   //console.log(seleccionado.querySelector('.card-title').textContent);

    if(seleccionado.querySelector('.cantidad').value == 0){

        alert('Debes seleccionar cantidad');
        return;

    }

    const carrito = {

        img: seleccionado.querySelector('.card-img-top').src,
        codigo: seleccionado.querySelector('.codigo').textContent,
        Nombre: seleccionado.querySelector('.card-title').textContent,
        descripcion:seleccionado.querySelector('.description').textContent,
        precio: seleccionado.querySelector('.price').textContent,
        cantidad: seleccionado.querySelector('.cantidad').value,

    }

    let enCarrito = carro.some(function(elemento){

        return elemento.codigo === carrito.codigo;

    });

    //actualizar cantidad del elemento

    if(enCarrito){

        let newCarrito = carro.map(function (elemento){

            if(elemento.codigo === carrito.codigo ){

                elemento.cantidad = seleccionado.querySelector('.cantidad').value;
                return elemento;
            }else{

                return elemento;
            }

        });

        console.log('CARRITO');
        console.log(newCarrito);
        carro = [...newCarrito];

    }else{

        //console.log('el elemento no existe');
        carro = [...carro, carrito];
        console.log('CARRITO');

    }
    
    //calcular 

    mostrarCarrito(true);
    
}

function sincronizarStorage (){

    localStorage.setItem('carrito', JSON.stringify(carro));

}

function mostrarCarrito(){

    limpiarHTML(); 
    
    console.log('mostrando carro')

    totalIva = 0;
    totalNeto = 0;
    total = 0;
    envio = 0;

    cNeto.textContent = 0;
    cIva.textContent = 0;
    cTotal.textContent = 0;
    cEnvio.textContent = 0;

    carro.forEach((elemento)=>{

        const row = document.createElement('tr');
        const {img, Nombre, precio, cantidad, codigo } = elemento;

        //calcular total


            neto = parseInt(precio * +cantidad)/1.19;
            neto = Math.round(neto, 1);
            iva = (precio *cantidad) - neto;
            totalIva = totalIva + iva;
            totalNeto = totalNeto + neto;
            total = totalNeto + totalIva;

            if(total < 100000){

                envio = total *0.05;
                total = total + envio;

            }


        row.innerHTML = `                            
      
        <td><img class="img_carrito" src="${img}"></td>
        <td scope="col">${Nombre}</td>
        <td scope="col">${precio}</td>
        <td scope="col">${cantidad}</td>
        <td>
                <a href="#" class="borrar-curso" data-id="${codigo}"> X </a>
        </td>`;
        
        cNeto.textContent = totalNeto;
        cIva.textContent = totalIva;
        cTotal.textContent = total;
        cEnvio.textContent = envio;
        tablaCarrito.appendChild(row);
        
    });



    sincronizarStorage();



}

function borrarElemento(e){

    let codigoBorar;

    if(e.target.classList.contains('borrar-curso')){

        const codigoId = e.target.getAttribute('data-id');
        e.preventDefault();

        codigoBorar = codigoId;
        carro = carro.filter((elemento)=>{

            return elemento.codigo !== codigoId;

        });
        
    }

    mostrarCarrito();

}

function limpiarHTML (){
    //forma lenta baja performance
    //contenedorCarrito.innerHTML = '';

    while(tablaCarrito.firstChild){

        tablaCarrito.removeChild(tablaCarrito.firstChild);

    }
}


function mandarBoleta(){

    const btnInput = document.getElementById('btnInput');

    //Emision de Boleta
    cMensaje = "R.U.T 96.330.226-2\n" 
    cMensaje = cMensaje + "BOLETA ELECTRONICA \n" 
    cMensaje = cMensaje + "N° 156330 \n"
    cMensaje = cMensaje + "S.I.I VALPARAISO \n"
    cMensaje = cMensaje + "CACHUREANDO S.A. \n\n"

    cMensaje = cMensaje + "Casa matriz: Arlegui 330 Viña del Mar\n"
    cMensaje = cMensaje + "Teléfonos: +56 32 28854211 / +56 32 28854330\n"
    cMensaje = cMensaje + "Email: cotizaciones@cachureando.cl\n"
    cMensaje = cMensaje + "www.cachureando.cl\n\n"
    cMensaje = cMensaje + "Medio de Pago: TARJETA DE CREDITO\n"

    cMensaje = cMensaje +"Vendedor: Miguel Rondanelli Nuñez\n"
    let cFecha
    let cHora
    sacaFechaHora()
    cMensaje = cMensaje +"Emisión: "+cFecha +' '+cHora+'\n'
    cMensaje = cMensaje +"__________________________________________\n"

    cMensaje = cMensaje +"Código   Detalle                 Cantidad Precio Total  \n"
    //const str1 = "Código Detalle "
    //cMensaje = cMensaje + addSpace(str1)+'\n'
    cMensaje = cMensaje +"__________________________________________\n"
    //Recorro el archivo carro de compra

    console.log('antes del forEach');
    console.log(carro);

    carro.forEach((elemento)=>{
        const {Nombre, precio, cantidad, codigo } = elemento;
        const cTotal = parseInt(precio * cantidad);
        //calcular total
        console.log('carro boleta')
        console.log(elemento);
        cMensaje = cMensaje +codigo+' '+Nombre+' '+cantidad+' '+precio + cTotal+'\n';
    });
    

    //Termina el carro de compra
    /*const dNeto = document.querySelector('#neto');
    const dIva = document.querySelector('#iva');
    const dEnvio = document.querySelector('#envio');
    const dTotal = document.querySelector('#Total');*/

    cMensaje = cMensaje + 'Neto  : '+totalNeto+'\n'
    cMensaje = cMensaje + 'IVA   : '+totalIva+'\n'
    cMensaje = cMensaje + 'Envío : '+envio+'\n'
    cMensaje = cMensaje + 'Total : '+total+'\n'
    cMensaje = cMensaje +"__________________________________________\n"
    cMensaje = cMensaje + 'Nombre   :'+cNombre.value+'\n'
    cMensaje = cMensaje + 'Dirección:'+cDireccion.value+'\n'
    cMensaje = cMensaje + 'Comuna   :'+cComuna.value+'\n'
    cMensaje = cMensaje + 'Región   :'+cRegion.value+'\n'
    cMensaje = cMensaje + 'Email    :' +cEmail.value+'\n'
    // fin boleta electronica

    console.log(cMensaje);

    document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btnInput.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_9naw98v';

   emailjs.send("service_tje7t6l","template_9naw98v",{
    inputNombre: cNombre.value,
    message: cMensaje,
    inputEmail: cEmail.value,
    })
     .then(() => {
        btnInput.value = 'Send Email';
        console.log(cEmail);
        alert('Correo Enviado, revisa tu bandeja de entrada');
      }, (err) => {
        btnInput.value = 'Send Email';
        console.log(cEmail);
        alert(JSON.stringify(err));
      });

});

}


function sacaFechaHora(){
    today=new Date();
    dd=today.getDate();
    mmm=today.getMonth();
    aa=today.getFullYear();
    switch (mmm) {
     case 0:
         mm='Enero';
         break;
     case 1:
         mm='Febrero';
         break;
     case 2:
         mm='Marzo';
         break;
     case 3:
         mm='Abril';
         break;
     case 4:
         mm='Mayo';
         break;
     case 5:
         mm='Junio';
         break;
     case 6:
         mm='Julio';
         break;
     case 7:
         mm='Agosto';
         break;        
     case 8:
         mm='Septiembre';
         break;
     case 9:
         mm='Octubre';
         break;
     case 10:
         mm='Noviembre';
         break;    
 
     default:
         mm='Diciembre'      
     }
     cFecha = dd+" de "+mm+' del '+aa;
     h=today.getHours();
     m=today.getMinutes();
     s=today.getSeconds();
     cHora = h+":"+m+":"+s;
}