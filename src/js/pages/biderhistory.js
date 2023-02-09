const base_Url = `https://nf-api.onrender.com/`;
const listing_Url = `api/v1/auction/listings`;
// const user = JSON.parse(localStorage.getItem("user"));
// const profileName = user.name;
const profile = document.querySelector(".profile-info");
const history = document.querySelector("#history");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

async function biderHistory() {
  const token = localStorage.getItem("Token");
  try {
    const Data = {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(Data);

    const response = await fetch(
      `${base_Url}${listing_Url}/${id}/?_seller=true&_bids=true`,
      Data
    );

    const json = await response.json();
    console.log(json);
    // thumbnail for profile
    const img = document.querySelector(".sellerPicture");

    img.src = json.seller.avatar;
    const profileName = document.querySelector("#profileName");
    profileName.innerHTML = json.seller.name;
    const profileEmail = document.querySelector("#emailName");
    profileEmail.innerHTML = json.seller.email;
    // bid history for profile
  } catch (error) {
    console.log(error);
  }
}

biderHistory();
