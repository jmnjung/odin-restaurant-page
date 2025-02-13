const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email + span");
const zipCodeInput = document.querySelector("#zip-code");
const zipCodeError = document.querySelector("#zip-code + span");
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password + span");
const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector("#confirm-password + span");
const formBtn = document.querySelector("#form-button");
const closeBtn = document.querySelector("#close-dialog");

function showEmailError() {
  emailError.classList.add("active");

  if (emailInput.validity.valueMissing) {
    emailError.textContent = "Please enter an email address.";
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email address.";
  }
}

function showZipCodeError() {
  zipCodeError.classList.add("active");

  if (zipCodeInput.validity.valueMissing) {
    zipCodeError.textContent = "Please enter a U.S. zip code.";
  } else if (zipCodeInput.validity.patternMismatch) {
    zipCodeError.textContent = "Please enter a valid U.S. zip code.";
  }
}

function showPasswordError() {
  passwordError.classList.add("active");

  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = "Please enter a password.";
  } else if (passwordInput.validity.tooShort) {
    passwordError.textContent = "Please enter at least four characters.";
  }
}

function showConfirmPasswordError() {
  confirmPasswordError.classList.add("active");

  if (confirmPasswordInput.validity.valueMissing) {
    confirmPasswordError.textContent = "Please confirm your password.";
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Please double-check your password.";
  }
}

export default function loadForm() {
  formBtn.addEventListener("click", () => {
    dialog.showModal();
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.reset();
    dialog.close();
  });

  emailInput.addEventListener("input", () => {
    if (emailInput.validity.valid) {
      emailError.classList.remove("active");
      emailError.textContent = "";
    } else {
      showEmailError();
    }
  });

  zipCodeInput.addEventListener("input", () => {
    if (zipCodeInput.validity.valid) {
      zipCodeError.classList.remove("active");
      zipCodeError.textContent = "";
    } else {
      showZipCodeError();
    }
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.validity.valid) {
      passwordError.classList.remove("active");
      passwordError.textContent = "";
    } else {
      showPasswordError();
    }
  });

  confirmPasswordInput.addEventListener("input", () => {
    if (
      confirmPasswordInput.validity.valid &&
      passwordInput.value === confirmPasswordInput.value
    ) {
      confirmPasswordError.classList.remove("active");
      confirmPasswordError.textContent = "";
    } else {
      showConfirmPasswordError();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      emailInput.validity.valid &&
      zipCodeInput.validity.valid &&
      passwordInput.validity.valid &&
      confirmPasswordInput.validity.valid &&
      passwordInput.value === confirmPasswordInput.value
    ) {
      form.reset();
      dialog.close();
    } else {
      if (!emailInput.validity.valid) {
        showEmailError();
      }

      if (!zipCodeInput.validity.valid) {
        showZipCodeError();
      }

      if (!passwordInput.validity.valid) {
        showPasswordError();
      }

      if (
        !confirmPasswordInput.validity.valid ||
        passwordInput.value !== confirmPasswordInput.value
      ) {
        showConfirmPasswordError();
      }
    }
  });
}
