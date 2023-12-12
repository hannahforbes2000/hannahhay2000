function checkPassword() {
  let password = document.getElementById("password-input").value;
  let correctPassword = "21317";

  if (password === correctPassword) {
    window.location.href = "#popupCorrect";
  } else {
    window.location.href = "#popupWrong";
  }
}

function checkCode1() {
  document.querySelector(".code-box-1__img").style.display = "none";
  document.querySelector(".code-box-1__popup").style.display = "block";
}
function checkCodeA() {
  var code1 = document.querySelector(".code-box-1__popup--input").value;
  if (code1 === "2") {
    document.querySelector(".code-box-1__img").src = "img/Bo1.png";
    document.querySelector(".code-box-1__img").style.display = "block";
    document.querySelector(".code-box-1__popup").style.display = "none";
  } else {
    document.querySelector(".code-box-1__img").style.display = "block";
    document.querySelector(".code-box-1__popup").style.display = "none";
    document.querySelector(".code-box-1__popup--input").value = "";
  }
}

function checkCode2() {
  document.querySelector(".code-box-2__img").style.display = "none";
  document.querySelector(".code-box-2__popup").style.display = "block";
}
function checkCodeB() {
  var code1 = document.querySelector(".code-box-2__popup--input").value;
  if (code1 === "1") {
    document.querySelector(".code-box-2__img").src = "img/Beep1.png";
    document.querySelector(".code-box-2__img").style.display = "block";
    document.querySelector(".code-box-2__popup").style.display = "none";
  } else {
    document.querySelector(".code-box-2__img").style.display = "block";
    document.querySelector(".code-box-2__popup").style.display = "none";
    document.querySelector(".code-box-2__popup--input").value = "";
  }
}

function checkCode3() {
  document.querySelector(".code-box-3__img").style.display = "none";
  document.querySelector(".code-box-3__popup").style.display = "block";
}
function checkCodeC() {
  var code1 = document.querySelector(".code-box-3__popup--input").value;
  if (code1 === "3") {
    document.querySelector(".code-box-3__img").src = "img/BING1.png";
    document.querySelector(".code-box-3__img").style.display = "block";
    document.querySelector(".code-box-3__popup").style.display = "none";
  } else {
    document.querySelector(".code-box-3__img").style.display = "block";
    document.querySelector(".code-box-3__popup").style.display = "none";
    document.querySelector(".code-box-3__popup--input").value = "";
  }
}

function checkCode4() {
  document.querySelector(".code-box-4__img").style.display = "none";
  document.querySelector(".code-box-4__popup").style.display = "block";
}
function checkCodeD() {
  var code1 = document.querySelector(".code-box-4__popup--input").value;
  if (code1 === "1") {
    document.querySelector(".code-box-4__img").src = "img/bang1.png";
    document.querySelector(".code-box-4__img").style.display = "block";
    document.querySelector(".code-box-4__popup").style.display = "none";
  } else {
    document.querySelector(".code-box-4__img").style.display = "block";
    document.querySelector(".code-box-4__popup").style.display = "none";
    document.querySelector(".code-box-4__popup--input").value = "";
  }
}

function checkCode5() {
  document.querySelector(".code-box-5__img").style.display = "none";
  document.querySelector(".code-box-5__popup").style.display = "block";
}
function checkCodeE() {
  var code1 = document.querySelector(".code-box-5__popup--input").value;
  if (code1 === "7") {
    document.querySelector(".code-box-5__img").src = "img/Boop1.png";
    document.querySelector(".code-box-5__img").style.display = "block";
    document.querySelector(".code-box-5__img").style.height = "80%";
    document.querySelector(".code-box-5__img").style.marginTop = "2.5rem";
    document.querySelector(".code-box-5__popup").style.display = "none";
  } else {
    document.querySelector(".code-box-5__img").style.display = "block";
    document.querySelector(".code-box-5__popup").style.display = "none";
    document.querySelector(".code-box-5__popup--input").value = "";
  }
}
