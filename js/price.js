const basePrice = document.getElementById("base-price");
const getGrandTotal = document.getElementById("total");
const getBigTotal = document.getElementById("big-total");
var couponTotal = 0;

// Main Function
function updateTotal(){
    const memoryCharge = parseFloat(memoryValue.innerText);
    const productPrice = parseFloat(basePrice.innerText);
    const storageCharge = parseFloat(storageValue.innerText);
    const deliveryCharge = parseFloat(shippingValue.innerText);
    const grandTotal = memoryCharge + storageCharge + deliveryCharge + productPrice;
    getGrandTotal.innerText = grandTotal;
    // Bonus Part 1 (Showing the total below)
    getBigTotal.innerText = grandTotal; 
    // Bonus Part-1 Ends
    couponTotal = 1 * grandTotal;
}

// Memory Options
const btn1 = document.getElementById("first-memory-value");
const btn2 = document.getElementById("second-memory-value");
const memoryValue = document.getElementById("memory-price");
btn1.addEventListener("click", function(){
    memoryValue.innerText = "0";
    updateTotal();
})
btn2.addEventListener("click", function(){
    memoryValue.innerText = "180";
    updateTotal();
})

// Storage Options
const btn3 = document.getElementById("first-storage-value");
const btn4 = document.getElementById("second-storage-value");
const btn5 = document.getElementById("third-storage-value");
const storageValue = document.getElementById("storage-price");
btn3.addEventListener("click", function(){
    storageValue.innerText = "0";
    updateTotal();
})
btn4.addEventListener("click", function(){
    storageValue.innerText = "100";
    updateTotal();
})
btn5.addEventListener("click", function(){
    storageValue.innerText = "180";
    updateTotal();
})

// Delivery Options
const btn6 = document.getElementById("first-shipping-value");
const btn7 = document.getElementById("second-shipping-value");
const shippingValue = document.getElementById("delivery-price");
btn6.addEventListener("click", function(){
    shippingValue.innerText = "0";
    updateTotal();
})
btn7.addEventListener("click", function(){
    shippingValue.innerText = "20";
    updateTotal();
})

// Bonus Part-2 (Coupon Code)
const btn8 = document.getElementById("coupon-input");
btn8.addEventListener("click", function(){
    const couponField = document.getElementById("coupon-code");
    const applyCoupon = couponField.value;
    if(applyCoupon == "stevekaku"){
        updateTotal();
        getGrandTotal.innerText = couponTotal * 0.8;
        getBigTotal.innerText = couponTotal * 0.8;
    }
    // Clears the input
    couponField.value = "";
})