var accessToken;
$("#auth").click(function () {
    var settings = {
        "url": "https://napi.kotaksecurities.com/oauth2/token",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Authorization": "Basic ZlJOcWZxMnJHYkc1dlViNTZrWVB4c2FUS1h3YTpNTmthejRBMVNpaUVmV0pwcEFaNzFaVU5ibHNh",
            "Content-Type": "application/x-www-form-urlencoded",
            "Cookie": "AWSALB=i/KwcpPX+Cxp6lm5eOYveIGuNUuuTkX1PsGJAJ8BDn9lg822c3yuu8dfqOZAT4A1l6fZMVhgE7Ep2KUBmb86Fidah+yhV00X+Rd03N5tFmGBxE+26LaWx+ZePt+q; AWSALBCORS=i/KwcpPX+Cxp6lm5eOYveIGuNUuuTkX1PsGJAJ8BDn9lg822c3yuu8dfqOZAT4A1l6fZMVhgE7Ep2KUBmb86Fidah+yhV00X+Rd03N5tFmGBxE+26LaWx+ZePt+q"
        },
        "data": {
            "grant_type": "client_credentials"
        }
    };
    function displayMessage(message) {
        document.getElementById("message").innerHTML = message;
    }
    $.ajax(settings).done(function (response) {
        accessToken = response.access_token;
        console.log(accessToken);
        displayMessage("Access token generated successfully!");
    }).fail(function (jqXHR, textStatus) {
        displayMessage('Error fetching access token. Please try again.', 'error');
    });
});