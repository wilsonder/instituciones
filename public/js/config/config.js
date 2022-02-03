export const consultarAPI  = (username, password, option, codigoMun, codigoInst, codigoSede, idGroupe) => {

    let data = {
        User: username,
        Password: password,
        option: option,
        CodMun: codigoMun,
        CodInst: codigoInst,
        CodSede: codigoSede,
        IdGrupo: idGroupe
    }

    return fetch('https://www.php.engenius.com.co/DatabaseIE.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((response) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
}
