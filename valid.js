var otpToken;
$("#auth").click(function () {
    setTimeout(function () {
        var authHeaderValue = "Bearer " + accessToken;
        var settings = {
            "url": "https://gw-napi.kotaksecurities.com/login/1.0/login/v2/validate",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "accept": "*/*",
                "sid": sid,
                "Auth": stepToken,
                "Content-Type": "application/json",
                "Authorization": authHeaderValue,
                "MPIN": "579734"
            },
            "data": JSON.stringify({
                "userId": "3b28aa88-9148-4318-85d8-c1103a62778d",
                "MPIN": "579734"
            }),
        };
        function displayMessage(message) {
            document.getElementById("message").innerHTML = message;
        }
        $.ajax(settings).done(function (response) {
            console.log("STEP 4")
            console.log(response);
            otpToken = response.data.token;
            displayMessage("Step 4");
        }).fail(function (jqXHR, textStatus) {
            displayMessage('Please try again.', 'error');
        });
    }, 5500);
});