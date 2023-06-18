const header = document.querySelector('.step-1__btn');
const bodyStep1 = document.querySelector('.step__group-first');
const pickColorElement = document.querySelector('.bakalavr');
const pickColorTieElement = document.querySelector('.bakalavr-tie');
const formElement = document.querySelector('form');
const colors = document.querySelectorAll('.color');
const colorsMg = document.querySelectorAll('.color-mg');

const sum = document.querySelector('.buy-sum__count p');
const priceBakalavr = document.querySelector('.buy-price p');
const sumRent = document.querySelector('.rent-sum__count p');
const sumRentCap = document.querySelector('.rent-sum__count-cap p');
const priceBakalavrRent = document.querySelector('.rent-price p');
const priceBakalavrRentCap = document.querySelector('.rent-price__cap p');
const steps = Array.from(document.querySelectorAll('form .step'))
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .prev-btn');
const inputSumValue = document.querySelector('.step__summery .in-num');
const buySumValue = document.querySelector('.step__summery .buy-sum__count p')
const inputRentSumValue = document.querySelector('.step__rent-summery .in-num__count');
const rentSumValue = document.querySelector('.step__rent-summery .buy-sum__count p');
const rentValue = document.querySelector('.rent .step__buy-details .buy-count .in-num__rent');
const rentCapValue = document.querySelector('.rent .step__buy-details .buy-count .in-num__cap');
const logoValue = document.querySelector('.step__logo-summery .buy-sum__count p');
const logoPrice = document.querySelector('.logo-price__fancy p');
const logoStickPrice = document.querySelector('.logo-price p');
const sumAll = document.querySelector('.step__all-summery .buy-sum__count p');

const colorTabs = document.querySelector('.step-1__tabs.bakalavr')
const colorTieTabs = document.querySelector('.step-1__tabs.bakalavr-tie')
const colorTabsMg = document.querySelector('.step-1__tabs.magistr')
const stepBakalavr = document.querySelector('.bakalavr-step')
const stepMagistr = document.querySelector('.magistr-step')
const orderName = document.querySelector('.buy-name')
const step2 = document.querySelector('.step-2')

const magistrImg = document.querySelector('.magistr-img img')
const bakalavrImg = document.querySelector('.bakalavr-img img')
const stepImg = document.querySelector('.step-3__img img')

const stepHoodShow = document.querySelector('.step-3__hood')
const stepTieShow = document.querySelector('.step-3__tie')
const stepBrushShow = document.querySelector('.brush__block select')

const buySizeCount = document.querySelector('.buy-size__count')
const buySizeCountCh = document.querySelector('.buy-size__count-ch')
const rentSizeCount = document.querySelector('.rent-size__count')
const rentSizeCountCh = document.querySelector('.rent-size__count-ch')

const sumOrder = document.querySelector('.step-4__sum .sum-all p') 

const logoDivElement = document.querySelector('.logo__list')
const logoModalElement = document.querySelector('.wrap')
const hoodModalElement = document.querySelector('.wrap-hood')
const tieModalElement = document.querySelector('.wrap-tie')
const brushModalElement = document.querySelector('.wrap-brush')
const closeModalElement = document.querySelector('.wrap-modal')

const step3Element = document.querySelector('.step-3')

const logoImgElement = document.querySelector('.logo__img img')
const logoImgBlockElement = document.querySelector('.logo__img')
const logoRowImgElement = document.querySelector('.modal-logo__row')
const uniElement = document.querySelector('.step-4__uni')
const logoInput = document.querySelector('.logo-input')

const step3sizeRent = document.querySelector('.rent-size')
const step3sizeBuy = document.querySelector('.buy-size')

const orderFirst = document.querySelector('.order-first')
const orderFirstName = document.querySelector('.order-first .order-name')
const orderFirstCount = document.querySelector('.order-first .order-count p')
const orderFirstPrice = document.querySelector('.order-first .order-price p')

const orderSecond = document.querySelector('.order-second')
const orderSecondName = document.querySelector('.order-second .order-name')
const orderSecondCount = document.querySelector('.order-second .order-count p')
const orderSecondPrice = document.querySelector('.order-second .order-price p')

const orderThird = document.querySelector('.order-third')
const orderThirdName = document.querySelector('.order-third .order-name')
const orderThirdCount = document.querySelector('.order-third .order-count p')
const orderThirdPrice = document.querySelector('.order-third .order-price p')

const orderForth = document.querySelector('.order-forth')
const orderForthName = document.querySelector('.order-forth .order-name')
const orderForthCount = document.querySelector('.order-forth .order-count p')
const orderForthPrice = document.querySelector('.order-forth .order-price p')

const orderFifth = document.querySelector('.order-fifth')
const orderFifthName = document.querySelector('.order-fifth .order-name')
const orderFifthCount = document.querySelector('.order-fifth .order-count p')
const orderFifthPrice = document.querySelector('.order-fifth .order-price p')

const countBuyTie = document.querySelector('.modal-tie__buy-count')
const countBuyHood = document.querySelector('.modal-hood__buy-count')
const countBuyWithBrush = document.querySelector('.modal-brush__buy-count')
const countRentTie = document.querySelector('.modal-tie__rent-count')
const countRentHood = document.querySelector('.modal-hood__rent-count')

const modalHoodBuyBlock = document.querySelector('.modal-color__hood-buy')
const modalHoodRentBlock = document.querySelector('.modal-color__hood-rent')

