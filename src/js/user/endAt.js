// import { loginCta } from "../variable.js/pagesvariable.js";
// import { isUserLoggedIn } from "../variable.js/pagesvariable.js";
// import { signupCta } from "../variable.js/pagesvariable.js";

const endsAt_url = `https://nf-api.onrender.com/api/v1/auction/listings?_active=true&sort=endsAt&sortOrder=asc&limit=18`;

const items = document.querySelector("#today");

async function endsTime() {
  const token = localStorage.getItem("Token");
  try {
    const data = {
      method: "get",
      header: {
        "Content-Type": "application/json charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(endsAt_url, data);
    const json = await response.json();
    console.log(json);
    const items = document.querySelector("#today");
    items.replaceChildren();
    json.forEach((listElement) => {
      // let imgMedia = listElement.media[0].length;
      // console.log(imgMedia);

      // if (imgMedia.length === 0) {
      //   imgMedia = ["/pictures/no-img.png"];
      //   console.log(imgMedia);
      // }
      const mainCol = document.createElement("div");
      mainCol.classList.add(
        "col-12",
        "col-lg-4",
        "col-md-6",
        "col-sm-12",
        "mt-4",
        "mb-5"
      );
      const card = document.createElement("div");

      card.classList.add("card", "list-Items", "mb-5", "p-2");
      const img = document.createElement("img");
      img.classList.add("card-img-top", "explore-media", "p-3");
      img.id = "picture";
      img.src = listElement.media[0];
      if (listElement.media[0]) {
        img.src = listElement.media[0];
      } else {
        img.src = "/pictures/no-img.png";
      }
      const DivCardBody = document.createElement("div");
      const listGroup = document.createElement("ul");
      const title = document.createElement("li");
      title.innerText = listElement.title;
      const date = document.createElement("li");
      date.innerText = new Date(listElement.endsAt).toLocaleDateString();
      const divButton = document.createElement("div");
      const view = document.createElement("a");

      DivCardBody.classList.add("card-body");
      listGroup.classList.add("list-group", "list-group-flush");
      title.classList.add("list-group-item");

      date.classList.add("list-group-item", "lead", "fw-bold");
      divButton.classList.add(
        "d-flex",
        "mt-1",
        "p-2",
        "justify-content-center",
        "d-flex"
      );

      view.classList.add(
        "d-flex",
        "btn",
        "fw-bold",

        "big-btn",
        "profileListingCta",
        "p-2",
        "justify-content-center",
        "w-100",
        "lead"
      );
      view.innerText = "View List";
      view.href = `/specific.html?id=${listElement.id}`;

      items.appendChild(mainCol);
      mainCol.appendChild(card);
      card.appendChild(img);
      card.appendChild(DivCardBody);
      DivCardBody.appendChild(listGroup);
      listGroup.appendChild(title);
      listGroup.appendChild(date);
      DivCardBody.appendChild(divButton);
      divButton.appendChild(view);
    });

    //
  } catch (error) {
    console.log(error);
  }
}
endsTime();
