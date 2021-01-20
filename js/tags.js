$(document).ready(function () {
    $(".btnJs").click(function () {

            console.log("boton presionado")
            let valInput = $("#tagname").val()



            let options = {
                method: "GET"
            }
            fetch("https://retofrontend-81a79-default-rtdb.firebaseio.com/tags/.json", options)
                .then(response => {
                    return response.json() //si el servidor si envia respuesta afirma
                })
                .then(path => {
                    console.log(path) //imprime la respuesta del objeto mas abajo como los usuarios
                    //puedes ejecutar funciones
                }).catch(err => {
                    console.log(err) //si no se ejecuta el .then
                })

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
            console.log("arrayTags: ", arrayTags)
    }

        /* if (valInput === tag_array) {
            console.log("tag repetido")
        } else {
            if (valInput !== "") {
                createTag({
                    tag: valInput
                })
                console.log(valInput)
            }
        } */
        if (valInput !== "") {
            createTag({
                tag: valInput
            })
            console.log(valInput)



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