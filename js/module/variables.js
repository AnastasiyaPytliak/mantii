const formElement = document.querySelector('form');
const headerBtnElement = document.querySelector('.step-1__btn');
const bodyStep1Element = document.querySelector('.step-1__group-first');
const pickColorElement = document.querySelector('.bakalavr');
const pickColorTieElement = document.querySelector('.bakalavr-tie');
const price = document.querySelector('.buy-price p');
const steps = [...document.querySelectorAll('form .step')]
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .prev-btn');
const colorTabs = document.querySelector('.step-1__tabs.bakalavr')
const colorTieTabs = document.querySelector('.step-1__tabs.bakalavr-tie')
const colorTabsMg = document.querySelector('.step-1__tabs.magistr')

const rentCapValue = document.querySelector('.rent .step__buy-details .buy-count .in-num__cap');
const stepBakalavr = document.querySelector('.bakalavr-step')
const stepMagistr = document.querySelector('.magistr-step')
const step2btn = document.querySelector('.step-2 .step-btn')

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

const logoModalElement = document.querySelector('.wrap')
const hoodModalElement = document.querySelector('.wrap-hood')
const tieModalElement = document.querySelector('.wrap-tie')
const brushModalElement = document.querySelector('.wrap-brush')
const closeModalElement = document.querySelector('.wrap-modal')

const step2Element = document.querySelector('.step-2')
const step3Element = document.querySelector('.step-3')

const logoImgElement = document.querySelector('.logo__img img')
const logoImgBlockElement = document.querySelector('.logo__img')
const logoRowImgElement = document.querySelector('.modal-logo__row')
const uniElement = document.querySelector('.step-4__uni')

const countBuyTie = document.querySelector('.modal-tie__buy-count')
const countBuyHood = document.querySelector('.modal-hood__buy-count')
const countBuyBrush = document.querySelector('.modal-brush__buy-count')
const countRentTie = document.querySelector('.modal-tie__rent-count')
const countRentHood = document.querySelector('.modal-hood__rent-count')

const modalHoodBuyBlock = document.querySelector('.modal-color__hood-buy')
const modalHoodRentBlock = document.querySelector('.modal-color__hood-rent')
const modalTieBuyBlock = document.querySelector('.modal-color__tie-buy')
const modalTieRentBlock = document.querySelector('.modal-color__tie-rent')
const modalBrushBuyBlock = document.querySelector('.modal-color__brush-buy')
const modalBrushBtn = document.querySelector('.brush-colors')

const modalLogoElement = document.querySelector('.modal-logo__row')
const modalHoodBuyElement = document.querySelector('.hood-buy__items')
const modalHoodRentElement = document.querySelector('.hood-rent__items')
const modalTieBuyElement = document.querySelector('.tie-buy__items')
const modalTieRentElement = document.querySelector('.tie-rent__items')
const modalBrushBuyElement = document.querySelector('.brush-buy__items')
const buySizeElement = document.querySelector('.buy-size__items')
const rentSizeElement = document.querySelector('.rent-size__items')
const orderElement = document.querySelector('.step-4__orders')

const select1 = document.getElementById("hood");
const select2 = document.getElementById("tie");
const select3 = document.getElementById("brush");

const labelPickUp = document.querySelector('.label-s')
const inputPickUp = document.querySelector("#samovyvoz");
const labelAddress = document.querySelector('.switch')
const inputAddress = document.querySelector("#address");

export {
  buySizeCount, rentSizeCount, headerBtnElement, bodyStep1Element, pickColorElement, pickColorTieElement, formElement, price, nextBtn, prevBtn,
  rentCapValue, stepBakalavr, stepMagistr, uniElement, modalBrushBtn, select1, select2, select3, modalLogoElement, steps, step2btn,
  magistrImg, bakalavrImg, stepImg, stepHoodShow, stepTieShow, stepBrushShow, sumOrder, logoModalElement, hoodModalElement,
  tieModalElement, brushModalElement, closeModalElement, logoImgElement, logoImgBlockElement, logoRowImgElement, modalTieRentBlock, 
  modalHoodBuyElement, modalHoodRentElement, modalTieBuyElement, modalTieRentElement, modalBrushBuyElement, buySizeElement, rentSizeElement,
  orderElement, buySizeCountCh, rentSizeCountCh, countBuyHood, countRentHood, countBuyTie, countRentTie, labelPickUp, inputPickUp, labelAddress,
  inputAddress, countBuyBrush, modalHoodBuyBlock, modalTieBuyBlock, modalBrushBuyBlock, modalHoodRentBlock, step2Element, step3Element,
  colorTabs, colorTieTabs, colorTabsMg
}