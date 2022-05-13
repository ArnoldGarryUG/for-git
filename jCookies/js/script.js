console.log("script.js loaded")

$(document).ready(function(){

  let cookieVal = $(".form-control");
  let cookieBtn = $("#add-cookie");
  let showCookieBtn = $("#show-cookie")

  cookieBtn.click(function(){

    //Cookies.set("sample-added-cookie", cookieVal.val());
    Cookies.set("chh-female", "4224");
    alert("Cookie Set")

  });

  showCookieBtn.click(function(){

    let cVal = Cookies.get("sample-added-cookie");
    $("#showed-cookie").text(cVal);

    //$("#showed-cookie").text("Cookie Here");
    //console.log("show cookie button clicked");

  });


});