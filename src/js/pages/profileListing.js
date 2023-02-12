const listingByProfileURL = `https://nf-api.onrender.com/api/v1/auction/profiles`;
const user = JSON.parse(localStorage.getItem("user"));
const profileName = user.name;
console.log(profileName);
const listingCards = document.querySelector("#listingCards");
console.log(listingCards);
export async function sellerProfile() {
  const token = localStorage.getItem("Token");
  try {
    const Data = {
      method: "get",
      headers: {
        "Content-type": "application/json charset=UTF-8 ",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(
      `${listingByProfileURL}/${profileName}/listings`,
      Data
    );

    const json = await response.json();
    console.log(json);
    json.forEach((ListElement) => {
      // listingCards.innerHTML += `<div class="col-12 col-lg-4 col-md-6 col-sm-12 mt-4 mb-5">
      //         <div class="card explore-cards">
      //           <img
      //             src="${ListElement.media[0]}"
      //             class="card-img-top explore-media p-5"
      //             id = "picture"
      //           />
      //           <div class="card-body">
      //             <ul class="list-group list-group-flush">
      //               <li class="list-group-item"> ${ListElement.title}</li>
      //               <li class="list-group-item"> ${ListElement.description}</li>
      //               <li class="list-group-item">  ${ListElement.tags[0]}</li>
      //               <li class="list-group-item"> ${ListElement.endsAt}</li>
      //             </ul>
      //             <a  class="btn big-btn btn-lg ms-3 mt-3 fw-bold"
      //              href="updatelisting.html?id=${ListElement.id}">Update</a>
      //              <button class='btn big-btn btn-lg ms-3 mt-3 fw-bold delete' id=" ">delete</button>
      //           </div>
      //       </div>`;
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
      card.classList.add("card", "list-Items", "mb-5");
      const img = document.createElement("img");
      img.src = ListElement.media[0];
      const DivCardBody = document.createElement("div");
      const listGroup = document.createElement("ul");
      const title = document.createElement("li");
      title.innerText = ListElement.title;
      const description = document.createElement("li");
      description.innerText = ListElement.description;
      const tags = document.createElement("li");
      tags.innerText = ListElement.tags[0];
      const date = document.createElement("li");
      date.innerText = ListElement.endsAt;
      const divButton = document.createElement("div");
      const update = document.createElement("a");
      update.innerText = "update";

      const deleteCta = document.createElement("button");
      deleteCta.innerText = "delete";

      img.classList.add("card-img-top", "explore-media", "p-5");
      img.id = "picture"; // id missing
      DivCardBody.classList.add("card-body");
      listGroup.classList.add("list-group", "list-group-flush");
      title.classList.add("list-group-item");
      description.classList.add("list-group-item");
      tags.classList.add("list-group-item");
      date.classList.add("list-group-item");
      divButton.classList.add("d-flex", "justify-content-around", "m-4");
      update.classList.add(
        "d-flex",
        "btn",
        "fw-bold",
        "btn-lg",
        "big-btn",
        "profileListingCta"
      );
      deleteCta.classList.add(
        "d-flex",
        "btn",
        "fw-bold",
        "btn-lg",
        "big-btn",
        "profileListingCta"
      );

      listingCards.appendChild(mainCol);
      mainCol.appendChild(card);
      card.appendChild(img);
      card.appendChild(DivCardBody);
      DivCardBody.appendChild(listGroup);
      listGroup.appendChild(title);
      listGroup.appendChild(description);
      listGroup.appendChild(tags);
      listGroup.appendChild(date);
      DivCardBody.appendChild(divButton);
      divButton.appendChild(update);
      divButton.appendChild(deleteCta);
    });
  } catch (error) {
    console.log(error);
  }
}
sellerProfile();

// const img = document.createElement("img");
// const DivCardBody = document.createElement("div");
// const listGroup = document.createElement("ul");
// const title = document.createElement("li");
// const description = document.createElement("li");
// const tags = document.createElement("li");
// const date = document.createElement("li");
// const divButton = document.createElement("div");
// const update = document.createElement("button");
// update.innerText = "update";
// const deleteCta = document.createElement("button");
// deleteCta.innerText = "delete";

// img.classList.add("card-img-top"); // id missing
// DivCardBody.classList.add("card-body");
// listGroup.classList.add("list-group", "list-group-flush");
// title.classList.add("list-group-item");
// description.classList.add("list-group-item");
// tags.classList.add("list-group-item");
// date.classList.add("list-group-item");
// divButton.classList.add("d-flex");
// update.classList.add("d-flex");
// deleteCta.classList.add("d-flex");

// listingCards.appendChild(img);
// listingCards.appendChild(DivCardBody);
// DivCardBody.appendChild(listGroup);
// listGroup.appendChild(title);
// listGroup.appendChild(description);
// listGroup.appendChild(tags);
// listGroup.appendChild(date);
// date.appendChild(divButton);
// divButton.appendChild(update);
// divButton.appendChild(deleteCta);
