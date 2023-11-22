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
const calcBtnMinus = document.querySelector('.calc__btn__minus')
const calcBtnDelete = document.querySelector('.calc__btn__delete')
const calcBtnDeleteAll = document.querySelector('.calc__btn__delete__all')

function matrixResult() {
   const a11 = replaceDout(inputOne.value)
   const a12 = replaceDout(inputTwo.value)
   const a13 = replaceDout(inputThree.value)
   const a21 = replaceDout(inputFour.value)
   const a22 = replaceDout(inputFive.value)
   const a23 = replaceDout(inputSix.value)
   const a31 = replaceDout(inputSeven.value)
   const a32 = replaceDout(inputEight.value)
   const a33 = replaceDout(inputNine.value)

   let resultOne = a11 * a22 * a33
   let resultTwo = a12 * a23 * a31
   let resultThree = a13 * a21 * a32
   let resultFour = a13 * a22 * a31
   let resultFive = a11 * a23 * a32
   let resultSix = a12 * a21 * a33
   let mainResult = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32
      - a13 * a22 * a31 - a11 * a23 * a32 - a12 * a21 * a33;

   let createResultBlock = document.createElement('div')
   createResultBlock.textContent = `${replaceComma(resultOne.toString())} + ${resultTwo} + ${resultThree} 
   - ${resultFour} - ${resultFive} - ${resultSix} = ${mainResult}`
   createResultBlock.className = `result__matrix__main`
   resultMatrix.innerHTML = ''
   resultMatrix.appendChild(createResultBlock)
}


function replaceDout(rep) {
   let splitNum = rep.split('')
   for (let i = 0; i < splitNum.length; i++) {
      if (rep[i] === ',') {
         splitNum[i] = '.'
      }
   }
   return splitNum.join('')
}

function replaceComma(rep) {
   let splitNum = rep.split('')
   for (let i = 0; i < splitNum.length; i++) {
      if (rep[i] === '.') {
         splitNum[i] = ','
      }
   }
   return splitNum.join('')
}


calcBtnEqual.addEventListener('mousedown', () => {
   // console.log(replaceComma(inputOne.value))
   return matrixResult()
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
      input.value += '.'
      input.value = input.value.replace(/\./g, ',')
   }
   calcBtnMinus.onclick = () => {
      input.value += '-';
   }
   calcBtnDelete.onclick = () => {
      let getNum = input.value

      if (getNum.length > 0) {
         input.value = getNum.slice(0, -1);
      }
   }
}

calcBtnDeleteAll.addEventListener('mousedown', () => {
   inputOne.value = ''
   inputTwo.value = ''
   inputThree.value = ''
   inputFour.value = ''
   inputFive.value = ''
   inputSix.value = ''
   inputSeven.value = ''
   inputEight.value = ''
   inputNine.value = ''
})
