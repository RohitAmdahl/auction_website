const loginUrl = "https://nf-api.onrender.com/api/v1/auction/auth/login";

export async function login(loginUrl, data) {
  try {
    const postData = {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(loginUrl, postData);

    const results = await response.json();

    const accessToken = results.accessToken;

    if (accessToken) {
      window.location.replace("/profile.html");
      console.log("I got a token, and should be logged in");
    } else {
      console.log("I did not get a token, so either a wrong email or password");
    }
    localStorage.setItem("Token", accessToken);

    saveItem("profile", user);
  } catch (error) {
    console.log(error);
  }
}

function logINform() {
  const form = document.querySelector("#loginForm");
  console.log(form);
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
