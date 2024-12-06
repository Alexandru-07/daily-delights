const inputFirstName = document.getElementById("fname");
const inputLastName = document.getElementById("lname");
const inputEmail = document.getElementById("fmail");
const inputMessage = document.getElementById("fmessage");

function getInfo() {
  console.log(
    `First Name: ${inputFirstName.value}\nLast Name: ${inputLastName.value}\nEmail: ${inputEmail.value}\nMessage: ${inputMessage.value}`
  );

  if (
    !inputFirstName.value.trim() ||
    !inputLastName.value.trim() ||
    !inputEmail.value.trim() ||
    !inputMessage.value.trim()
  ) {
    return;
  } else {
    window.location.href = "../html/confirm.html";
  }
}

const homeButton = document.getElementById("home_button");

function goUp() {
  window.location.href = "../html/main.html#bdy";

  homeButton.style.boxShadow = "0 0 20px black";
  homeButton.style.transition = "all 0.7s ease";

  setTimeout(() => {
    homeButton.style.boxShadow = "none";
  }, 1500);
}
