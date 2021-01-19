console.log("entramos a la pagina de user");

console.log(location.search);
let urll = new URLSearchParams(location.search);
let idUser = urll.get("id");

console.log("url", urll);
console.log("idUser", idUser);
let urlGet = `https://retofrontend-81a79-default-rtdb.firebaseio.com/posts/${idUser}.json`;
baseAllJquery("GET", printUser, "", ".usershow", urlGet);
