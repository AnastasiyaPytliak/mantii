import { stepMagistr, headerBtnElement, price, stepHoodShow, stepTieShow, stepImg, stepBakalavr, pickColorElement, hoodModalElement,
  pickColorTieElement, bakalavrImg, logoModalElement, logoRowImgElement, uniElement, logoImgElement, logoImgBlockElement,
  tieModalElement, brushModalElement, buySizeCount, select1, select2, sumOrder, rentCapValue, labelPickUp, inputPickUp,
  inputAddress, formElement, nextBtn, prevBtn
} from './variables.js'
import { renderColorElements, render } from './render.js'
import { getDataFunctions, increaseValue, reset, changeStep, getDataFromLocalStorage, switchMagistrHoodImg, switchBakalavrTieImg, 
  switchBakalavrHoodImg, changeDataFromLocalStorage, brush, tie, hood, getOrderDetails, phone, date } from './functions.js'
import { validateForm } from './validation.js'

// ------Transition to Next Step
nextBtn.forEach(button=>{
  button.addEventListener('click', () => {
    changeStep('next')
    document.documentElement.scrollTop = 0;
  })
})

// ------Transition to Previous Step
prevBtn.forEach(button=>{
  button.addEventListener('click', () => {
    changeStep('prev')
    document.documentElement.scrollTop = 0;
  })
})

// ------Change Input value 
function handleChangeInputValue (e) {
  let elem = e.target.parentElement
  if (e.target.dataset.change == '-1' && +elem.querySelector("input").value > 0) {
    --elem.querySelector("input").value
    getDataFunctions(e)
  } else if (e.target.dataset.change == '+1') { 
    increaseValue(e)
    getDataFunctions(e)
  }
}

// ------Toggle Active for Input
function handleClickToggleActive (e) {
  if (e.target.tagName === 'INPUT') {
    document.querySelectorAll('input').forEach(i => {
      i.classList.remove('active')
    })
      e.target.classList.add('active')
    }
}

// ------Choosing Complects
function handleClickActive (e) {
  // Chose Bakalavr Complect
  if (e.target.dataset.role == 'order1') {
    e.target.classList.add('active')

    reset ()
    stepMagistr.querySelectorAll('.active').forEach(i => {
      i.classList.remove('active')
    })
    let activeValue = headerBtnElement.querySelector(".active").value

    switch(activeValue) {
      case 'классик':
        document.querySelectorAll('.buy-name.name').forEach(i => {
          i.textContent = 'Комплект Бакалавра'
        })
        price.textContent = '1450'
        stepHoodShow.setAttribute('style', 'display:none')
        stepTieShow.setAttribute('style', 'display:none')
        break;
      case 'с капюшоном':
        document.querySelectorAll('.buy-name.name').forEach(i => {
          i.textContent = 'Комплект Бакалавра с капюшоном'
        })
        price.textContent = '1750'
        stepHoodShow.setAttribute('style', 'display:block')
        stepTieShow.setAttribute('style', 'display:none')
        break;
      case 'с галстуком':
        document.querySelectorAll('.buy-name.name').forEach(i => {
          i.textContent = 'Комплект Бакалавра с галстуком'
        })
        price.textContent = '1650'
        stepHoodShow.setAttribute('style', 'display:none')
        stepTieShow.setAttribute('style', 'display:block')
      break;
    }

    // Choose magistr Complect
    } else if (e.target.dataset.role == 'order2') {
      e.target.classList.add('active')
      reset ()
      document.querySelectorAll('.buy-name.name').forEach(i => {
        i.textContent = 'Комплект Магистра'
      })
      price.textContent = '1750'
      let activenon = document.querySelector('.blue')
      let activeBlue = document.querySelector('.active.blue')
      let active = document.querySelector('.color-mg.active')
      if (!active) { 
        activenon.classList.add('active')
        stepImg.src = './image/magistr/magistr-blue.jpg'
      }
      if (activeBlue) {
        stepImg.src = './image/magistr/magistr-blue.jpg'
      }

      stepHoodShow.setAttribute('style', 'display:block')
      stepTieShow.setAttribute('style', 'display:none')

      stepBakalavr.querySelectorAll('.active').forEach(i => {
        i.classList.remove('active')
      })
    }      
}

