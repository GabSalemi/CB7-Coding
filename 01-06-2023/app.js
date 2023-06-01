import { GET, BASE_URL, elementGen, postGen, randomImgGen, addPost } from "./fn.js";


// Loading page

setTimeout(() => {
  const loadingPage = document.querySelector(".loading__container")
  loadingPage.classList.add("none")
}, 3000)

// Nav item animation

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

// posts creator

let usersArray = []
let postsArray = []

const tweetData = Promise.all([GET("/posts"), GET("/users")]);
const trendList = document.querySelector(".hashtag__list")

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
  postGen(post) }) //CREAZIONE ELEMENTO

    postsArray.slice(0, 10).map((post) => { // Creazione lista trend
      console.log(post)
      const trendEl = elementGen("li", "hashtag__el", post.tags[0])
      trendEl.prepend("#")
      trendList.append(trendEl)
    })
  })


// following creator

const followList = document.querySelector(".follow__list")

  GET("/users").then((data) => {

    let usersSelection = data.users.slice(10, 15)
    usersSelection.forEach((user) => {
      const followDiv = elementGen("div", "follow__div")
      const followImg = elementGen("img", "follow__img", "", {name: "src", value: user.image})
      const followNameDiv = elementGen("div", "follow__names")
      const followAlias = elementGen("h3", "follow__alias", user.maidenName)
      const followName = elementGen("h4", "follow__name",  user.firstName )
      const followInput = elementGen("div", "follow__input", "Segui")

      followName.prepend("@")
      followNameDiv.append(followAlias, followName)
      followDiv.append(followImg, followNameDiv, followInput)
      followList.append(followDiv)
    })
  })


const asideContainer = document.querySelector(".aside__container")

navItems[1].addEventListener("click", () => {
  asideContainer.classList.toggle("hide")
  })

// POST METHOD

const submitButton = document.querySelector(".newpost__form")
submitButton.addEventListener("submit", (e) => {
  e.preventDefault()
console.log(e)
addPost("/posts/add", e.target[0].value,
    7) 
  })
    
  
