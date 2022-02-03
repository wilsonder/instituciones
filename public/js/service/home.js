import { consultarAPI } from "../config/config.js";

const url = new URL(location.href); 
const username = url.searchParams.get("username"); 
const password = url.searchParams.get("password");
const resultado = document.getElementById("resultado");

consultarMunicipios();

function consultarMunicipios (){
    consultarAPI(username, password, "municipios")
    .then((response) => {
        if(response.login !== "Fail"){

            let tabla = document.createElement("table");
            let thead = document.createElement("thead");
            let tbody = document.createElement("tbody");
            let tr = document.createElement("tr");
            let th = document.createElement("th");
            let th1 = document.createElement("th");
            let th2 = document.createElement("th");

            tabla.setAttribute("class", "table table-bordered");
            tabla.appendChild(thead);
            tabla.appendChild(tbody);
            thead.appendChild(tr);
            tr.appendChild(th);
            th.appendChild(document.createTextNode("Municipio"));
            tr.appendChild(th1);
            th1.appendChild(document.createTextNode("Dane"));
            tr.appendChild(th2);
            th2.appendChild(document.createTextNode("Ver Instituciones"));

            for(let i = 0; i < response.data.length;  i += 1 ){
                let tr1 =  document.createElement("tr");
                let td = document.createElement("td");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");

                let button = document.createElement("button");

                button.innerHTML = "Ver";
                button.addEventListener ("click", function() {
                    consultarInstituciones(response.data[i].dane);
                });

                tr1.appendChild(td);
                td.appendChild(document.createTextNode(response.data[i].nombre))
                tr1.appendChild(td1);
                td1.appendChild(document.createTextNode(response.data[i].dane))
                tr1.appendChild(td2);
                td2.appendChild(button);
                tbody.appendChild(tr1);
            }

            resultado.appendChild(tabla);
        }else{
            alert("El Usuario no existe o la opción no existe");
        }
    });
}

function consultarInstituciones(codigoMun){

    consultarAPI(username, password, "instituciones", codigoMun)
    .then((response) => {
        if(response.login !== "Fail"){
            let tabla = document.createElement("table");
            let thead = document.createElement("thead");
            let tbody = document.createElement("tbody");
            let tr = document.createElement("tr");
            let th = document.createElement("th");
            let th1 = document.createElement("th");
            let th2 = document.createElement("th");

            tabla.setAttribute("class", "table table-bordered");
            tabla.appendChild(thead);
            tabla.appendChild(tbody);
            thead.appendChild(tr);
            tr.appendChild(th);
            th.appendChild(document.createTextNode("Institución"));
            tr.appendChild(th1);
            th1.appendChild(document.createTextNode("Dane"));
            tr.appendChild(th2);
            th2.appendChild(document.createTextNode("Ver Sedes"));

            for(let i = 0; i < response.data.length;  i += 1 ){
                let tr1 =  document.createElement("tr");
                let td = document.createElement("td");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");

                let button = document.createElement("button");

                button.innerHTML = "Ver";
                button.addEventListener ("click", function() {
                    consultarSedes(response.data[i].dane);
                });

                tr1.appendChild(td);
                td.appendChild(document.createTextNode(response.data[i].nombre))
                tr1.appendChild(td1);
                td1.appendChild(document.createTextNode(response.data[i].dane))
                tr1.appendChild(td2);
                td2.appendChild(button);
                tbody.appendChild(tr1);
            }
            resultado.innerHTML = "";
            resultado.appendChild(tabla);
        }else{
            alert("El Usuario no existe o la opción no existe");
        }
    });
}

function consultarSedes(codigoSede){

    consultarAPI(username, password, "sedes", "", codigoSede)
    .then((response) => {
        if(response.login !== "Fail"){
            let tabla = document.createElement("table");
            let thead = document.createElement("thead");
            let tbody = document.createElement("tbody");
            let tr = document.createElement("tr");
            let th = document.createElement("th");
            let th1 = document.createElement("th");
            let th2 = document.createElement("th");

            tabla.setAttribute("class", "table table-bordered");
            tabla.appendChild(thead);
            tabla.appendChild(tbody);
            thead.appendChild(tr);
            tr.appendChild(th);
            th.appendChild(document.createTextNode("Sede"));
            tr.appendChild(th1);
            th1.appendChild(document.createTextNode("Dane"));
            tr.appendChild(th2);
            th2.appendChild(document.createTextNode("Ver Grupos"));

            for(let i = 0; i < response.data.length;  i += 1 ){
                let tr1 =  document.createElement("tr");
                let td = document.createElement("td");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");

                let button = document.createElement("button");

                button.innerHTML = "Ver";
                button.addEventListener ("click", function() {
                    consultarGrupos(response.data[i].dane);
                });

                tr1.appendChild(td);
                td.appendChild(document.createTextNode(response.data[i].nombre))
                tr1.appendChild(td1);
                td1.appendChild(document.createTextNode(response.data[i].dane))
                tr1.appendChild(td2);
                td2.appendChild(button);
                tbody.appendChild(tr1);
            }
            resultado.innerHTML = "";
            resultado.appendChild(tabla);
        }else{
            alert("El Usuario no existe o la opción no existe");
        }
    });
}

function consultarGrupos(codigoGrupo){

    consultarAPI(username, password, "grupos", "", "", codigoGrupo)
    .then((response) => {
        if(response.login !== "Fail"){
            let tabla = document.createElement("table");
            let thead = document.createElement("thead");
            let tbody = document.createElement("tbody");
            let tr = document.createElement("tr");
            let th = document.createElement("th");
            let th1 = document.createElement("th");
            let th2 = document.createElement("th");

            tabla.setAttribute("class", "table table-bordered");
            tabla.appendChild(thead);
            tabla.appendChild(tbody);
            thead.appendChild(tr);
            tr.appendChild(th);
            th.appendChild(document.createTextNode("Id"));
            tr.appendChild(th1);
            th1.appendChild(document.createTextNode("Grupo"));
            tr.appendChild(th2);
            th2.appendChild(document.createTextNode("Número Grupo"));

            for(let i = 0; i < response.data.length;  i += 1 ){
                let tr1 =  document.createElement("tr");
                let td = document.createElement("td");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");

                tr1.appendChild(td);
                td.appendChild(document.createTextNode(response.data[i].id))
                tr1.appendChild(td1);
                td1.appendChild(document.createTextNode(response.data[i].nombre))
                tr1.appendChild(td2);
                td2.appendChild(document.createTextNode(response.data[i].numGrupo));
                tbody.appendChild(tr1);
            }
            resultado.innerHTML = "";
            resultado.appendChild(tabla);
        }else{
            alert("El Usuario no existe o la opción no existe");
        }
    });
}

