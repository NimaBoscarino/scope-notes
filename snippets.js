// imagine each snippet was run individually...
// as in, they're in their own file

// Snippet 1

// Snippet 2

console.log('hey there')

// Snippet 3

console.log("Hey there")
console.log("Goodbye")

// Snippet 4

function sayHello() {
  console.log("Hey there")
}

console.log("goodbye")
sayHello()

// Snippet 5

var bestFriend = 'Tyson'

function sayNameOfFriend() {
	console.log(bestFriend)
}

sayNameOfFriend()

// Snippet 6

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  bestFriend = 'Hussain'
  console.log(bestFriend)
}

sayNameOfFriend()

// Snippet 7

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  bestFriend = 'Hussain'
  console.log(bestFriend)
}

console.log(bestFriend)
sayNameOfFriend()

// Snippet 8a

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  var bestFriend = 'Hussain'
  console.log(bestFriend)
}

console.log(bestFriend)
sayNameOfFriend()
console.log(bestFriend)

// Snippet 8b

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  bestFriend = 'Hussain'
  console.log(bestFriend)
}

console.log(bestFriend)
sayNameOfFriend()
console.log(bestFriend)

// Snippet 9

var bestFriend = 'Tyson'
var food = 'avocado'

function sayNameOfFriend() {
  console.log(bestFriend)
  
  sayFood()
  
}

function sayFood() {
  console.log(food)
}

sayNameOfFriend()

// Snippet 10 - Secret! Run this on your own!

var bestFriend = 'Tyson'
var food = 'avocado'

function sayNameOfFriend() {
  var bestFriend = 'Hussain'
  console.log(bestFriend)
  
  sayFood()
  
}

function sayFood() {
  console.log(food)
  console.log(bestFriend)
}

sayNameOfFriend()

