import { pageContent } from "./app.js"

export const BASE_URL = "https://dummyjson.com"

export const GET = async(endpoint) => {
    const res = await fetch(BASE_URL + endpoint)
    const data = await res.json()

    return data
}

export const elementGen = (elemType, className, textCont, ...attrs) => {
    const element = document.createElement(elemType)
    element.className = className
    element.textContent = textCont
    attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value))

    return element
}
// Random Img Function

export const randomImgGen = (userid) => {
    if (userid % 2 === 0) {
        console.log(userid)
        let imgEl = elementGen("img", "post__img", "", {name: "src", value: "https://picsum.photos/200"})

        return imgEl
    } else {
        let noimgEl = elementGen("img", "nopost__img")
        return noimgEl
    }}




// POST FUNCTION 
export const postGen = (post) => {
    const generalPostDiv = elementGen("div", "post__div")
    const profileLeftDiv = elementGen("div", "post-profile__div")
    const postDiv = elementGen("div", "post__space")

    const authorDiv = elementGen("div", "author__div")
    const contentDiv = elementGen("div", "post__content")
    const reactionDiv = elementGen("div", "reaction__div")

    const profileImg = elementGen("img", "profile-post__img", "", {name: "src", value: post.user?.image || "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png"})

    const authorUsername = elementGen("span", "author__username", post.user?.maidenName || "User-Name")
    const authorName = elementGen("span", "author__name", "@" + post.user?.firstName + post.user?.lastName || "noname")
    // const postDate = elementGen("span", "post__date")

    const postImage = randomImgGen(post.userId)
    const postText = elementGen("p", "post__text", post.body)

    const reactionIcon = elementGen("img", "like__reaction", post.reaction, {name: "src", value: "https://static-00.iconduck.com/assets.00/heart-icon-512x461-rdoishra.png"})
    const retweetIcon = elementGen("img", "retweet__icon", "", {name: "src", value: "https://cdn.icon-icons.com/icons2/1709/PNG/512/retweet_112393.png"})
    const resIcon = elementGen("img", "res__icon", "", {name: "src", value: "https://static.thenounproject.com/png/70802-200.png"})
    

    profileLeftDiv.append(profileImg)
    authorDiv.append(authorUsername, authorName)
    contentDiv.append(postText, postImage)
    reactionDiv.append(reactionIcon, retweetIcon, resIcon)
    postDiv.append(authorDiv, contentDiv, reactionDiv)
    generalPostDiv.append(profileLeftDiv, postDiv)

    pageContent.append(generalPostDiv)

}