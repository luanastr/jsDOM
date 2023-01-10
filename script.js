let person = prompt('What is your name?','Harry Potter')

greeting = document.getElementById("hello")
date = document.querySelector('#date')
time = document.getElementById('time')

greeting.innerHTML = `Hello ${person}! How are you doing?`

myDate = new Date()
console.log(myDate)

date.innerHTML = myDate.getFullYear()






function timer() {
    const today = new Date()
    time.innerHTML = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
}

setInterval(timer,1000)

var favorites = ['apples', 'bananas', 'coconuts']

for (let i = 0; i < favorites.length; i++) {
    const listEntry = document.createElement('li')
    listEntry.appendChild(document.createTextNode(favorites[i]))
    document.querySelector('ul').appendChild(listEntry)
}

function youClicked() {
    alert('You Clicked!')
}

const myText = document.querySelector('input')
const myOutput = document.getElementById('output')

myText.addEventListener('input',changeText)

function changeText(e) {
    myOutput.innerHTML = e.target.value
}