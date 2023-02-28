// const cardsUrl = `https://nf-api.onrender.com/api/v1/auction/listings`;
const cardsUrl = `https://nf-api.onrender.com/api/v1/auction/listings?_active=true`;
const auctionProducts = document.querySelector("#auction");
const loading = document.querySelector(".loading");

// const formattedCreatedDate = new Date(created).toLocaleDateString("en-us", {
//   month: "short",
//   day: "numeric",
// });

// const formattedCreatedTime = new Date(created).toLocaleTimeString("en-GB", {
//   hour: "2-digit",
//   minute: "2-digit",
// });

async function auctionCards() {
  try {
    const response = await fetch(cardsUrl);
    if (!response.ok) {
      return "error", `there was a error fetching the products:`;
    }
    const results = await response.json();

    auctionProducts.innerHTML = "";
    results.forEach((element) => {
      const endTime = new Date(element.endsAt).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      auctionProducts.innerHTML += `<div class="col-12 col-lg-4 col-md-6 col-sm-12 mt-4">
              <div class="card  list-items p-4">
                  <img
                  class="card-img-top explore-media no-img  mx-auto p-2"
                   src="${
                     element.media[0]
                   }" onerror="if (this.src != 'pictures/no-img.png') this.src = 'pictures/no-img.png';" alt="product picture" />

                <div class="card-body p-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item lead"> ${element.title}</li>
                    <li class="list-group-item ">Bid: ${
                      element._count.bids
                    }</li>
                    <li class="list-group-item"> Date:
                    ${new Date(element.endsAt).toLocaleDateString()}</li>
                      <li class="list-group-item">Finishing Time: ${endTime}</li>
                      </ul>
                  <a  class="btn big-btn btn-sm d-flex justify-content-center p-2 rounded-2 fw-bold mt-3"
                   href="specific.html?id=${element.id}">View item</a>
                </div>
              </div>
            </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}
auctionCards();

// `${formattedCreatedTime}`, `${formattedCreatedTime}`;
