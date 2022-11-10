const button = document.querySelector("#button");

button.addEventListener("click", () => {
    console.log(button);

 if (button.classList.contains('border')) {
    button.classList.remove('border');
    
 } else {
    button.classList.add('border');
    
 }

});