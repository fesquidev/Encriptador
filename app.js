function limpiarcampo(){
  let campo = document.getElementById("entradatxt");
  campo.value = "";
}
/*Evita introducir caracteres no admitidos*/
function validar(entradatxt) {
    let texto = entradatxt.value;
    let comparar = texto.replace(/[^a-z\s]/g, '');
    entradatxt.value = comparar;
}

/*Encriptar*/
function encriptar() {
  //Valida campo vacio
  let campovacio = document.getElementById("entradatxt").value;
  if (campovacio === "") {
    alert("No hay texto para encriptar...")    
  }

  let cadena = document.getElementById("entradatxt").value;
  cadena;
  cadena = cadena
  .replace("e", "enter")
  .replace("i", "imes")
  .replace("a", "ai")
  .replace("o", "ober")
  .replace("u", "ufat");

  document.getElementById("salidatxt").value = cadena;
}


/*Copiar texto encriptado*/
function copiarEncriptado(cadena) {
  //Valida campo vacio
  let campovacio = document.getElementById("entradatxt").value;
  if (campovacio === "") {
    alert("El campo está vacío... :(")
  }else{
    let copiar = document.getElementById("salidatxt");

    //Selecciona el texto y copia al portapapeles
    copiar.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles... :)")
  }
  limpiarcampo();
}

/*Descifrar*/
function desencriptar() {

  //Valida campo vacio
  let campovacio = document.getElementById("entradatxt").value;
  if(campovacio === ""){
    alert("El campo está vacío... :(")
  }

  let cadena = document.getElementById("entradatxt").value;
  cadena;
  cadena = cadena
  .replace("enter", "e")
  .replace("imes", "i")
  .replace("ai", "a")
  .replace("ober", "o")
  .replace("ufat", "u");
  
  document.getElementById("salidatxt").value = cadena;
  
  limpiarcampo();
}



