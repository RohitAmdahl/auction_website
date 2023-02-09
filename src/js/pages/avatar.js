import { save } from "../storage/localStorage.js";
export const avatarURL = `https://nf-api.onrender.com/api/v1/auction/profiles`;
const user = JSON.parse(localStorage.getItem("user"));
const profileName = user.name;

export async function editAvatar(avatarImage) {
  const token = localStorage.getItem("Token");
  try {
    const sendData = {
      avatar: avatarImage,
    };
    console.log(sendData);

    const Data = {
      method: "put",
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(sendData),
    };

    const response = await fetch(`${avatarURL}/${profileName}/media`, Data);
    console.log(response);
    const json = await response.json();
    console.log(json);
    save("user", {
      avatar: json.avatar,
    });
    document.querySelector("#profile_img").src = json.avatar;
    user.avatar = json.avatar;
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}
