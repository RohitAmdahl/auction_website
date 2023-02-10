const url = `https://nf-api.onrender.com/api/v1/auction/listings`;

async function createListing(create) {
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
      tags: tags,
      media: create.media,
      endsAt: create.date,
    }),
  };
  let media = [];
  mediaGallery.forEach((input) => {
    if (input.value !== "") {
      media.push(input.value);
    }
  });
  if (!media || media === [] || media === "") {
    delete options.media;
  }
  const response = await fetch(url, options);
  console.log(response);
  const json = await response.json();
  console.log(json);
}
