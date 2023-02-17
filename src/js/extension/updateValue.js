const single_Url = `https://nf-api.onrender.com/api/v1/auction/listings`;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

export async function updateValue() {
  const token = localStorage.getItem("Token");
  const data = {
    header: {
      "Content-Type": "application/json charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${single_Url}/${id}`, data);
    const json = await response.json();
    const title = document.querySelector(".valueTitle");
    title.value = json.title;
    const description = document.querySelector(".description");
    description.value = json.description;
    const media = document.querySelector(".url");
    media.value = json.media;
    const tags = document.querySelector(".tags");
    tags.value = json.tags[0];
    const endAt = document.querySelector("#endsAt");
    endAt.value = json.endAt;
  } catch (error) {
    console.log(error);
  }
}
