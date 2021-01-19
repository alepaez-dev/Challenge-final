//basealljquery
const baseAllJquery = (method, funct, data, path, url) => {
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
  let listrasusuarios = [];
  let listanueva = "";

  // convertir object a pasar a arreglo
  for (user in response) {
    let usuar = response[user];
    let data = Object.assign({}, { _id: user, ...usuar });
    listrasusuarios.push(data);
  }

  //ordenar ese mismo arreglo
  listrasusuarios.sort((a, b) => {
    return new Date(b.dateCreated) - new Date(a.dateCreated);
  });

  //agregar
  listrasusuarios.forEach(element => {
    console.log(element);
    console.log(element.dateCreated);
    listanueva += `<a href="#">
                                    <article class="article-main d-flex m-1">
                                        <div class="iconos-article mr-2">
                                            <img class="icono-article" src="${element.urlPhoto}" alt="">
                                        </div>
                                        <div class="article-info mt-1 mr-1">
                                            <div class="nombre-fecha">
                                                <h5 class="nombre-article">
                                                    ${element.author}
                                                </h5>
                                                <p class="fecha-article">${element.dateCreated}</p>
                                            </div>
                                            <div class="titulo-tags">
                                                <h3>${element.title}</h3>
                                                <a href="#">#${element.tag}</a>
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
                                                    <p>${element.minsToRead} read</p>
                                                    <button class="btn-save">Save</button>
                                                </div>

                                            </div>
                                        </div>
                                    </article>
                                </a>`;
  });

  //   for (user in response) {
  //     let usuario = response[user];
  //     console.log(response[user].dateCreated);
  //     // console.log("response: ", response);
  //     // console.log("user:", usuario);
  //     usersList += `<a href="#">
  //                                     <article class="article-main d-flex m-1">
  //                                         <div class="iconos-article mr-2">
  //                                             <img class="icono-article" src="${usuario.urlPhoto}" alt="">
  //                                         </div>
  //                                         <div class="article-info mt-1 mr-1">
  //                                             <div class="nombre-fecha">
  //                                                 <h5 class="nombre-article">
  //                                                     ${usuario.author}
  //                                                 </h5>
  //                                                 <p class="fecha-article">${usuario.dateCreated}</p>
  //                                             </div>
  //                                             <div class="titulo-tags">
  //                                                 <h3>${usuario.title}</h3>
  //                                                 <a href="#">#${usuario.tag}</a>
  //                                                 <a href="#">#software</a>
  //                                                 <a href="#">#improvement</a>
  //                                                 <a href="#">#kidding</a>
  //                                                 <a href="#">#sad</a>
  //                                             </div>
  //                                             <div
  //                                                 class="iconos-botones-article d-flex flex-row justify-content-between align-items-baseline mt-3">
  //                                                 <div class="iconos-botones-iconos">
  //                                                     <i class="far fa-heart"></i>
  //                                                     8
  //                                                     <i class="far fa-comment ml-2"></i>
  //                                                     3
  //                                                 </div>
  //                                                 <div
  //                                                     class="botones-der d-flex flex-row justify-content-between align-items-baseline">
  //                                                     <p>${usuario.minsToRead} read</p>
  //                                                     <button class="btn-save">Save</button>
  //                                                 </div>

  //                                             </div>
  //                                         </div>
  //                                     </article>
  //                                 </a>`;
  //   }
  $(path).append(listanueva);
  //   deleteUserBtns();
};
