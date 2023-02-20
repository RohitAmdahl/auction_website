export const BidHeading = document.querySelector(".Login-for-bid");
export const amount = (document.querySelector(".amount").disabled = true);
console.log(amount);
export const signupCta = document.querySelector(".cta-signup");
export const loginCta = document.querySelector(".cta-login");
export const logout = document.querySelector(".cta-logout-cta");

export function isUserLoggedIn() {
  const token = localStorage.getItem("Token");
  console.log(token);

  if (token && token.length > 0) {
    signupCta.style.display = "none";
    loginCta.style.display = "none";
    logout.style.display = "none";
    // amount.disabled = true;
  } else {
    signupCta.style.display = "block";
    loginCta.style.display = "block";
    logout.style.display = "block";

    // amount.disabled = true;
  }
}
