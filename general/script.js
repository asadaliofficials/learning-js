// Higher Order Functions

// a function that accepts another function as its parameter and return a function as its output

Example:1
// function abcd(fun){
//   fun()
// }

// abcd(function newFun(){console.log("hello")})

Example:2
// function abcd(){
//   return function newFun(){console.log("hello")}
// }
// abcd()()







// Constructor Function

// function myConstructor(name,age,skill){
//   this.name= name
//   this.age = age
//   this.skill = skill
// }

// var person1 = new myConstructor("Asad" , 18, "java")
// console.log(person1)
// console.log(person1.name)







// First Class Function 
// functions can be assigned to variables, passed as arguments to other functions, and returned as values from functions.




// New Keyword

// when it is used it creates a new object and binds the value of this to the newly created object.




// iife => Immediate invoked Function Expression 

// the function created in iife are private by default. 










// Destructuring useCase Example

// const person = {
  
//     id: 1,
//     name: "John Doe",
//     age: 32,
//     gender: "Male",
//     email: "john.doe@example.com",
//     phone: "123-456-7890",
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       state: "NY",
//       zipCode: "10001"
//     },
//     jobTitle: "Software Engineer",
//     company: "Tech Solutions",
//     hobbies: ["coding", "gaming", "hiking"],
//     isMarried: true,
//     children: [
//       {
//         name: "Alice Doe",
//         age: 5
//       },
//       {
//         name: "Bob Doe",
//         age: 3
//       }
//     ]
 
// }


// let {zipCode} = person.address
// console.log(zipCode)

// let [first,second,third] = person.hobbies
// console.log(second)
// console.log(third)







// Copying an array by = sign 
// this will not copy array it creates their relationship.
// and when the referenced array changed it also change the original array

// let arr = [1,2,3,4,5]
// let copied = arr
// console.log(copied)
// console.log(arr)
// copied.pop()
// console.log(copied)
// console.log(arr)

// for this problem spread operator comes in 
// let arr = [1,2,3,4,5]
// let copied = [...arr]
// console.log(copied)
// console.log(arr)
// copied.pop()
// console.log(copied)
// console.log(arr)












// 3 Questions:

// 1. Merge two arrays
let arrayFirst = [1,2,3,4,5]
let arraySecond = [6,7,8,9,10]
let mergedArray = [...arrayFirst,...arraySecond]
console.log(mergedArray)


// 2. Filter an array products by their types 
let products = [
    {
        name: "laptop",
        type: "electronics"
    },
    {
        name: "mobile",
        type: "electronics"
    },
    {
        name: "shirt",
        type: "clothing"
    },
    {
        name: "pant",
        type: "clothing"
    }
]


let filteredArray = products.filter((product) => {
    return product.type === "electronics"
})
console.log(filteredArray)








// 3. Grouping an array by a specific property (e.g. grouping people by their role) 
let people = [
    {
        name: "Asad",
        role: "admin"
    },
    {
        name: "Ali",
        role: "manager"
    },
    {
        name: "jatt",
        role: "admin"
    },
    {
        name: "sahib",
        role: "manager"
    },
    {
        name: "person",
        role: "admin"
    }
]

let groupedArray
groupedArray = people.reduce((accumulator,currentUser) => {
    if(accumulator[currentUser.role]){
        accumulator[currentUser.role].push(currentUser.name)
    }else{
        accumulator[currentUser.role] = [currentUser.name]
    }
    return accumulator
},{})
console.log(groupedArray)