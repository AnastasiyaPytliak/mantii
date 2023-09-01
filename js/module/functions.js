import {
  buySizeCountCh, buySizeCount, rentSizeCountCh, rentSizeCount, countBuyHood, countRentHood, countBuyTie, countRentTie, countBuyBrush,
  modalHoodBuyBlock, modalTieBuyBlock, modalBrushBuyBlock, modalHoodRentBlock, modalTieRentBlock, steps, select3, rentCapValue, stepBrushShow, 
  bakalavrImg, stepImg, magistrImg, formElement, select1, select2, logoRowImgElement, logoImgBlockElement, inputPickUp
} from './variables.js'

// ------Transition to Next or Previous Step
function changeStep (btn) {
  let index = 0;
  const active = document.querySelector('form .step.active-step')
  index = steps.indexOf(active)
  steps[index].classList.remove('active-step');
  if (btn === 'next') {
    index++
  } else if (btn === 'prev') {
    index--
  }
  steps[index].classList.add('active-step')
}

// ----Change IMG in Block Bakalavr with Hood
function switchBakalavrHoodImg (value) {
  switch(value) {
    case 'cиний':
      bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-bue.png'
      stepImg.src = './image/bakalavr-hood/bakalavr-hood-bue.png'
      break;
    case 'красный':
      bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-red.jpg'
      stepImg.src = './image/bakalavr-hood/bakalavr-hood-red.jpg'
      break;
    case 'золотой':
      bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-gold.jpg'
      stepImg.src = './image/bakalavr-hood/bakalavr-hood-gold.jpg'
      break;
    case 'серебристый':
      bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-silver.jpg'
      stepImg.src = './image/bakalavr-hood/bakalavr-hood-silver.jpg'
      break;
    case 'фиолетовый':
      bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-purple.jpg'
      stepImg.src = './image/bakalavr-hood/bakalavr-hood-purple.jpg'
      break;
    case 'бирюзовый':
      bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-light-blue.jpg'
      stepImg.src = './image/bakalavr-hood/bakalavr-hood-light-blue.jpg'
      break;
    default:
      bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-bue.png'
      stepImg.src = './image/bakalavr-hood/bakalavr-hood-bue.png'
  } 
}

// ----Change IMG in Block Magistr
function switchMagistrHoodImg (value) {
  switch(value) {
    case 'cиний':
      magistrImg.src = './image/magistr/magistr-blue.jpg'
      stepImg.src = './image/magistr/magistr-blue.jpg'
      break;
    case 'красный':
      magistrImg.src = './image/magistr/magistr-red.jpg'
      stepImg.src = './image/magistr/magistr-red.jpg'
      break;
    case 'золотой':
      magistrImg.src = './image/magistr/magistr-gold.jpg'
      stepImg.src = './image/magistr/magistr-gold.jpg'
      break;
    case 'серебристый':
      magistrImg.src = './image/magistr/magistr-silver.jpg'
      stepImg.src = './image/magistr/magistr-silver.jpg'
      break;
    case 'фиолетовый':
      magistrImg.src = './image/magistr/magistr-purple.jpg'
      stepImg.src = './image/magistr/magistr-purple.jpg'
      break;
    case 'бирюзовый':
      magistrImg.src = './image/magistr/magistr-light-blue.jpg'
      stepImg.src = './image/magistr/magistr-light-blue.jpg'
      break;
    default:
      magistrImg.src = './image/magistr/magistr-blue.jpg'
      stepImg.src = './image/magistr/magistr-blue.jpg'
  }
}

// ----Change IMG in Block Bakalavr with Tie
function switchBakalavrTieImg (value) {
  switch(value) {
    case 'cиний':
      bakalavrImg.src = './image/bakalavr-tie/bakalavr-tie-blue.png'
      stepImg.src = './image/bakalavr-tie/bakalavr-tie-blue.png'
      break;
    case 'красный':
      bakalavrImg.src = './image/bakalavr-tie/bakalavr-tie-red.png'
      stepImg.src = './image/bakalavr-tie/bakalavr-tie-red.png'
      break;
    case 'золотой':
      bakalavrImg.src = './image/bakalavr-tie/bakalavr-tie-gold.png'
      stepImg.src = './image/bakalavr-tie/bakalavr-tie-gold.png'
      break;
    case 'белый':
      bakalavrImg.src = './image/bakalavr-tie/bakalavr-tie-silver.png'
      stepImg.src = './image/bakalavr-tie/bakalavr-tie-silver.png'
      break;
    case 'зеленый':
      bakalavrImg.src = './image/bakalavr-tie/bakalavr-tie-green.jpg'
      stepImg.src = './image/bakalavr-tie/bakalavr-tie-green.jpg'
      break;
    default:
      bakalavrImg.src = './image/bakalavr-tie/bakalavr-tie-blue.png'
      stepImg.src = './image/bakalavr-tie/bakalavr-tie-blue.png'
  }
}

