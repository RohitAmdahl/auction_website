const base_Url = `https://nf-api.onrender.com/api/v1/auction/listing`;

const bidNow = document.querySelector(".bidForm");
console.log(bidNow);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
var amount = 0;
async function bidProducts() {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);
    const BidData = {
      method: "post",
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        amount: 0,
      }),
    };
    const response = await fetch(`${base_Url}/${id}/bids`, BidData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

function bidNumberProducts() {
  bidNow.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    const bidNow = e.target;
    const numberValue = bidNow.value;
    bidProducts(numberValue);
  });
}
bidNumberProducts();
