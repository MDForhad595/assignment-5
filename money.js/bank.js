const addMoney = document.getElementById('add-money').value
const foodMoney = document.getElementById('food-money').value
const rentMoney = document.getElementById('rent-money').value
const clotMoney = document.getElementById('clot-money').value
const remainingMoney = addMoney - (foodMoney+ rentMoney+clotMoney)
console.log(remainingMoney)