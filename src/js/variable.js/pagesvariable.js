export const BidHeading = document.querySelector(".Login-for-bid");
// export const amount = (document.querySelector(".amount").disabled = true);
console.log(amount);
export const signupCta = document.querySelector(".cta-signup");
export const loginCta = document.querySelector(".cta-login");
export const logout = document.querySelector(".cta-logout-cta");

export function isUserLoggedIn() {
  const token = localStorage.getItem("Token");
  console.log(token);

  if (token) {
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
const token = localStorage.getItem("Token");

export function userLogin() {
  const headerLogin = document.querySelector("headerLogin");
  if (token) {
    headerLogin.innerHTML = `<div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html"
              ><img
                class="logo img-fluid. w-100"
                src="pictures/logo.png"
                alt="logo auction w-100"
            /></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="container">
                <ul
                  class="navbar-nav me-auto mb-1 mb-lg-0 justify-content-center"
                >
                  <li class="nav-item lead">
                    <a
                      class="nav-link ms-3"
                      aria-current="page"
                      href="index.html"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item lead">
                    <a class="nav-link ms-3" href="explore.html">Explore</a>
                  </li>
                  <li class="nav-item lead active fw-bold">
                    <a class="nav-link ms-3" href="profile.html" id="user"
                      >Profile
                    </a>
                  </li>
                </ul>
              </div>

              <button
                href="signup.html"
                class="btn cta-logout-cta fw-bold active w-100 btn-lg"
                role="button"
              >
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </div>`;
  } else {
    headerLogin.innerHTML = `<div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html"
              ><img
                class="logo img-fluid. w-100"
                src="pictures/logo.png"
                alt="logo auction w-100"
            /></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="container">
                <ul
                  class="navbar-nav me-auto mb-1 mb-lg-0 justify-content-center"
                >
                  <li class="nav-item lead">
                    <a
                      class="nav-link fw-bold ms-3"
                      aria-current="page"
                      href="index.html"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item lead">
                    <a class="nav-link ms-3" href="explore.html">Explore</a>
                  </li>
                </ul>
              </div>

              <a
                href="login.html"
                class="ms-5 mt-2 mb-3 btn cta-login fw-bold w-100 btn-lg active"
                role="button"
                aria-disabled="true"
                >Log In</a
              >
              <a
                href="signup.html"
                class="ms-5 mt-2 mb-3 btn cta-signup fw-bold w-100 btn-lg"
                role="button"
                aria-disabled="true"
              >
                Sign UP
              </a>
            </div>
          </div>
        </nav>
      </div>`;
  }
}
