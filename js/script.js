const header = document.querySelector('.step-1__btn');
const bodyStep1 = document.querySelector('.step__group-first');
const pickColorElement = document.querySelector('.bakalavr');
const pickColorTieElement = document.querySelector('.bakalavr-tie');
const formElement = document.querySelector('form');
const colors = document.querySelectorAll('.color');
const colorsMg = document.querySelectorAll('.color-mg');
const minus = document.querySelector('.minus');
const minusRent = document.querySelector('.minus-rent');
const minusRentCap = document.querySelector('.minus-cap');
const plus = document.querySelector('.plus');
const plusRent = document.querySelector('.plus-rent');
const plusRentCap = document.querySelector('.plus-cap');
// const num = document.querySelector('.in-num');
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
const sumAll = document.querySelector('.step__all-summery .buy-sum__count p');
const tabs = document.querySelector('.step-1__tabs');
const colorTabs = document.querySelector('.step-1__tabs.bakalavr')
const colorTieTabs = document.querySelector('.step-1__tabs.bakalavr-tie')
const colorTabsMg = document.querySelector('.step-1__tabs.magistr')
const stepBakalavr = document.querySelector('.bakalavr-step')
const stepMagistr = document.querySelector('.magistr-step')
const orderName = document.querySelector('.buy-name')
const step2 = document.querySelector('.step-2')
const step1AtiveBakalavr = document.querySelector('.step-1__btn .btn.active')
const magistrImg = document.querySelector('.magistr-img img')
const bakalavrImg = document.querySelector('.bakalavr-img img')
const stepImg = document.querySelector('.step-3__img img')
const stepHoodShow = document.querySelector('.step-3__hood')
const stepBrushShow = document.querySelector('.brush__block select')
const buySizeCount = document.querySelector('.buy-size__count')
const rentSizeCount = document.querySelector('.rent-size__count')

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

    stepMagistr.querySelectorAll('.active').forEach(i => {
      i.classList.remove('active')
    })
    let activeValue = header.querySelector(".active").value
    let category = () => activeValue == 'просто' ? '' : activeValue

    switch(activeValue) {
      case 'просто':
        priceBakalavr.textContent = '1450'
        stepHoodShow.setAttribute('style', 'display:none')
        break;
      case 'с капюшоном':
        priceBakalavr.textContent = '1750'
        stepHoodShow.setAttribute('style', 'display:block')
        break;
      case 'с галстуком':
        priceBakalavr.textContent = '1650'
        stepHoodShow.setAttribute('style', 'display:none')
      break;

    }
  
    step2.querySelectorAll('.name').forEach(i => {
      i.textContent = `${e.target.name} ${category()}`
    })

    } else if (e.target.dataset.role == 'order2') {
      e.target.classList.add('active')

      priceBakalavr.textContent = '1750'
      stepHoodShow.setAttribute('style', 'display:block')

      stepBakalavr.querySelectorAll('.active').forEach(i => {
        i.classList.remove('active')
      })

      step2.querySelectorAll('.name').forEach(i => {
        i.textContent = e.target.name
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
        console.log('dfd');
        break;
      case 'золотой':
        bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-gold.jpg'
        stepImg.src = './image/bakalavr-hood/bakalavr-hood-gold.jpg'
        break;
      case 'серебрянный':
        bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-silver.jpg'
        stepImg.src = './image/bakalavr-hood/bakalavr-hood-silver.jpg'
        break;
      case 'фиолетовый':
        bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-purple.jpg'
        stepImg.src.src = './image/bakalavr-hood/bakalavr-hood-purple.jpg'
        break;
      case 'голубой':
        bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-light-blue.jpg'
        stepImg.src.src = './image/bakalavr-hood/bakalavr-hood-light-blue.jpg'
        break;
      default:
        bakalavrImg.src = './image/bakalavr-hood/bakalavr-hood-bue.png'
        stepImg.src.src = './image/bakalavr-hood/bakalavr-hood-bue.png'
    }
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
        case 'серебрянный':
          magistrImg.src = './image/magistr/magistr-silver.jpg'
          stepImg.src = './image/magistr/magistr-silver.jpg'
          break;
        case 'фиолетовый':
          magistrImg.src = './image/magistr/magistr-purple.jpg'
          stepImg.src = './image/magistr/magistr-purple.jpg'
          break;
        case 'голубой':
          magistrImg.src = './image/magistr/magistr-light-blue.jpg'
          stepImg.src = './image/magistr/magistr-light-blue.jpg'
          break;
        default:
          magistrImg.src = './image/magistr/magistr-blue.jpg'
          stepImg.src = './image/magistr/magistr-blue.jpg'
      }
    } else if (e.target.classList.contains('color-tie')) {
      document.querySelectorAll('input.color-tie').forEach(i => {
        i.classList.remove('active')
      })
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
    }
  e.target.classList.add('active')
}

