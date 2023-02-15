// const cardsUrl = `https://nf-api.onrender.com/api/v1/auction/listings`;
const cardsUrl = `https://nf-api.onrender.com/api/v1/auction/listings?_active=true`;
const auctionProducts = document.querySelector("#auction");
// let product = [];

async function auctionCards() {
  try {
    const response = await fetch(cardsUrl);
    console.log(response);
    if (!response.ok) {
      return "error", `there was a error fetching the products:`;
    }
    const results = await response.json();
    console.log(results);
    results.forEach((element) => {
      auctionProducts.innerHTML += `<div class="col-12 col-lg-4 col-md-6 col-sm-12 mt-4">
              <div class="card explore-cards">
                <img
                  src="${element.media[0]}"
                  class="card-img-top explore-media"
                />
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Title ;- ${element.title}</li>
                    <li class="list-group-item lead">Bid :-  ${
                      element._count.bids
                    }</li>
                    <li class="list-group-item">
                    ${new Date(element.endsAt).toLocaleDateString()}</li>
                  </ul>
                  <a  class="btn big-btn btn-sm d-flex justify-content-center p-2 rounded-2 fw-bold mt-3"
                   href="scpecific.html?id=${element.id}">View item</a>
                </div>
              </div>
            </div>`;
    });

    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
auctionCards();
