const loginModal = document.querySelector("#loginModal");
const registerModal = document.querySelector("#registerModal");
const forgotModal = document.querySelector("#forgotModal");
const otpVerifyModal = document.querySelector("#otpVerifyModal");

const login = new bootstrap.Modal(loginModal);
const register = new bootstrap.Modal(registerModal);
const forgot = new bootstrap.Modal(forgotModal);
const sendOTP = new bootstrap.Modal(otpVerifyModal);

const regButton = document.querySelector("#btn-signup");
const loginButton = document.querySelector("#btn-signin");
const forgotButton = document.querySelector("#btn-forgot");
const otpVerify = document.querySelector("#btn-verify");
const continueButton = document.querySelector("#btn-continue");

loginButton.addEventListener("click", showLoginModal);
regButton.addEventListener("click", showRegisterModal);
forgotButton.addEventListener("click", showForgotModal);
otpVerify.addEventListener("click", showOTPModal);
continueButton.addEventListener("click", showSignInModal);

function showRegisterModal() {
  login.hide();
  register.show();
}

function showForgotModal() {
  login.hide();
  forgot.show();
}

function showOTPModal() {
  forgot.hide();
  sendOTP.show();
}

function showLoginModal() {
  register.hide();
  login.show();
}

function showSignInModal() {
  sendOTP.hide();
  login.show();
}
