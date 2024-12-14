var input = document.getElementById("input");
var numbers = document.getElementById("numbers-div");
var result = "";

numbers.addEventListener('click',function(e){
  if(e.target.innerText === "C"){
    input.value = 0;
    result="";
  }
 else if(e.target.innerText === "="){
   if(input.value === "0" || input.value === ""){
   alert("Enter Valid Input");  
   }
  else {
      input.value = eval(result);
      result = "";
   } 
 } 
 else {
   input.value += e.target.innerText;
   result += e.target.innerText;
 } 
})