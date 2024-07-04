$("#auth").click(function () {
    setTimeout(function () {
        var authValue = "Bearer " + accessToken;
        var settings = {
            "url": "https://gw-napi.kotaksecurities.com/login/1.0/login/otp/generate",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": authValue
            },
            "data": JSON.stringify({
                "userId": "3b28aa88-9148-4318-85d8-c1103a62778d",
                "sendEmail": true,
                "isWhitelisted": true
            }),
        };

        function displayMessage(message) {
            document.getElementById("message").innerHTML = message;
        }
        $.ajax(settings).done(function (response) {
            console.log("STEP 3")
            console.log(response);
            displayMessage("Step 3");
        }).fail(function (jqXHR, textStatus) {
            displayMessage('Please try again.', 'error');
        });
    }, 4500);
});