// ------Choosing different types of Bakalavr Complects
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

    document.querySelectorAll('.color').forEach(i => {
      i.classList.remove('active')
    })
    switchBakalavrHoodImg(e.target.value)

    const select = document.querySelectorAll('#hood option')
    for (let i = 0; i < select.length; i++) {
        if (select[i].value === e.target.value) select[i].selected = true;       
    }
    e.target.classList.add('active')

  } else if (e.target.classList.contains('color-mg')) {
      
    document.querySelectorAll('.color-mg').forEach(i => {
        i.classList.remove('active')
      })
      switchMagistrHoodImg(e.target.value)

      const select = document.querySelectorAll('#hood option')
      for (let i = 0; i < select.length; i++) {
          if (select[i].value === e.target.value) select[i].selected = true;
      }
      e.target.classList.add('active')

    } else if (e.target.classList.contains('color-tie')) {
      
      document.querySelectorAll('.color-tie').forEach(i => {
        i.classList.remove('active')
      })
      switchBakalavrTieImg(e.target.value)

      const select = document.querySelectorAll('#tie option');
      for (let i = 0; i < select.length; i++) {
          if (select[i].value === e.target.value) select[i].selected = true;
      }
      e.target.classList.add('active')
    }
}

// --------Show Modal with list of Logo and chose one of them
function handleChooseLogo (e) {
  if (e.target.classList.contains('logo__list')) {
    logoModalElement.setAttribute('style', 'display:flex')
    render ()
  } else if (e.target.classList.contains('modal-logo__close')) {
    logoModalElement.setAttribute('style', 'display:none')
  } else if (e.target.classList.contains('modal-logo__img')) {
    logoRowImgElement.querySelectorAll('.show').forEach(i => {
      i.classList.remove('show')
    })

    e.target.parentElement.classList.add('show')
    uniElement.value = e.target.parentElement.querySelector('.modal-logo__item-title').textContent
    logoImgElement.src = e.target.src
    logoImgBlockElement.setAttribute('style', 'background:transparent; width:auto;')
    logoModalElement.setAttribute('style', 'display:none')
  }
}

// --------Show Modal with Hood Color Block
function handleShowHoodChoice (e) {
  if (e.target.classList.contains('hood-colors')) {
    hoodModalElement.setAttribute('style', 'display:flex')
    renderColorElements()
    getDataFromLocalStorage() 
  } else if (e.target.classList.contains('modal-logo__close')) {
    hoodModalElement.setAttribute('style', 'display:none')
    changeDataFromLocalStorage()
  } 
}

// --------Show Modal with Tie Color Block
function handleShowTieChoice (e) {
  if (e.target.classList.contains('tie-colors')) {
    tieModalElement.setAttribute('style', 'display:flex')
    renderColorElements()
    getDataFromLocalStorage() 
  } else if (e.target.classList.contains('modal-logo__close')) {
    tieModalElement.setAttribute('style', 'display:none')
    changeDataFromLocalStorage()
  } 
}

// --------Show Modal with Brush Color Block
function handleShowBrushChoice (e) {
  if (e.target.classList.contains('brush-colors') && +buySizeCount.textContent > 0) {
    brushModalElement.setAttribute('style', 'display:flex')
    renderColorElements()
    getDataFromLocalStorage() 
  } else if (e.target.classList.contains('brush-colors') && +rentCapValue.value > 0) {
    brushModalElement.setAttribute('style', 'display:flex')
    renderColorElements()
    getDataFromLocalStorage() 
  } else if (e.target.classList.contains('modal-logo__close')) {
    brushModalElement.setAttribute('style', 'display:none')
    changeDataFromLocalStorage()
  }
}

