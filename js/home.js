console.log("estamos en prueba.js");

//urls
urlFirebase =
  "https://retofrontend-81a79-default-rtdb.firebaseio.com/posts/.json";
urlImg = "https://loremflickr.com/320/240/person";
urlPhoto = "https://loremflickr.com/320/240/person";

let post_5 = {
  author: "Chris Noring",
  content: "A free book on React, now available as a GitHub repo.",
  dateCreated: new Date("2021-03-02").toISOString().slice(0, 10),
  minsToRead: "5",
  tag: "github, markdown, webdev, readme",
  title: "I wrote a free book on React.js and just made it available on GitHub",
  urlAuthor:
    "https://res.cloudinary.com/practicaldev/image/fetch/s---uM41zbM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/135219/f7e49646-7ace-4fc2-810e-29e2087e56a0.jpeg",
  urlPhoto:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--e1xt_oy4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/8bhvr7zjf5iugt72ddwo.jpg",
  social_image:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--9hY9DQXK-",
};
//POST GET
$(document).ready(() => {
  console.log("entranod a jqury");
  baseAllJquery("POST", "", post_5, "", urlFirebase);
  baseAllJquery("GET", showUsers, "", ".list__usuarios", urlFirebase);

  $("#articuloss").on("click", ".btn-deletes", function () {
    // Do something on an existent or future .dynamicElement
    alert(this.id); // or alert($(this).attr('id'));
    deleteUserBtns(this.id);
  });
});
