console.log("new user");

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

const getTags = (response, path) => {
  console.log("entra a getTags");
  let arrayTags = [];
  Object.keys(response).forEach((key, index) => {
    let tag = response[key].tag;
    console.log("response tag:", response[key].tag);
    //agregando cada tag al arreglo
    arrayTags[index] = tag;
    console.log("path", path);
    console.log("tag: ", tag);
    $(path).append(`<option>${tag}</option>`);
  });
  console.log("arrayTags: ", arrayTags);
};

$(document).ready(() => {
  //funcion que carga los tags desde la BD
  //obtenerTags('GET','https://retofrontend-81a79-default-rtdb.firebaseio.com/tags/.json');{

  //}
  baseAllJquery(
    "GET",
    getTags,
    "",
    ".form-select-tags",
    "https://retofrontend-81a79-default-rtdb.firebaseio.com/tags/.json",
    ""
  );

  function validar() {
    console.log("entro a funcion de validar");
    let data = {
      author: $("#autorName").val(),
      content: $("#message").val(),
      dateCreated: document.getElementById("dateCreation").value,
      minsToRead: $("#minsToRead").val(),
      //tag:document.getElementsByClassName("form-select-tags").text,
      //tag:$(".form-select-tags").val(),
      title: $("#titleArticle").val(),
      urlAuthor: $("#urlAuthor").val(),
      urlPhoto: $("#urlImage").val(),
    };
    if (
      data.author === "" ||
      data.content === "" ||
      data.dateCreated === "" ||
      data.minsToRead === "" ||
      data.tag === "" ||
      data.title === "" ||
      data.urlAuthor === "" ||
      data.urlPhoto === ""
    ) {
      console.log("HAY UN ELEMENTO VACIO");
      alert("HAY UNO O MAS CAMPOS VACIOS");
    } else {
      console.log("todos los campos llenos");
      redirectPage();
      return true;
    }
  }
  //

  $(".btnGuardar").click(event => {
    event.preventDefault;
    console.log("entra al boton click");
    if (validar()) {
      console.log("EL RESULTADO DE LA FUNCION VALIDAR");

      let dataNewPost = {
        author: $("#autorName").val(),
        content: $("#message").val(),
        dateCreated: document.getElementById("dateCreation").value,
        minsToRead: $("#minsToRead").val(),
        tag: document.getElementById("idSelect").value,
        //tag: "github, markdown, webdev, readme",
        title: $("#titleArticle").val(),
        urlAuthor: $("#urlAuthor").val(),
        urlPhoto: $("#urlImage").val(),
      };

      creaNuevoPost(
        "POST",
        dataNewPost,
        "https://retofrontend-81a79-default-rtdb.firebaseio.com/posts/.json"
      );
    }

    //base de ale--
    //https://retofrontend-81a79-default-rtdb.firebaseio.com/posts/.json

    //base de lily
    //`https://jsproyecto-97d25-default-rtdb.firebaseio.com/post/.json`
  });
});

const creaNuevoPost = (method, data, url) => {
  //console.log("entro a la funcion creaNuevoPost")
  // console.log("Metodo enviado:", method)
  // console.log("los datos:", data)
  // console.log("url enviado:", url)

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

  //redirectPage()
};

const obtenerTags = (method, url) => {
  console.log("metodo enviado", method);
  console.log("url enviado:", url);
  console.log("entro a la funcion de obtener Tags");
  let userTagsList = "";
  let TagsEjemplo = ["phyton", "c++", "java", "develop", "ruby"];
  let elSelect = document.getElementsByClassName(".form-select-tags")[0];
  for (value in TagsEjemplo) {
    let optionTag = document.createElement("option1");
    optionTag.text = array[value];
    elSelect.add(option);
  }
};

//redireccionar
const redirectPage = () => {
  setTimeout(() => {
    window.location.replace("http://127.0.0.1:5502/index.html");
  }, 2000);
};
