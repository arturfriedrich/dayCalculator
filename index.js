// get the input date
document.getElementById("dateInput").addEventListener("change", function() {
    var input = this.value;
    input = input.split("-")
    var inputYear = parseInt(input[0], 10)
    var inputMonth = parseInt(input[1], 10)
    var inputDay = parseInt(input[2], 10)
    input = [inputYear, inputMonth, inputDay]
    console.log("Selected date: ", input); //e.g. 2015-11-13
});

// get current date
let current = new Date();
let cDate = [current.getFullYear(), (current.getMonth() + 1), current.getDate()];
let dateTime = cDate
console.log("Current date: ", dateTime);

document.getElementById("submitBtn").addEventListener("click", function() {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(input[0], input[1], input[2]);
    const secondDate = new Date(dateTime[0], dateTime[1], dateTime[2]);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    console.log("Days between: ",diffDays)
})
