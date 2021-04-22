const body = document.body
const input = document.getElementById('input-code')
const color = document.getElementById('colorValue')
const display = document.getElementById('displayColor')
const h1 = document.getElementById('colorName')

let hexVal
let val
let bgVal

(function () {
   hexVal = Math.round(Math.random() * 16777215)
   bgVal = hexVal.toString(16).padStart(6, '0')
   color.innerText = `#${bgVal}`
   display.style.backgroundColor = `#${bgVal}`
})()

display.addEventListener("click", () => {
   const textAreaEle = document.createElement('textarea')
   textAreaEle.value = `#${bgVal}`
   document.body.appendChild(textAreaEle)
   textAreaEle.select()
   document.execCommand('copy')
   document.body.removeChild(textAreaEle)
})

body.addEventListener("keydown", (event) => {

   if (event.keyCode == 38) {
      val = incVal(hexVal)
      bgVal = val.toString(16).padStart(6, '0')
      if (val < 16) {
         color.innerText = `#${bgVal}`
         display.style.backgroundColor = `#${bgVal}`
      } else {
         color.innerText = `#${bgVal}`
         display.style.backgroundColor = `#${bgVal}`
      }

      hexVal = val
   }

   if (event.keyCode == 40) {
      val = decVal(hexVal)
      bgVal = val.toString(16).padStart(6, '0')
      if (val < 16) {
         color.innerText = `#${bgVal}`
         display.style.backgroundColor = `#${bgVal}`
      } else {
         color.innerText = `#${bgVal}`
         display.style.backgroundColor = `#${bgVal}`
      }

      hexVal = val
   }

})

function incVal(num) {
   if (num >= 0 && num < 16777215) {
      return num + 1
   } else {
      return num
   }
}

function decVal(num) {
   if (num > 0 && num <= 16777215) {
      return num - 1
   } else {
      return num
   }
}