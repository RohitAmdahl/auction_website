import { avatarURL } from "../pages/avatar.js";
import { editAvatar } from "../pages/avatar.js";

const profile_name = (document.querySelector("#title").innerHTML =
  localStorage.getItem("userName"));

const credits = (document.querySelector("#credit").innerHTML =
  localStorage.getItem("credits"));

const profile_email = JSON.parse(localStorage.getItem("user"));
const user_email = profile_email.email;
const email = document.querySelector("#email");
email.innerText = user_email;
//--profile picture
const avatar = JSON.parse(localStorage.getItem("user"));
const avatar_pic = avatar.avatar;
const pic = document.querySelector("#profile_img");

// console.log({ profile_email, img: avatar_pic.avatar });
pic.src = profile_email.avatar;
//---form
const form = document.querySelector("#avatar");

function editPicture() {
  form.addEventListener("submit", (e) => {
    e.target.value;
    e.preventDefault();
    const form = e.target;
    const avatarImage = form[0].value;
    editAvatar(avatarImage);
    form.reset();
  });
}
editPicture();
