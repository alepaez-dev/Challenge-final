console.log("estamos en prueba.js");

//urls
urlFirebase =
  "https://retofrontend-81a79-default-rtdb.firebaseio.com/posts/.json";
urlImg = "https://loremflickr.com/320/240/person";
urlPhoto = "https://loremflickr.com/320/240/person";

//POST GET

$(document).ready(() => {
  console.log("entranod a jqury");

  //poner usuarios
  baseAllJquery("GET", showUsers, "", ".list__usuarios", urlFirebase, "");
  //poner tags en usuario
  baseAllJquery(
    "GET",
    getTags,
    "",
    ".tags_container",
    "https://retofrontend-81a79-default-rtdb.firebaseio.com/tags/.json",
    ""
  );

  //actualizar imagen y delete
  $("#articuloss").on("click", ".btn-deletes", function () {
    // Do something on an existent or future .dynamicElement
    // alert($(this).attr("data-id")); // or alert($(this).attr('id'));
    console.log("thgus", $(".article-main"));
    let articulos = $(".article-main ");

    deleteUserBtns($(this).attr("data-id"));

    //comprobar
    if ($(this).attr("data-id") === articulos[0].id) {
      console.log("si entra al if");
      //eliminas y te agarra el siguiente
      let nuevaImage = articulos[1].dataset.img;
      $(".imagen-principal").attr("src", nuevaImage);
    } else {
      console.log("no no es el mismo");
    }
  });
});
