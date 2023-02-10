const listingByProfileURL = `https://nf-api.onrender.com/api/v1/auction/profiles`;
const user = JSON.parse(localStorage.getItem("user"));
const profileName = user.name;
console.log(profileName);
export async function editAvatar(avatarImage) {
  const token = localStorage.getItem("Token");
  try {
    const Data = {
      method: "get",
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(
      `${listingByProfileURL}/${profileName}/listings`,
      Data
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
    // save("user", {
    //   avatar: json.avatar,
    // });
    // document.querySelector("#profile_img").src = json.avatar;
    // user.avatar = json.avatar;
    // localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}
