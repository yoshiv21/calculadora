// 1. VARIABLES
const numA = document.getElementById("numA");
const numB = document.getElementById("numB");
const boton = document.getElementById("boton-sumar");
const areaResultado = document.getElementById("resultado");

// 2. FUNCIONES
const suma = (a, b) => {
    return a + b;
}
// 3. EVENTOS
boton.addEventListener("click", ()=> {
    // 1. Necesito obtener los dos números a sumar
    const primerNumero = parseInt(numA.value);
    const segundoNumero = parseInt(numB.value);
    // 2. Necesito sumar esos dos números
    const res = suma(primerNumero, segundoNumero)
    // 3. Necesito expresarlos en la página web.
    areaResultado.innerHTML = res
})


// 1. VARIABLES
const numX = document.getElementById("numX");
const numY = document.getElementById("numY");
const boton = document.getElementById("boton-restar");
const areaResultadoResta = document.getElementById("resultadoResta");

// 2. FUNCIONES
const restar = (x, y) => {
    return x - y;
};

// 3. EVENTOS
boton.addEventListener("click", function(){
    const primerNumero = parseInt(numX.value);
    const segundoNumero = parseInt(numY.value);

    const res = restar(primerNumero, segundoNumero)
    areaResultadoResta.innerHTML = res
});

