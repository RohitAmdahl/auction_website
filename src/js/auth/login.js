// import { isUserLoggedIn } from "../variable.js/pagesvariable.js";
import { save } from "../storage/localStorage.js";
export const loginUrl = "https://nf-api.onrender.com/api/v1/auction/auth/login";
const method = "post";
/**
 * this function calls en api with post method
 *  api fetch and getting accessToken,credits and user profile
 *@param {string} url
 *body: JSON.stringify(data),
 *
 */
export async function login(url, data) {
  try {
    const postData = {
      method,
      headers: {
        "Content-Type": "application/json charset=UTF-8",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(loginUrl, postData);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const results = await response.json();

    const accessToken = results.accessToken;
    localStorage.setItem("Token", accessToken);
    const user = results.name;
    localStorage.setItem("userName", user);
    const credit = results.credits;
    localStorage.setItem("credits", credit);

    save("user", {
      name: results.name,
      email: results.email,
      avatar: results.avatar,
      credits: results.credits,
    });

    if (accessToken && accessToken.length > 0) {
      location.replace("/profile.html");
    }
  } catch (error) {
    console.log(error);
  }
}
