const input = document.querySelectorAll("input");
const submit = document.getElementById("submit");
const select = document.getElementById("select");
const startPage = document.querySelector('.startPage');
const thankYouPage = document.querySelector('.thankYou');

input.forEach((input, i) =>{
     input.onclick = function () {
        select.innerText = 'You selected ' + input.value + ' out of 5'; 
     }
})

submit.addEventListener('click', () =>{
   if(select.innerText < 1){
       alert("please select a rating");
   } else {
    startPage.style.display = "none"
    thankYouPage.style.display = "block"; 
   }
})


