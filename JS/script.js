const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnclick(){
    // console.log(input1.value,input2.value);
    const valor1 = input1.value?parseFloat(input1.value):0;
    const valor2 = input2.value?parseFloat(input2.value):0;
    const suma = valor1+valor2;
    //Inserta el valor en el párrafo con id result (el querySelector de arriba)
    pResult.innerText = `Resultado: ${suma}`;
    // alert(`La suma de los números ingresados es ${suma}`);
}