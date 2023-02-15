const searchUrl = "https://nf-api.onrender.com/api/v1/auction/listings?_tag";
const searchForm = document.querySelector("#searchForm");
const input = document.querySelector("#inputvalue");
const cardsDiv = document.querySelector("#auction");
async function searchApiCall() {
  const token = localStorage.getItem("Token");
  try {
    const data = {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(`${searchUrl}=${input.value}`, data);
    console.log(response);

    const results = await response.json();
    console.log(results);
    cardsDiv.innerHTML = "";
    results.forEach((element) => {
      cardsDiv.innerHTML += `<div class="col-12 col-lg-4 col-md-6 col-sm-12 mt-4">
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

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchForm = e.target;
  console.log(searchForm);
  searchApiCall();
});
