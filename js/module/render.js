import {   
  modalLogoElement,
  modalHoodBuyElement,
  modalHoodRentElement,
  modalTieBuyElement,
  modalTieRentElement,
  modalBrushBuyElement,
  buySizeElement,
  rentSizeElement,
  orderElement,
  step2btn
} from  './variables.js'

// -----------Modal logo of uni
// Array of Image
const arrayLogoImg = [
  './image/logo/01-02-03 (1).png', './image/logo/01-02-03 (2).png', './image/logo/01-02-03 (3).png', './image/logo/01-02-03 (4).png',
  './image/logo/01-02-03 (5).png', './image/logo/01-02-03 (6).png', './image/logo/01-02-03 (7).png', './image/logo/01-02-03 (8).png',
  './image/logo/01-02-03 (9).png', './image/logo/01-02-03 (10).png', './image/logo/01-02-03 (11).png', './image/logo/01-02-03 (12).png',
  './image/logo/01-02-03 (13).png', './image/logo/01-02-03 (14).png', './image/logo/01-02-03 (15).png', './image/logo/01-02-03 (16).png',
  './image/logo/01-02-03 (17).png', './image/logo/01-02-03 (18).png', './image/logo/01-02-03 (19).png', './image/logo/01-02-03 (20).png',
  './image/logo/01-02-03 (21).png', './image/logo/01-02-03 (22).png', './image/logo/01-02-03 (23).png', './image/logo/01-02-03 (24).png',
  './image/logo/01-02-03 (25).png', './image/logo/01-02-03 (26).png', './image/logo/01-02-03 (27).png', './image/logo/01-02-03 (28).png',
  './image/logo/01-02-03 (29).png', './image/logo/01-02-03 (30).png', './image/logo/01-02-03 (31).png', './image/logo/01-02-03 (32).png',
  './image/logo/01-02-03 (33).png', './image/logo/01-02-03 (34).png', './image/logo/01-02-03 (35).png', './image/logo/01-02-03 (36).png',
  './image/logo/01-02-03 (37).png', './image/logo/01-02-03 (38).png', './image/logo/01-02-03 (39).png', './image/logo/01-02-03 (40).png',
  './image/logo/01-02-03 (41).png', './image/logo/01-02-03 (42).png', './image/logo/01-02-03 (43).png', './image/logo/01-02-03 (44).png',
  './image/logo/01-02-03 (45).png', './image/logo/01-02-03 (46).png', './image/logo/01-02-03 (47).png', './image/logo/01-02-03 (48).png',
  './image/logo/01-02-03 (49).png', './image/logo/01-02-03 (50).png', './image/logo/01-02-03 (51).png', './image/logo/01-02-03 (52).png',
  './image/logo/01-02-03 (53).png', './image/logo/01-02-03 (54).png', './image/logo/01-02-03 (55).png', './image/logo/01-02-03 (56).png',
  './image/logo/01-02-03 (57).png', './image/logo/01-02-03 (58).png', './image/logo/01-02-03 (59).png', './image/logo/01-02-03 (1).jpg'
  ]
  
  // Array of Img's title
  const arrayLogoImgTitle = [
  'ВШЭ', 'МГЛУ', 'ВАВТ', 'МГУ ВШГА', 'ВШЭ', 'Дипломатическая академия МИД', 'МАДИ', 'МАИ', 'МАСИ', 'МГИМО', 'МГОУ', 'МГППУ', 'МГПУ', 'МГСУ',
  'МГУ', 'МГУ высшая школа телевидения', 'МГУ геологический факультет', 'МГУ ИССА', 'МГУ исторический факультет', 'МГУ факультет биотехнологий',
  'МГУ факультет журналистики', 'МГУ факультет мировой политики', 'МГУ физический факультет', 'МГУ ФФМ', 'МГУ химический факультет', 
  'МГУ экономический факультет', 'МГУ юридический факультет', 'МГУ юридический факультет', 'МГУ социологический факультет', 'МГЮА', 'МИРЭА',
  'МИТУ МАСИ', 'МИФИ', 'Московский политех', 'Институт междун. образования МПГУ', 'МПГУ', 'МФЮА', 'НИД', 'РАНХиГС', 'РГАУ МСХА', 'РГГУ', 'РГГУ',
  'РГУНГ', 'РУДН инженерный факультет', 'РУДН', 'РУДН медицинский факультет', 'РУДН', 'РХТУ Менделеева', 'РХТУ Менделеева', 'РЭУ Плеханова',
  'Сеченовский Университет', 'Синергия ШБ', 'ТГМУ', 'Университет Косыгина', 'Университет прокуратуры', 'Гос. ИРЯ им. А.С.Пушкина', 
  'Фин. университет при правительстве РФ', 'ФЭФМ', 'ЮФ РГСУ', 'МГПУ'
  ]
  
  function createItemLogoImg (item) {
    return `
    <div class="modal-logo__item">
      <img class="modal-logo__img" src="${item.src}" alt="">
      <div class="modal-logo__item-title">${item.title}</div>
    </div>
    `
  }
  
  // Create item of Logo
  function render () {
    let array = []
    for (let i = 0; i < arrayLogoImg.length; i++) {
      array.push({
        title: arrayLogoImgTitle[i],
        src: arrayLogoImg[i]
      })
    }

    const div = array.reduce((sum, item) => {
      const divItem = createItemLogoImg(item)
      return sum + divItem
    }, '')
  
    modalLogoElement.innerHTML = div
  }

