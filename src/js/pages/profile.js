const profile = JSON.parse(localStorage.getItem("profile"));
const profileName = profile.name;
const profile_name = document.querySelector("#profile_name");
profile_name.innerText = profileName;
