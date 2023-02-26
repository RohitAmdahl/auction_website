const base_Url = `https://nf-api.onrender.com/api/v1/auction/listings`;

const bidNow = document.querySelector(".bidForm");

const bidInput = document.querySelector(".bid-input");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

async function bidProducts(amount) {
  try {
    const token = localStorage.getItem("Token");

    const BidData = {
      method: "post",
      headers: {
        "Content-type": "application/json ",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount: Number(bidInput.value) }),
    };
    const response = await fetch(`${base_Url}/${id}/bids`, BidData);

    const json = await response.json();
    if (response.ok) {
      location.reload();
    }
  } catch (error) {
    console.log(error);
    console.log("Error message when bidding: ", json.errors[0].message);
  }
}

function bidNumberProducts() {
  bidNow.addEventListener("submit", (e) => {
    e.preventDefault();

    const bidNow = e.target;
    const numberValue = bidNow.value;
    bidProducts(numberValue);
  });
}

bidNumberProducts();
