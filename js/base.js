//deleteuserbtns
const deleteUserBtns = id => {
  // id usuario
  console.log("id: ", id);
  let nuevoid = id;
  console.log("nuevo id: ", nuevoid);
  urlNow = `https://retofrontend-81a79-default-rtdb.firebaseio.com/posts/${id}.json`;
  console.log("url:", urlNow);
  console.log("🚀 ~ file: base.js ~ line 61 ~ urlNow", urlNow);
  console.log("se va a eliminar");
  baseAllJquery("DELETE", "", "", "", urlNow, nuevoid);
};

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
  console.log("entra a getTags");
  let arrayTags = [];

  Object.keys(response).forEach((key, index) => {
    let tag = response[key].tag;
    console.log("response tag:", response[key].tag);

    //agregando cada tag al arreglo
    arrayTags[index] = tag;

    console.log("path", path);
    console.log("tag: ", tag);
    $(path).append(`<a href="#">#${tag}</a>`);
  });
  console.log("arrayTags: ", arrayTags);
};

//showusers
const showUsers = (response, path) => {
  let listrasusuarios = [];
  let listanueva = "";
  let imagenueva = "";
  let arrayTags = [];

  console.log("tags: ", arrayTags);
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
  listrasusuarios.forEach((element, index) => {
    if (index === 0) {
      imagenueva = `<img class="imagen-principal" src="${element.urlPhoto}" alt="">`;
    }

    listanueva += `<article class="article-main d-flex m-1" data-img="${element.urlPhoto}" id="${element._id}">
    <a href="user.html?id=${element._id}">
                                        <div class="iconos-article mr-2">
                                            <img class="icono-article" src="${element.urlAuthor}" alt="">
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
                                                <div class="container__tags"></div>
                                                
                                            </div>
                                            <div class="iconos-botones-article d-flex flex-row justify-content-between align-items-baseline mt-3">
                                                <div class="iconos-botones-iconos">
                                                    <i class="far fa-heart"></i>
                                                    8
                                                    <i class="far fa-comment ml-2"></i>
                                                    3
                                                </div>
                                                <div class="botones-der d-flex flex-row justify-content-between align-items-baseline">
                                                    <p>${element.minsToRead} read mins</p>
                                                    <button class="btn-save btn-deletes" data-id="${element._id}">Eliminar</button>
                                                </div>
                                            </div>
                                        </div>
                                        </a>
                                    </article>`;
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
  $(".img-new").append(imagenueva);
};

//printuser
const printUser = (response, path) => {
  let arrData = "";
  if (response !== null) {
    console.log("si entro al final del null");
    arrData += `<div class="col-12 col-md-11 col-lg-8 p-0">
                    <div class="seccion-main d-flex flex-column">
                            <div class="imagen-main d-flex flex-column justify-content-center">
                                <img class="imagen-principal" src="${response.urlPhoto}" alt="">
                            </div>
                            <article class="article-main d-flex flex-column m-1 mt-2">
                                <div class="titulo-tags">
                                    <h3 class="mb-4">${response.title}</h3>
                                    <a href="#" id="h-web">#${response.tag}</a>
                                    
                                </div>
                                <div class="article-info mt-3 mr-1">
                                    <div class="nombre-fecha d-flex align-items-baseline">
                                        <div class="iconos-article mr-2">
                                            <img class="icono-article" src="${response.urlAuthor}" alt="">
                                        </div>
                                        <h5 class="nombre-article">
                                            ${response.author}
                                        </h5>
                                    </div>
                                    
                                </div>
                                <div class="parrafo-article-2 mt-3">
                                    <p class="parrafo-cursiva">
                                        May 17 <i>Originally published at <strong>Medium</strong>. Updated on ${response.dateCreated}.</i><br> ${response.minsToRead} min read
                                    </p>
                                </div>
                            </article>
                            <div class="info-article">
                                ${response.content}
                            </div>
                        </div>
                 </div>
                  


                    <!-- aside abajo en movil -->
                    <div class="col-12 d-md-none">
                        <aside class="aside-abajo">
                            <div class="div-aside-1 d-flex flex-row align-items-center justify-content-around">
                                <div class="iconos-aside-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="at037kfsigliwzpv4rozzy9awhuae80w" class="crayons-icon svgs"><title id="at037kfsigliwzpv4rozzy9awhuae80w">Heart</title>
                                        <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                                    </svg>
                                    <p class="align-self">2</p>
                                </div>
                                <div class="iconos-aside-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="a6nyjyrcn2hikh5bv0e38q4u5v91eoqb" class="crayons-icon svgs"><title id="a6nyjyrcn2hikh5bv0e38q4u5v91eoqb">Unicorn</title>
                                        <path d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157z" fill="#08090A"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.622 7.223l8.579-3.68c.598-.256 1.087.547.6.985l-6.618 5.941c.881 2.043 2.738 6.34 2.931 6.775 1.348 3.031-2.055 4.918-3.807 3.583a7.027 7.027 0 01-.623-.574c-.974-.965-2.419-2.398-5.207-1.877.284-2.115-.313-3.737-.883-5.288-.38-1.032-.747-2.032-.837-3.124-.346-3.329 3.763-8.23 4.696-7.953.386.115.326 1.229.266 2.319-.051.948-.102 1.88.143 2.12.145.142.428.43.76.773zM11.5 16.5l2.5.5 2.5 2 1-.5-2-4.5-1.5-4-1.5-1-1-1-1-1.5L10 8l-.5 1.5 1 2.5 1 4.5z"></path>
                                    </svg>  
                                    <p class="align-self">8</p>
                                </div>
                                <div class="iconos-aside-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="af8g4rd8yw939spvdgewhg2u8w6o28no" class="crayons-icon svgs"><title id="af8g4rd8yw939spvdgewhg2u8w6o28no">Saved</title>
                                        <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
                                    </svg>
                                    <p class="align-self">3</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="adco8vuv6p7ty78v5iacf8j881jwr6of" class="dropdown-icon crayons-icon svgs"><title id="adco8vuv6p7ty78v5iacf8j881jwr6of">More...</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                            </div>
                        </aside>
                    </div>

                    <!-- aside-2 DERECHA -->
                    <div class="col-3 d-none d-lg-block">
                        <aside class="aside-derecha">
                            <div class="div-1-aside-2 d-flex flex-column">
                                <div class="cuadro-negro">

                                </div>
                                <div class="foto-nombre d-flex flex-start align-items-center">
                                    <img class="foto-aside-der" src="${response.urlAuthor}" class="crayons-avatar__image" alt="Yeganathan S profile image">
                                    <h5>${response.author}</h5>
                                </div>
                                <p class="text-center mt-3">Aspiring Full - Stack and iOS developer!</p>
                                <button class="btn-follow">Follow</button>

                                <div class="aside-der-info p-3 mt-3">
                                    <div class="info">
                                        <h5>Work</h5>
                                        <p>Student</p>
                                    </div>
                                    <div class="info">
                                        <h5>Location</h5>
                                        <p>Cdmx, Mexico</p>
                                    </div>
                                    <div class="info">
                                        <h5>Education</h5>
                                        <p>Kodemia</p>
                                    </div>
                                    <div class="info">
                                        <h5>Joined</h5>
                                        <p>${response.dateCreated}</p>
                                    </div>
                                </div>
                            </div>
                           
                              <!-- parte de lily del aside -->
                                <div class="asideDerecha-Pag2-lista">
                                    <section class="section-lista-aside-pag2">
                                        <ul class="lista-ul">
                                            <li class="lista-li-aside-2">
                                                <ul class="lista-primero-ul  d-flex justify-content-start align-items-center">
                                                  <li class="lista-li tam-letra article">More from</li>
                                                  <li class="lista-li tam-letra"> <a href="">${response.author}</a> </li>
                                                </ul>
                                            </li>
                                             <li class="lista-li-aside-2">
                                                 <article class="article">Create a pull request in Github!</article>
                                                
                                                <p class="article">${response.tag}</p>
                                             </li>
                                        </ul>
                                    </section>
                                </div>  
                        </aside>
                    </div>
                 
                 `;
  } else {
    arrData += `<p class="card-text">El usuario no existe</p>`;
  }
  $(path).append(arrData);
};
