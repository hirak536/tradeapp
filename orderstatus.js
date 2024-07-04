$("#check").click(function () {
  var authHeaderValue = "Bearer " + accessToken;

  var settings = {
    url: "https://gw-napi.kotaksecurities.com/Orders/2.0/quick/user/orders?sId=server1",
    method: "GET",
    timeout: 0,
    headers: {
      accept: "application/json",
      Sid: sid,
      Auth: otpToken,
      "neo-fin-key": "neotradeapi",
      Authorization: authHeaderValue,
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    var ord = response.data[0].nOrdNo;
    var orderId = ord;
    var jDat = {
      nOrdNo: orderId,
    };
    var jDatString = JSON.stringify(jDat);
    var settings = {
      url: "https://gw-napi.kotaksecurities.com/Orders/2.0/quick/order/history?sId=server1",
      method: "POST",
      timeout: 0,
      headers: {
        accept: "application/json",
        Sid: sid,
        Auth: otpToken,
        "neo-fin-key": "neotradeapi",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: authHeaderValue,
      },
      data: {
        jData: jDatString,
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);

      var order = response.data[0].ordSt;
      console.log(order);
      document.getElementById("apiResponse").innerHTML = order;
    });
  });
});
