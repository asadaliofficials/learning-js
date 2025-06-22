console.log('hello')


// Classes & Objects in Object-Oriented Programming (OOP) in JavaScript
// Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of "objects." These objects can represent real-world entities or concepts, combining data (known as properties) and functions (known as methods) that manipulate that data. OOP encourages modularity, reuse, and encapsulation, making code more organized and manageable, especially in complex systems.

// In JavaScript, OOP is implemented using classes and objects.



// 1. Objects in JavaScript
// An object is a collection of properties, where a property is a key-value pair. Each property can hold primitive values (like numbers, strings, etc.) or other objects and functions.

// Example of an Object:

// let person = {
//   id: 1,
//   name: "john",
//   age: 30,
//   city: "New York",
//   country: "USA",
//   phone: "1234567890",
//   email: "LmQ2Z@example.com",
//   asad: function() {
//     console.log("Car is starting...")
//   }
// }

// console.log(person)
// console.log(person.name)
// console.log(person.email)
// person.asad();






// 2. Classes in JavaScript
// In ES6 (ECMAScript 2015), JavaScript introduced the concept of classes, which act as blueprints for creating objects. They encapsulate data and functionality in a clean, reusable format.

// Syntax for a Class:

// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     run() {
//         console.log(`${this.make} is running...`);
//     }
// }


// let myCar = new Car("Tesla", "Model 3", 2024);
// let myCar2 = new Car("Suzuki", "Model 1", 2023);
// console.log(myCar.make);
// console.log(myCar.model);
// console.log(myCar.year);  
// myCar.run();
// console.log(myCar2.make);
// console.log(myCar2.model);
// console.log(myCar2.year);  
// myCar2.run();






// 3. Constructors and Initialization
// The constructor is a special method in a class that is automatically invoked when a new object is created. It’s used to initialize the object's properties.

// Example:

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     introduce() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const person1 = new Person("John", 18);
// person1.introduce(); 
// const person2 = new Person("Ali", 22);
// person2.introduce();







// 4. Methods in Classes
// In JavaScript, methods are functions that belong to an object. In classes, methods can be defined to perform actions using the object's properties.

// Example:

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }

//     perimeter() {  
//         return 2 * (this.width + this.height);
//     }
// }
// const rect = new Rectangle(11, 22);
// console.log(rect.area());      // 200
// console.log(rect.perimeter()); // 60

// const meLand = new Rectangle(2, 5);
// console.log(meLand.area());      // 10
// console.log(meLand.perimeter()); // 14













// 5. Inheritance
// Inheritance is a fundamental principle of OOP where one class (child class) can inherit properties and methods from another class (parent class). This allows code reuse and extension of existing functionality.

// Example of Inheritance:

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// const animal = new Animal("animal");
// animal.speak();  // animal makes a sound.
// const dog = new Dog("Buddy");
// dog.speak();  // Buddy barks.




















// 6. Encapsulation
// Encapsulation is the concept of restricting direct access to some of an object's components. This is typically done by making properties private or controlling access through methods.

// In JavaScript, private fields are denoted with a # before the property name.

// Example of Encapsulation:

// class bankAccount{
//   #balance = 0;

//   deposit(amount){
//     this.#balance += amount;
//     return this.#balance;

//   }

//   withdraw(amount){
//     this.#balance -= amount;
//     return this.#balance;
//   }

//   getBalance(){
//     return this.#balance;
//   }
// }

// const myAccount = new bankAccount();
// console.log(myAccount.deposit(100));
// console.log(myAccount.withdraw(50));
// console.log(myAccount.getBalance());














// 7. Polymorphism
// Polymorphism is the ability of different classes to be treated as instances of the same class through inheritance. Different child classes can define their own version of methods while sharing a common interface.

// Example of Polymorphism:

// class Bird{
//   fly(){
//     console.log("Birds can fly")
//   }
// }
// class Goat extends Bird{
//   fly(){
//     console.log("Goats can't fly they can run.")
//   }
// }

// const bird = new Bird();
// bird.fly();
// const goat = new Goat();
// goat.fly();









// 8. Static Methods
// Static methods are methods that belong to the class itself rather than to instances of the class. These are useful when the behavior is not tied to a particular object instance.

// class MathHelper {
//   static square(num) {
//       return num * num;
//   }

//   static cube(num) {
//       return num * num * num;
//   }
// }

// console.log(MathHelper.square(3)); // 9
// console.log(MathHelper.cube(2));   // 8





// 9. Getters and Setters
// Getters and setters allow controlled access to an object's properties. They act as interceptors, providing a way to define logic for getting or setting a value.

// Example of Getters and Setters:

// class Person {
//   constructor(name) {
//       this._name = name;
//   }

//   get name() {
//       return this._name;
//   }

//   set name(newName) {
//       if (newName.length > 0) {
//           this._name = newName;
//       } else {
//           console.log("Invalid name.");
//       }
//   }
// }

// const person = new Person("John");
// console.log(person.name);
// person.name = "Alice";
// console.log(person.name);














// Using super() in the Constructor
// When a class inherits from a parent class, the child class must call the parent class’s constructor if it needs to access the properties and methods of the parent. This is done using super().

// Example:

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);  
//         this.breed = breed;
//     }

//     speak() {
//         super.speak(); 
//         console.log(`${this.name}, a ${this.breed}, barks.`);
//     }
// }

// const dog = new Dog("Buddy", "Egg");
// dog.speak();

