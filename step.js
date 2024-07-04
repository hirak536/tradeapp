var stepToken;
var sid;
$("#auth").click(function () {
  setTimeout(function () {
    var authHeaderValue = "Bearer " + accessToken;
    var settings = {
      url: "https://gw-napi.kotaksecurities.com/login/1.0/login/v2/validate",
      method: "POST",
      timeout: 0,
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: authHeaderValue,
      },
      data: JSON.stringify({
        mobileNumber: "+919723449107",
        password: "Hi@00579734",
      }),
    };
    function displayMessage(message) {
      document.getElementById("message").innerHTML = message;
    }
    $.ajax(settings)
      .done(function (response) {
        console.log("STEP 1");
        console.log(response);
        stepToken = response.data.token;
        sid = response.data.sid;
        console.log("token", stepToken);
        console.log("sid", sid);
        displayMessage("Successfull!");
      })
      .fail(function (jqXHR, textStatus) {
        displayMessage("Please try again.", "error");
      });
  }, 3000);
});
