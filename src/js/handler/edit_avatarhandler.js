import { avatarURL } from "../pages/avatar.js";
import { editAvatar } from "../pages/avatar.js";

const profile_name = (document.querySelector("#title").innerHTML =
  localStorage.getItem("userName"));

const credits = (document.querySelector("#credit").innerHTML =
  localStorage.getItem("credits"));

const form = document.querySelector("#avatar");
console.log(form);
function editPicture() {
  form.addEventListener("submit", (e) => {
    e.target.value;
    e.preventDefault();
    console.log(e);
    const form = e.target;
    console.log(form);
    const avatarImage = form[0].value;
    console.log(avatarImage);
    editAvatar(avatarImage);
  });
}
editPicture();
