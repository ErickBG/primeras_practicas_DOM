const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
// const parrafito = document.querySelector('.parrafito');
const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.querySelector('#pid');
const pid = document.getElementById('pid'); // con  getElementById ya no se debe usar el #
const input = document.querySelector('input');

console.log({
    h1,p,parrafito,pid,input
});
console.log(input.value);

// h1.innerHTML = 'Manipulación básica del DOM desde JS <br> Y con un espacio';
h1.innerText = 'Manipulación básica del DOM desde JS <br> Y con un espacio';

//Si queremos darle una clase a un elemento
console.log(h1.getAttribute('class')); //leer alguno de los atributos del elemento (en el htmml -> <h1 pantalla="HP">Manipulación del DOM básica</h1>)
h1.setAttribute('class','red'); // Una forma de modificar los atributos de los elemtnos
h1.classList.add('blue','black');
h1.classList.remove('black');
// h1.classList.toggle('orange'); //Quita o pone la clase dependiendo si la tiene o no
console.log(`¿El h1 tiene alguna clase que se llame rosa?: ${h1.classList.contains('pink')}`);
// input.value = 12344;
input.placeholder = 'Escribe algo';
console.log(document.createElement('span'));

const img = document.createElement('img');
img.setAttribute('src','./assets/img/atardecer.jpg');
console.log(img);

pid.innerHTML = ''; //Elimina el contenido del párrafo en pid
//meter una imagen dentro del elemnto con id pid con .append
pid.append(img); //Agrega el elemento después del contenido del elemento