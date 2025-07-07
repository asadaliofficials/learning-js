function fun(name){
  console.log("Hi, " + name + " YOu are good");
  console.log("Hi, " + name + " YOu are nice");
  console.log("Hi, " + name + " YOu are well");
  console.log("Hi, " + name + " YOu are amazing");

}

fun("Asad Ali");
fun("Lucky")



a = 2;
b = 11;

function arith(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
}
arith(a,b);

function returnValue(a,b){
  return a + b;
}

let result = returnValue(a,b);
console.log(result);


let arrow = () =>{
  console.log("Hello World");
}

arrow();