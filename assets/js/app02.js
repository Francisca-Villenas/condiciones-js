const inputOne = document.querySelector("#inputOne");
const inputTwo = document.querySelector("#inputTwo");
const inputThree = document.querySelector("#inputThree");
const button = document.querySelector("#button");
const response = document.querySelector("#response");

button.addEventListener("click", () => {
    const total = parseInt(inputOne.value) + parseInt(inputTwo.value) + parseInt(inputThree.value);
    console.log(total);

    if (total >= 11) {
        response.textContent = "Llevas demasiados stickers";        
    
    }else {
        response.textContent = "Llevas " + total + " stickers";
    } 

});