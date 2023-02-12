import { url } from "../feeds/create.js";
import { createListing } from "../feeds/create.js";

function createListingListener() {
  const form = document.querySelector(".selling");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form[0].value;

    const description = form[1].value;

    const media = form[2].value;

    const tags = form[3].value;

    const endsAt = form[4].value;

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
  });
}
createListingListener();
