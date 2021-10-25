// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//pseudo code

// declare a constant variable
// use the array perameter in the function action
// set a first string variable for (value.name) and use built-in methods on name to lower case, then split the array 
// use .map for iteration
// add new function for each word and set the first character to upper case then use built-in methods, substring to add remainder of character to theh first upper case letter and join to put the array together.
// return the first string variable and use concatination to inlude a space, pluse 'is' and the primary object {value.occupation}

// a) Create a test with an expect statement using the variable provided.

describe('peopleInfo', () => {
  test('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () => {
      expect(peopleInfo([
        { name: "ford prefect", occupation: "a hitchhiker" },
        { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
        { name: "arthur dent", occupation: "a radio employee" }
      ])).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]) 
  })
})

//test failed
    //ReferenceError: peopleInfo is not defined
//rewriting code to define peopleInfo, then running second test

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

const peopleInfo = (array) => {
  return array.map(value => {
    let firstString = (value.name).toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
    return firstString + " " + `is ${value.occupation}.`
  })
}



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//pseudo code

// declare a constant array variable
// set a new variable for reaminders to equal a new array
// set a new array variable on the array and use .filter to iterate throught the array to return a new array of a different size of value type to equal a number
// use a for loop on the new array and set a new number variable to equal the new array divisible by 3
// call on the new variable for remainders and use the built-in push method to return the new numbers divisible by 3 to the new array
// return the new remainders array

// a) Create a test with an expect statement using the variables provided.

describe('remaindersArr', () => {
  test('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {
      expect(remaindersArr([23, "Heyyyy!", 45, -10, 0, "Yo", false])).toEqual([ 2, 0, -1, 0 ]) 
      expect(remaindersArr([5, "Hola", 43, -34, "greetings", true])).toEqual([ 2, 1, -1 ])
  })
})

//test failed
    //ReferenceError: remaindersArr is not defined
//rewriting code to define remaindersArr, then running second test

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]



// b) Create the function that makes the test pass.

function remaindersArr(array){
  let remaindersThree=[]
   let newArray = array.filter(value => typeof(value)==="number")
   for(let i=0;i<newArray.length;i++){
    let newNumber=newArray[i]%3
      remaindersThree.push(newNumber)
  }return remaindersThree
}





// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

//pseudo code

// declare a constant array variable
// set a new sum array variable and use the built-in method map to iterate over the array and call on a function to take the value and use Math.pow and set the base to value and the component to 3
// return the new sum array and use the built-in method .reduce to callback a function on each element of the array and pass on the returned mapped value from each calculation on to the preceding element 

// a) Create a test with an expect statement using the variables provided.

describe('sumCubed', () => {
  test('takes in an array of numbers and returns the sum of all the numbers cubed', () => {
      expect(sumCubed([2, 3, 4])).toEqual(99) 
      expect(sumCubed([0,5,10])).toEqual(1125)
  })
})

//test failed
    //ReferenceError: sumCubed is not defined
//rewriting code to define sumCubed, then running second test

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// b) Create the function that makes the test pass.

function sumCubed(array){
  let newSumArray=array.map(value => Math.pow(value, 3))
 return  newSumArray.reduce((previousValue,currentValue) => previousValue + currentValue)
}
