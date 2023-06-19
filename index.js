let nombreUser = prompt("Cual es tu nombre");

if (nombreUser === "") {
  alert("Coloca un nombre");
  nombreUser = prompt("Cual es tu nombre");
  alert("Buenos días " + nombreUser);
} else {
  alert("Buenos días " + nombreUser);
}

function generarNumeroAzar(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let notasFisica = [];
let notasIngles = [];
let notasSeminario = [];

for (let i = 0; i < 1; i++) {
  notasFisica.push(generarNumeroAzar(1, 9) + 1);
  notasIngles.push(generarNumeroAzar(1, 8) + 2);
  notasSeminario.push(generarNumeroAzar(1, 5) + 5);
}

let menu = prompt("Ingrese la opción deseada:\n1- Ver tus notas de las materias\n2- Calcular promedio de materias\n3- Saber días de recuperatorios");

switch (menu) {
  case "1":
    notas();
    break;
  case "2":
    const resultado = promedios();
    console.log(resultado);
    break;
  case "3":
    alert("El recuperatorio será para Física el día 20 de febrero, para Inglés el 1 de marzo y para Seminario el 15 de marzo. ¡NO TE DESANIMES, VOS PODES!");
    break;
  default:
    alert("No ingresó ninguna opción del menú");
    break;
}

function notas() {
  let notasMaterias = {
    Física: notasFisica,
    Inglés: notasIngles,
    Seminario: notasSeminario,
  };

  alert("Tus notas, " + nombreUser + ", son:\nFísica: " + notasMaterias.Física.join(", ") + "\nInglés: " + notasMaterias.Inglés.join(", ") + "\nSeminario: " + notasMaterias.Seminario.join(", "));
}

function promedios() {
  let nota1 = Number(prompt("Ingrese la nota de Física"));
  let nota2 = Number(prompt("Ingrese la nota de Inglés"));
  let nota3 = Number(prompt("Ingrese la nota de Seminario"));

  let promedio = (nota1 + nota2 + nota3) / 3;

  const notas = {
    nombre: nombreUser,
    promedio: promedio.toFixed(2)
  };

  return notas;
}

  
