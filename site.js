

const contact = document.querySelector('#contact')

contact.addEventListener('mouseover', () => {
    contact.parentElement.style.backgroundColor = 'lightblue'
    //contact.closest('nav').style.backgroundColor = 'lightblue'
})
contact.addEventListener('mouseleave', () => {
    contact.parentElement.style.backgroundColor = ''
    //contact.closest('nav').style.backgroundColor = ''
})