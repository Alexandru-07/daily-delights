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
