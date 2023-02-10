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
    const description = form[1].value;
    const media = form[2].value;
    const tag = form[3].value;
    const endsAt = form[4].value;
    const id = form.id.value;
    const create_Listing = { form, title, description, media, tag, endsAt, id };
    createListing(create_Listing);
    form.reset();
  });
}
createListingListener();
