var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var input3 = document.querySelector("#input3");
var profit = document.querySelector("#profit");
var loss = document.querySelector("#loss");
var profit_percent = document.querySelector("#profit_percent");
var loss_percent = document.querySelector("#loss_percent");
var button = document.querySelector("button");

button.addEventListener("click", calculatePrice)


function calculatePrice() {
    if (input1.value <= 0 || input2.value <= 0 || input3.value <= 0) {
        profit.innerHTML = "Invalid Entry"
        profit_percent.innerHTML = ""
        loss.innerHTML = ""
        loss_percent.innerHTML = ""
    } else {
        var buyPrice = input1.value * input2.value;
        var sellPrice = input2.value * input3.value;
        var total = sellPrice - buyPrice;
        percent_prof_loss = (total * 100) / buyPrice;
        if (total < 0) {
            loss.innerHTML = "Loss: " + (-total).toFixed(2) + " ₹"
            loss_percent.innerHTML = "Return of Investment: " + percent_prof_loss.toFixed(3) + "%"
            profit.innerHTML = ""
            profit_percent.innerHTML = ""
        } else if (total == 0) {
            profit.innerHTML = "No Profit and Loss"
            profit_percent.innerHTML = "Return of Investment: " + percent_prof_loss + "%"
            loss.innerHTML = ""
            loss_percent.innerHTML = ""
        } else {
            profit.innerHTML = "Profit: " + total.toFixed(2) + " ₹"
            profit_percent.innerHTML = "Return of Investment: " + percent_prof_loss.toFixed(3) + "%"
            loss.innerHTML = ""
            loss_percent.innerHTML = ""
        }
    }
}