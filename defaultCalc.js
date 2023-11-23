const defaultCalcDefault = document.querySelector('.default__calc')
const matrixCalcDefault = document.querySelector('.matrix__calc')

const resultDefaultInput = document.querySelector('.input__eleven')

const calcBtnOneDefault = document.querySelector('.calc__btn__one__default')
const calcBtnTwoDefault = document.querySelector('.calc__btn__two__default')
const calcBtnThreeDefault = document.querySelector('.calc__btn__three__default')
const calcBtnFourDefault = document.querySelector('.calc__btn__four__default')
const calcBtnFiveDefault = document.querySelector('.calc__btn__five__default')
const calcBtnSixDefault = document.querySelector('.calc__btn__six__default')
const calcBtnSevenDefault = document.querySelector('.calc__btn__seven__default')
const calcBtnEightDefault = document.querySelector('.calc__btn__eight__default')
const calcBtnNineDefault = document.querySelector('.calc__btn__nine__default')
const calcBtnZeroDefault = document.querySelector('.calc__btn__zero__default')

const calcBtnMinusDefault = document.querySelector('.calc__btn__minus__default')
const calcBtnAddMinus = document.querySelector('.calc__btn__add__minus')
const calcBtnPercent = document.querySelector('.calc__btn__percent')
const calcBtnDividing = document.querySelector('.calc__btn__dividing')
const calcBtnMultiplication = document.querySelector('.calc__btn__multiplication')
const calcBtnCommaDefault = document.querySelector('.calc__btn__comma__default')
const calcBtnPluse = document.querySelector('.calc__btn__pluse')
const calcBtnDeleteDefault = document.querySelector('.calc__btn__delete__default')

const calcBtnAnotherDefault = document.querySelector('.calc__btn__another__default')
const calcBtnEqualDefault = document.querySelector('.calc__btn__equal__default')


// Default Calc
window.addEventListener('load', () => {
   resultDefaultInput.value = ''   
   keyBoardDefault(resultDefaultInput)
   resultDefaultInput.value = 0
})

calcBtnDeleteDefault.addEventListener('mousedown', () => {
   resultDefaultInput.value = ''
})

calcBtnEqualDefault.addEventListener('mousedown', () => {
   resultDefaultInput.value = eval(replaceDout(resultDefaultInput.value))
})


function keyBoardDefault(input) {

   calcBtnOneDefault.onclick = () => {
      input.value += 1;
   }
   calcBtnTwoDefault.onclick = () => {
      input.value += 2;
   }
   calcBtnThreeDefault.onclick = () => {
      input.value += 3;
   }
   calcBtnFourDefault.onclick = () => {
      input.value += 4;
   }
   calcBtnFiveDefault.onclick = () => {
      input.value += 5;
   }
   calcBtnSixDefault.onclick = () => {
      input.value += 6;
   }
   calcBtnSevenDefault.onclick = () => {
      input.value += 7;
   }
   calcBtnEightDefault.onclick = () => {
      input.value += 8;
   }
   calcBtnNineDefault.onclick = () => {
      input.value += 9;
   }

   calcBtnZeroDefault.onclick = () => {
      input.value += 0;
   }

   calcBtnCommaDefault.onclick = () => {
      input.value += '.'
      input.value = input.value.replace(/\./g, ',')
   }

   calcBtnAddMinus.onclick = () => {
      input.value += '-';
   }

   calcBtnMinusDefault.onclick = () => {
      input.value += '-';
   }

   calcBtnPluse.onclick = () => {
      input.value += '+';
   }
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



// calcBtnPluse.addEventListener('mousedown', () => {
//    calcBtnPluse.style.backgroundColor = "#ffffff"
//    calcBtnPluse.style.color = "#ff9f0a"
// })


calcBtnAnotherDefault.addEventListener('mousedown', () => {
   defaultCalcDefault.style.display = "none"
   matrixCalcDefault.style.display = "grid"
})
