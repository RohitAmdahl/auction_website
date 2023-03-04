export const updateListingUrl = `https://nf-api.onrender.com/api/v1/auction/listings`;

const url = new URL(location.href);
const id = url.searchParams.get("id");

export async function updateListingContent(create) {
  try {
    const tags = create.tags.split(",");
    console.log(tags);
    const media = create.media.split(",");
    console.log(media);

    const token = localStorage.getItem("Token");
    const options = {
      method: "put",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: create.title,
        description: create.description,
        tags,
        media,
      }),
    };

    const response = await fetch(`${updateListingUrl}/${id}`, options);
    if (response.ok) {
      const msg = document.querySelector(".message");
      msg.innerHTML = `<p class="alert alert-success">Your list is updated please go back to profile and make your all is correct</p>`;
    } else {
      msg.classList.remove("message");
    }

    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}
