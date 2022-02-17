let num = document.getElementById("num");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let count = document.getElementById("count")
let gues = document.getElementById("gues")
let tryAgain = document.getElementById("tryAgain")
let form = document.querySelector("form")


let randomNumber = Math.trunc((Math.random() * 100) + 1)
console.log(randomNumber)
minArray = [100];
maxArray = [0];

//btn click add event
btn.addEventListener("click", () => {

    if (Number(num.value) < 1 || Number(num.value) > 100) {
        result.innerHTML = "Please enter a number between 1 to 100"
    }
    else if (num.value > randomNumber) {
        result.innerHTML = "Gues the " + maxArray[0] + "-" + num.value
        minArray[0] = Number(num.value);
        num.value = ""
        gues.innerHTML = Number(gues.textContent) - 1


    } else if (num.value < randomNumber) {
        result.innerHTML = "Gues the " + num.value + "-" + minArray[0]
        maxArray[0] = Number(num.value);
        num.value = ""
        gues.innerHTML = Number(gues.textContent) - 1
    }

    else {
        gues.innerHTML = Number(gues.textContent) - 1
        result.innerHTML = "&#127882 Congrats &#127882 <br> The number is " + randomNumber
        num.value = ""
        tryAgain.style.display = "block"
        btn.style.display = "none"
    }
    if (Number(gues.textContent) == 0) {
        result.innerHTML = "Sorry You Lost <br> The number is " + randomNumber
        tryAgain.style.display = "block"
        btn.style.display = "none"
     
    }
})

//tryAgain button added event

tryAgain.addEventListener("click", () => {
    window.location.reload()
})

//form event deffault
form.addEventListener("click",(e)=>{
    e.preventDefault()
})
