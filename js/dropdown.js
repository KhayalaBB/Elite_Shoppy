let dropdown1 = document.querySelector(".drop_down1");
let dropdown2 = document.querySelector(".drop_down2");
let div1 = document.querySelector(".position1");
let div2 = document.querySelector(".position2");
dropdown1.addEventListener("click", function () {
  if(div1.classList.contains("open"))
  {    
    div1.classList.remove("open");
  }
else{
  div2.classList.remove("open");
  div1.classList.add("open");}
})
dropdown2.addEventListener("click", function () {
  if(div2.classList.contains("open"))
  {
    div2.classList.remove("open");}
else {
  div1.classList.remove("open");
  div2.classList.add('open');}
})

//dropdownlardan bashqa yere click olunanda divler baglansin