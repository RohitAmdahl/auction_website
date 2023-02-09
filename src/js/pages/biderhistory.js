const base_Url = `https://nf-api.onrender.com/`;
const listing_Url = `api/v1/auction/listing`;
// const user = JSON.parse(localStorage.getItem("user"));
// const profileName = user.name;
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
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
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

biderHistory();
