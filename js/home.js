console.log("estamos en prueba.js");

//urls
urlFirebase =
  "https://retofrontend-81a79-default-rtdb.firebaseio.com/posts/.json";
urlImg = "https://loremflickr.com/320/240/person";
urlPhoto = "https://loremflickr.com/320/240/person";

let post = {
  author: "Rahul Mishra",
  content: "content",
  dateCreated: new Date("2018-03-02").toISOString().slice(0, 10),
  minsToRead: "1",
  tag: "tag",
  title: "How to Ruin Your Career in 4 Easy Steps!!",
  urlAuthor: urlImg,
  urlPhoto: urlPhoto,
};

//POST GET
$(document).ready(() => {
  console.log("entranod a jqury");
  console.log(post);
  //   baseAllJquery("POST", "", post, "", urlFirebase);
  baseAllJquery("GET", showUsers, "", ".list__usuarios", urlFirebase);
});
