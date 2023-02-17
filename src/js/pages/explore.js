// const cardsUrl = `https://nf-api.onrender.com/api/v1/auction/listings`;
const cardsUrl = `https://nf-api.onrender.com/api/v1/auction/listings?_active=true`;
const auctionProducts = document.querySelector("#auction");
const loading = document.querySelector(".loading");

async function auctionCards() {
  try {
    const response = await fetch(cardsUrl);
    console.log(response);
    if (!response.ok) {
      return "error", `there was a error fetching the products:`;
    }
    const results = await response.json();
    console.log(results);
    auctionProducts.innerHTML = "";
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
  } catch (error) {
    console.log(error);
  }
}
auctionCards();
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
// function CreateHtmlCards() {
//   const container = document.createElement("div");
//   container.classList.add("rohit");
//   container.innerHTML = `<div class="card explore-cards">
//                 <img
//                   src="}"
//                   class="card-img-top explore-media"
//                 />
//                 <div class="card-body">
//                   <ul class="list-group list-group-flush">
//                     <li class="list-group-item title"></li>
//                     <li class="list-group-item lead bid"> </li>
//                     <li class="list-group-item date"> </li>
//                   </ul>
//                   <a  class="btn big-btn btn-sm d-flex justify-content-center p-2 rounded-2 fw-bold mt-3"
//                    href="#">View item</a>
//                 </div>
//               </div>`;
//   container.querySelector(".title").innerText = "hello world";
//   container.querySelector(".bid").innerText = "hello world";
//   container.querySelector(".date").innerText = "hello world";
//   console.log(container);
//   auctionProducts.append(container);
//   document.append(container);
// }
// CreateHtmlCards();