// --------Change Img if User chose Complect with Hood
function handleSelecteHood () {
  const value = select1.value;

  const item = document.querySelector('.next-btn.active')
  if (item.dataset.role == 'order1') {
    document.querySelectorAll('.color').forEach(i => {
      i.classList.remove('active')
      if (i.value == value) {
        i.classList.add('active')
      }  
      switchBakalavrHoodImg (value)
    })
  } else if (item.dataset.role == 'order2') {
    document.querySelectorAll('.color-mg').forEach(i => {
      i.classList.remove('active')
      if (i.value == value) {
        i.classList.add('active')      
      }
      switchMagistrHoodImg (value)
    })
  }
}

// --------Change Img if User chose Complect with Tie
function handleSelecteTie () {
  const value = select2.value;

  const item = document.querySelector('.next-btn.active')
  if (item.dataset.role == 'order1') {
    document.querySelectorAll('input.color-tie').forEach(i => {
      i.classList.remove('active')
      if (i.value == value) {
        i.classList.add('active')
      }  
      switchBakalavrTieImg (value)
    })
  }
}

// --------Show Block with different Address for return Complects
function handleCheckLabelAddress () {
  if (inputAddress.checked) {
    document.querySelector('.return').setAttribute('style', 'display:flex')
  } else {
    document.querySelector('.return').setAttribute('style', 'display:none')
  }
}

// --------Change input value if User chose pick up complects by himself
function handleCheckLabelPickUp () {
  if (!inputPickUp.checked) {
    inputPickUp.setAttribute("checked", 'checked');
    labelPickUp.classList.add('label-pol')
    document.querySelector('.step-4__delivery').value = 'метро Раменки 4й выход. Мичуринский 36. C 19.00 до 23.00'
  } else {
    inputPickUp.setAttribute("checked", ' ');
    labelPickUp.classList.remove('label-pol')
    document.querySelector('.step-4__delivery').value = ''
  }
}

// --------Change style input if fields don't fill out
function handleChangeBorder (e) {
  if (e.target.classList.contains('field') && e.target.previousElementSibling.classList.contains('error')){
    let isFocused = (document.activeElement === e.target);
    if (isFocused) {
      e.target.setAttribute('style', 'border:1px solid #F5F5F5')
      e.target.previousElementSibling.setAttribute('style', 'display:none')
    } else {
      e.target.setAttribute('style', 'border:1px solid #f00')
      e.target.previousElementSibling.setAttribute('style', 'display:block')
    }
  }
}

// --------Sumbit Form
function handleSubmitForm (e) {
  e.preventDefault();
  const data = []
  data.push(...getOrderDetails(), ...hood(), ...tie(), ...brush(), ...date(), ...phone())

  formElement.querySelectorAll('.logo__img-ch').forEach(i => {
    const {name, src} = i;
    if (!document.querySelector('.modal-logo__item.show')) {
      data.push({name, value: ''})
    } else {
      data.push({name, value: src})
    }  
  })
  formElement.querySelectorAll('.text-input').forEach(i => {
    const {name, value} = i;
      data.push({name, value})
  })
  formElement.querySelectorAll('.in-num').forEach(i => {
    const {name, value} = i;
    data.push({name, value})
  })
  data.push({name: 'Общая сумма заказа', value: sumOrder.textContent})

  // Convert the array of objects to a single object using reduce()
  const formData = data.reduce((obj, item) => {
    obj[item.name] = item.value;
    return obj;
  }, {});

  if (!validateForm()) {
    console.log(formData);
  }
  // Send the data to the specified address using fetch()
  // fetch('https://hook.eu1.make.com/ie7i66afp9ocx16qwm3dgj6i4mvix7eh', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(formData)
  // })
  // .then(response => {
  //   console.log('Form data sent successfully:', response);
  // })
  // .catch(error => {
  //   console.error('Error sending form data:', error);
  // });
}

export { handleChangeInputValue, handleClickToggleActive, handleClickActive, handleClickShowColor, handleClickActiveColor, handleChooseLogo,
  handleShowHoodChoice, handleShowTieChoice, handleShowBrushChoice, handleSelecteHood, handleSelecteTie, handleCheckLabelAddress,
  handleCheckLabelPickUp, handleSubmitForm, handleChangeBorder }