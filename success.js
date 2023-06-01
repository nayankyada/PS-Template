// Get query parameters from the current URL
var queryParams = new URLSearchParams(window.location.search);

// Get the value of a specific parameter
var paramValue = queryParams.get('type');

if(paramValue == "subscribe"){
    document.getElementById("subscribe").classList.toggle("subscribe")
}

if(paramValue == "unsubscribe"){
    document.getElementById("unsubscribe").classList.remove("unsubscribe")
    console.log( document.getElementById("unsubscribe").classList)
}