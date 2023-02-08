const cardsUrl = `https://nf-api.onrender.com/api/v1/auction/listings`;
const auctionProducts = document.querySelector("#auction");
// let date = `${items.created}`;
// let update = date.substring(0, 10);
async function auctionCards() {
  try {
    const response = await fetch(cardsUrl);
    console.log(response);
    if (!response.ok) {
      return "error", `there was a error featching the products:`;
    }
    const results = await response.json();
    console.log(results);
    results.map((element) => {
      auctionProducts.innerHTML += `<div class="col-12 col-lg-4 col-md-6 col-sm-12 mt-4">
              <div class="card explore-cards">
                <img
                  src="${element.media[0]}"
                  class="card-img-top explore-media"
                />
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Title ;- ${element.title}</li>
                    <li class="list-group-item bids lead">Bid :-  ${element._count.bids}</li>
                    <li class="list-group-item">Ends at :-  ${element.endsAt}</li>
                  </ul>
                  <a
                    href="scpecific.html"
                    class="btn big-btn btn-lg ms-3 mt-3 fw-bold"
                    >View item</a
                  >

                </div>
              </div>
            </div>`;
      //
    });
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
auctionCards();
