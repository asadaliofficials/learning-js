// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
// console.log(arr[0])
// console.log(arr)
// console.log(arr.at(-5))
// we can use value in minus - to count array from last element and it counts from -1 and so on


// adding and removing methods


// push method add element at last of array
// console.log(arr.push("asad"))
// console.log(arr)
// push method remove element at last of array
// console.log(arr.pop())
// console.log(arr)


// unshift method add element at first place in array
// console.log(arr.unshift("Asad"))
// console.log(arr)

// shift method removes element from first place of array
// console.log(arr.shift())
// console.log(arr)

// splice method is used to remove  element from anywhere in the array
// console.log(arr.splice(1,1,33,44))
// console.log(arr.splice(2,5))
// first is starting point and second is how many elements want to remove
// console.log(arr)
// console.log(arr.splice(5,0,55))
// console.log(arr)


// Searching and Filtering Methods
// it includes the following methods
// 1: indexof
// 2: lastIndexOf
// 3: includes

// let arr = [1,5, 2, 3, 4, 5,5, 6, 7, 8, 9,5];
// indexof
// console.log(arr.indexOf(5))
// console.log(arr.indexOf(5,3))
// second argument id used to tell where to start searching.

// lastindexof
// console.log(arr.lastIndexOf(5))
// console.log(arr.lastIndexOf(5,8))
// it gets starting point and goes to backwards for check data

// includes
// console.log(arr.includes(5))
// its a boolean method











// task
// add an element at the end of an Array
// what is the return value of splice method
// change an element value from an array
// delete an element from an array

// let taskArray=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
// console.log(taskArray)

// taskArray.push("dec")
// console.log(taskArray)

// console.log(taskArray.push("dec"))
// it gives the number of elements in array

// console.log(taskArray.splice(2,1,"March"))
// it returns the delete element
// console.log(taskArray)


// console.log(taskArray.splice(5,1))
// console.log(taskArray)









// More on Search and Filter methods
// find method
// let arr = [1,2,7,3,4,3,5,4,6,7,9]

// console.log(arr.find(findNum))
// function findNum(num){
//  return num == 4
//   return num > 4
// }
// this method returns only one element with the given condition


// find index
// console.log(arr.findIndex(findNum2))
// function findNum2(num){
// return num > 4
//   return num == 6
// }


// filter
// console.log(arr)
// console.log(arr.filter(findNum3))
// function findNum3(num){
//   return num == 7
// }
// console.log(arr)
















// array filter question/task
// show the product names only that have price less than 300

// const products = [
//   {name: "Laptop", price: 1200},
//   {name: "Mouse", price: 80},
//   {name: "Keyboard", price: 120},
//   {name: "Monitor", price: 1000},
//   {name: "Headphones", price: 330},
//   {name: "Speaker", price: 250},
// ]
// console.log(products)

// let filteredProducts = products.filter(findProducts)

// function findProducts(products){
//    return  products.price >= 1000
// }

// console.log(filteredProducts)

// for (const element of filteredProducts) {
//    console.log(element.name)
// }



// get unique values from data
// let numbersData = [1,3,4,5,7,8,9,6,6,5,4,3,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]
// let uniqueNumbersData = numbersData.filter((currentElement, index, myArray) =>{
//    return myArray.indexOf(currentElement) == index
// })
// console.log(uniqueNumbersData)
// alternative and easy way
// console.log(new Set(numbersData))
// console.log(...new Set(numbersData))
// console.log([...new Set(numbersData)])
// console.log([...new Set(numbersData)])


// Sort data
// let numbersData = [1,3,4,5,7,8,9,6,6,5,4,3,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]
// console.log(numbersData.sort())
// sorting data in descending order
// console.log(numbersData.sort((a,b) =>
//   b - a
// ))







// map method
// map method accepts call back and applies the function on each element like for each loop
// it returns a new array


// Example 1
// get square of each element in an array
// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let squares = numbers.map(getSquare)
// console.log(squares)

// function getSquare(element){
//     return element * element
// }



// Example 2
// to uppercase and lowercase strings
// const names = ["Asad Ali", "Anas Ali", "Danish Ali", "Muhammad Taha"]


// let upperCase = names.map(element => {
//   return element.toUpperCase()
// })
// let upperCase = names.map(element => element.toUpperCase())
// let lowerCase = names.map(element => element.toLowerCase())
// console.log(upperCase)
// console.log(lowerCase)


// Example 3
// sorting dates


// let dates = ["2022-01-11", "2022-02-22", "2023-04-25", "2023-07-22", "2024-11-05", "2025-01-06"]

// Solution 1
// let sortedDates = dates.map(sortDates)
// console.log(sortedDates)

// function sortDates(dates){
//     return dates.split("-").reverse().join("-")
// }

// Solution 2
// let sortedDates = dates.map(sortDates)
// console.log(sortedDates)


// function sortDates(dates){
//   let dateParts = dates.split("-")
//   return `${dateParts[2]},${dateParts[1]},${dateParts[0]}`
// }


// using map method get a numbers array and return it as square of the numbers that are even

// let numbers = [1,2,3,4,5,6,7,8,9]

// let evenSquares = numbers.map(getSquare)
// console.log(evenSquares.filter(element => element !== null))

// function getSquare(element){
//    if(element % 2 == 0){
//     return element * element
//    } else{
//     return null
    
//    }
// }



// add a prefix to each element in an array 
// let names = ["Asad Ali", "Anas Ali", "Danish Ali", "Muhammad Taha"]


// let prefixedNames = names.map(addPrefix)
// console.log(prefixedNames)
// function addPrefix(element){
//    return `Mr. ${element}`
// }


// Reduce Method 
// let prices = [100, 200, 300, 400, 500]
// let total = prices.reduce(getSum, 0)
// console.log(total)
// function getSum(total, element){
//    return total + element
// }

// const products = [
//   {name: "Laptop", price: 1200},
//   {name: "Mouse", price: 80},
//   {name: "Keyboard", price: 120},
//   {name: "Monitor", price: 1000},
//   {name: "Headphones", price: 330},
//   {name: "Speaker", price: 250},
// ]

// let total = products.reduce(getSum, 100)
// console.log(total)
// function getSum(total, element){
//    return total + element.price
// }



// concat array method 
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let arr3 = [7, 8, 9]

// let mergedArr = arr1.concat(arr2, arr3)
// console.log(mergedArr) 

// let arr1 = [1, 2, 3]
// let mergedArr = arr1.concat(4, 5, 6)
// console.log(mergedArr) 


// slice array method 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const edited = arr.slice(2, 5)
// console.log(edited)