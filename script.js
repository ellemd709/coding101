function sayhello() {
  alert('Hello, Welcome')
}
let myname = 'Lisa';
console.log("My name is:")
console.log(myname)


let one = 1
let two = 2
let three = 3

console.log(1 + 2 + 3)

//string

//let one = "one";
//let two = "two";
//let three = "three";
//console.log(one + two + three)

let day = "Monday";
let flavor = "Chocolate";

if (day === "monday") {
  let flavor = "Vanilla";

  console.log('it is Monday. Have a scoop of ${flavor} ice cream.');
}

console.log('it is not Monday. Have a scoop of ${flavor} ice cream.');
//why isn't the flavor showing 

// slice and splice 

var users = ["Tim", "Tom", "Bob", "Frank"];
//console.log(users.slice(1, 3));
users.splice(1, 2, "hello");
console.log(users);




