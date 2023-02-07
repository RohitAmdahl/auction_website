const cardsUrl = `https://nf-api.onrender.com/api/v1/auction/listings`;

async function auctionCards() {
  try {
    const response = await fetch(cardsUrl);
    console.log(response);
    if (!response.ok) {
      return "error", `there was a error featching the products:`;
    }
    const results = await response.json();
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
auctionCards();
