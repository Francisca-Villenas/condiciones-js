const passwordOne = document.querySelector("#passwordOne");
const passwordTwo = document.querySelector("#passwordTwo");
const passwordThree = document.querySelector("#passwordThree");
const button = document.querySelector("#button");
const response = document.querySelector("#response");

button.addEventListener("click", () => {
    console.log(passwordOne.value);
    console.log(passwordTwo.value);
    console.log(passwordThree.value);

    if (passwordOne.value == 9 && passwordTwo.value == 1 && passwordThree.value == 1) {
        response.textContent = "pasword 1 correcta";
        return;
    }
    
    if (passwordOne.value == 7 && passwordTwo.value == 1 && passwordThree.value == 4) {
        response.textContent = "pasword 2 correcta";
        return;
    }

    response.textContent = "pasword incorrecta";

});