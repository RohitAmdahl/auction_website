const bidProfile_Url = "https://nf-api.onrender.com/api/v1/auction/profiles";
const user = JSON.parse(localStorage.getItem("user"));
const profileName = user.name;

const self = document.querySelector("#self");
const token = localStorage.getItem("Token");
export async function profileBids() {
  try {
    const Data = {
      method: "get",
      headers: {
        "Content-type": "application/json charset=UTF-8 ",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      `${bidProfile_Url}/${profileName}/bids?_listings=true`,
      Data
    );
    const json = await response.json();

    json.forEach((element) => {
      const history = document.querySelector("#self");
      const link = document.createElement("a");
      link.href = `specific.html?id=${element.listing.id}`;
      const list = document.createElement("li");
      list.classList.add("list-group-item", "list_class");
      list.innerText = element.listing.title;
      const spa_Ner = document.createElement("span");
      spa_Ner.classList.add("ms-3");
      spa_Ner.innerText = element.amount;

      history.appendChild(link);
      link.appendChild(list);
      list.appendChild(spa_Ner);
    });
  } catch (error) {
    console.log(error);
  }
}
profileBids();
