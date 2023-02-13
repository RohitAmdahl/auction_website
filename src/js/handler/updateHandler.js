import { updateListingUrl } from "../feeds/update.js";
import { updateListingContent } from "../feeds/update.js";
import { updateValue } from "../extension/updateValue.js";
updateValue();

function updateListingListener() {
  const url = new URL(location.href);
  console.log(url);
  const id = url.searchParams.get("id");
  console.log(id);
  const updateForm = document.querySelector("#listing-listing");
  console.log(updateForm);
  updateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const updateForm = e.target;
    const title = updateForm[0].value;
    const description = updateForm[1].value;
    const media = updateForm[2].value;
    const tags = updateForm[3].value;
    const endsAt = updateForm[4].value;
    const id = updateForm[5].value;

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

    const Listing = {
      updateForm,
      title,
      description,
      media,
      tags,
      endsAt,
      id,
    };
    updateListingContent(Listing);
  });
}
updateListingListener();