// ------- Sum Input Value
function summInput (item) {
  let array = [...document.querySelectorAll(item)]
  let sumArrayItems = array.reduce((a, b) => a + +b.value, 0)
  return sumArrayItems
}

// ------Increase Input value
function increaseValue (e) {
  let elem = e.target.parentElement
  let elemParent = elem.parentElement.parentElement
  let array = ['buy-size__items', 'rent-size__items', 'hood-buy__items', 'hood-rent__items', 'tie-buy__items', 'tie-rent__items', 'brush-buy__items']
  let arrayCompare = [
    +buySizeCountCh.textContent < +buySizeCount.textContent, 
    +rentSizeCountCh.textContent < +rentSizeCount.textContent, 
    summInput('.hood-buy__items input') < +countBuyHood.textContent,
    summInput('.hood-rent__items input') < +countRentHood.textContent,
    summInput('.tie-buy__items input') < +countBuyTie.textContent,
    summInput('.tie-rent__items input') < +countRentTie.textContent,
    summInput('.brush-buy__items input') < +countBuyBrush.textContent,
  ]

  if (array.includes(elemParent.classList.value)) {
    const i = array.indexOf(elemParent.classList.value);

    if (arrayCompare[i]){
      ++elem.querySelector("input").value
      // data.push({name: `${elemParent.classList.value}`, value: elem.querySelector("input").value})
      // localStorage['elemParent.classList.value'] = JSON.stringify({name: `${elemParent.classList.value}`, value: elem.querySelector("input").value});
      // localStorage.setItem(`${elemParent.classList.value}`, {value: elem.querySelector("input").value})
    } 
    elem.querySelector("input").value
  } else {
    ++elem.querySelector("input").value
  }
}

// ------Cost for every section in step 2
function getCostEverySection (e) {
  let elem = e.target.parentElement
  if (elem.nextElementSibling) {
    elem.nextElementSibling.querySelector('.summ p').textContent = 
    +elem.previousElementSibling.querySelector('.price p').textContent * +elem.querySelector("input").value
  }
}

// --------Get costs Complects
function getCost () {
  // Rent Cost
  let allRentCost = [...document.querySelectorAll('.rent .summ p')];
  let sumRent = allRentCost.reduce((a, b) => a + +b.outerText, 0)
  document.querySelector('.rent-count__all p').textContent = sumRent
  // Logo Cost
  let allLogoPrice = [...document.querySelectorAll('.step-logo__buy-details .price p')]
  let sumLogo = allLogoPrice.reduce((a, b) =>  a + +b.outerText * +b.parentElement.nextElementSibling.querySelector('input').value,  0)
  document.querySelector('.step__logo-summery p').textContent = sumLogo
  // Total Cost
  let allCost = [...document.querySelectorAll('.step__buy .summ p')]
  let sum = allCost.reduce((a, b) => a + +b.outerText, 0)
  document.querySelectorAll('.sum-all p').forEach(i => {
    i.textContent = sum
  })
}

// --------Count Complects for Buying
function getCountComplectsForBuying () {
  // Count Complects
  let buyComplectsCount = document.querySelector('.buy-count__complects').value
  document.querySelectorAll('.buy-size__count').forEach(i => {
    i.textContent = buyComplectsCount
  })
  buySizeCount.textContent = buyComplectsCount
    // Show Blocks with Size and Color 
    if (+buyComplectsCount > 0) {
      document.querySelector('.buy-size').setAttribute('style', 'display:block')
      modalHoodBuyBlock.setAttribute('style', 'display:block')
      modalTieBuyBlock.setAttribute('style', 'display:block')
    } else {
      document.querySelector('.buy-size').setAttribute('style', 'display:none')
      modalHoodBuyBlock.setAttribute('style', 'display:none')
      modalTieBuyBlock.setAttribute('style', 'display:none')
    }
  // Count Complects Different Sizes that User Chose
  buySizeCountCh.textContent = summInput('.buy-size__items input')
}

