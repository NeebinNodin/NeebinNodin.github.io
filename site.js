//alert('Welcome to my website!')
const key = "It's a secret to everybody."
const secret = "A Link to the Past..."
localStorage.setItem(key, secret)

// Added for Assignment 3. Alot of experimenting with different parameters/values/properties/or whatever the proper term is.
document.addEventListener('DOMContentLoaded', function () {

    const hours = new Date().getHours()

    const isMorning = hours >= 4 && hours < 12
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
    if (welcome) {
        welcome.textContent = message
    }
    ///// Put this at the end. Seemed to be the better placement since it is last in the code. Or might have errors if placed elsewhere.
    const h2 = document.querySelector('h2')
    setTimeout(() => {
        h2.textContent = welcome.textContent
    }, 3000)
    // Placed const h2 inside of the DOMContentLoaded since it is the last thing to be executed and didn't think of it until I ask CoPilot some general questions. Had it outside. 
})

// Added localStorage for Assignment 4. Ran into problems with page not loading correctly. I got the localStorage to work, but the dyamanic content wasn't fully working. I commented out the div with the welcome id, thinking it wasn't needed. Spent some time figuring it out and was very confused. 

////////////////////// Assignment 5 //////////////////////
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()
//
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')

nextBtn.addEventListener('click', () => {
    currentImage++
    showImages()
})

prevBtn.addEventListener('click', () => {
    currentImage--
    showImages()
})

setInterval(() => {
    currentImage++
    showImages()
}, 5000)

// Added for Assignment 6.

const todos = JSON.parse(localStorage.getItem('todo-list')) || []
const todoList = document.getElementById('todo-list')
const input = document.getElementById('new-todo')
const addButton = document.getElementById('add-todo')

const renderTodos = () => {
    todoList.innerHTML = ''
    todos.forEach((todo, index) => {
        const li = document.createElement('li')
        // create a checkbox
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = todo.completed
        checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked
            localStorage.setItem('todo-list', JSON.stringify(todos))
        })
        //create a delete button
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', () => {
            todos.splice(index, 1)
            localStorage.setItem('todo-list', JSON.stringify(todos))
            renderTodos()
        })
        // append checkbox and delete button to the list item
        li.append(checkbox)
        li.append(document.createTextNode(todo.text))
        //li.textContent = todo.text
        li.append(deleteButton)
        todoList.append(li)
    })
}

renderTodos()

addButton.addEventListener('click', () => {
    if (input.value !== '') {
        todos.push({ text: input.value, completed: false })
        localStorage.setItem('todo-list', JSON.stringify(todos))
        input.value = ''
        renderTodos()
    }
})