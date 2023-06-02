let nombreUser = prompt("Cual es tu nombre")

if (nombreUser == "") {
    alert("coloca un nombre")
    prompt("Cual es tu nombre")
    alert("Buenos dias " + nombreUser)
} else {
    alert("Buenos dias " + nombreUser)
}
////////////
function generarNumeroAzar(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let numero1 = generarNumeroAzar(1, 9) + 1;
  let numero2 = generarNumeroAzar(1, 8) + 2; 
  let numero3 = generarNumeroAzar(1, 5) + 5;

///////////////
let menu = prompt ("Ingrese la opcion deseada: 1-Ver tus notas de las materias, 2-Calcular promedio de materias, 3-Saber dias de recuperatorios " )
switch (menu) {
    case "1":
        notas()
        break;
    case "2":
        promedios()
        break;
    case "3":
        alert("El recuperatorio sera para fisica el dia 20 de febrero, para ingles el 1 de marzo y para seminario el 15 de marzo. NO TE DESANIMES VOS PODES!!!!!!")
        break;

    default:
        alert("No ingreso ninguna opcion del menu")
        break;
}
///////////
function notas() {
    alert("Tus notas " + nombreUser + " son: Física: " + numero1 + ",Inglés: " + numero2 + "; Seminario: " + numero3);
}
//////////
function promedios() {
    let nota1 = Number(prompt("Ingrese la nota de Física"));
    let nota2 = Number(prompt("Ingrese la nota de Inglés"));
    let nota3 = Number(prompt("Ingrese la nota de Seminario"));

    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(nombreUser +" :el promedio de tus notas es: " + promedio.toFixed(2));
}



  
