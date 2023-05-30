import { GET, BASE_URL, elementGen, postGen, randomImgGen} from "./fn.js";

const navItems = document.querySelectorAll(".nav__item");
export const pageContent = document.querySelector(".page__content")

navItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault()
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });
});

let usersArray = []
let postsArray = []

const tweetData = Promise.all([GET("/posts"), GET("/users")]);

tweetData
  .then((data) => {

    postsArray = data[0].posts;
    usersArray = data[1].users;
    
  })
  .then(() => {postsArray.map((post) => {
    post.user = usersArray.find((user) => user.id === post.userId)
    return post
  })
  .forEach((post) => {
  console.log(post)
  postGen(post) }) //CREAZIONE ELEMENTO
  })




  
