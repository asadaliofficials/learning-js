console.log("hello")


// let num = prompt("enter a number")
// console.log(num + num)
// console.log(parseInt(num) + parseInt(num))


// Error throw in js 
// let a = 10
// let b = "asad"
// let c;

// if(isNaN(c)) {
  // throw new Error("not a number")
  // throw SyntaxError("not a number")
  // throw new TypeError("not a number")
  // throw new EvalError("not a number")

// }




// try {
//   console.log(c * d)
// } catch (error) {
//   console.log(error.message)
// }

let num = 5;
function main(){
  try {
     let num2 = num * num3
    console.log(num2)
    return true
  } catch (error) {
    console.log("There is an error")
    return false
  }
  finally{
    console.log("i am finally block")
  }
}
    console.log(main())