const modalTieBuyBlock = document.querySelector('.modal-color__tie-buy')
const modalTieRentBlock = document.querySelector('.modal-color__tie-rent')

const modalBrushBuyBlock = document.querySelector('.modal-color__brush-buy')
const modalBrushBtn = document.querySelector('.brush-colors')

const select1 = document.getElementById("hood");
const select2 = document.getElementById("tie");
const select3 = document.getElementById("brush");

nextBtn.forEach(button=>{
  button.addEventListener('click', () => {
    changeStep('next')
  })
})

prevBtn.forEach(button=>{
  button.addEventListener('click', () => {
    changeStep('prev')
  })
})

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

function handleClickToggleActive (e) {
  if (e.target.tagName === 'INPUT') {
    document.querySelectorAll('input').forEach(i => {
      i.classList.remove('active')
    })
      e.target.classList.add('active')
    }
}

function handleClickActive (e) {
  if (e.target.dataset.role == 'order1') {
    e.target.classList.add('active')

    reset ()

    stepMagistr.querySelectorAll('.active').forEach(i => {
      i.classList.remove('active')
    })
    let activeValue = header.querySelector(".active").value
    let category = () => activeValue == 'классик' ? '' : activeValue

    switch(activeValue) {
      case 'классик':
        priceBakalavr.textContent = '1450'
        stepHoodShow.setAttribute('style', 'display:none')
        stepTieShow.setAttribute('style', 'display:none')
        break;
      case 'с капюшоном':
        priceBakalavr.textContent = '1750'
        stepHoodShow.setAttribute('style', 'display:block')
        stepTieShow.setAttribute('style', 'display:none')
        break;
      case 'с галстуком':
        priceBakalavr.textContent = '1650'
        stepHoodShow.setAttribute('style', 'display:none')
        stepTieShow.setAttribute('style', 'display:block')
      break;
    }
  
    step2.querySelectorAll('.name').forEach(i => {
      i.textContent = `${e.target.name} ${category()}`
      orderFirstName.textContent = i.textContent 
      orderSecondName.textContent = i.textContent 
      orderThirdName.textContent = i.textContent 
    })

    } else if (e.target.dataset.role == 'order2') {
      e.target.classList.add('active')

      reset ()

      priceBakalavr.textContent = '1750'

      if (document.querySelector('.color-mg.active').value == 'синий') {
        stepImg.src = './image/magistr/magistr-blue.jpg'
      }

      stepHoodShow.setAttribute('style', 'display:block')
      stepTieShow.setAttribute('style', 'display:none')

      stepBakalavr.querySelectorAll('.active').forEach(i => {
        i.classList.remove('active')
      })

      step2.querySelectorAll('.name').forEach(i => {
        i.textContent = e.target.name
        orderFirstName.textContent = i.textContent 
        orderSecondName.textContent = i.textContent 
        orderThirdName.textContent = i.textContent 
      })

    }      
}

function handleClickShowColor (e) {
  if (e.target.value === 'с капюшоном' && e.target.classList.contains("active")) {
      pickColorElement.setAttribute('style', 'display:block')
      pickColorTieElement.setAttribute('style', 'display:none')
      bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-bue.png'
      stepImg.src = './image/bakalavr-hood/bakalavr-hood-bue.png'
      document.querySelector(".bakalavr .step-1__tabs-color .color").classList.add('active')
    } else if (e.target.value === 'с галстуком' && e.target.classList.contains("active")) {
      pickColorElement.setAttribute('style', 'display:none')
      pickColorTieElement.setAttribute('style', 'display:block')
      bakalavrImg.src = './image/bakalavr-tie/bakalavr-tie-blue.png'
      stepImg.src = './image/bakalavr-tie/bakalavr-tie-blue.png'
      document.querySelector(".bakalavr-tie .step-1__tabs-color .color-tie").classList.add('active')
    } else {
      bakalavrImg.src = './image/bakalavr.png'
      stepImg.src = './image/bakalavr.png'
      pickColorElement.setAttribute('style', 'display:none')
      pickColorTieElement.setAttribute('style', 'display:none')
    }
}

