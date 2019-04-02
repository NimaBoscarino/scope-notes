// little snippets of code

// interpret the code ourselves

// Snippet 1 -- nothing happens, we think


// Snippet 2 -- hey there

console.log('hey there')

// Snippet 3 -- hey, goodbye

console.log("Hey there")
console.log("Goodbye")

// Snippet 4 -- goodbye, hey there

function sayHello() {
  console.log("Hey there")
}

console.log("goodbye")
sayHello();

// Snippet 5 - Tyson

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  console.log(bestFriend)
}

sayNameOfFriend()

// Snippet 6 -- Hussain

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  bestFriend = 'Hussain'
  console.log(bestFriend)
}

sayNameOfFriend()


// Snippet 7 - Tyson, Hussain

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  bestFriend = 'Hussain'
  console.log(bestFriend)
}

console.log(bestFriend)
sayNameOfFriend()

// Snippet 8
//- Tyson, Hussain, Tyson
//- *, Hussain, Hussain

// the variables are completely separate.
// "separate scopes"

var bestFriend = 'Tyson'

function sayNameOfFriend() {
  var bestFriend = 'Hussain'
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
