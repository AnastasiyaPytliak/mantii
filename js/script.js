import { renderSize } from './module/render.js'
import { handleChangeInputValue, handleClickToggleActive, handleClickActive,handleClickShowColor, handleClickActiveColor, handleChooseLogo, 
  handleShowHoodChoice, handleShowTieChoice, handleShowBrushChoice, handleSelecteHood, handleSelecteTie, handleCheckLabelAddress,
  handleCheckLabelPickUp, handleChangeBorder, handleSubmitForm
  } from './module/handlers.js'

import { headerBtnElement, bodyStep1Element, formElement, colorTabs, colorTieTabs, colorTabsMg, step2Element, step3Element, select1, select2,
  labelPickUp, labelAddress 
  } from './module/variables.js'

renderSize()

headerBtnElement.addEventListener('click', handleClickToggleActive)
headerBtnElement.addEventListener('click', handleClickShowColor)
bodyStep1Element.addEventListener('click', handleClickActive)
colorTabs.addEventListener('click', handleClickActiveColor)
colorTabsMg.addEventListener('click', handleClickActiveColor)
colorTieTabs.addEventListener('click', handleClickActiveColor)

step2Element.addEventListener('click', handleChooseLogo)
step3Element.addEventListener('click', handleShowBrushChoice)
step3Element.addEventListener('click', handleShowHoodChoice)
step3Element.addEventListener('click', handleShowTieChoice)

labelAddress.addEventListener("click", handleCheckLabelAddress);
labelPickUp.addEventListener("click", handleCheckLabelPickUp);

select1.addEventListener('click', handleSelecteHood)
select2.addEventListener('click', handleSelecteTie)

formElement.addEventListener('click', handleChangeInputValue)
formElement.addEventListener('click', handleChangeBorder)
formElement.addEventListener('submit', handleSubmitForm)

