import { updateListingUrl } from "../feeds/update.js";

function updateListingListener() {
  // const form = document.querySelector(".selling");
  const url = new URL(location.href);
  console.log(url);
  const id = url.searchParams.get("id");
  console.log(id);

  form.addEventListener("submit", (e) => {
    const updateListing = document.querySelector(".updatelisting");
    e.preventDefault();

    const form = e.target;
    const title = form[0].value;
    const description = form[1].value;
    const media = form[2].value;
    const tags = form[3].value;
    const endsAt = form[4].value;

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
    updateListingUrl(create_Listing);
  });
}
updateListingListener();
