const inputOne = document.querySelector('.input__one')
const inputTwo = document.querySelector('.input__two')
const inputThree = document.querySelector('.input__three')
const inputFour = document.querySelector('.input__four')
const inputFive = document.querySelector('.input__five')
const inputSix = document.querySelector('.input__six')
const inputSeven = document.querySelector('.input__seven')
const inputEight = document.querySelector('.input__eight')
const inputNine = document.querySelector('.input__nine')
const inputTen = document.querySelector('.input__ten')
const resultMatrix = document.querySelector('.result__matrix')
const calcBtnEqual = document.querySelector('.calc__btn__equal')

window.addEventListener('load', () => {
   return resultMatrix.innerHTML = 0
})

function matrix() {
   const a11 = parseInt(inputOne.value)
   const a12 = parseInt(inputTwo.value)
   const a13 = parseInt(inputThree.value)
   const a21 = parseInt(inputFour.value)
   const a22 = parseInt(inputFive.value)
   const a23 = parseInt(inputSix.value)
   const a31 = parseInt(inputSeven.value)
   const a32 = parseInt(inputEight.value)
   const a33 = parseInt(inputNine.value)

   let result = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 -
   a13 * a22 * a31 - a11 * a23 * a32 - a12 * a21 * a33;

   return result
}

function matrixResult() {
   const a11 = parseFloat(inputOne.value)
   const a12 = parseFloat(inputTwo.value)
   const a13 = parseFloat(inputThree.value)
   const a21 = parseFloat(inputFour.value)
   const a22 = parseFloat(inputFive.value)
   const a23 = parseFloat(inputSix.value)
   const a31 = parseFloat(inputSeven.value)
   const a32 = parseFloat(inputEight.value)
   const a33 = parseFloat(inputNine.value)

   let createResultBlock = document.createElement('div')
   createResultBlock.textContent = `${a11 * a22 * a33} + ${a12 * a23 * a31} 
   + ${a13 * a21 * a32} - ${a13 * a22 * a31} - ${a11 * a23 * a32} - ${a12 * a21 * a33} = ${matrix()}`
   createResultBlock.className = `result__matrix__main`   
   resultMatrix.innerHTML = ''
   resultMatrix.appendChild(createResultBlock)
}


calcBtnEqual.addEventListener('mousedown', () => {  
   return matrixResult()
})
   

