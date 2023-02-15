// "?_active=true&sort=endsAt&sortOrder=asc";
const endsAt_url = `https://nf-api.onrender.com/api/v1/auction/listings?_active=true&sort=endsAt&sortOrder=asc`;
//
const endingAt = document.querySelector(".today");
console.log(endingAt);
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

    json.forEach((ListElement) => {
      const endDiv = document.querySelector("div");
      Div.classList.add(
        "col-12",
        "col-lg-4",
        "col-md-6",
        "col-sm-12",
        "mt-4",
        "mb-5"
      );
      const img = document.querySelector("img");
      img.classList.add("card-img-top", "explore-media", "p-5");
      const divBody = document.querySelector("div");
      const span = document.querySelector("span");

      endingAt.append(endDiv);
      endDiv.append(img);
      divBody.append(span);
    });

    //
  } catch (error) {
    console.log(error);
  }
}
endsTime();
