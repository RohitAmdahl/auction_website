import { ProfileLogOut } from "../handler/logout.js";

const signup = document.querySelector(".cta-signup");
const login = document.querySelector(".cta-login");
const logout = document.querySelector(".cta-logout-cta");
logout.style.display = "none";

const bid = document.querySelector("#explore-text-bid");
const bidForm = document.querySelector(".bidForm");
console.log(bidForm);
const userName = localStorage.getItem("user");
console.log(userName);

const single_Url = `https://nf-api.onrender.com/api/v1/auction/listings`;
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const token = localStorage.getItem("Token");
// const SingleCard = document.querySelector("#singleProduct");
/**
 * function singleData()
 * async function get method
 * api call for listing get back id
 *
 */
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
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();

    const endTime = new Date(data.endsAt).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const SpecificPicture = document.querySelector(".Specific-picture");
    SpecificPicture.src = data.media[0];
    if (data.media[0]) {
      SpecificPicture.src = data.media[0];
    } else {
      SpecificPicture.src = "pictures/no-img.png";
    }
    const nextImg = document.querySelector("#more");
    nextImg.src = data.media[1];
    const title = document.querySelector(".title");
    title.innerText = data.title;
    const description = document.querySelector(".description");
    description.innerHTML = data.description;
    const date = document.querySelector(".date");
    date.innerHTML = new Date(data.endsAt).toLocaleDateString();
    const ending = document.querySelector("#ending");
    ending.innerHTML = endTime;
    const bid = document.querySelector(".bid");
    bid.innerHTML = data._count.bids;
  } catch (error) {
    console.log(error);
  }
}
singleData();
function userLogin() {
  if (token) {
    bidForm.style.display = "block";
    bid.innerText = "Welcome to Auction, Bid Now!";
    login.style.display = "none";
    logout.style.display = "block";
    signup.style.display = "none";
  } else {
    bidForm.style.display = "none";
    login.style.display = "block";
    signup.style.display = "block";
    logout.style.display = "none";
  }
}
userLogin();

ProfileLogOut();
