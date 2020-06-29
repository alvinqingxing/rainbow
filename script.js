const box = document.getElementById("box");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
function generate(){
  box.style.gridTemplateColumns = `repeat(48, 1fr)`;
  box.style.gridTemplateRows = `repeat(48, 1fr)`;
  for (let i = 0; i < 2304; i++){
    let square = document.createElement("div");
    square.style.backgroundColor = 'black';
    square.addEventListener("pointerenter", function(){
      square.style.backgroundColor = colors[Math.floor(Math.random()*7)];
      })
    box.appendChild(square);
    }
}
generate();
