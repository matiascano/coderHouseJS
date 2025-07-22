// En consola se va a listar usuarios, contraseñas y logs para testeo
// El programa en si va a funcionar en alerts y prompts

let fondos = 20000000.5;
const usuarios = ["pepepompin", "carozo", "narizota", "osoarturo"];
const passwords = ["pepe123", "aceitu23", "sala123", "pelea55"];

// Listamos los usuarios y contraseña correspondiente a cada uno
for (let i = 0; i < usuarios.length; i++) {
  console.log(`Usuario: ${usuarios[i]} | Constraseña: ${passwords[i]}`);
}

// Vemos los fondos que hay en el cajero
console.log(`Total de dinero: $ ${fondos}`);

// Obtenemos el usuario
let user;
while (user === undefined || user === "") {
  user = prompt("Ingrese su nombre de usuario");
}

// obtenemos la contraseña
let pass;
while (pass === undefined || pass === "") {
  pass = prompt("Ingrese la contraseña");
}

// Función validación usuario
const valida = (usuario, password) => {
  let pos = usuarios.indexOf(usuario);
  if (pos < 0) {
    alert("Usuario incorrecto");
    return "Error de usuario";
  } else {
    if (password === passwords[pos]) {
      retirarDinero(usuario);
    } else {
      alert("Contraseña inválida");
    }
  }
};

const retirarDinero = (usuario) => {
  // Solicitamos el importe a retirar
  let importe = 0;
  while (importe === 0 || isNaN(importe)) {
    importe = Number(
      prompt(
        `Hola ${usuario}, cuanto dinero desea retirar el día de hoy? (debe ser un número)`
      )
    );
  }

  // Verificamos que haya fondos suficientes

  if (fondos >= importe) {
    fondos -= importe;
    alert(`${usuario} has retirado $${importe} del banco Fichin.`);
    console.log(`Saldo total en el cajero: $${fondos}`);
  } else if (fondos > 0) {
    let deseo;
    while (deseo !== 1 && deseo !== 2) {
      deseo = Number(
        prompt(
          `${usuario}, en Fichin sentimos vergüenza y te pedimos discuplas, no tenemos fondos suficientes.\n Deseas hacer otro intento? Ingrese el numero de opción correspondiente \n\n 1 - SI \n 2 - NO`
        )
      );
    }
    switch (deseo) {
      case 1:
        retirarDinero(usuario);
        break;

      default:
        alert(
          `${usuario} gracias por usar el sistema del banco Fichin, esperamos verte pronto!`
        );
        break;
    }
  } else {
    alert("estamos secos");
    return "sin plata";
  }
};

valida(user, pass);
