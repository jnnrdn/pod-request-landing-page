'use strict'

const form = document.getElementsByTagName('form')[0]

const email = document.getElementById('email')
const emailError = document.querySelector('#email + span.error')

form.addEventListener('submit', function (e) {
  if (email.validity.valid) {
    emailError.textContent = '' // Reset the content of the message
    emailError.className = 'error' // Reset the visual state of the message
  } else {
    showError()
    e.preventDefault()
  }
})

function showError () {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Oops! Please add your email'
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Oops! Please check your email'
  }
  // Set the styling appropriately
  emailError.className = 'error active'
}
