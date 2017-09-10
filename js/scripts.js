var link = document.querySelector(".button-information");

var popup = document.querySelector(".modal");
var close = popup.querySelector(".button-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var password = popup.querySelector("[name=e-mail]");
var password = popup.querySelector("[name=text]");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

form.addEventListener("submit", function (evt) {
	if (!name.value || !e-mail.value || !text.value) {
      evt.preventDefault();
      console.log("Заполните поля");
    } else {
      localStorage.setItem("login", name.value);
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });