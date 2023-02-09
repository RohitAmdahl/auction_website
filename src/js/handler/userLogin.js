import { login } from "../auth/login.js";
import { loginUrl } from "../auth/login.js";

function logINform() {
  const form = document.querySelector("#loginForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginForm = { form, email, password };
    form.reset();

    login(loginUrl, loginForm);
  });
}

logINform();
