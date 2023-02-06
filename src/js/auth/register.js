const registerUrl = "https://nf-api.onrender.com/api/v1/auction/auth/register";
const form = document.querySelector("#register-form");
const displayMsg = document.querySelector(".hero-heading");

async function register(registerUrl, data) {
  try {
    const body = JSON.stringify(data);
    const postData = {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body,
    };
    const response = await fetch(registerUrl, postData);
    const results = await response.json();
    console.log(results);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const registerForm = { form, name, email, password };
  console.log(registerForm);

  setTimeout(() => {
    displayMsg.style.display = "none";
  }, 5000);

  if (form.password.value && form.name.value && form.email.value) {
    displayMsg.innerHTML = `<span class="hero-heading fw-bold d-flex justify-content-center p-3 mt-2 shadow-lg p-3 rounded">you are successfully registered please log in!</span>`;
    form.reset();
  } else {
    return Error;
  }

  register(registerUrl, registerForm);
});
