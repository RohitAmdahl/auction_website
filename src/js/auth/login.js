import * as storage from "../storage/localStorage.js";
const loginUrl = "https://nf-api.onrender.com/api/v1/auction/auth/login";
const method = "post";

export async function login(url, data) {
  try {
    const postData = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(loginUrl, postData);

    const results = await response.json();

    const accessToken = results.accessToken;
    if (accessToken) {
      window.location.replace("/index.html");
      console.log("I got a token, and should be logged in");
    } else {
      console.log("I did not get a token, so either a wrong email or password");
    }
    localStorage.setItem("Token", accessToken);
    saveItem("profile", results);
  } catch (error) {
    console.log(error);
  }
}
