
import { closeModalElement } from './variables.js'

const fields = document.querySelectorAll('.field')

const generateError = function (text) {
  const error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = text
  return error
}

const removeValidation = function () {
  const errors = document.querySelectorAll('.error')

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

const checkFieldsPresence = function () {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      let error = generateError('Обязательно к заполнению')
      fields[i].parentElement.insertBefore(error, fields[i])
    } 
  }
}

function validateForm () {
	removeValidation()
  checkFieldsPresence()

  let error = 0
  document.querySelectorAll('.field').forEach(i => {
    if (i.previousElementSibling.classList.contains('error')) {
      i.setAttribute('style', 'border:1px solid #f00')
      if (!i.value) {
        error++ 
      }
    }
  })

  if (error == 0) {
    closeModalElement.setAttribute('style', 'display:flex')
  }

  return error
}

export { validateForm }