function handleSubmitForm (e) {
  e.preventDefault();
  const data = []
  formElement.querySelectorAll('.active').forEach(i => {
    const {name, value} = i;
    data.push({name, value})
  })
  formElement.querySelectorAll('.in-num').forEach(i => {
    const {name, value} = i;
    data.push({name, value})
  })
  console.log(data);
}

function handleCountBuy (e) {
  if (e.target.classList.contains("plus")) {
    ++e.target.parentElement.querySelector("input").value;
    inputSumValue.value = e.target.parentElement.querySelector("input").value
    buySizeCount.textContent = e.target.parentElement.querySelector("input").value
    sum.textContent = +priceBakalavr.textContent * +e.target.parentElement.querySelector("input").value;
    buySumValue.textContent = sum.textContent
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
  } else if (e.target.classList.contains("minus") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    buySizeCount.textContent = e.target.parentElement.querySelector("input").value
    inputSumValue.value = e.target.parentElement.querySelector("input").value
    sum.textContent = +priceBakalavr.textContent * +e.target.parentElement.querySelector("input").value;
    buySumValue.textContent = sum.textContent 
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
  }
}

function handleCountRent (e) {
  if (e.target.classList.contains("plus-rent")) {
    ++e.target.parentElement.querySelector("input").value;
    if (+e.target.parentElement.querySelector("input").value > 4) {
      priceBakalavrRent.textContent = '400'
    } 
    inputRentSumValue.value = +rentValue.value + +rentCapValue.value
    rentSizeCount.textContent = inputRentSumValue.value
    sumRent.textContent = +priceBakalavrRent.textContent * +e.target.parentElement.querySelector("input").value;
    rentSumValue.textContent = +sumRentCap.textContent + +sumRent.textContent 
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
  } else if (e.target.classList.contains("minus-rent") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    if (+e.target.parentElement.querySelector("input").value < 5) {
      priceBakalavrRent.textContent = '500'
    }  
    inputRentSumValue.value = +rentValue.value + +rentCapValue.value
    rentSizeCount.textContent = inputRentSumValue.value
    sumRent.textContent = +priceBakalavrRent.textContent * +e.target.parentElement.querySelector("input").value;
    rentSumValue.textContent = +sumRentCap.textContent + +sumRent.textContent 
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
  }
}

function handleCountRentCap (e) {
  if (e.target.classList.contains("plus-cap")) {
    ++e.target.parentElement.querySelector("input").value; 
    inputRentSumValue.value = +rentValue.value + +rentCapValue.value
    rentSizeCount.textContent = inputRentSumValue.value
    sumRentCap.textContent = +priceBakalavrRentCap.textContent * +e.target.parentElement.querySelector("input").value;
    rentSumValue.textContent = +sumRentCap.textContent + +sumRent.textContent 
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
  } else if (e.target.classList.contains("minus-cap") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    inputRentSumValue.value = +rentValue.value + +rentCapValue.value
    rentSizeCount.textContent = inputRentSumValue.value
    sumRentCap.textContent = +priceBakalavrRentCap.textContent * +e.target.parentElement.querySelector("input").value;
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
  } else if (e.target.classList.contains("minus-logo") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
  }
}

function handleCountLogoFancy (e) {
  if (e.target.classList.contains("plus-fancy")) {
    ++e.target.parentElement.querySelector("input").value;
    logoValue.textContent = +logoPrice.textContent * +e.target.parentElement.querySelector("input").value;
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
  } else if (e.target.classList.contains("minus-fancy") && +e.target.parentElement.querySelector("input").value > 0) {
    --e.target.parentElement.querySelector("input").value;
    logoValue.textContent = +logoPrice.textContent * +e.target.parentElement.querySelector("input").value;
    sumAll.textContent = +buySumValue.textContent + +rentSumValue.textContent + +logoValue.textContent 
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
validate()

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


// const checkbox = document.getElementById("politics");
// const btn_submit = document.querySelector(".form__submit");

// checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//         btn_submit.removeAttribute("disabled");
//     } else {
//         btn_submit.setAttribute("disabled", true);
//     }
// });

colorTabs.addEventListener('click', handleClickActiveColor)
colorTabsMg.addEventListener('click', handleClickActiveColor)
colorTieTabs.addEventListener('click', handleClickActiveColor)
header.addEventListener('click', handleClickToggleActive)
bodyStep1.addEventListener('click', handleClickActive)
header.addEventListener('click', handleClickShowColor)
formElement.addEventListener('submit', handleSubmitForm)
formElement.addEventListener('click', handleCountBuy)
formElement.addEventListener('click', handleCountRent)
formElement.addEventListener('click', handleCountRentCap)
formElement.addEventListener('click', handleCountLogoFancy)
formElement.addEventListener('click', handleCountLogo)
minus.addEventListener('click', handleSubmitForm)

formElement.addEventListener('click', showRent)
formElement.addEventListener('click', handleToggleBrush)

// bodyStep1.addEventListener('click', handleChangeSrcMagistr)


