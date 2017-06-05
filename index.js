const personForm = document.querySelector('#mine')
function handle(event){
    event.preventDefault()
    const form = event.target
    console.log('SUBMIT!' + form.personName.value)
    const name = form.personName.value
    document.querySelector('h1').textContent = name
}
personForm.addEventListener("submit", handle)