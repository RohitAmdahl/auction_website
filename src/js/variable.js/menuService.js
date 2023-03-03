import { ProfileLogOut } from "../handler/logout.js";

// ---menu hide and show
const token = localStorage.getItem("Token");
const signup = document.querySelector(".cta-signup");
const login = document.querySelector(".cta-login");
const logout = document.querySelector(".cta-logout-cta");
const user = document.querySelector("#user");
if (token) {
  logout.style.display = "block";
  login.style.display = "none";
  user.style.display = "block";
  signup.style.display = "none";
} else {
  login.style.display = "block";
  signup.style.display = "block";
  logout.style.display = "none";
  user.style.display = "none";
}
ProfileLogOut();
