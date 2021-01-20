$(document).ready(function () {
    console.log("documento listo")
    
    $("#tagsFormat").click(function () {
        console.log("boton activado")
        $("#tagsFormat").css("color","red")
        window.location.pathname = '/formTags.html'
    })
})