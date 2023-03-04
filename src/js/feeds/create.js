export const url = `https://nf-api.onrender.com/api/v1/auction/listings`;
/**
 * this function calls en api with post method
 * authorization need to have in order to call the api
 * const method = "post";
 *@param {string} url
 *@param {any} data
 *
 */
export async function createListing(create) {
  try {
    const tags = create.tags.split(",");

    const media = create.media.split(",");

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

    const response = await fetch(url, options);
    if (response.ok) {
      location.reload();
    }

    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}