function handleClickActiveColor (e) {
  if (e.target.classList.contains('color')) {
    document.querySelectorAll('input.color').forEach(i => {
      i.classList.remove('active')
    })
    switch(e.target.value) {
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

    const select = document.querySelector('#hood').getElementsByTagName('option')

      for (let i = 0; i < select.length; i++) {
          if (select[i].value === e.target.value) select[i].selected = true;       
      }

      e.target.classList.add('active')

  } else if (e.target.classList.contains('color-mg')) {
      document.querySelectorAll('input.color-mg').forEach(i => {
        i.classList.remove('active')
      })
      switch(e.target.value) {
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

      const select = document.querySelector('#hood').getElementsByTagName('option');

      for (let i = 0; i < select.length; i++) {
          if (select[i].value === e.target.value) select[i].selected = true;
      }
      e.target.classList.add('active')
    } else if (e.target.classList.contains('color-tie')) {
      document.querySelectorAll('input.color-tie').forEach(i => {
        i.classList.remove('active')
      })
      e.target.classList.add('active')
      switch(e.target.value) {
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
      const select = document.querySelector('#tie').getElementsByTagName('option');

      for (let i = 0; i < select.length; i++) {
          if (select[i].value === e.target.value) select[i].selected = true;
      }
      e.target.classList.add('active')
    }
}

function selectedHood () {
  const value = select1.value;

  const item = document.querySelector('.next-btn.active')
  if (item.dataset.role == 'order1') {
    document.querySelectorAll('input.color').forEach(i => {
      i.classList.remove('active')
      if (i.value == value) {
        i.classList.add('active')
      }  
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
    })
  } else if (item.dataset.role == 'order2') {
    document.querySelectorAll('input.color-mg').forEach(i => {
      i.classList.remove('active')
      if (i.value == value) {
        i.classList.add('active')      
        }
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
    })
  }

}

function selectedTie () {
  const value = select2.value;

  const item = document.querySelector('.next-btn.active')
  if (item.dataset.role == 'order1') {
    document.querySelectorAll('input.color-tie').forEach(i => {
      i.classList.remove('active')
      if (i.value == value) {
        i.classList.add('active')
      }  
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
    })
  }
}

function reset () {
  inputSumValue.value = '0'
  countBuyTie.textContent = '0'
  countBuyHood.textContent = '0'
  orderFirstCount.textContent = '0'
  buySizeCount.textContent = '0'
  countBuyWithBrush.textContent = '0'

  sum.textContent = '0'

  buySumValue.textContent = '0'
  orderFirstPrice.textContent = '0'
  sumAll.textContent = '0'
  sumOrder.textContent = '0'

  inputRentSumValue.value = '0'
  rentSizeCount.textContent = '0'
  orderSecondCount.textContent = '0'
  countRentTie.textContent =  '0'
  countRentHood.textContent = '0'
  
  sumRent.textContent = '0'
  orderSecondPrice.textContent = '0'

  rentSumValue.textContent = '0'

  orderThirdCount.textContent = '0'
  
  sumRentCap.textContent = '0'
  orderThirdPrice.textContent = '0'
  orderForthCount.textContent = '0'
  uniElement.value = ''
  orderFifthCount.textContent = '0'
  orderForthPrice.textContent = '0'
  logoValue.textContent = '0'
  orderFifthPrice.textContent = '0'

  document.querySelectorAll('.in-num__count').forEach(i => {
    i.value = '0'
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

  logoImgBlockElement.setAttribute('style', 'background:#EFEFEF; width:140px;;')

}

function handleCountBuy (e) {
  if (e.target.classList.contains("plus")) {
    ++e.target.parentElement.querySelector("input").value;

    if (+e.target.parentElement.querySelector("input").value > 0) {
      orderFirst.setAttribute('style', 'display:flex')
      modalHoodBuyBlock.setAttribute('style', 'display:block')
      modalTieBuyBlock.setAttribute('style', 'display:block')
      modalBrushBuyBlock.setAttribute('style', 'display:block')
    }

    inputSumValue.value = e.target.parentElement.querySelector("input").value
    countBuyTie.textContent = e.target.parentElement.querySelector("input").value
    countBuyHood.textContent = e.target.parentElement.querySelector("input").value
    orderFirstCount.textContent = e.target.parentElement.querySelector("input").value
    buySizeCount.textContent = e.target.parentElement.querySelector("input").value
    countBuyWithBrush.textContent = +rentCapValue.value + +inputSumValue.value

    sum.textContent = +priceBakalavr.textContent * +e.target.parentElement.querySelector("input").value;

    buySumValue.textContent = sum.textContent
    orderFirstPrice.textContent = sum.textContent
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
    sumOrder.textContent = sumAll.textContent
    
  } else if (e.target.classList.contains("minus") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;

    if (+e.target.parentElement.querySelector("input").value == 0) {
      orderFirst.setAttribute('style', 'display:none')
      modalHoodBuyBlock.setAttribute('style', 'display:none')
      modalTieBuyBlock.setAttribute('style', 'display:none')
      modalBrushBuyBlock.setAttribute('style', 'display:none')
    }

    countBuyTie.textContent = e.target.parentElement.querySelector("input").value
    countBuyHood.textContent = e.target.parentElement.querySelector("input").value
    inputSumValue.value = e.target.parentElement.querySelector("input").value
    orderFirstCount.textContent = e.target.parentElement.querySelector("input").value
    buySizeCount.textContent = e.target.parentElement.querySelector("input").value
    countBuyWithBrush.textContent = +rentCapValue.value + +inputSumValue.value

    sum.textContent = +priceBakalavr.textContent * +e.target.parentElement.querySelector("input").value;

    buySumValue.textContent = sum.textContent 
    orderFirstPrice.textContent = sum.textContent
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
    sumOrder.textContent = sumAll.textContent
  }
}

function handleCountRent (e) {
  if (e.target.classList.contains("plus-rent")) {
    ++e.target.parentElement.querySelector("input").value
    orderSecondCount.textContent = e.target.parentElement.querySelector("input").value
    inputRentSumValue.value = +rentValue.value + +rentCapValue.value

    if (+inputRentSumValue.value > 4) {
      priceBakalavrRent.textContent = '400'
      priceBakalavrRentCap.textContent = '800'
    } 

    if (+e.target.parentElement.querySelector("input").value > 0) {
      orderSecond.setAttribute('style', 'display:flex')
      modalHoodRentBlock.setAttribute('style', 'display:block')
      modalTieRentBlock.setAttribute('style', 'display:block')
    } 

    if (+e.target.parentElement.querySelector("input").value > 0 && +inputSumValue.value == 0 && +rentCapValue.value == 0) {
      modalBrushBuyBlock.setAttribute('style', 'display:none')
      modalBrushBtn.setAttribute('style','display:none')
    } else if (+e.target.parentElement.querySelector("input").value >= 0 && +inputSumValue.value != 0 && +rentCapValue.value != 0) {
      modalBrushBuyBlock.setAttribute('style', 'display:block')
      modalBrushBtn.setAttribute('style','display:block')
    }


    rentSizeCount.textContent = inputRentSumValue.value
    countRentTie.textContent =  inputRentSumValue.value
    countRentHood.textContent = inputRentSumValue.value
  
    sumRent.textContent = +priceBakalavrRent.textContent * +e.target.parentElement.querySelector("input").value;
    orderSecondPrice.textContent = sumRent.textContent

    rentSumValue.textContent = +sumRentCap.textContent + +sumRent.textContent 
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
    sumOrder.textContent = sumAll.textContent

  } else if (e.target.classList.contains("minus-rent") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value
    orderSecondCount.textContent = e.target.parentElement.querySelector("input").value
    inputRentSumValue.value = +rentValue.value + +rentCapValue.value

    if (+inputRentSumValue.value < 5) {
      priceBakalavrRent.textContent = '500'
      priceBakalavrRentCap.textContent = '900'
    }  

    if (+e.target.parentElement.querySelector("input").value == 0) {
      orderSecond.setAttribute('style', 'display:none')
      modalHoodRentBlock.setAttribute('style', 'display:none')
      modalTieRentBlock.setAttribute('style', 'display:none')
    } 

    if (+e.target.parentElement.querySelector("input").value > 0 && +inputSumValue.value == 0 && +rentCapValue.value == 0) {
      modalBrushBuyBlock.setAttribute('style', 'display:none')
      modalBrushBtn.setAttribute('style','display:none')
    } else if (+e.target.parentElement.querySelector("input").value >= 0 && +inputSumValue.value != 0 && +rentCapValue.value != 0) {
      modalBrushBuyBlock.setAttribute('style', 'display:block')
      modalBrushBtn.setAttribute('style','display:block')
    }

    rentSizeCount.textContent = inputRentSumValue.value
    countRentTie.textContent =  inputRentSumValue.value
    countRentHood.textContent = inputRentSumValue.value

    sumRent.textContent = +priceBakalavrRent.textContent * +e.target.parentElement.querySelector("input").value;
    orderSecondPrice.textContent = sumRent.textContent

    rentSumValue.textContent = +sumRentCap.textContent + +sumRent.textContent 
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
    sumOrder.textContent = sumAll.textContent
  }
}

function handleCountRentCap (e) {
  if (e.target.classList.contains("plus-cap")) {
    ++e.target.parentElement.querySelector("input").value; 
    inputRentSumValue.value = +rentValue.value + +rentCapValue.value
    if (+inputRentSumValue.value > 4) {
      priceBakalavrRent.textContent = '400'
      priceBakalavrRentCap.textContent = '800'
    } 
    
    if (+e.target.parentElement.querySelector("input").value > 0) {
      orderThird.setAttribute('style', 'display:flex')
      modalHoodRentBlock.setAttribute('style', 'display:block')
      modalTieRentBlock.setAttribute('style', 'display:block')
      modalBrushBuyBlock.setAttribute('style', 'display:block')
    } 

    if (+e.target.parentElement.querySelector("input").value > 0 && +inputSumValue.value == 0 && +rentCapValue.value == 0) {
      modalBrushBuyBlock.setAttribute('style', 'display:none')
      modalBrushBtn.setAttribute('style','display:none')
    } else if (+e.target.parentElement.querySelector("input").value >= 0 && (+inputSumValue.value != 0 || +rentCapValue.value != 0)) {
      modalBrushBuyBlock.setAttribute('style', 'display:block')
      modalBrushBtn.setAttribute('style','display:block')
    }
    

    countBuyWithBrush.textContent = +rentCapValue.value + +inputSumValue.value
    rentSizeCount.textContent = inputRentSumValue.value

    orderThirdCount.textContent = e.target.parentElement.querySelector("input").value

    countRentHood.textContent = inputRentSumValue.value 
    
    sumRentCap.textContent = +priceBakalavrRentCap.textContent * +e.target.parentElement.querySelector("input").value;
    orderThirdPrice.textContent = sumRentCap.textContent

    rentSumValue.textContent = +sumRentCap.textContent + +sumRent.textContent 
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 

  } else if (e.target.classList.contains("minus-cap") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    inputRentSumValue.value = +rentValue.value + +rentCapValue.value

    if (+inputRentSumValue.value < 5) {
      priceBakalavrRent.textContent = '500'
      priceBakalavrRentCap.textContent = '900'
    }  

    if (+e.target.parentElement.querySelector("input").value == 0) {
      orderThird.setAttribute('style', 'display:none')
      modalHoodRentBlock.setAttribute('style', 'display:none')
      modalTieRentBlock.setAttribute('style', 'display:none')
      modalBrushBuyBlock.setAttribute('style', 'display:none')
    } 

    if (+e.target.parentElement.querySelector("input").value > 0 && +inputSumValue.value == 0 && +rentCapValue.value == 0) {
      modalBrushBuyBlock.setAttribute('style', 'display:none')
      modalBrushBtn.setAttribute('style','display:none')
    } else if (+e.target.parentElement.querySelector("input").value >= 0 && +inputSumValue.value != 0 && +rentCapValue.value != 0) {
      modalBrushBuyBlock.setAttribute('style', 'display:block')
      modalBrushBtn.setAttribute('style','display:block')
    }


    rentSizeCount.textContent = inputRentSumValue.value
    countRentHood.textContent = inputRentSumValue.value 

    orderThirdCount.textContent = e.target.parentElement.querySelector("input").value
    countBuyWithBrush.textContent = +rentCapValue.value + +inputSumValue.value

    sumRentCap.textContent = +priceBakalavrRentCap.textContent * +e.target.parentElement.querySelector("input").value;
    orderThirdPrice.textContent = sumRentCap.textContent

    rentSumValue.textContent = +sumRentCap.textContent + +sumRent.textContent 
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
  }
}

function handleToggleBrush () {
  if (+rentValue.value > 0 && (+rentCapValue.value == 0 && +inputSumValue.value == 0) ) {
    stepBrushShow.setAttribute('disabled', 'disabled')
  } else if (+rentValue.value == 0 && (+rentCapValue.value == 0 && +inputSumValue.value == 0) ) {
    stepBrushShow.setAttribute('disabled', 'disabled')
  } else {
    stepBrushShow.removeAttribute('disabled')
  }
}


function handleCountLogo (e) {
  if (e.target.classList.contains("plus-logo")) {
    ++e.target.parentElement.querySelector("input").value;

    if (+e.target.parentElement.querySelector("input").value > 0) {
      orderForth.setAttribute('style', 'display:flex')
    } 
    orderForthCount.textContent = e.target.parentElement.querySelector("input").value
    const sumLogo = +logoStickPrice.textContent * +e.target.parentElement.querySelector("input").value;
    logoValue.textContent = sumLogo + +logoPrice.textContent * document.querySelector('.fancy .in-num').value
    orderForthPrice.textContent = sumLogo
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
    sumOrder.textContent = sumAll.textContent

  } else if (e.target.classList.contains("minus-logo") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;

    if (+e.target.parentElement.querySelector("input").value == 0) {
      orderForth.setAttribute('style', 'display:none')
    } 
    orderForthCount.textContent = e.target.parentElement.querySelector("input").value
    const sumLogo = +logoStickPrice.textContent * +e.target.parentElement.querySelector("input").value;
    logoValue.textContent = sumLogo + +logoPrice.textContent * document.querySelector('.fancy .in-num').value
    orderForthPrice.textContent = sumLogo
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
    sumOrder.textContent = sumAll.textContent
  }
}

function data () {
  let inputGrand = document.querySelectorAll('.rent-count .in-num');
  let inputGrandSum = 0;
  
  for(let i = 0; i < inputGrand.length; i++){	
    inputGrandSum += +inputGrand[i].value	
  }
  rentSizeCountCh.textContent = inputGrandSum
}

function handleGetSizeRent (e) {
  if (e.target.classList.contains("plus-s") && +rentSizeCountCh.textContent < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    data ()
  } else if (e.target.classList.contains("minus-s") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    data ()
  }

  if (e.target.classList.contains("plus-m") && +rentSizeCountCh.textContent < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    data ()
  } else if (e.target.classList.contains("minus-m") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    data ()
  }

  if (e.target.classList.contains("plus-l") && +rentSizeCountCh.textContent < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    data ()
  } else if (e.target.classList.contains("minus-l") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    data ()
  }

  if (e.target.classList.contains("plus-xl") && +rentSizeCountCh.textContent < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    data ()
  } else if (e.target.classList.contains("minus-xl") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    data ()
  }
}

function dataBuy () {
  let inputGrandC = document.querySelectorAll('.buy-count__s .in-num');
  let inputGrandSumC = 0;
  
  for(let i = 0; i < inputGrandC.length; i++){	
    inputGrandSumC += +inputGrandC[i].value	
  }
  buySizeCountCh.textContent = inputGrandSumC
}

function handleGetSizeBuy (e) {
  if (e.target.classList.contains("plus__buy-s") && +buySizeCountCh.textContent < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataBuy ()
  } else if (e.target.classList.contains("minus__buy-s") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataBuy ()
  }

  if (e.target.classList.contains("plus__buy-m") && +buySizeCountCh.textContent < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataBuy ()
  } else if (e.target.classList.contains("minus__buy-m") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataBuy ()
  }

  if (e.target.classList.contains("plus__buy-l") && +buySizeCountCh.textContent < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataBuy ()
  } else if (e.target.classList.contains("minus__buy-l") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataBuy ()
  }

  if (e.target.classList.contains("plus__buy-xl") && +buySizeCountCh.textContent < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataBuy ()
  } else if (e.target.classList.contains("minus__buy-xl") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataBuy ()
  }
}

function dataColorHoodBuy () {
  let inputGrand = document.querySelectorAll('.hood-buy__count .in-num');
  let inputGrandSum = 0;
  
  for(let i = 0; i < inputGrand.length; i++){	
    inputGrandSum += +inputGrand[i].value	
  }
  return inputGrandSum
}

function handleColorBuyHood (e) {
  if (e.target.classList.contains("plus__buy-blue") && dataColorHoodBuy() < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  } else if (e.target.classList.contains("minus__buy-blue") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  }

  if (e.target.classList.contains("plus__buy-red") && dataColorHoodBuy() < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  } else if (e.target.classList.contains("minus__buy-red") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  }

  if (e.target.classList.contains("plus__buy-gold") && dataColorHoodBuy() < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  } else if (e.target.classList.contains("minus__buy-gold") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  }

  if (e.target.classList.contains("plus__buy-silver") && dataColorHoodBuy() < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  } else if (e.target.classList.contains("minus__buy-silver") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  }

  if (e.target.classList.contains("plus__buy-purple") && dataColorHoodBuy() < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  } else if (e.target.classList.contains("minus__buy-purple") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  }

  if (e.target.classList.contains("plus__buy-light") && dataColorHoodBuy() < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  } else if (e.target.classList.contains("minus__buy-light") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodBuy ()
  }

}

function dataColorHoodRent () {
  let inputGrand = document.querySelectorAll('.hood-rent__count .in-num');
  let inputGrandSum = 0;
  
  for(let i = 0; i < inputGrand.length; i++){	
    inputGrandSum += +inputGrand[i].value	
  }
  return inputGrandSum
}

function handleColorRentHood (e) {
  if (e.target.classList.contains("plus__rent-blue") && dataColorHoodRent() < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  } else if (e.target.classList.contains("minus__rent-blue") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  }

  if (e.target.classList.contains("plus__rent-red") && dataColorHoodRent() < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  } else if (e.target.classList.contains("minus__rent-red") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  }

  if (e.target.classList.contains("plus__rent-gold") && dataColorHoodRent() < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  } else if (e.target.classList.contains("minus__rent-gold") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  }

  if (e.target.classList.contains("plus__rent-silver") && dataColorHoodRent() < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  } else if (e.target.classList.contains("minus__rent-silver") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  }

  if (e.target.classList.contains("plus__rent-purple") && dataColorHoodRent() < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  } else if (e.target.classList.contains("minus__rent-purple") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  }

  if (e.target.classList.contains("plus__rent-light") && dataColorHoodRent() < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  } else if (e.target.classList.contains("minus__rent-light") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorHoodRent ()
  }
}

function dataColorTieBuy () {
  let inputGrand = document.querySelectorAll('.tie-buy__count .in-num');
  let inputGrandSum = 0;
  
  for(let i = 0; i < inputGrand.length; i++){	
    inputGrandSum += +inputGrand[i].value	
  }
  return inputGrandSum
}

function handleColorBuyTie (e) {
  if (e.target.classList.contains("plus-tie__buy-blue") && dataColorTieBuy() < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorTieBuy ()
  } else if (e.target.classList.contains("minus-tie__buy-blue") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorTieBuy ()
  }

  if (e.target.classList.contains("plus-tie__buy-red") && dataColorTieBuy() < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorTieBuy ()
  } else if (e.target.classList.contains("minus-tie__buy-red") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorTieBuy ()
  }

  if (e.target.classList.contains("plus-tie__buy-gold") && dataColorTieBuy() < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorTieBuy ()
  } else if (e.target.classList.contains("minus-tie__buy-gold") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorTieBuy ()
  }

  if (e.target.classList.contains("plus-tie__buy-white") && dataColorTieBuy() < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorTieBuy ()
  } else if (e.target.classList.contains("minus-tie__buy-white") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorTieBuy ()
  }

  if (e.target.classList.contains("plus-tie__buy-green") && dataColorTieBuy() < +buySizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorTieBuy ()
  } else if (e.target.classList.contains("minus-tie__buy-green") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorTieBuy ()
  }
}

function dataColorTieRent () {
  let inputGrand = document.querySelectorAll('.tie-rent__count .in-num');
  let inputGrandSum = 0;
  
  for(let i = 0; i < inputGrand.length; i++){	
    inputGrandSum += +inputGrand[i].value	
  }
  return inputGrandSum
}

function handleColorRentTie (e) {
  if (e.target.classList.contains("plus-tie__rent-blue") && dataColorTieRent() < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorTieRent ()
  } else if (e.target.classList.contains("minus-tie__rent-blue") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorTieRent ()
  }
  if (e.target.classList.contains("plus-tie__rent-red") && dataColorTieRent() < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorTieRent ()
  } else if (e.target.classList.contains("minus-tie__rent-red") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorTieRent ()
  }

  if (e.target.classList.contains("plus-tie__rent-gold") && dataColorTieRent() < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorTieRent ()
  } else if (e.target.classList.contains("minus-tie__rent-gold") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorTieRent ()
  }

  if (e.target.classList.contains("plus-tie__rent-white") && dataColorTieRent() < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorTieRent ()
  } else if (e.target.classList.contains("minus-tie__rent-white") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorTieRent ()
  }

  if (e.target.classList.contains("plus-tie__rent-green") && dataColorTieRent() < +rentSizeCount.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorTieRent ()
  } else if (e.target.classList.contains("minus-tie__rent-green") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorTieRent ()
  }
}

function dataColorBrushBuy () {
  let inputGrand = document.querySelectorAll('.brush-buy__count .in-num');
  let inputGrandSum = 0;
  
  for(let i = 0; i < inputGrand.length; i++){	
    inputGrandSum += +inputGrand[i].value	
  }
  return inputGrandSum
}

function handleColorBrushBuy (e) {
  if (e.target.classList.contains("plus-brush__buy-blue") && dataColorBrushBuy() < +buySizeCount.textContent + +rentCapValue.value) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  } else if (e.target.classList.contains("minus-brush__buy-blue") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  }

  if (e.target.classList.contains("plus-brush__buy-red") && dataColorBrushBuy() < +buySizeCount.textContent + +rentCapValue.value) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  } else if (e.target.classList.contains("minus-brush__buy-red") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  }

  if (e.target.classList.contains("plus-brush__buy-gold") && dataColorBrushBuy() < +buySizeCount.textContent + +rentCapValue.value) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  } else if (e.target.classList.contains("minus-brush__buy-gold") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  }

  if (e.target.classList.contains("plus-brush__buy-silver") && dataColorBrushBuy() < +buySizeCount.textContent + +rentCapValue.value) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  } else if (e.target.classList.contains("minus-brush__buy-silver") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  }

  if (e.target.classList.contains("plus-brush__buy-purple") && dataColorBrushBuy() < +buySizeCount.textContent + +rentCapValue.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  } else if (e.target.classList.contains("minus-brush__buy-purple") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  }

  if (e.target.classList.contains("plus-brush__buy-light") && dataColorBrushBuy() < +buySizeCount.textContent + +rentCapValue.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  } else if (e.target.classList.contains("minus-brush__buy-light") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  }

  if (e.target.classList.contains("plus-brush__buy-black") && dataColorBrushBuy() < +buySizeCount.textContent + +rentCapValue.textContent) {
    ++e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  } else if (e.target.classList.contains("minus-brush__buy-black") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    dataColorBrushBuy ()
  }

}

function handleCountLogoFancy (e) {
  if (e.target.classList.contains("plus-fancy")) {
    ++e.target.parentElement.querySelector("input").value;

    if (+e.target.parentElement.querySelector("input").value > 0) {
      orderFifth.setAttribute('style', 'display:flex')
    } 
    orderFifthCount.textContent = e.target.parentElement.querySelector("input").value
    const sumLogoFancy = +logoPrice.textContent * +e.target.parentElement.querySelector("input").value;
    logoValue.textContent = +sumLogoFancy + +logoStickPrice.textContent * +document.querySelector('.stick .in-num').value
    orderFifthPrice.textContent = sumLogoFancy
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
    sumOrder.textContent = sumAll.textContent
  } else if (e.target.classList.contains("minus-fancy") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;

    if (+e.target.parentElement.querySelector("input").value == 0) {
      orderFifth.setAttribute('style', 'display:none')
    } 
    orderFifthCount.textContent = e.target.parentElement.querySelector("input").value
    const sumLogoFancy = +logoPrice.textContent * +e.target.parentElement.querySelector("input").value;
    logoValue.textContent = +sumLogoFancy + +logoStickPrice.textContent * +document.querySelector('.stick .in-num').value
    orderFifthPrice.textContent = sumLogoFancy
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
    sumOrder.textContent = sumAll.textContent
  }
} 

function validate() {
  const remember = document.getElementById("address");
  if (remember.checked) {
    document.querySelector('.return').setAttribute('style', 'display:flex')
  } else {
    document.querySelector('.return').setAttribute('style', 'display:none')
  }
}

function showRent() {
  if (+document.querySelector('.in-num__rent').value > 0 || +document.querySelector('.in-num__cap').value > 0) {
    document.querySelector('.add-address').setAttribute('style', 'display:flex')
    document.querySelector('.rent-size').setAttribute('style', 'display:block')
  } else {
    document.querySelector('.add-address').setAttribute('style', 'display:none')
    document.querySelector('.rent-size').setAttribute('style', 'display:none')
  }

  if (+document.querySelector('.in-num__count').value > 0) {
    document.querySelector('.buy-size').setAttribute('style', 'display:block')
  } else {
    document.querySelector('.buy-size').setAttribute('style', 'display:none')
  }
}

function handleChooseLogo (e) {
  if (e.target.classList.contains('logo__list')) {
    logoModalElement.setAttribute('style', 'display:flex')
  } else if (e.target.classList.contains('modal-logo__close')) {
    logoModalElement.setAttribute('style', 'display:none')
  } else if (e.target.classList.contains('modal-logo__img')) {
    logoRowImgElement.querySelectorAll('.show').forEach(i => {
      i.classList.remove('show')
    })

    e.target.parentElement.classList.add('show')
    uniElement.value = e.target.parentElement.querySelector('.modal-title__logo').textContent
    logoImgElement.src = e.target.src
    logoImgBlockElement.setAttribute('style', 'background:transparent; width:auto;')
    logoModalElement.setAttribute('style', 'display:none')
  }
}

function handleShowBrushChoice (e) {
  if (e.target.classList.contains('brush-colors') && +buySizeCount.textContent > 0) {
    brushModalElement.setAttribute('style', 'display:flex')
  } else if  (e.target.classList.contains('brush-colors') && +rentSizeCount.textContent > 0) {
    brushModalElement.setAttribute('style', 'display:flex')
  }  else if  (e.target.classList.contains('modal-logo__close')) {
    brushModalElement.setAttribute('style', 'display:none')
  } 
}

function handleShowHoodChoice (e) {
  if (e.target.classList.contains('hood-colors')) {
    hoodModalElement.setAttribute('style', 'display:flex')
  } else if (e.target.classList.contains('modal-logo__close')) {
    hoodModalElement.setAttribute('style', 'display:none')
  } 
}

function handleShowTieChoice (e) {
  if (e.target.classList.contains('tie-colors')) {
    tieModalElement.setAttribute('style', 'display:flex')
  } else if (e.target.classList.contains('modal-logo__close')) {
    tieModalElement.setAttribute('style', 'display:none')
  } 
}

const brush = () => {
  let arrayBrush = []
  let sum = 0
  let array = formElement.querySelectorAll('.brush-buy__count .in-num')
  for (let i = 0; i < array.length; i++) {
    sum += array[i].value
  }
  if (sum == 0) {
    arrayBrush.push({name: 'Цвет кисточки', value: select3.value})
  }
  return arrayBrush
}

const tie = () => {
  let arrayBrush = []
  let sum = 0
  let sum1 = 0
  let array = formElement.querySelectorAll('.tie-buy__count .in-num')
  let array1 = formElement.querySelectorAll('.tie-rent__count .in-num')
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
  }
  return arrayBrush
}

