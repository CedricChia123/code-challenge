const addr = document.getElementById("input-address");
const amount = document.getElementById("input-amount");
const otp = document.getElementById("input-otp");
const form = document.getElementById("form");

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  if (!addr.value) {
    alert("Please enter an address to transfer to")
  } else if (!amount.value) {
    alert("Please key in an amount to transfer")
  } else if (!otp.value) {
    alert("Please key in the OTP given to you")
  } else {
    openPopup();
  }
})

//class list used to toggle the pop up
function openPopup(){
  var popup = document.getElementById("popup");
  popup.classList.add("show-popup");
}

function closePopup(){
  var popup = document.getElementById("popup");
  popup.classList.remove("show-popup");
  form.submit();
}
