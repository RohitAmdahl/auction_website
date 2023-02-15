// "?_active=true&sort=endsAt&sortOrder=asc";
const endsAt_url = `https://nf-api.onrender.com/api/v1/auction/listings?_active=true&sort=endsAt&sortOrder=asc`;

async function endsTime() {
  const token = localStorage.getItem("Token");
  try {
    const data = {
      method: "get",
      header: {
        "Content-Type": "application/json charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(endsAt_url);
    console.log(response);
    const json = await response.json();
    console.log(json);
    for (let i = 0; i < json.length; i++) {
      const element = json[i];
      if (element === 10) {
        break;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
endsTime();
