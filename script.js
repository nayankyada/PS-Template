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
