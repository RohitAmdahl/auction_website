import { remove } from "../storage/localStorage.js";
import { clear } from "../storage/localStorage.js";

export function ProfileLogOut() {
  const logOut = document.querySelector(".cta-logout-cta");
  logOut.addEventListener("click", (e) => {
    remove("user");
    remove("Token");
    remove("profile");
    remove("userName");
    remove("credits");
    setTimeout(() => {
      window.location.href = "/login.html";
    }, 800);
  });
}
ProfileLogOut();
