const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// Al elemento btn, que es el botón, se le agrega un escuchador de eventos
// Es una función que recibe el evento que se quiere escuchar (en este caso, click)
// Y recibe rambién lo que se debe ejecutar cuando ocurra el click. Si enviamos una función 
// en el segundo argumento, debe ser sin paréntesis

btn.addEventListener('click',sumaInputValues);
// form.addEventListener('submit',sumaInputValues);

function sumaInputValues(event){ //Para evitar que en un sumbit de un form...
    // console.log(input1.value,input2.value);
    console.log({event});
    event.preventDefault(); // Evita la recarga de la página al hacer el submit (click del botón)
    const valor1 = input1.value?parseFloat(input1.value):0;
    const valor2 = input2.value?parseFloat(input2.value):0;
    const suma = valor1+valor2;
    //Inserta el valor en el párrafo con id result (el querySelector de arriba)
    pResult.innerText = `Resultado: ${suma}`;
    // alert(`La suma de los números ingresados es ${suma}`);
}

/*
Los formularios agarran por defecto ell último botón y lo interpretan como que es de tipo submmit
La acción por defecto de los formularios para enviarse es cambiar al url

Buscar qué otros eventos se pueden utilizat con el addEventListener
*/