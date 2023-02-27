import { ProfileLogOut } from "../handler/logout.js";
const single_Url = `https://nf-api.onrender.com/api/v1/auction/listings`;
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const token = localStorage.getItem("Token");
const SingleCard = document.querySelector("#singleProduct");
async function singleData() {
  const Data = {
    method: "get",
    headers: {
      "Content-Type": "application/json charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(`${single_Url}/${id}`, Data);
    const data = await response.json();
    console.log(data);
    const SpecificPicture = document.querySelector(".Specific-picture");
    SpecificPicture.src = data.media[0];
    if (data.media[0]) {
      SpecificPicture.src = data.media[0];
    } else {
      SpecificPicture.src = "pictures/no-img.png";
    }
    const title = document.querySelector(".title");
    title.innerText = data.title;
    const description = document.querySelector(".description");
    description.innerHTML = data.description;
    const date = document.querySelector(".date");
    date.innerHTML = new Date(data.endsAt).toLocaleDateString();
    const tag = document.querySelector(".tag");
    // tag.innerHTML = data._count.tag[0];
    const bid = document.querySelector(".bid");
    bid.innerHTML = data._count.bids;
  } catch (error) {
    console.log(error);
  }
}
singleData();

const signup = document.querySelector(".cta-signup");
const login = document.querySelector(".cta-login");
const logout = document.querySelector(".cta-logout-cta");
logout.style.display = "none";

const bid = document.querySelector("#explore-text-bid");
const bidForm = document.querySelector(".bidForm");

if (token) {
  bidForm.style.display = "block";
  bid.innerText = "Welcome to Auction, Bid Now!";
  login.style.display = "none";
  logout.style.display = "block";
  signup.style.display = "none";
} else {
  login.style.display = "block";
  signup.style.display = "block";
  logout.style.display = "none";
  bidForm.style.display = "none";
}

ProfileLogOut();
