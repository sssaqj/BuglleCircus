function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();

let list = document.getElementsByClassName('list');


for(let j = 0; j < list.length; j++) {
  list[j].addEventListener('click', function() {
    // var body = document.body;
    document.body.classList.remove('nav-open');
  });
}

i = 0;
j = 1;
k = 2;
color = new Array("#3b46a6", "#404063", "#b13e32", "#0b491b", "#5f4614");

function change(){
  i++;
  if(i >= color.length) {
    i = 0;
  }
  document.getElementById("bgcolor01").style.backgroundColor = color[i];
}

function change2(){
  j++;
  if(j >= color.length) {
    j = 0;
  }
  document.getElementById("bgcolor02").style.backgroundColor = color[j];
}
function change3(){
  k++;
  if(k >= color.length) {
    k = 0;
  }
  document.getElementById("bgcolor03").style.backgroundColor = color[k];
}

let tm, tm2, tm3;

function tmt(){
  document.getElementById("bgcolor01").style.backgroundColor = color[i];
  tm = setInterval("change()", 3468);
  document.getElementById("bgcolor02").style.backgroundColor = color[j];
  tm2 = setInterval("change2()", 3468);
  document.getElementById("bgcolor03").style.backgroundColor = color[k];
  tm3 = setInterval("change3()", 3468);
}
tmt()

function valueChange(event) {
  if(checkbox.checked) {
    tm = clearInterval(tm);
    tm2= clearInterval(tm2);
    tm3= clearInterval(tm3);
  } else {
    tmt();
  }
}
let checkbox = document.getElementById("switch");
checkbox.addEventListener("change", valueChange);
