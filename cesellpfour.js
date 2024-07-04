$("#cesellpfour").click(function () {
  var message = document.createElement("div");

  var authHeaderValue = "Bearer " + accessToken;
  var symbol = document.getElementById("symb").value;
  var date = document.getElementById("dte").value;
  var sdate = date.toString();
  var cqt = document.getElementById("ceq").value;
  var str = document.getElementById("cestr").value;
  var sstr = str.toString();
  var pr = document.getElementById("ceprc").value;
  var icpr = parseInt(pr);
  var pluso = icpr + 4;
  var spr = pluso.toString();
  var strp = symbol + sdate + sstr;
  var syb = String(strp);
  var jData = {
    am: "NO",
    dq: "0",
    es: "nse_fo",
    mp: "0",
    pc: "NRML",
    pf: "N",
    pr: spr,
    pt: "L",
    qt: cqt,
    rt: "DAY",
    tp: "0",
    ts: syb,
    tt: "S",
  };
  var jDataString = JSON.stringify(jData);
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
      var mess = "CE SELL ORDER AT" + " " + spr + " " + order;
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
