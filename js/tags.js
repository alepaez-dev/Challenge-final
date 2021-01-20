$(document).ready(function () {
    $(".btnJs").click(function () {

        console.log("boton presionado")
        let valInput = $("#tagname").val()
        

        if (valInput !== "") {
            createTag({
                tag: valInput
            })
            console.log(valInput)
        }

    })



})
const createTag = (data) => {
    console.log(data)
    fetch("https://retofrontend-81a79-default-rtdb.firebaseio.com/tags/.json", {
            method: "POST",
            headers: {
                "tagName": "tag/json",
            },
            body: JSON.stringify(data)


        })
        .then(response => {
            return response.json() //si el servidor si envia respuesta afirma
        })
        .then(users => {
            console.log(users) //imprime la respuesta del objeto mas abajo como los usuarios
            //puedes ejecutar funciones
        }).catch(err => {
            console.log(err) //si no se ejecuta el .then
        })
}