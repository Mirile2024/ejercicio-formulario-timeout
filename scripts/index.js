// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};
const boton= document.querySelector(".login-btn")
boton.addEventListener('click', (event) => {
  console.log("Has hecho click en el boton inicio de sesión");
  let x = 0
  const mensaje = setInterval(() => {
      ++x
      document.querySelector("#loader").style.display="block";
      document.querySelector("#error-container").style.display="none";
      if ( x === 3){
          clearInterval(mensaje)
          // console.log(`Inicio de sesión!`);
          document.querySelector("#loader").style.display="none";

          function validarEmail(email) {
              const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
              return regex.test(email);
            }

            let emailValido
            let email = document.getElementById('email-input').value;
            for (let index = 0; index < baseDeDatos.usuarios.length; index++) {
              if (baseDeDatos.usuarios[index].email === email) {
                emailValido = baseDeDatos.usuarios[index].email
              }
            }

            if (validarEmail(emailValido)) {
              console.log("El email es válido.");
            } else {
              console.log("El email no es válido.");
          }
          
          validarEmail();
          // ----------se utiliza para validar un email-------------------
          function validarPassword(password) {
            const regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return regexp.test(password);
          }
          // ---------------------------------------------------------------
          let passwordValido
          let password = document.getElementById('password-input').value;
          for (let index = 0; index < baseDeDatos.usuarios.length; index++) {
            if (baseDeDatos.usuarios[index].password === password) {
              passwordValido = baseDeDatos.usuarios[index].password
            }
          }
          
          if (validarPassword(passwordValido)) {
            console.log("La contraseña es válida.");
          } else {
            console.log("La contraseña no es válida.");
          }
          validarPassword();
          if (emailValido && passwordValido){
            const h1 = document.querySelector('h1')
            h1.innerText= " Bienvenido al sitio 😀 "
            document.querySelector("form").style.display="none";

          }else{
            document.querySelector("#error-container").style.display="block";
            let small = document.querySelector("small");
            small.innerText= "Alguno de los datos ingresados son incorrectos"
          }

        }
      }, 1000);
    })

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