// --------Count Complects for Renting
function getCountComplectsForRenting () {
  // Count for Renting
  let allRentCount = [...document.querySelectorAll('.rent .in-num')];
  let countRent = allRentCount.reduce((a, b) => a + +b.value, 0)
  document.querySelector('.step__rent-summery input').value = countRent
  document.querySelectorAll('.rent-size__count').forEach(i => {
    i.textContent = countRent
  })
  rentSizeCount.textContent = countRent
    // Change Rent Price depends on count 
    if (countRent > 4) {
      document.querySelector('.rent-price p').textContent = '400'
      document.querySelector('.rent-price__cap p').textContent = '800'
    } else {
      document.querySelector('.rent-price p').textContent = '500'
      document.querySelector('.rent-price__cap p').textContent = '900'
    } 
    // Show Size Rent and Address Blocks
    if (countRent > 0) {
      document.querySelector('.add-address').setAttribute('style', 'display:flex')
      document.querySelector('.rent-size').setAttribute('style', 'display:block')
      modalHoodRentBlock.setAttribute('style', 'display:block')
      modalTieRentBlock.setAttribute('style', 'display:block')
    } else  {
      document.querySelector('.add-address').setAttribute('style', 'display:none')
      document.querySelector('.rent-size').setAttribute('style', 'display:none')
      modalHoodRentBlock.setAttribute('style', 'display:none')
      modalTieRentBlock.setAttribute('style', 'display:none')
    }
  // Sum Count Complects Different Sizes that User Chose for Renting
  rentSizeCountCh.textContent = summInput('.rent-size__items input')
}

// --------Show Brush Color Block
function showBlockBrushColor () {
  if (+buySizeCount.textContent || +rentCapValue.value) {
    document.querySelector('.brush-colors').setAttribute('style', 'display:block')
    modalBrushBuyBlock.setAttribute('style', 'display:block')
    stepBrushShow.removeAttribute('disabled')
  } else {
    stepBrushShow.setAttribute('disabled', 'disabled')
    document.querySelector('.brush-colors').setAttribute('style', 'display:none')
    modalBrushBuyBlock.setAttribute('style', 'display:none')
  }
}

// ------Get Data for Modal with Colors
function getDataFromLocalStorage () {
  document.querySelectorAll('.color-item').forEach(i => {
    if (localStorage[`${i.className.slice(11, i.length)}`]) {
       i.querySelector('input').value = localStorage[`${i.className.slice(11, i.length)}`]
    }
  })
}

// ------Change Data for Modal with Colors
function changeDataFromLocalStorage () {
  document.querySelectorAll('.color-item').forEach(i => {
    if (+i.querySelector('input').value) {
      localStorage[`${i.className.slice(11, i.length)}`] = i.querySelector('input').value
    }
  })
}

// Get Date in a suitable format
function date () {
  let data = []
  let date = document.querySelector('.step-4__date').value
  let newDate = new Date(date) 
  let day = () => newDate.getDate() < 10 ? `0${newDate.getDate()}` : `${newDate.getDate()}`
  let month = () => (newDate.getMonth() + 1) < 10 ? `0${newDate.getMonth() + 1}` : `${newDate.getMonth() +1}`
  let dateForm = day() + '.' + month() + '.' +  newDate.getFullYear()
  data.push({name: 'Дата доставки', value: dateForm})
  return data
}

