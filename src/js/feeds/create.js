export const url = `https://nf-api.onrender.com/api/v1/auction/listings`;

export async function createListing(create) {
  try {
    //
    const tags = create.tags.split(",");
    const media = create.media.split(",");
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
        tags: tags,
        media: media,
        endsAt: create.date,
      }),
    };

    const response = await fetch(url, options);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

//  let media = [];

// mediaGallery.forEach((input) => {
//   if (input.value !== "") {
//     media.push(input.value);
//   }
// });

// if (!media || media === [] || media === "") {
//   delete options.media;
// }
