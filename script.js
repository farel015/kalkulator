function sec(nomre) {
  reqem = document.getElementById("kalkulatorasik").innerHTML;
  reqem = reqem + nomre;
  document.getElementById("kalkulatorasik").innerHTML = reqem;
}

function minusplus() {
  reqem = document.getElementById("kalkulatorasik").innerHTML;
  reqem = "-" + reqem;
  document.getElementById("kalkulatorasik").innerHTML = reqem;
}

function persen() {
  reqem = document.getElementById("kalkulatorasik").innerHTML;
  reqem = (reqem * 1) / 100;
  document.getElementById("kalkulatorasik").innerHTML = reqem;
}

function koma() {
  reqem = document.getElementById("kalkulatorasik").innerHTML;
  reqem = reqem + ".";
  document.getElementById("kalkulatorasik").innerHTML = reqem;
}

function resetkalkulator() {
  reset = document.getElementById("kalkulatorasik").innerHTML;
  reset = "";
  document.getElementById("kalkulatorasik").innerHTML = reset;
}

function azaltReqemi() {
  reqem = document.getElementById("kalkulatorasik").innerHTML;
  document.getElementById("kalkulatorasik").innerHTML = reqem.substring(0, reqem.length - 1);
}
function perkalian() {
  reqem = document.getElementById("kalkulatorasik").innerHTML;
  reqem = reqem + "*";
  document.getElementById("kalkulatorasik").innerHTML = reqem;
}

function pembagian() {
  reqem = document.getElementById("kalkulatorasik").innerHTML;
  reqem = reqem + "/";
  document.getElementById("kalkulatorasik").innerHTML = reqem;
}
function pengurangan() {
  reqem = document.getElementById("kalkulatorasik").innerHTML;
  reqem = reqem + "-";
  document.getElementById("kalkulatorasik").innerHTML = reqem;
}
function penambahan() {
  reqem = document.getElementById("kalkulatorasik").innerHTML;
  reqem = reqem + "+";
  document.getElementById("kalkulatorasik").innerHTML = reqem;
}

function yoxlama() {
  if (isNaN(eval(neticemiz)) !== false) {
    alert("Səhflik var");
  }
}

function hasil() {
  neticemiz = document.getElementById("kalkulatorasik").innerHTML;
  yoxlama();
  document.getElementById("kalkulatorasik").innerHTML = eval(neticemiz);
}
