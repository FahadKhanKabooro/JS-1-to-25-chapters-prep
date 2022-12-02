// alert('Hello world')

// console.error('this is error')
// console.warn("this is last time")


// VARIABLES

// var is global scope variable 
// let and const have a block scope 
// let age = 30
// age = 31

// console.log(age)

// PRIMITIVE DATA TYPES
// const name = 'Fahadkhan';
// const age = 31;
// const rating = 9.9;
// const isCool = true;
// const x = null;
// const y = undefined;

// console.log(typeof y)

// Strings
// const name = 'Fahadkhan';
// const age = 31;

// concatination
// console.log('My name is '+ name +'my age is '+age)
// // Templet string
// console.log(`My name is ${name} my age is ${age}`)

// lenght property and indexing 
// const s = 'hello world';

// console.log(s.length)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0, 5))

// const g = 'technology, computer, it, code'
// console.log(g.split(', '))


// ARRAYS - variables that holds multiple values

// const fruits = ['apples','oranges','pears']
// fruits.push('grapes')
// fruits.unshift('straberries')
// fruits.pop()
// console.log(fruits)
// console.log(fruits.indexOf('oranges'))

// OBJECT LITERALS
// const person = {
//     firstName: 'fahad',
//     lastName: 'khan',
//     age: 30,
//     hobbies : ['music' , 'coding' , 'gaming'],
//     address: { street : 'Rbb colony Huse#2 Jamshoro ',
//     city : 'Jamshoro',
//     state : 'Sindh'
// }
//     }
// console.log(person.address.city)

// person.email = 'fahadkabooro.fk@gmail.com'
// console.log(person.email)

// const todos = [
//     {
//         id : 1,
//         text : 'Dustbin khali kar',
//         isCompleted : true 
//     },
//     {
//         id : 2,
//         text : 'Milya paya hu',
//         isCompleted : true 
//     },
//     {
//         id : 3,
//         text : 'SAngat endi aj ',
//         isCompleted : false
//     }
// ]

// console.log(todos[1].text)


// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)


// LOOP
// For
// for(let i = 0;i <= 10;i++){
//     console.log(`For loop Number: ${i}`)
// }

// // While loop
// let i = 0
// while( i < 10){
// console.log(`While Loop Number : ${i}`);
// i++
// }



//  forEach, map, filter
// todos.forEach(function(todo){
//     console.log(todo.text)
// })

// const todoText = todos.map(function(todo){
//  return todo.text
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted == true;
//    });
//    console.log(todoCompleted);


// if statements

// const x = 101;
// if(x == 10){
//     console.log("x is 10")
// }else if(x > 10) {
//     console.log('x is not 10')
// }else if(x < 10){
//     console.log("x is less than 10")
// }

// Turnary operator

// const x = 9

// const color = x > 10 ? 'red' : 'blue'

// // console.log(color)
// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//         case 'blue':
//             console.log('color is blue');
//             break;
//             default:
//                 console.log('color is not blue ')
// }


// FUNCTION

// function addNums(num1 , num2){
//     console.log(num1 + num2)
// }

// Constructor Function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    Person.prototype.getBirthYear =  function (){
        return this.dob.getFullYear();
    }
    Person.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}



// instantiate object

const person1 = new Person('Fahad', 'khan', '6-2-1991')
const person2 = new Person('Haseeb','Gopi','3-4-1998')
console.log(person1,person2)