// -----------Modals for Choose Color of Hood, Tie or Brush
const arrayColor = {
  hoodEn: ['blue', 'red', 'gold', 'silver', 'purple', 'blue-light'],
  hoodRu: ['Синий', 'Красный', 'Золотой', 'Серебристый', 'Фиолетовый', 'Голубой'],
  tieEn:  ['blue', 'red', 'gold', 'white', 'green'],
  tieRu:  ['Синий', 'Красный', 'Золотой', 'Белый', 'Зеленый'],
  brushEn: ['blue', 'red', 'gold', 'silver', 'rph', 'black'],
  brushRu: ['Синий', 'Красный', 'Золотой', 'Серебристый', 'Флаг РФ', 'Черный'],
}

const arrayPlaceBlock = ['hood', 'tie', 'brush']
const arrayTypeBlock = ['buy', 'rent']

const arrayHoodBuy = []
const arrayHoodRent = []
const arrayTieBuy = []
const arrayTieRent = []
const arrayBrushBuy = []

for (let i = 0; i < arrayColor.hoodEn.length; i++) {

  arrayHoodBuy.push({
    colorNameEn: arrayColor.hoodEn[i],
    colorNameRu: arrayColor.hoodRu[i],
    placeBlock: arrayPlaceBlock[0],
    typeBlock: arrayTypeBlock[0],
    value: localStorage[`color-buy__hood-${arrayColor.hoodEn[i]}`] != undefined ?
    localStorage[`color-buy__hood-${arrayColor.hoodEn[i]}`] : 0,
  })
  arrayHoodRent.push({
    colorNameEn: arrayColor.hoodEn[i],
    colorNameRu: arrayColor.hoodRu[i],
    placeBlock: arrayPlaceBlock[0],
    typeBlock: arrayTypeBlock[1],
    value: localStorage[`color-rent__hood-${arrayColor.hoodEn[i]}`] != undefined ?
    localStorage[`color-rent__hood-${arrayColor.hoodEn[i]}`] : 0,
  })

  localStorage[`color-buy__hood-${arrayColor.hoodEn[i]}`] = arrayHoodBuy[i].value;
  localStorage[`color-rent__hood-${arrayColor.hoodEn[i]}`] = arrayHoodRent[i].value;
}

for (let i = 0; i < arrayColor.tieEn.length; i++) {
  arrayTieBuy.push({
    colorNameEn: arrayColor.tieEn[i],
    colorNameRu: arrayColor.tieRu[i],
    placeBlock: arrayPlaceBlock[1],
    typeBlock: arrayTypeBlock[0],
    value: localStorage[`color-buy__tie-${arrayColor.tieEn[i]}`] != undefined ?
    localStorage[`color-buy__tie-${arrayColor.tieEn[i]}`] : 0,
  })
  arrayTieRent.push({
    colorNameEn: arrayColor.tieEn[i],
    colorNameRu: arrayColor.tieRu[i],
    placeBlock: arrayPlaceBlock[1],
    typeBlock: arrayTypeBlock[1],
    value: localStorage[`color-rent__tie-${arrayColor.tieEn[i]}`] != undefined ?
    localStorage[`color-rent__tie-${arrayColor.tieEn[i]}`] : 0,
  })

  localStorage[`color-buy__tie-${arrayColor.hoodEn[i]}`] = arrayTieBuy[i].value;
  localStorage[`color-rent__tie-${arrayColor.hoodEn[i]}`] = arrayTieRent[i].value;
}

