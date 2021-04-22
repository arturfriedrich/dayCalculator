var formContainer = document.querySelector(".form-container")
var resultContainer = document.querySelector(".result-container")
var resultDisplay = document.querySelector(".result")

// get the input date
function GetDays(){
    var dropdt = new Date(document.getElementById("dateInput").value);
    var pickdt = new Date(dateTime);
    return Math.abs(parseInt((dropdt - pickdt) / (24 * 3600 * 1000)));
}
function cal(){
    if(document.getElementById("dateInput")){
        return GetDays()
    }  
}

// get current date
let current = new Date();
let cDate = [current.getFullYear(), (current.getMonth() + 1), current.getDate()];
let dateTime = cDate

// calculate on click
document.getElementById("submitBtn").addEventListener("click", function() {
    
    // hide the form-container
    if (GetDays()) {
        showResult()
        dayCounter()
    } else {
        document.querySelector(".error-message").style.display = "block"
    }
})

function showResult() {
    formContainer.style.display = "none"
    resultContainer.style.display = "flex"
    
    var resultScore = GetDays()
}

document.getElementById("backBtn").addEventListener("click", function() {
    formContainer.style.display = "flex"
    resultContainer.style.display = "none"
    document.querySelector(".error-message").style.display = "none"
})

function dayCounter() {
    var resultScore = GetDays()
    let count = resultScore * 0.95
    
    setInterval(() => {
        if (count < resultScore) {
            count++
            resultDisplay.innerHTML = Math.round(count)
        }
    })
}