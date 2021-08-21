// function getInputValue() {
//     const initialPrice = document.getElementById("add-value");
    
// }
// add-value.addEventListener 
// const addValue = document.getElementById("add-value");
// const addSecondValue = document.getElementById("add-second-value");
// console.log(addValue,addSecondValue);

document.getElementById("add-value").addEventListener("click", function(){
    const inputValue = document.getElementById("price");
    const getPrice = inputValue.innerText;
    inputValue.innerText = getPrice;
})