

let addButton = document.querySelector('#plus')
let subtractButton = document.querySelector('#minus')
let input = document.querySelector('input')
const textResult = document.getElementById('result')
let result = 0

addButton.addEventListener('click', () => {
  result = parseInt(input.value) + 1
  render()
})

subtractButton.addEventListener('click', () => {
  result = parseInt(input.value) - 1
  render
})

function render() {
textResult.innerText = result
}