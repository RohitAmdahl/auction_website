// "?_active=true&sort=endsAt&sortOrder=asc";
const endsAt_url = `https://nf-api.onrender.com/api/v1/auction/listings?_active=true&sort=endsAt&sortOrder=asc`;
//
const items = document.querySelector("#today");

//
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
    console.log(response);
    const json = await response.json();
    console.log(json);
    //
    json.forEach((ListElement) => {
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
      const date = document.createElement("li");
      date.innerText = new Date(ListElement.endsAt).toLocaleDateString();
      const divButton = document.createElement("div");
      const view = document.createElement("a");
      img.classList.add("card-img-top", "explore-media");
      img.id = "picture";
      DivCardBody.classList.add("card-body");
      listGroup.classList.add("list-group", "list-group-flush");
      title.classList.add("list-group-item");

      date.classList.add("list-group-item");
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
        "btn-lg",
        "big-btn",
        "profileListingCta",
        "p-2",
        "justify-content-center",
        "w-100",
        "lead"
      );
      view.innerText = "View List";
      view.href = `/scpecific.html?id=${ListElement.id}`;

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
//  json.forEach((items) => {
//    const latest = document.createElement("div");
//    latest.classList.add(
//      "col-12",
//      "card",
//      "col-lg-4",
//      "col-md-6",
//      "col-sm-12",
//      "mt-4",
//      "mb-5"
//    );
//    const img = document.createElement("img");
//    img.src = items.media[0];
//    img.classList.add("card-img-top", "explore-media");
//    const divBody = document.createElement("div");
//    const span = document.createElement("span");
//    span.classList.add("p-2");
//    span.innerText = new Date(items.endsAt).toLocaleDateString();
//    card.append(latest);
//    latest.append(img);
//    latest.append(divBody);
//    divBody.append(span);
//  });
