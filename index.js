const personForm = document.querySelector('#mine')
function handle(event){
    event.preventDefault()
    const form = event.target
    console.log(event.target)
    console.log('SUBMIT!' + form.nameColor.value)
    const name = form.personName.value
    const color = form.nameColor.value
    document.querySelector('h1').textContent = name
    document.querySelector('h1').style = "color:" + color
}
personForm.addEventListener('submit', handle)