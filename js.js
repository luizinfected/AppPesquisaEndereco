function getDados(cep) {
  let url = "https://viacep.com.br/ws/" + cep + "/json/unicode/";
  console.log(url);

  let ajax = new XMLHttpRequest();
  ajax.open("GET", url);

  ajax.onreadystatechange = () => {
    if (ajax.readyState == 4 && ajax.status == 200) {
      dadosJson = ajax.responseText;
      let dadosObj = JSON.parse(dadosJson);

      document.getElementById("endereco").value = dadosObj.logradouro;
      document.getElementById("bairro").value = dadosObj.bairro;
      document.getElementById("cidade").value = dadosObj.localidade;
      document.getElementById("uf").value = dadosObj.uf;
    }
  };

  ajax.send();
}