const hood = () => {
  let arrayBrush = []
  let sum = 0
  let sum1 = 0
  let array = formElement.querySelectorAll('.hood-buy__count .in-num')
  let array1 = formElement.querySelectorAll('.hood-rent__count .in-num')
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
  }
  return arrayBrush
}

const getOrderDetails = () => {
  let data = []
  if (+orderFirstPrice.textContent) {
    data.push({name: 'Комплект (покупка)', value: orderFirstName.textContent})
    data.push({name: 'Cтоимость (покупка)', value: orderFirstPrice.textContent})
  }
  if (+orderSecondPrice.textContent) {
    data.push({name: 'Комплект (аренда)', value: orderSecondName.textContent})
    data.push({name: 'Стоимость (аренда)', value: orderSecondPrice.textContent})
  }
  if (+orderThirdPrice.textContent) {
    data.push({name: 'Комплект (аренда с покупкой шапки)', value: orderThirdName.textContent})
    data.push({name: 'Стоимость (аренда с покупкой шапки)', value: orderThirdPrice.textContent})
  }
  if (+orderForthPrice.textContent) {
    data.push({name: 'Логотип', value: orderForthName.textContent})
    data.push({name: 'Cтоимость (наклейка)', value: orderForthPrice.textContent})
  }
  if (+orderFifthPrice.textContent) {
    data.push({name: 'Логотип', value: orderFifthName.textContent})
    data.push({name: 'Стоимость (вышивка)', value: orderFifthPrice.textContent})
  }
  return data
}

