let addButton = document.querySelector('#plus')
let subtractButton = document.querySelector('#minus')
let input = document.querySelector('input')
const textResult = document.getElementById('result')
let result = 1

addButton.addEventListener('click', () => {
	result += parseInt(input.value)
	render()
})

subtractButton.addEventListener('click', () => {
	result -= parseInt(input.value)
	render()
})

function render() {
	textResult.innerText = result
}
