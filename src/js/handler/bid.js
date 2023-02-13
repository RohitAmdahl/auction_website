const base_Url = `https://nf-api.onrender.com/api/v1/auction/listings`;

const bidNow = document.querySelector(".bidForm");
console.log(bidNow);

const bidInput = document.querySelector(".bid-input");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
async function bidProducts(amount) {
  try {
    const token = localStorage.getItem("Token");
    console.log(token);

    const BidData = {
      method: "post",
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount: Number(bidInput.value) }),
    };
    const response = await fetch(`${base_Url}/${id}/bids`, BidData);
    console.log(response);

    const json = await response.json();
    if (response.ok) {
      location.reload();
    }
    console.log(json);
  } catch (error) {
    console.log(error);
    console.log("Error message when bidding: ", json.errors[0].message);
  }
}

function bidNumberProducts() {
  bidNow.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(e);
    const bidNow = e.target;
    console.log(bidNow);
    const numberValue = bidNow.value;
    console.log(numberValue);
    bidProducts(numberValue);
  });
}

bidNumberProducts();