validate()

function handleSubmitForm (e) {
  e.preventDefault();
  const data = []
  data.push(...getOrderDetails(), ...hood(), ...tie(), ...brush())

  formElement.querySelectorAll('.in-num').forEach(i => {
    const {name, value} = i;
    data.push({name, value})
  })
  if (formElement.querySelector('.logo__img-ch').src && !logoInput.value) {
    formElement.querySelectorAll('.logo__img-ch').forEach(i => {
      const {name, src} = i;
      data.push({name, src})
    })
  } else {
    formElement.querySelectorAll('.logo-input').forEach(i => {
      const {name, value} = i;
      data.push({name, value})
    })
  }

  formElement.querySelectorAll('.text-input').forEach(i => {
    const {name, value} = i;
      data.push({name, value})
  })
  closeModalElement.setAttribute('style', 'display: flex')
  data.push({name: 'Общая сумма заказа', value: sumOrder.textContent})

  // Convert the array of objects to a single object using reduce()
  const formData = data.reduce((obj, item) => {
    obj[item.name] = item.value;
    return obj;
  }, {});

  // Send the data to the specified address using fetch()
  fetch('https://hook.eu1.make.com/ie7i66afp9ocx16qwm3dgj6i4mvix7eh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    // Handle the response from the server
    console.log('Form data sent successfully:', response);
    // Reset the form or perform any other necessary actions
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error sending form data:', error);
  });
}


