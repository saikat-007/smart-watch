var img = document.getElementById("watch");
document.getElementById("btn1").addEventListener("click", function () {
  img.innerHTML = `<img src="images/pink.png" alt="" height="400px" width="400px" id="img"/>
    <div id="time"></div>`;
});

document.getElementById("btn2").addEventListener("click", function () {
  img.innerHTML = `<img src="images/black.png" alt="" height="400px" width="400px" id="img"/>
    <div id="time"></div>`;
});

document.getElementById("btn3").addEventListener("click", function () {
  img.innerHTML = `<img src="images/orange.png" alt="" height="400px" width="400px" id="img"/>
    <div id="time"></div>`;
});

document.getElementById("btn4").addEventListener("click", function () {
  img.innerHTML = `<img src="images/blue.png" alt="" height="400px" width="400px" id="img"/>
    <div id="time"></div>`;
});

var t;
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " ";
  document.getElementById("time").innerText = time;

  t = setTimeout(showTime, 1000);
  document.getElementById("hrt").style.visibility = "hidden";
  document.getElementById("time").style.visibility = "visible";
}

//showTime();

function heartrate() {
  document.getElementById("hrt").style.visibility = "visible";
  document.getElementById("time").style.visibility = "hidden";
  clearTimeout(t);
  hrt_rt();
}

function hrt_rt() {
  const counter = document.getElementById("rate");
  counter.innerText = "00";

  const update = () => {
    const target = counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 100;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(update, 20);
    }
  };

  update();
}
