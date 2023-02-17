import { sellerProfile } from "../pages/profileListing.js";
export const remove_Url = `https://nf-api.onrender.com/api/v1/auction/listings`;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);

export async function deletePost(id) {
  const token = localStorage.getItem("Token");
  try {
    const deleteData = {
      method: "delete",
      headers: {
        "Content-type": "application/json charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${remove_Url}/${id}`, deleteData);
    console.log(response);
    // if (response.ok) {
    //   location.reload();
    // }
  } catch (error) {
    console.log(error);
  }
}
