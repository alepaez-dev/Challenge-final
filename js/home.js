console.log("estamos en prueba.js");

//urls
urlFirebase =
  "https://retofrontend-81a79-default-rtdb.firebaseio.com/posts/.json";
urlImg = "https://loremflickr.com/320/240/person";
urlPhoto = "https://loremflickr.com/320/240/person";

let post_1 = {
  author: "Rahul Mishra",
  content: `You may think a career is an old fashioned concept out of the 80s which could be safely ignored. I sure used to… I thought a career was for banking professionals in suits, not for me! I was young and cool and wanted to work for a living, of course, but I couldn't care less about climbing up the career ladder. Well, I changed my mind.`,
  dateCreated: new Date("2020-03-02").toISOString().slice(0, 10),
  minsToRead: "1",
  tag: "tag",
  title: "How to Ruin Your Career in 4 Easy Steps!!",
  urlAuthor: "/assets/article-image-1.jpeg",
  urlPhoto: "/assets/imagen-main-2.png",
};

let post_2 = {
  author: "Jared White",
  content:
    "I think the folks building Tailwind are talented and nice people. But at a pure technical level, I simply don't like",
  dateCreated: new Date("2018-02-02").toISOString().slice(0, 10),
  minsToRead: "12",
  tag: "tag",
  title: "Why Tailwind Isn't for Me!!",
  urlAuthor:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--Ea1OGrCb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png",
  urlPhoto: "https://dev.to/social_previews/article/573028.png",
};

let post_3 = {
  author: "Ben Halpern",
  content:
    "Cumulative layout shift is the term that refers to content that jumps after initial load.  Not only i...",
  dateCreated: new Date("2016-03-02").toISOString().slice(0, 10),
  minsToRead: "60",
  tag: "tag",
  title: "Fixing Cumulative Layout Shift",
  urlAuthor:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--wFKC0VlN--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/552620/1529d884-64fa-4a05-91a5-336c12488537.jpeg",
  urlPhoto:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--mhUvOpdy--/c_imagga_scale,f_auto,fl_progressive,h_500,q_66,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/v91nxntizymsobq46ug6.gif",
};

let post_4 = {
  author: "Braydon Coyer",
  content: "Creating a Killer GitHub Profile README Part 1",
  dateCreated: new Date("2017-03-02").toISOString().slice(0, 10),
  minsToRead: "12",
  tag: "tag",
  title: "I wrote a free book on React.js and just made it available on GitHub",
  urlAuthor:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--msnEy5xT--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/487155/d537e5be-04cd-45cd-9746-24ec189f53d9.jpeg",
  urlPhoto:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--wFKC0VlN--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/552620/1529d884-64fa-4a05-91a5-336c12488537.jpeg",
};

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
  // baseAllJquery("POST", "", post_1, "", urlFirebase);
  baseAllJquery("GET", showUsers, "", ".list__usuarios", urlFirebase);
});