for (let i = 0; i < arrayColor.brushEn.length; i++) {
  arrayBrushBuy.push({
    colorNameEn: arrayColor.brushEn[i],
    colorNameRu: arrayColor.brushRu[i],
    placeBlock: arrayPlaceBlock[2],
    typeBlock: arrayTypeBlock[0],
    value: localStorage[`color-buy__brush-${arrayColor.brushEn[i]}`] != undefined ?
    localStorage[`color-buy__brush-${arrayColor.brushEn[i]}`] : 0,
  })

  localStorage[`color-buy__brush-${arrayColor.brushEn[i]}`] = arrayBrushBuy[i].value;
}

function createItem (item) {
  return `
  <div class="color-item color-${item.typeBlock}__${item.placeBlock}-${item.colorNameEn}">
    <div class="color-item__info">
      <div class="color-item__title">${item.colorNameRu}</div>
      <div class="color-item__${item.colorNameEn}"></div>
    </div>
    <div>
      <span class="sign color-item__sign" data-change="-1">-</span>
      <input class="in-num" type="text" name="Цвет ${item.placeBlock} ${item.colorNameRu}" value="${item.value}">
      <span class="sign color-item__sign" data-change="+1">+</span>
    </div>
  </div>
  `
}

function renderColorElements () {
  const divBuyHood = arrayHoodBuy.reduce((sum, item) => {
    const divItem = createItem(item)
    return sum + divItem
  }, '')
  
  const divRentHood = arrayHoodRent.reduce((sum, item) => {
    const divItem = createItem(item)
    return sum + divItem
  }, '')

  modalHoodBuyElement.innerHTML = divBuyHood
  modalHoodRentElement.innerHTML = divRentHood

  const divBuyTie = arrayTieBuy.reduce((sum, item) => {
    const divItem = createItem(item)
    return sum + divItem
  }, '')

  const divRentTie = arrayTieRent.reduce((sum, item) => {
    const divItem = createItem(item)
    return sum + divItem
  }, '')

  modalTieBuyElement.innerHTML = divBuyTie
  modalTieRentElement.innerHTML = divRentTie

  const divBuyBrush = arrayBrushBuy.reduce((sum, item) => {
    const divItem = createItem(item)
    return sum + divItem
  }, '')

  modalBrushBuyElement.innerHTML = divBuyBrush
}

// -------Render Modals for Choose Size
let arraySizeTitle = ['S', 'M', 'L', 'XL']
let arraySizeNumber = ['150 - 164 см', '165 - 182 см', '183 - 190 см', '191 см и выше']
let arrayBlockType = ['(покупка)', '(аренда)']
let arraySizeBuy = []
let arraySizeRent = []
  
for (let i = 0; i < arraySizeTitle.length; i++) {
  arraySizeBuy.push({
    title: arraySizeTitle[i],
    number: arraySizeNumber[i],
    type: arrayBlockType[0]
  })
  arraySizeRent.push({
    title: arraySizeTitle[i],
    number: arraySizeNumber[i],
    type: arrayBlockType[1]
  })
}

function createItemSize (item) {
  return `
  <div class="size-item">
  <div class="size-item__title">${item.title}</div>
  <div>${item.number}</div>
  <div class="size-item__value">
    <span class="sign" data-change="-1">-</span>
    <input class="in-num" name="${item.title} ${item.type}" type="text" value="0">
    <span class="sign" data-change="+1">+</span>
  </div>
  </div>
  `
}

// Create item of Size
function renderSize () {
  const divBuy = arraySizeBuy.reduce((sum, item) => {
    const divItem = createItemSize(item)

    return sum + divItem
  }, '')

  const divRent = arraySizeRent.reduce((sum, item) => {
    const divItem = createItemSize(item)

    return sum + divItem
  }, '')

  buySizeElement.innerHTML = divBuy
  rentSizeElement.innerHTML = divRent
}

