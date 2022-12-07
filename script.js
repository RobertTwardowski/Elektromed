const photo = document.querySelectorAll(".photo-show img");
const popup = document.querySelector(".popup");
const popupColose = document.querySelector(".popup-close");
const popupImg = document.querySelector(".popup-img");
const arrowRight = document.querySelector(".arrow-rigt");
const arrowLeft = document.querySelector(".arrow-left");
const mail = document.querySelector(".mail");
const number = document.querySelector(".number");
const btn = document.querySelector(".btn-2");
const numberError = document.querySelector(".error-number");
const mailError = document.querySelector(".error-mail");
const nameError = document.querySelector(".error-name");
const name = document.querySelector(".name");
const formFinish = document.querySelector(".finish");
const inputsAll = document.querySelectorAll(".input");
const burgerBtn = document.querySelector(".burger");
const barsIco = document.querySelector(".fa-bars");
const xIco = document.querySelector(".fa-times");
const navBurger = document.querySelector("nav ul");

let imgIndex;

//Gallery
const right = () => {
  if (imgIndex === photo.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }
  popupImg.src = photo[imgIndex].src;
};

const left = () => {
  if (imgIndex === 0) {
    imgIndex = photo.length - 1;
  } else {
    imgIndex--;
  }
  popupImg.src = photo[imgIndex].src;
};

const close = () => {
  popup.classList.add("hidden");
};

photo.forEach((photoShow, index) => {
  photoShow.addEventListener("click", (e) => {
    popup.classList.remove("hidden");
    popupImg.src = e.target.src;
    imgIndex = index;
  });
});

document.addEventListener("keydown", (e) => {
  if (!popup.classList.contains("hidden")) {
    if (e.code === "arrowRight" || e.keyCode === 39) {
      right();
    }
    if (e.code === "arrowLeft" || e.keyCode === 37) {
      left();
    }
    if (e.code === "popupColose" || e.keyCode === 27) {
      close();
    }
  }
});

arrowRight.addEventListener("click", right);
arrowLeft.addEventListener("click", left);
popupColose.addEventListener("click", close);
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    close();
  }
});

//formularz

const checkNumber = (number) => {
  const re = /[0-9]/;
  if (re.test(number.value) && number.value.length >= 9) {
    numberError.classList.add("hidden");
  } else {
    numberError.classList.remove("hidden");
    numberError.textContent = "Nieprawidłowy numer";
  }
};
const checkName = (name) => {
  const re = /[a-z]/i;
  if (re.test(name.value) && name.value.length > 2) {
    nameError.classList.add("hidden");
  } else {
    nameError.classList.remove("hidden");
    nameError.textContent = "Za mało znaków";
  }
};
const ValidateEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(email.value)) {
    mailError.classList.add("hidden");
  } else {
    mailError.classList.remove("hidden");
    mailError.textContent = "Nieprawidłowy adres emial";
  }
};
const checkFinish = (input) => {
  let count = 0;
  input.forEach((inputs) => {
    if (inputs.classList.contains("hidden")) {
      count++;
      console.log(count);
    }
  });
  if (count == 3) {
    formFinish.textContent =
      "Dziękujemy za wypełnienie formularza. Skontaktujemy się jak najszybciej.";
    inputsAll.forEach((all) => all.classList.add("hidden"));
  }
};
btn.addEventListener("click", () => {
  ValidateEmail(mail);
  checkNumber(number);
  checkName(name);
  checkFinish([mailError, numberError, nameError]);
});
