console.log("estamos en prueba.js");

//basealljquery
const baseAllJquery = (method, funct, data, path, url) => {
  //   console.log("entra a la funcion de baseAllJquery");
  //   console.log("metodo: ", method);
  //   console.log("data:", data);
  //   console.log("path", path);
  //   console.log("funct: ", funct);
  //   console.log("url:", url);
  if (method === "GET" || method === "DELETE") {
    console.log("entro al if de GET");
    $.ajax({
      url: url,
      method: method,
    })
      .done(response => {
        console.log("response", response);
        if (funct !== "") {
          if (path !== "") {
            funct(response, path);
          } else {
            funct(response);
          }
        } else {
          console.log(response);
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

//showusers
const showUsers = (response, path) => {
  let usersList = "";
  console.log("path", path);
  console.log("usersList:", usersList);
  for (user in response) {
    let usuario = response[user];
    console.log("user:", usuario);
    usersList += `<a href="#">
                                <article class="article-main d-flex m-1">
                                    <div class="iconos-article mr-2">
                                        <img class="icono-article" src="${usuario.urlImg}" alt="">
                                    </div>
                                    <div class="article-info mt-1 mr-1">
                                        <div class="nombre-fecha">
                                            <h5 class="nombre-article">
                                                ${usuario.author}
                                            </h5>
                                            <p class="fecha-article">${usuario.dateCreated}</p>
                                        </div>
                                        <div class="titulo-tags">
                                            <h3>${usuario.title}</h3>
                                            <a href="#">#${usuario.tag}</a>
                                            <a href="#">#software</a>
                                            <a href="#">#improvement</a>
                                            <a href="#">#kidding</a>
                                            <a href="#">#sad</a>
                                        </div>
                                        <div
                                            class="iconos-botones-article d-flex flex-row justify-content-between align-items-baseline mt-3">
                                            <div class="iconos-botones-iconos">
                                                <i class="far fa-heart"></i>
                                                8
                                                <i class="far fa-comment ml-2"></i>
                                                3
                                            </div>
                                            <div
                                                class="botones-der d-flex flex-row justify-content-between align-items-baseline">
                                                <p>${usuario.minsToRead} read</p>
                                                <button class="btn-save">Save</button>
                                            </div>

                                        </div>
                                    </div>
                                </article>
                            </a>`;
  }
  console.log("path", path);
  console.log("usersList:", usersList);
  console.log(window.location.pathname);
  console.log("blkabla");
  console.log("path", path);
  console.log("usersList:", usersList);
  $(path).append(usersList);
  //   deleteUserBtns();
};
urlFirebase =
  "https://retofrontend-81a79-default-rtdb.firebaseio.com/posts/.json";
urlImg = "./assets/article-image-1.jpeg";
urlPhoto = "./assets/imagen-main-2.png";

let post = {
  author: "Rahul Mishra",
  content: "content",
  dateCreated: new Date(Date.now()).toISOString().slice(0, 10),
  minsToRead: "1",
  tag: "tag",
  title: "How to Ruin Your Career in 4 Easy Steps!!",
  urlAuthor: urlImg,
  urlPhoto: urlPhoto,
};
console.log(post);

//POST
console.log("se va a hacer un post");

$(document).ready(() => {
  console.log("entranod a jqury");
  console.log(post);
  //   baseAllJquery("POST", "", post, "", urlFirebase);
  baseAllJquery("GET", showUsers, "", ".aaapp", urlFirebase);
});
