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

const calcBtnOne = document.querySelector('.calc__btn__one')
const calcBtnTwo = document.querySelector('.calc__btn__two')
const calcBtnThree = document.querySelector('.calc__btn__three')
const calcBtnFour = document.querySelector('.calc__btn__four')
const calcBtnFive = document.querySelector('.calc__btn__five')
const calcBtnSix = document.querySelector('.calc__btn__six')
const calcBtnSeven = document.querySelector('.calc__btn__seven')
const calcBtnEight = document.querySelector('.calc__btn__eight')
const calcBtnNine = document.querySelector('.calc__btn__nine')
const calcBtnZero = document.querySelector('.calc__btn__zero')
const calcBtnComma = document.querySelector('.calc__btn__comma')
const calcBtnEqual = document.querySelector('.calc__btn__equal')
const mat = document.querySelector('.mat')

document.getElementById('mat').addEventListener('focus', function () {
   document.getElementById('mat').blur()
})


inputOne.addEventListener('mousedown', () => {
   keyBoard(inputOne)
})

inputTwo.addEventListener('mousedown', () => {
   keyBoard(inputTwo)
})

inputThree.addEventListener('mousedown', () => {
   keyBoard(inputThree)
})

inputFour.addEventListener('mousedown', () => {
   keyBoard(inputFour)
})

inputFive.addEventListener('mousedown', () => {
   keyBoard(inputFive)
})

inputSix.addEventListener('mousedown', () => {
   keyBoard(inputSix)
})

inputSeven.addEventListener('mousedown', () => {
   keyBoard(inputSeven)
})

inputEight.addEventListener('mousedown', () => {
   keyBoard(inputEight)
})

inputNine.addEventListener('mousedown', () => {
   keyBoard(inputNine)
})


function keyBoard(input) {
   calcBtnOne.onclick = () => {
      input.value += 1;
   }
   calcBtnTwo.onclick = () => {
      input.value += 2;
   }
   calcBtnThree.onclick = () => {
      input.value += 3;
   }
   calcBtnFour.onclick = () => {
      input.value += 4;
   }
   calcBtnFive.onclick = () => {
      input.value += 5;
   }
   calcBtnSix.onclick = () => {
      input.value += 6;
   }
   calcBtnSeven.onclick = () => {
      input.value += 7;
   }
   calcBtnEight.onclick = () => {
      input.value += 8;
   }
   calcBtnNine.onclick = () => {
      input.value += 9;
   }
   calcBtnZero.onclick = () => {
      input.value += 0;
   }

   calcBtnComma.onclick = () => {
      input.value += ',';
   }
}



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







