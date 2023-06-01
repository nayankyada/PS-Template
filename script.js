const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      accordionItemBody.style.borderBottom = "1px solid #000000";
    } else {
      accordionItemBody.style.maxHeight = 0;
      accordionItemBody.style.borderBottom = "0px";
    }
  });
});

function showSubscribeDiv() {
  document.getElementById("subscribeChoice").style.display = "block";
}

function showUnSubscribeDiv() {
  document.getElementById("subscribeChoice").style.display = "none";
}

function validateEmailAddress(emailString) {
    var regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexPattern.test(emailString);
}

function nextButtonAction() {
  let emailInput = document.getElementById("emailInput");
  let radioButtons = document.getElementsByName("subscriptionRadios");
  let emailResult = validateEmailAddress(emailInput.value);
  var isChecked = false;
  var radioValue = ""
  var checkboxes = document.getElementsByClassName("check-box-input");
  var selectedCheckboxes = [];

  if (!emailResult) {
    document.getElementById("emailAddressErr").style.display = "flex";
    document.getElementById("pageErrors").style.display = "flex";
  } else {
    emailInput.style.display = "none";
    document.getElementById("emailAddressErr").style.display = "none";
    document.getElementById("pageErrors").style.display = "none";
    document.getElementById("emailValue").innerHTML = emailInput.value;
  }

  for (i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      radioValue = radioButtons[i].value
      isChecked = true;
      break;
    }
  }

  if (!isChecked) {
    document.getElementById("radioError").style.display = "flex";
    document.getElementById("pageErrors").style.display = "flex";
  } else {
    document.getElementById("radioError").style.display = "none";
    document.getElementById("pageErrors").style.display = "none";
  }

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedCheckboxes.push(checkboxes[i].value);
    }
  }

  if(!emailResult || !isChecked){
    return
  }else{
    window.location.href = `http://localhost:5500/success.html?type=${radioValue}`;
  }

}
