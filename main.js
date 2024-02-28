/*AUPH //cadenas validas
//AUUU //AUU //APHU //APUH /UUUU //cadenas invalidas //HAPU //AUPA //q0 - estado I  //q4 - estado F */
//main();

document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    main();
  }
});
function main() {
  let input = document.getElementById("input").value;
  let cadena = "auph";
  entradaDeDatos(input);
}

function entradaDeDatos(cadena) {
  let divLetra;
  let estado = 0;
  let estadoActual = estado;
  let letra = cadena.split("");
  let nuevoEstilo = document.createElement("style");
  let css = `#estado${estado} { background-color: rgba(13, 104, 175, 0.4); }`;
  nuevoEstilo.appendChild(document.createTextNode(css));
  document.head.appendChild(nuevoEstilo);
  console.log(`cadena: ${cadena}`);
  if (letra[0] == "A" || letra[0] == "a") {
    estado = 1;
    consola(`q${estadoActual} -> q${estado}`);
    estadoActual = estado;
    let nuevoEstilo = document.createElement("style");
    let css = `#estado${estado} { background-color: rgba(13, 104, 175, 0.4); }
               #letra${estado} { color: rgba(151, 206, 61, 1); }`;
    nuevoEstilo.appendChild(document.createTextNode(css));
    document.head.appendChild(nuevoEstilo);
    divLetra = document.getElementById(`letra${estado}`);
    divLetra.innerHTML = letra[estado - 1];
    if (
      letra[1] == "H" ||
      letra[1] == "P" ||
      letra[1] == "U" ||
      letra[1] == "h" ||
      letra[1] == "p" ||
      letra[1] == "u"
    ) {
      estado = 2;
      consola(`q${estadoActual} -> q${estado}`);
      estadoActual = estado;
      let nuevoEstilo = document.createElement("style");
      let css = `#estado${estado} { background-color: rgba(13, 104, 175, 0.4); }
               #letra${estado} { color: rgba(151, 206, 61, 1); }`;
      nuevoEstilo.appendChild(document.createTextNode(css));
      document.head.appendChild(nuevoEstilo);
      divLetra = document.getElementById(`letra${estado}`);
      divLetra.innerHTML = letra[estado - 1];
      if (
        letra[2] == "H" ||
        letra[2] == "P" ||
        letra[2] == "U" ||
        letra[2] == "h" ||
        letra[2] == "p" ||
        letra[2] == "u"
      ) {
        estado = 3;
        consola(`q${estadoActual} -> q${estado}`);
        estadoActual = estado;
        let nuevoEstilo = document.createElement("style");
        let css = `#estado${estado} { background-color: rgba(13, 104, 175, 0.4); }
               #letra${estado} { color: rgba(151, 206, 61, 1); }`;
        nuevoEstilo.appendChild(document.createTextNode(css));
        document.head.appendChild(nuevoEstilo);
        divLetra = document.getElementById(`letra${estado}`);
        divLetra.innerHTML = letra[estado - 1];
        if (
          letra[3] == "H" ||
          letra[3] == "P" ||
          letra[3] == "U" ||
          letra[3] == "h" ||
          letra[3] == "p" ||
          letra[3] == "u"
        ) {
          estado = 4;
          consola(`q${estadoActual} -> q${estado} cedena aceptada`);
          estadoActual = estado;
          let nuevoEstilo = document.createElement("style");
          let css = `#estado${estado} { background-color: rgba(151, 206, 61, 0.4); }
               #letra${estado} { color: rgba(151, 206, 61, 1); }`;
          nuevoEstilo.appendChild(document.createTextNode(css));
          document.head.appendChild(nuevoEstilo);
          divLetra = document.getElementById(`letra${estado}`);
          divLetra.innerHTML = letra[estado - 1];
        } else {
          consola(`q${estadoActual} cadena no valida`);
          let nuevoEstilo = document.createElement("style");
          let css = `#estado${estadoActual} { background-color: rgba(210, 91, 69, 0.4); }`;
          nuevoEstilo.appendChild(document.createTextNode(css));
          document.head.appendChild(nuevoEstilo);
          letra = "";
        }
      } else {
        consola(`q${estadoActual} cadena no valida`);
        let nuevoEstilo = document.createElement("style");
        let css = `#estado${estadoActual} { background-color: rgba(210, 91, 69, 0.4); }`;
        nuevoEstilo.appendChild(document.createTextNode(css));
        document.head.appendChild(nuevoEstilo);
        letra = "";
      }
    } else {
      consola(`q${estadoActual} cadena no valida`);
      let nuevoEstilo = document.createElement("style");
      let css = `#estado${estadoActual} { background-color: rgba(210, 91, 69, 0.4); }`;
      nuevoEstilo.appendChild(document.createTextNode(css));
      document.head.appendChild(nuevoEstilo);
      letra = "";
    }
  } else {
    // let estadoActual = estado;
    consola(`q${estadoActual} cadena no valida`);
    let nuevoEstilo = document.createElement("style");
    let css = `#estado${estadoActual} { background-color: rgba(210, 91, 69, 0.4); }`;
    nuevoEstilo.appendChild(document.createTextNode(css));
    document.head.appendChild(nuevoEstilo);
    letra = "";
  }
}

function consola(mensaje) {
  console.log(`${mensaje}`);
}
