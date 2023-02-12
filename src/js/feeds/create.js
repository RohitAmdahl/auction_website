export const url = `https://nf-api.onrender.com/api/v1/auction/listings`;

export async function createListing(create) {
  console.log(create);
  console.log(create.tags);
  try {
    //
    const tags = create.tags.split(",");
    console.log(tags);
    const media = create.media.split(",");
    console.log(media);
    const endsAt = new Date(create.endsAt).toISOString();
    const token = localStorage.getItem("Token");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: create.title,
        description: create.description,
        tags,
        media,
        endsAt,
      }),
    };
    // console.log(create.endsAt.toISOString());
    const response = await fetch(url, options);
    if (response.ok) {
      location.reload();
    }
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
