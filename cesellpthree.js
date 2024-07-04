$("#cesellpthree").click(function () {
  var authHeaderValue = "Bearer " + accessToken;
  var symbol = document.getElementById("symb").value;
  var date = document.getElementById("dte").value;
  var sdate = date.toString();
  var cqt = document.getElementById("ceq").value;
  var str = document.getElementById("cestr").value;
  var sstr = str.toString();
  var pr = document.getElementById("ceprc").value;
  var icpr = parseInt(pr);
  var pluso = icpr + 3;
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
  console.log(authHeaderValue);
  console.log(typeof pluso);
  console.log(strp);
  console.log(typeof pr);
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
    orderId = response.nOrdNo;
  });
});
