console.log("Hello World!");

let obj ={
  name: "Asad Ali",
  age: "18",
  type: "Programmer",
  company: "Lucky Developers"
}

let key = "type";

console.log(obj[key]);

console.table(obj);

for (let key in obj) {
    let element = obj[key];
    console.log(element);
  
}

let myName = "Asad Ali";
for (const chr of myName) {
  console.log(chr);
}

let num = 10;
while(num >=1){
  console.log(num);
  num--;
}

let num2 = 0;
do{
  console.log(num2);
  num2++;
} while(
  num2 < 10
)