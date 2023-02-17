const single_Url = `https://nf-api.onrender.com/api/v1/auction/listings`;
console.log(single_Url);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

const SingleCard = document.querySelector("#singleProduct");
async function singleData() {
  const token = localStorage.getItem("Token");

  const Data = {
    method: "get",
    headers: {
      "Content-Type": "application/json charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(`${single_Url}/${id}`, Data);
    const data = await response.json();
    const SpecificPicture = document.querySelector(".Specific-picture");
    SpecificPicture.src = data.media[0];
    const title = document.querySelector(".title");
    title.innerText = data.title;
    const description = document.querySelector(".description");
    description.innerHTML = data.description;
    const date = document.querySelector(".date");
    date.innerHTML = new Date(data.endsAt).toLocaleDateString();
    const tag = document.querySelector(".tag");
    // tag.innerHTML = data._count.tag[0];
    const bid = document.querySelector(".bid");
    bid.innerHTML = data._count.bids;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
singleData();
