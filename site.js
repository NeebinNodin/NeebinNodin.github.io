
alert('Welcome to my website!')

// Added for Assignment 3. Alot of experimenting with different parameters/values/properties/or whatever the proper term is.
document.addEventListener('DOMContentLoaded', function() {

const hours = new Date().getHours()

const isMorning = hours >= 4 && hours <12
const isAfternoon = hours >= 12 && hours < 17
const isEvening = hours >= 17 || hours < 4

let message = ''

if (isMorning) {
    message = 'Good Morning!'
} else if (isAfternoon) {
    message = 'Good Afternoon!'
} else if (isEvening) {
    message = 'Good Evening!'
}

const welcome = document.getElementById('welcome')
welcome.textContent = message


///// Put this at the end. Seemed to be the better placement since it is last in the code. Or might have errors if placed elsewhere.
const h2 = document.querySelector('h2')
setTimeout(() => {
    h2.textContent = welcome.textContent
}, 3000)

})// Placed const h2 inside of the DOMContentLoaded since it is the last thing to be executed and didn't think of it until I ask CoPilot some general questions. Had it outside. 