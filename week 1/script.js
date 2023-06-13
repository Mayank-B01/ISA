function compute()
{
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var year = parseInt(document.getElementById("years").value);
    var future = new Date().getFullYear() + year;
    var interest = parseFloat((principal * rate * year) / 100);
    var amount  = principal + interest;
    console.log(amount);
    document.getElementById("result").innerHTML = "If you deposit <mark>$" + principal + "</mark> at an interest rate of <mark>" + rate + "%</mark>, <br> You will recive an amount of <mark>$" + amount + "</mark> in the year<mark>" + future +"</mark>.";
}
function updateRate()
{
    var r = document.getElementById("rate").value;
    document.getElementById("rate_val").textContent = r;
}       