header.addEventListener('click', handleClickToggleActive)
header.addEventListener('click', handleClickShowColor)
bodyStep1.addEventListener('click', handleClickActive)
colorTabs.addEventListener('click', handleClickActiveColor)
colorTabsMg.addEventListener('click', handleClickActiveColor)
colorTieTabs.addEventListener('click', handleClickActiveColor)

step2.addEventListener('click', handleChooseLogo)
step3Element.addEventListener('click', handleShowBrushChoice)
step3Element.addEventListener('click', handleShowHoodChoice)
step3Element.addEventListener('click', handleShowTieChoice)

step3Element.addEventListener('click', handleColorBuyHood)
step3Element.addEventListener('click', handleColorRentHood)
step3Element.addEventListener('click', handleColorBuyTie)
step3Element.addEventListener('click', handleColorRentTie)
step3Element.addEventListener('click', handleColorBrushBuy)

formElement.addEventListener('click', handleCountBuy)
formElement.addEventListener('click', handleCountRent)
formElement.addEventListener('click', handleCountRentCap)
formElement.addEventListener('click', handleCountLogoFancy)
formElement.addEventListener('click', handleCountLogo)
formElement.addEventListener('click', showRent)
formElement.addEventListener('click', handleToggleBrush)

formElement.addEventListener('submit', handleSubmitForm)

step3sizeRent.addEventListener('click', handleGetSizeRent)
step3sizeBuy.addEventListener('click', handleGetSizeBuy)

select1.addEventListener('click', selectedHood)
select2.addEventListener('click', selectedTie)
