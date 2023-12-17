let qty = document.getElementById('qtyInput');
let normalDel = document.getElementsByName('delivery-type')[0];
let expressDel = document.getElementsByName('delivery-type')[1];
let buyBtn = document.getElementById("buy-btn");

normalDel.addEventListener('change', calcCost);
expressDel.addEventListener('change', calcCost);
qty.addEventListener('input', calcCost);
buyBtn.addEventListener('click', buyBtnClick);

function calcCost() {
    let qty = document.getElementById('qtyInput');
    let priceEl = document.getElementsByClassName("prod-price")[0];
    let calcPriceEl = document.getElementsByClassName("total-price")[0];
    let delEl = document.getElementsByName('delivery-type');

    if (delEl[0].checked) {
        calcPriceEl.innerHTML = qty.value * parseFloat(priceEl.innerHTML);
        return qty.value * parseFloat(priceEl.innerHTML);
    } else if (delEl[1].checked) {
        calcPriceEl.innerHTML = qty.value * parseFloat(priceEl.innerHTML) + 10;
        return qty.value * parseFloat(priceEl.innerHTML) + 10;
    }
}

function buyBtnClick() {
    let totalPriceEl = document.getElementsByClassName('total-price')[0];
    let qty = document.getElementById('qtyInput');
    let prodTitle = document.getElementsByClassName('prod-title')[0];
    let toastEl = document.getElementById("toaster");
    let buyBtn = document.getElementById("buy-btn");

    if (qty.value === "" || qty.value === "0") {
        toastEl.innerHTML = "Please input a valid quantity.";
        buyBtn.disabled = true;
    } else {
        toastEl.innerHTML = "Order for " + qty.value + " " + prodTitle.innerHTML + " is received. <br>$ " + calcCost() + " is charged.";
        buyBtn.disabled = true;
    }
    toastEl.className = "show";
    
    setTimeout(function() {
        toastEl.innerHTML="";
        toastEl.className = totalPriceEl.className.replace("show", "");
        buyBtn.disabled = false;
    }, 3000);
}