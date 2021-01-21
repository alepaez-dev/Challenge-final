//basealljquery
const baseAllJquery = (method, funct, data, path, url, id) => {
  console.log("id: ", id);
  if (method === "GET" || method === "DELETE") {
    console.log("entro al if de GET y DELETE");
    $.ajax({
      url: url,
      method: method,
    })
      .done(response => {
        // console.log("response", response);
        if (method === "GET") {
          if (funct !== "") {
            if (path !== "") {
              funct(response, path);
            } else {
              funct(response);
            }
          }
        } else {
          //DELETE
          console.log("method: ", method);
          console.log(response);
          console.log("bbbbbbb", $(`#${id}`));
          console.log("aaaaaa", $(`#${id}`));
          $(`#${id}`).remove();
        }
      })
      .fail(() => {
        console.log("todo mal");
      });
  } else {
    //PATCH, POST, PUT
    console.log("entro al if del POST, PATCH Y PUT");
    $.ajax({
      url: url,
      method: method,
      data: JSON.stringify(data),
    })
      .done(response => {
        console.log(response);
      })
      .fail(err => {
        console.log(err);
        console.log(err.status);
        console.log(err.statusText);
        console.log("todo mal");
      });
  }
};
// obtener tags
const getTags = (response, path) => {
  let valInput = $("#tagname").val();
  console.log("entra a getTags");
  let arrayTags = [];
  Object.keys(response).forEach((key, index) => {
    let tag = response[key].tag;
    console.log("response tag:", response[key].tag);
    //agregando cada tag al arreglo
    arrayTags[index] = tag;
    /* console.log("path", path); */
    console.log("tag: ", tag);
    $(".tags_container").append(`<li>#${tag}</li>`);
  });
  console.log("arrayTags: ", arrayTags);
  let aux = 0;
  arrayTags.forEach(element => {
    if (element === valInput) {
      aux++;
    }
  });
  if (aux === 0 && valInput !== "") {
    createTag({
      tag: valInput,
    });
  } else if (aux !== 0) {
    alert("Esta tag ya existe, no se puede agregar");
  } else if (valInput === "") {
    alert("Campo vacio, ingresar algo");
  }
};

let urlDb = "https://retofrontend-81a79-default-rtdb.firebaseio.com/tags/.json";

$(document).ready(function () {
  $(".btnJs").click(function () {
    console.log("boton presionado");
    let valInput = $("#tagname").val();
    baseAllJquery("GET", getTags, "", "", urlDb, "");
    /* if (valInput !== "") {
            createTag({
                tag: valInput
            })
            console.log(valInput)
        } */
  });
});
const createTag = data => {
  console.log(data);
  fetch("https://retofrontend-81a79-default-rtdb.firebaseio.com/tags/.json", {
    method: "POST",
    headers: {
      tagName: "tag/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      return response.json(); //si el servidor si envia respuesta afirma
    })
    .then(users => {
      console.log(users); //imprime la respuesta del objeto mas abajo como los usuarios
      //puedes ejecutar funciones
    })
    .catch(err => {
      console.log(err); //si no se ejecuta el .then
    });
};
