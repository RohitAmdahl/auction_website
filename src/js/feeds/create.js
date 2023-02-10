export const url = `https://nf-api.onrender.com/api/v1/auction/listings`;

export async function createListing(create) {
  try {
    //
    const tags = create.tags.replace(/\s+/g, "").split(",");
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
        tags: create.tags,
        media: create.media,
        endsAt: create.date,
      }),
    };

    const response = await fetch(url, options);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log("Error message when bidding: ", json.errors[0].message);
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