function reset () {
  localStorage.clear()
  inputPickUp.setAttribute("checked", ' ');
  rentSizeCountCh.textContent = '0'
  buySizeCountCh.textContent = '0'
  document.querySelector('.rent-count__all p').textContent = '0'
  document.querySelector('.step__logo-summery p').textContent = '0'
  document.querySelector('.buy-count__complects').value = '0'
  document.querySelectorAll('.summ p').forEach(i => {
    i.textContent = '0'
  })
  document.querySelectorAll('.sum-all p').forEach(i => {
    i.textContent = '0'
  })
  document.querySelectorAll('.text-input').forEach(i => {
    i.textContent = ''
  })
  document.querySelectorAll('.buy-size__count').forEach(i => {
    i.textContent = '0'
  })
  document.querySelector('.step__rent-summery input').value = '0'

  document.querySelectorAll('.rent-size__count').forEach(i => {
    i.textContent = '0'
  })
  document.querySelector('.rent-price p').textContent = '500'
  document.querySelector('.rent-price__cap p').textContent = '900'

  document.querySelectorAll('.in-num__count').forEach(i => {
    i.value = '0'
  })
  document.querySelectorAll('.step-4__row input').forEach(i => {
    i.value = ''
  })
  document.querySelectorAll('.in-num').forEach(i => {
    i.value = '0'
  })
  document.querySelectorAll('.logo__img-ch').forEach(i => {
    i.src = ''
  })
  logoRowImgElement.querySelectorAll('.show').forEach(i => {
    i.classList.remove('show')
  })
  document.querySelector('.return').setAttribute('style', 'display:none')
  logoImgBlockElement.setAttribute('style', 'background:#EFEFEF; width:140px;;')

}

function phone () {
  let data = []
  let phone = document.querySelector('.phone').value
  let rightphone = phone.replace(/\D/g, '')
  data.push({name: 'Whatsapp', value: rightphone})
  return data
}

const brush = () => {
  let arrayBrush = []
  let sum = 0
  let array = formElement.querySelectorAll('.brush-buy__items .in-num')
  for (let i = 0; i < array.length; i++) {
    sum += array[i].value
  }
  if (sum == 0) {
    arrayBrush.push({name: 'Цвет кисточки', value: select3.value})
  } else {
    arrayBrush.push({name: 'Цвет кисточки', value: ''})
  }
  return arrayBrush
}

const tie = () => {
  let arrayBrush = []
  let sum = 0
  let sum1 = 0
  let array = formElement.querySelectorAll('.tie-buy__items .in-num')
  let array1 = formElement.querySelectorAll('.tie-rent__items .in-num')
  for (let i = 0; i < array.length; i++) {
    sum += array[i].value
  }
  for (let i = 0; i < array.length; i++) {
    sum1 += array1[i].value
  }
  let allSUm = sum + sum1
  const item = document.querySelector('.next-btn.active')
  if (allSUm == 0 && item.dataset.role == 'order1' && document.querySelector('.step-1__btn .btn.active').value == 'с галстуком') {
    arrayBrush.push({name: 'Цвет галстука', value: select2.value})
  } else {
    arrayBrush.push({name: 'Цвет галстука', value: ''})
  }
  return arrayBrush
}

const hood = () => {
  let arrayBrush = []
  let sum = 0
  let sum1 = 0
  let array = formElement.querySelectorAll('.hood-buy__items .in-num')
  let array1 = formElement.querySelectorAll('.hood-rent__items .in-num')
  for (let i = 0; i < array.length; i++) {
    sum += array[i].value
  }
  for (let i = 0; i < array.length; i++) {
    sum1 += array1[i].value
  }
  let allSum = sum + sum1
  const item = document.querySelector('.next-btn.active')
  if (allSum == 0 && item.dataset.role == 'order1' && document.querySelector('.step-1__btn .btn.active').value == 'с капюшоном') {
    arrayBrush.push({name: 'Цвет капюшона', value: select1.value})
  } else if (allSum == 0 && item.dataset.role == 'order2') {
    arrayBrush.push({name: 'Цвет капюшона', value: select1.value})
  } else {
    arrayBrush.push({name: 'Цвет капюшона', value: ''})
  }
  return arrayBrush
}

const getOrderDetails = () => {
  let data = []
  const item = document.querySelector('.next-btn.active')
  if (item.dataset.role == 'order1') {
    data.push({name: 'Комплект', value: 'Бакалавр'})
  } else if (item.dataset.role == 'order2')  {
    data.push({name: 'Комплект', value: 'Магистр'})
  }
  return data
}

// Collection functions
function getDataFunctions (e) {
  getCostEverySection (e)
  getCost()
  getCountComplectsForBuying()
  getCountComplectsForRenting()
  showBlockBrushColor () 
}

export { getDataFunctions, increaseValue, changeStep, date, reset, brush, tie, hood, switchMagistrHoodImg, switchBakalavrTieImg, 
  getOrderDetails, getDataFromLocalStorage, changeDataFromLocalStorage, switchBakalavrHoodImg, phone }