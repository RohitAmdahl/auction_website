import { url } from "../feeds/create.js";
import { createListing } from "../feeds/create.js";

function createListingListener() {
  const form = document.querySelector(".selling");
  console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    const title = form[0].value;
    console.log(title);
    const description = form[1].value;
    console.log(description);
    const media = form[2].value;
    console.log(media);
    const tags = form[3].value;
    console.log(tags);
    const endsAt = form[4].value;
    console.log(endsAt);
    console.log(new Date(endsAt));
    console.log(new Date(endsAt).toISOString());

    // console.log(create.endsAt.toISOString());
    // const id = form.id.value;
    if (tags.trim()) {
      tags.split(",");
    } else {
      console.log(" this is not working");
    }
    if (media.trim()) {
      media.split(",");
    } else {
      console.log(" this is not working");
    }

    const create_Listing = {
      form,
      title,
      description,
      media,
      tags,
      endsAt,
    };
    createListing(create_Listing);
    console.log(createListing);
  });
}
createListingListener();
