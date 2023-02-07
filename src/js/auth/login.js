import * as storage from "../storage/localStorage.js";
export const loginUrl = "https://nf-api.onrender.com/api/v1/auction/auth/login";
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
    localStorage.setItem("Token", accessToken);
    const user = results.name;
    localStorage.setItem("userName", user);
    const credit = results.credits;
    localStorage.setItem("credits", credit);

    if (accessToken) {
      window.location.replace("/profile.html");
      console.log("I got a token, and should be logged in");
    } else {
      console.log("I did not get a token, so either a wrong email or password");
    }
  } catch (error) {
    console.log(error);
  }
}
