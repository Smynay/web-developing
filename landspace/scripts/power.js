function toggleComputer(){
  let power = document.querySelector(".power");
  let display = document.querySelector(".display");

  power.classList.toggle('power-on');
  if(display.hidden){
    display.hidden = false;
  } else {
    display.hidden = true;
  }
  power.classList.toggle('power-off');
}
