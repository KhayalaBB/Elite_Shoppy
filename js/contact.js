let mylabel = document.querySelectorAll("label");
let myInput = document.getElementsByName("focusbl");
var i;
for(i = 0; i < myInput.length; i++) {
for (i = 0; i < mylabel.length; i++) {
myInput[i].addEventListener('focus', whenIsFocus);
myInput[i].addEventListener('blur', whenIsBlur);
function whenIsFocus(){
  this.style.borderBottomColor= "#272727";
  this.previousElementSibling.style.color="#2fdab8"; 
  this.previousElementSibling.style.marginBottom= "0"; 
} 
function whenIsBlur(){
 this.previousElementSibling.style.color="#555";
   this.previousElementSibling.style.marginBottom= "-15px"; 
   this.style.borderBottomColor= "white" ;
}
}
} 