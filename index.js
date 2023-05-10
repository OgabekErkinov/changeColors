let colors = ["red","blue","green","yellow","black","white","gold","grey","pink"];
let but = document.getElementById('btn');
function mainColor(){
    let box = document.querySelector(".screen");
    let vari = Math.floor(Math.random()*10)
    box.style.backgroundColor = colors[vari];
    but.innerHTML = colors[vari];
}
but.onclick = mainColor;

