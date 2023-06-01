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
  let atSymbol = emailString.indexOf("@");
  let dot = emailString.indexOf(".");

  if (atSymbol < 1) return false;
  if (dot <= atSymbol + 2) return false;
  if (dot === emailString.length - 1) return false;
  return true;
}

function nextButtonAction() {
  let emailInput = document.getElementById("emailInput");
  let radioButtons = document.getElementsByName("subscriptionRadios");
  let emailResult = validateEmailAddress(emailInput.value);

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
    if (!radioButtons[i].checked) {
      document.getElementById("radioError").style.display = "flex";
      document.getElementById("pageErrors").style.display = "flex";
    } else if (radioButtons[i].checked) {
      document.getElementById("radioError").style.display = "none";
      document.getElementById("pageErrors").style.display = "none";
    }
  }
}
