$("#cemkt").click(function () {
  var message = document.createElement("div");

  var authHeaderValue = "Bearer " + accessToken;
  var symbol = document.getElementById("symb").value;
  var dte = document.getElementById("dte").value;
  var sdte = dte.toString();
  var qt = document.getElementById("ceq").value;
  var str = document.getElementById("cestr").value;
  var sstr = str.toString();
  var pr = document.getElementById("ceprc").value;
  var spr = pr.toString();
  var strp = symbol + sdte + sstr;
  var syb = String(strp);
  var jData = {
    am: "NO",
    dq: "0",
    es: "nse_fo",
    mp: "0",
    pc: "NRML",
    pf: "N",
    pr: "0",
    pt: "MKT",
    qt: qt,
    rt: "DAY",
    tp: "0",
    ts: syb,
    tt: "B",
  };
  var jDataString = JSON.stringify(jData);

  console.log(authHeaderValue);
  console.log(strp);
  console.log(typeof syb);
  console.log(syb);

  var settings = {
    url: "https://gw-napi.kotaksecurities.com/Orders/2.0/quick/order/rule/ms/place?sId=server3",
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
      jData: jDataString,
    },
  };

  $.ajax(settings).done(function (response) {
    var orderId = response.nOrdNo;
    console.log(response);

    var jDat = {
      nOrdNo: orderId,
    };
    var jDatString = JSON.stringify(jDat);

    var settingsHistory = {
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

    $.ajax(settingsHistory).done(function (response) {
      var order = response.data[0].ordSt;
      var mess = "CE BUY ORDER AT" + " " + "MARKET" + " " + order;
      document.getElementById("apiResponse").innerHTML = order;
      message.className = "message";
      message.textContent = mess;
      document.body.appendChild(message);
      setTimeout(() => {
        message.remove();
      }, 3000);
    });
  });
});
