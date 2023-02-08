export const avatarURL = `https://nf-api.onrender.com/api/v1/auction/profiles`;

export async function editAvatar(avatarImage) {
  try {
    const sendData = {
      avatar: avatarImage,
    };
    console.log(sendData);

    const followData = {
      method: "put",
      headers: {
        "Content-type": "application/json ",
      },
      body: JSON.stringify(sendData),
    };

    const response = await fetch(
      `${avatarURL}/${profileName}/media`,
      followData
    );
    console.log(response);
    const json = await response.json();
    console.log(json);

    const avatar = json.avatar;
    console.log(avatar);
    localStorage.setItem("profile", avatar);
  } catch (error) {
    console.log(error);
  }
}