// Render Order
step2btn.addEventListener('click', function () {
  let arrayOrder = []

  const dataFrom2Step = {
      nameComplect: `${document.querySelector('.buy .buy-name').textContent}`,
      buyComplectsCount: `${document.querySelector('.buy-count__complects').value}`,
      buyComplectsCost: `${document.querySelector('.step__buy .buy-sum .buy-sum__count p').textContent}`,
      rentComplectsCount: `${document.querySelector('.rent-count__complects').value}`,
      rentComplectsCost: `${document.querySelector('.rent-sum__count p').textContent}`,
      rentComplectsCountWithCup: `${document.querySelector('.rent-count__complects-cap').value}`,
      rentComplectsCostWithCup: `${document.querySelector('.rent-sum__count-cap p').textContent}`,
      logoStickerCount: `${document.querySelector('.logo-stikers').value}`,
      logoEmbroideryCount: `${document.querySelector('.logo-embroidery').value}`,
      logoSumCost: `${document.querySelector('.step__logo-summery .buy-sum__count p').textContent}`,
      allSumCost: `${document.querySelector('.step__all-summery .buy-sum__count p').textContent}`,
    }

  let arrayComplectOptions = [`${dataFrom2Step.nameComplect}`, 'Логотип Наклейка', 'Логотип Вышивка']

  let arrayServiceOptions = ['ПОКУПКА', 'АРЕНДА', 'АРЕНДА <span> + покупка шапки</span>']

  let arrayCount = [
    `${dataFrom2Step.buyComplectsCount}`, 
    `${dataFrom2Step.rentComplectsCount}`, 
    `${dataFrom2Step.rentComplectsCountWithCup}`,
    `${dataFrom2Step.logoStickerCount}`,
    `${dataFrom2Step.logoEmbroideryCount}`
  ]

  let arrayCost = [
    `${dataFrom2Step.buyComplectsCost}`, 
    `${dataFrom2Step.rentComplectsCost}`, 
    `${dataFrom2Step.rentComplectsCostWithCup}`,
    `${dataFrom2Step.logoSumCost}`
  ]
    
  if (+arrayCount[0] > 0) {
    arrayOrder.push({
      titleOrder: arrayComplectOptions[0],
      serviceOrder: arrayServiceOptions[0],
      count: arrayCount[0],
      cost: arrayCost[0],
    })
  }
  if (+arrayCount[1] > 0) {
    arrayOrder.push({
      titleOrder: arrayComplectOptions[0],
      serviceOrder: arrayServiceOptions[1],
      count: arrayCount[1],
      cost: arrayCost[1],
    })
  }
  if (+arrayCount[2] > 0) {
    arrayOrder.push({
      titleOrder: arrayComplectOptions[0],
      serviceOrder: arrayServiceOptions[2],
      count: arrayCount[2],
      cost: arrayCost[2],
    })
  }
  if (+arrayCount[3] > 0) {
    arrayOrder.push({
      titleOrder: arrayComplectOptions[1],
      serviceOrder: '',
      count: arrayCount[3],
      cost: arrayCost[3] - 200 * arrayCount[4],
    })
  }
  if (+arrayCount[4] > 0) {
    arrayOrder.push({
      titleOrder: arrayComplectOptions[2],
      serviceOrder: '',
      count: arrayCount[4],
      cost: arrayCost[3] - 50 * arrayCount[3],
    })
  }
  
function createItemOrder (item) {
  return `
  <div class="step-4__order">
    <div class="order-name">${item.titleOrder}</div>  
    <div class="order-serive">${item.serviceOrder}</div>  
    <div class="order-count"><p>${item.count}</p> <span>шт</span></div>  
    <div class="order-price"><p>${item.cost}</p><span>р</span></div>  
  </div>
  `
}

// Create item of Size
function renderOrder () {
  const div = arrayOrder.reduce((sum, item) => {
    const divItem = createItemOrder(item)
    return sum + divItem
  }, '')

  orderElement.innerHTML = div
}

renderOrder ()

})


export { render, renderColorElements, renderSize } 