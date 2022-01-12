var crtaj = false;

function onMouseDown() {
  console.log("down");
  crtaj = true;
}

function onMouseUp() {
  console.log("up");
  crtaj = false;
}

function onMouseMove(e) {
  if (crtaj) {
    funkcijaCrtaj(e.clientX, e.clientY);
  }
}

var debljina = `2px`;

function onClick(d) {
  document.getElementById(debljina).style.backgroundColor = "transparent";
  debljina = d;
  document.getElementById(debljina).style.backgroundColor = "black";
}

function funkcijaCrtaj(x, y) {
  var boja = document.getElementById(`boja`).value;
  var div = document.createElement(`div`);
  div.style.width = debljina;
  div.style.height = debljina;
  div.style.backgroundColor = boja;
  div.style.position = `absolute`;
  div.style.left = x + `px`;
  div.style.top = y + `px`;
  document.body.appendChild(div);
}
