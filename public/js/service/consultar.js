import { consultarAPI } from "../config/config.js";

const enviar = document.getElementById("enviar");
const username = document.getElementById("username");
const password = document.getElementById("password");
const url = document.getElementById("route").value;

enviar.onclick = iniciarSesion;


function iniciarSesion (){
    consultarAPI(username.value, password.value)
    .then((response) => {
        if(response.login !== "Fail"){
            document.location.href=`${url}/home?username=${username.value}&password=${password.value}`;
        }else{
            alert("El Usuario y la Clave no son correctos");
        }
    });
}