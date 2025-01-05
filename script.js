const formEl = document.querySelector('form')
const nameInputEl = document.querySelector('#name-input')
const nameDisplayEl = document.querySelector('#name-display')
const numberInputEl = document.querySelector('#number-input')
const monthDisplayEl = document.querySelector('#month-display')
const monthInputEl = document.querySelector('#month-input')
const yearDisplayEl = document.querySelector('#year-display')
const yearInputEl = document.querySelector('#year-input')
const cvvDisplayEl = document.querySelector('#cvv-display')
const cvvInputEl = document.querySelector('#cvv-input')
const numberSegmentDisplayEls = document.querySelectorAll('#number-display .segment')

const defaultDisplayName = 'Jane Appleseed';
const defaultDisplayNumber = '0000000000000000'
const defaultDisplayMonth = '00';
const defaultDisplayYear = '00';
const defaultDisplayCVV = '000';

document.addEventListener('DOMContentLoaded', () => {
  nameDisplayEl.textContent = defaultDisplayName
  handleNumberDisplay(defaultDisplayNumber)
  monthDisplayEl.textContent = defaultDisplayMonth
  yearDisplayEl.textContent = defaultDisplayYear
  cvvDisplayEl.textContent = defaultDisplayCVV
})

function handleNumberDisplay(cardNumber) {
  let segmentIndex = 0;
  for (let i = 0; i < defaultDisplayNumber.length; i += 4) {
    const segmentNumber = cardNumber.slice(i, i+4).toString()
    numberSegmentDisplayEls[segmentIndex].textContent = segmentNumber
    segmentIndex++
  }
}

nameInputEl.addEventListener('input', e => {
  if (e.target.value === "") {
    nameDisplayEl.textContent = defaultDisplayName
    return
  }
  nameDisplayEl.textContent = e.target.value
})

numberInputEl.addEventListener('input', e => {
  if (e.target.value === "") {
    handleNumberDisplay(defaultDisplayNumber)
    return
  }
  handleNumberDisplay(e.target.value.padEnd(defaultDisplayNumber.length, '0'))
})

cvvInputEl.addEventListener('input', e => {
  if (e.target.value === "") {
    cvvInputEl.textContent = defaultDisplayCVV
    return
  }
  cvvDisplayEl.textContent = e.target.value.padEnd(defaultDisplayCVV.length, '0')
})

monthInputEl.addEventListener('input', e => {
  if (e.target.value === "") {
    monthDisplayEl.textContent = defaultDisplayMonth
    return
  }
  monthDisplayEl.textContent = e.target.value.padStart(defaultDisplayMonth.length, '0')
})

yearInputEl.addEventListener('input', e => {
  if (e.target.value === "") {
   yearDisplayEl.textContent = defaultDisplayYear
    return
  }
  yearDisplayEl.textContent = e.target.value.padStart(defaultDisplayYear.length, '0')
})

formEl.addEventListener('submit', e => {
  e.preventDefault()
  console.log('click')
})

