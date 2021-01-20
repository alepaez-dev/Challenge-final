console.log("new user");

$(document).ready(() => {
 /* 
 if($("#autorName").val() === null){
     console.log("no se muestra boton")
     $(".btnGuardar").hide()
 }
 else{
     console.log("se muestra el boton")
 }
$(".btnGuardar").hide()
$("#autorName").keydown(event =>{
    
})
 if($("#autorName").val() === '' || $("#titleArticle").val()=== '' || $("#message").val()=== '' || $("#urlImage").val()=== '' || $("#minsToRead").val()=== '' ){
      console.log("el boton no debe mostrarse hay un campo vacio")
      $(".btnGuardar").hide()

  }else{
      console.log("algo en el aurotr")
    $(".btnGuardar").show()
  }

//funcion de validacion de formulario
window.onload = function(){
//document.formularioPost.autorName.focus();
document.formularioPost.addEventListener('submit',validarFormulario);
}

function validarFormulario(evObject){
    evObject.preventDefault();
    var todoCorrecto = true;
    var formulario = document.form-horizontal;
    for(let i=0; i< formulario.lenght;i++){
        if(formulario[i].type == 'text'){
            if(formulario[i].value == null || formulario.value.length ==0){
                alert(formulario[i].name+'No puede estar vacio');
                todoCorrecto=false;
            }
        }
    }
    if(todoCorrecto == true){
        //formulario.submit();
        console.log("todo correcto en el formulario")
    }
}
*/
function validar(){
    console.log("entro a funcion de validar")
let data = {
    author: $("#autorName").val(),
      content: $("#message").val(),
      dateCreated: document.getElementById("dateCreation").value,
      minsToRead: $("#minsToRead").val(),
      tag: "github, markdown, webdev, readme",
      title: $("#titleArticle").val(),
      urlAuthor:$("#urlAuthor").val(),
      urlPhoto: $("#urlImage").val()

}
if(data.author==='' || data.content==='' || data.dateCreated==='' || data.minsToRead===''
|| data.tag==='' || data.title==='' || data.urlAuthor==='' || data.urlPhoto===''){
    console.log("HAY UN ELEMENTO VACIO")
    alert("HAY UN CAMPO VACIO")
}else{
    console.log("todos los campos llenos")
    return true
}

    /*if(miAutor.lenght ===null || miContent.length===null || miMins.length===null 
    || miTitle.lenght===null
    || miurlAutor.lenght===null
    || miurlPhoto.lenght===null){
        console.log("elemento vacio")
        return false;
        
    }
    else{
        
    return true;
    }*/
    
}
//


  $(".btnGuardar").click(event => {
    event.preventDefault;
    console.log("entra al boton click");
     if(validar()){
         console.log("EL RESULTADO DE LA FUNCION VALIDAR")


let dataNewPost = {
      author: $("#autorName").val(),
      content: $("#message").val(),
      dateCreated: document.getElementById("dateCreation").value,
      minsToRead: $("#minsToRead").val(),
      tag: "github, markdown, webdev, readme",
      title: $("#titleArticle").val(),
      urlAuthor:$("#urlAuthor").val(),
      urlPhoto: $("#urlImage").val()
      
      
      
    };
    


    creaNuevoPost(
      "POST",
      dataNewPost,"https://jsproyecto-97d25-default-rtdb.firebaseio.com/post/.json"
      
    );

     }
    
      
    redirectPage();
    //base de ale--
    //https://retofrontend-81a79-default-rtdb.firebaseio.com/posts/.json

        //base de lily
    //`https://jsproyecto-97d25-default-rtdb.firebaseio.com/post/.json`
  });
});

const creaNuevoPost = (method,data,url) =>{
    console.log("entro a la funcion creaNuevoPost")
    console.log("Metodo enviado:", method)
    console.log("los datos:", data)
    console.log("url enviado:", url)

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
}

//redireccionar
const redirectPage = () => {
    setTimeout(() => {
      window.location.replace("http://127.0.0.1:5502/index.html");
    }, 2000);
  };