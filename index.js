/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let input = document.getElementById("input")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

let lengthCal = input.value * 3.281

button.addEventListener("click", function() {
  length.textContent = `${input.value} meters = ${(input.value * 3.281).toFixed(3)} feet |  ${input.value} feet = ${(input.value / 3.281).toFixed(3)} meters` 
   
  volume.textContent = `${input.value} liters = ${(input.value * 0.264).toFixed(3)} gallons |  ${input.value} gallons = ${(input.value / 0.264).toFixed(3)} liters` 
   
  mass.textContent = `${input.value} kilos = ${(input.value * 2.204).toFixed(3)} pounds |  ${input.value} pounds = ${(input.value / 2.204).toFixed(3)} kilos `  
  
})

