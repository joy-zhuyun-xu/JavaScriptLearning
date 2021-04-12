// // alert("Hello World")
// // log to console, this is a comment
// console.log('Hello World');

// // number
// console.log(2);

// //var
// var greeting = 'hello greeting'
// console.log(greeting)

// // list
// console.log([1,2,3,4])

// // this is an object
// console.log({a:1,b:2})

// // table, print objects as table
// console.table({a:1,b:2})

// // output as an error
// console.error('This is some error')


// // warning, yello
// console.warn('This is a warning')

// // Timer: console.time gives the time took from first to end. 
// console.time('hello');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
// console.timeEnd('hello')

// /*
// multi line comments
//  */

//  // can clear console
// console.clear();


// //-------------------------------------
// // 7.Variables - var, let, const
// var my_name = 'john doe';
// console.log(my_name);
// my_name = 'steve';
// console.log(my_name)

// // init a var
// var greeting;
// console.log(greeting);
// greeting = 'hello'
// console.log(greeting);

// // letters, numbers, _, $ can be in a var
// // cannot start with a number

// var firstName = 'John' // camel case
// var FirstName = 'Tom' //Pascal case
// var first_name = 'Sara' // Underscore

// // CONST
// // value cannot be reassigned
// const name_1 = 'joy'
// console.log(name_1)


// //name_1 = 'luis'; this is not valid in const
// // Also Const have to assign a value, cannot be undefined;
// // const greeting; will give error

// // *** can do in const, is can mutate the value if its in an array or object. but it cannot reassign a whole new array.
// const person = {
//   name :'john', 
//   age : 30
// }
// // we can change the name,age. but cannot reassign person with new object literal. 
// person.name = 'sarea'
// person.age = 32

// console.log(person);
// //------------------------------------------


// // 8. DATA TYPES
// // JavaScript itself is dynamically, dont have to define types. Types are associated only with values, not variables. But a supersets of JS like TypeScript can be statically typed.
// // PRIMITIVE 
// // string
// const myName = 'joy xu';
// console.log(typeof myName);

// // number
// const age =45
// console.log(typeof age)

// // boolean
// const hasKids =true;
// console.log(typeof hasKids)

// // null: intentional left blank
// // get object: a bug for JS
// const car = null;
// console.log(typeof car)

// // Undefined
// let test;
// console.log(typeof test)

// // symbol
// const sym = Symbol();
// console.log(typeof sym)

// // REFERENCE TYPES - Objects
// //Array
// const hobbies = ['movies','gym']
// console.log(typeof hobbies)

// //Object literal
// const address ={
//   city: 'toronto',
//   country:'canada'
// }

// console.log(typeof address)

// //date

// const today = new Date();
// console.log(typeof today)

// //-----------------------------------------------
// // 9.TYPE CONVERSION
// let val;
// // String function
// val = String(5);
// val = String (4+4)
// val = String(new Date())
// val = String([1,2,3,4]) // gives 7, count 1,2,3,4 including commas

// //toString() method
// val=(5).toString()

// // Number function 
// val = Number('5')
// val = Number(true) // toFixed gives 1
// val= Number(false)// toFixed gives 0
// val = Number (null)// toFixed gives 0
// val = Number('hello')//toFixed gives NaN:; not a number, cannot parse 'hello' to a number
// val = Number([1,2,3])// toFixed gives NaN
// val = parseInt('100.300')//gives 100, since it parse it as an Integer
// val=parseFloat('100.300')//gives 100.30

// //output 
// console.log(val);
// console.log(typeof val)
// //console.log(val.length) // a string feature, length 
// console.log(val.toFixed(2)) // a number feature, toFixed

// // TYPE COERSION
// const val1 = String(5)
// const val2 = 6
// const sum = val1 + val2
// console.log(sum) // will return a string 56, since JS coerce 6 into a string and concat them
// console.log(typeof sum)
// console.clear();

// //-----------------------------------------------
// // 10. Numbers and Math
// const num1 = 100;
// const num2 = 50;
// let val3;

// //simple math with numbers
// val3 = num1 % num2

// // Math object
// val3 = Math.PI;
// val3 = Math.E; //Euler's number
// val3 = Math.round(2.34354543) // get 2
// val3 = Math.ceil(2.34354543) // get 3
// val3 = Math.floor(2.34354543) // get 2
// val3 = Math.sqrt(64)
// val3 = Math.abs(-64)
// val3 = Math.pow(8,2)
// val3 = Math.min(2,33,3,2,1,11,1,2,2,3,4)
// val3 = Math.min([2,33,3,2,1,11,1,2,2,3,4]) // NaN
// val3 = Math.max(2,33,3,2,1,11,1,2,2,3,4)
// val3 = Math.random() // gives a random decimal [0,1)
// val3 = Math.floor(Math.random() *20) + 1 // gives from 1 to 20
// console.log(val3)


// //-----------------------------------------------
// // 11. String Methods & Concatenation

// const firstName1 = 'william'
// const lastName1 = 'johnson'
// const age1 = 24
// let val4
// // Concatenation
// val4 = firstName1 + ' ' + lastName1
// // Appending
// val4 = 'Joy '
// val4 += 'Xu'

// str = 'Hello, my name is ' + firstName1 + ' and I am '+ age1

// //Escaping
// val4 = "That's awesome"
// val4 = 'That\'s awesome hey'

// // Length
// val4 = firstName1.length //property not method, no brackets needed

// // concat
// val4 = firstName1.concat(' ', lastName1)

// //change case
// val4 = firstName1.toUpperCase()
// val4 = firstName1.toLowerCase()

// // indexing
// val4 = firstName1[0]
// val4 = firstName1.indexOf('l') // Find the first letter, 2 here. If there's no charcater looking for , return -1
// val4 = firstName1.lastIndexOf('l')// Find the first letter from the end, 3 here

// //charAt
// val4 = firstName1.charAt('2') //find the second character, 'l' here

// // Find the last char
// val4 = firstName1[firstName1.length - 1]
// val4 = firstName1.charAt(String(firstName1.length - 1))

// //Substring
// val4 = firstName1.substring(0,4)

// //Slice, most use for arrays
// val4= firstName1.slice(0,4)
// val4= firstName1.slice(-3) // take the last 3

// //split
// val4 = str.split(' ')

// //replace
// val4= str.replace('william', 'joy') // replace william by joy

// //includes()
// val4= str.includes('hello') // test to see if something is inside a string
// console.log(val4);

// //-------------------------------
// //12. Template Literals/Strings

// const name1 = 'john'
// const age = 30
// const job ='web developer'
// const city ='toronto'
// let html;

// // Without template strings (ES5)
// html ='<ul><li>Name: ' + name1 + '</li><li>Age:' + age + '</li><li> Job:'+ job +'</li><li>City:' + city + '</li></ul>'; // an html string

// // With template literalrs (ES6)
// html = `
//   <ul>
//      <li>Name: ${name1}</li>
//      <li>Age: ${age}</li>
//      <li>Job: ${job}</li>
//      <li>City: ${city}</li>
//   </ul>
// `; 

// document.body.innerHTML = html;

// //-------------------------------
// //12. Arrays
// const numbers =[43,12,43,123,2]
// const numbers2 = new Array(22, 45, 33, 32,12)
// const fruit = ['apple','banana','orange']
// const mixed =['apple',22,true, 'pear', undefined, null, {a:1,b:2}, new Date(),[3,2,1]]

// let val

// //Get array length
// val = numbers.length

// // check if is array
// val = Array.isArray(numbers)
// val = Array.isArray('hello')

// // get a single value at the 3rd position
// val = numbers[3] // return 123, array is 0 based

// // slicing in array
// val= fruit.slice(0,2) //return apple, banana


// //replace something in array
// numbers[2]=100

// //find index of value
// val = numbers.indexOf(123) //return 3

// //Mutating arrays
// //add in the end
// numbers.push(21) //add 21 to the end
// // add to front
// numbers.unshift(120)

// //take off from the end, the end
// numbers.pop()
// //take off from the front, the first
// numbers.shift()
// // Take off values from the array
// numbers.splice(2)

// //reverse the array
// numbers.reverse()

// //Concat 2 arrays
// val = numbers.concat(numbers2)

// //sort
// val =fruit.sort()
// val= numbers.sort() //sorting by the first number, use compare function to sort 

// //compare funciton
// val= numbers.sort(function(x ,y ){return x-y})

// //reverse sort
// val= numbers.sort(function(x ,y ){return y-x})

// // use find and customize function
// function under50(num){
//   return num<50
// }
// val = numbers.find(under50)
// //look for the first number in the array that is under 50

// console.log(numbers)
// console.log(val)

// //------------------------------
// // Object Literals

// const person={
//   firstName: 'Steve',
//   lastName:'Smith',
//   age:24,
//   email:'steve@outlook.com',
//   hobbies:['music','sports','skiiing'],
//   address:{
//     city:'Miami',
//     state:'FL'
//   }, // embedded object literals
//   getBirthYear: function(){
//     return 2021 - this.age
//   }
//   //*** 'this' referes to the person object. 
// }

// //initiate val
// let val
// val= person 

// // get a value in object literal
// val = person.firstName //recommended
// val = person['firstName']
// val= person.getBirthYear
// val= person.hobbies.slice(0,2)
// val= person.address // get the whole address object
// val= person.address.state //get FL
// val= person.address['city'] // get miama
// val= person.getBirthYear() // add brackets since its a function, get 1987

// console.log(val)

// //-------------------------------
// //15. Date and Times

// let val;
// const today= new Date()
// //

// // other dates
// let birthday = new Date('1/31/1997 10:12:56') // this format works in firefox, 1-31-1997 doesnt work. can check the documentation in JS

// birthday = new Date('Jan 31 1997 10:20:15') // can define date in other format

// //get month
// val = today.getMonth() // zero-based month from january: eg: jan:0, March:2

// //get day 
// val=today.getDate() // get the exact date
// val=today.getDay() // gives zero-based day of the week start from sunday. eg: sunday:0, monday: 1,
// val=today.getFullYear() //gives 2021
// val= today.getMinutes()
// val= today.getSeconds()
// val= today.getMilliseconds()
// val=today.getTime()//get timestamp

// //change a date
// birthday.setMonth(2) //now birthday is march.31

// birthday.setDate(12) //now birthday is march.12

// birthday.setFullYear(1998) //now birthday is 1997.march.12
// birthday.setHours(3)
// birthday.setMinutes(3)
// birthday.setSeconds(3)

// console.log(birthday) // got object

// // ------------------------------
// // 16.If Statements and conditonal statements

// const id = 201;

// // // EQUAL
// // if (id == 101){
// //   console.log('correct') 
// // } else {
// //   console.log('incorrect')
// // }

// // //NOT EQUAL TO 
// // if (id != 101){
// //   console.log('correct') 
// // } else {
// //   console.log('incorrect')
// // }

// // // EQUAL TO VALUE AND TYPE ** RECOMMENED
// // if (id === 101){
// //   console.log('correct') 
// // } else {
// //   console.log('incorrect')
// // }


// // // EQUAL TO VALUE AND TYPE
// // if (id !== 101){
// //   console.log('correct') 
// // } else {
// //   console.log('incorrect')
// // }

// // // To check if anything exists, use typeof. Cuz it will return 'not defined' error if there is no ID.
// // if(typeof id !== 'undefined'){
// //   console.log(`The ID is ${id}`)
// // }else{
// //   console.log('NO ID')
// // }

// // GREATER OR LESS THAN 
// if(id >= 200){
//   console.log('id is greater or equal to 200')
// }else{
//   console.log('id is smaller than 200')
// }
// //IF ELSE
// const color = 'black'

// if (color === 'yellow'){
//   console.log('color is yellow')
// }else if(color === 'red') {
//   console.log('color is red')
// }else {
//  console.log("color is unknown")
// }

// // LOGICAL OPERATORS
// // && and operator
// const name1 ='Steve'
// const age = 74
// if (age > 0 && age < 12){
//   console.log(`${name1} is a child `)
// }else if(age >= 13 && age <= 19){
//   console.log(`${name1} is a teen`)
// }else{
//   console.log (`${name1} is an adult`)
// }

// // || or operator
// if (age < 16 || age >= 65){
//   console.log(`${name1} cannot attend the race, since ${name1}'s age ${age} is not qualified for the race requirement`)
// }else{
//   console.log(`${name1} is registered in the race`)
// }

// // TERNARY OPERATOR *** short cut for the if statement 
// console.log(id === 201 ? 'correct' : 'incorrect')

// // Also in JS, if statement does not need {}.

// // 17-- Switch: use when there are a lot of situations so that if else are too many
// const color = 'red'

// switch(color){
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is not red or blue')
//     break;
// }

// let day;
// switch (new Date().getDay()){
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
    
// }

// console.log(`Today is ${day}`)

// // 18 Functions
// function greet(firstName ='default_first', lastName= 'default_last'){
//   return 'Hello '+ firstName + ' ' + lastName
// }

// console.log(greet()) //return default value
// console.log(greet('john','doe'))

// //Function expression
// const square = function(x=3){
//   return x*x
// }
// console.log(square()) //return default value
// console.log(square(8)) //return 64, overwrite default value.

// // IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS -IIFEs: immediately exectured, variable cannot be accessed from outside of it
// (function (my_name){
//   console.log('Hi ' + my_name);
// })('Brad');

// // PROPERTY METHODS
// const todo = {
//   add: function(){
//     console.log('add todo');
//   },
//   edit: function(id){
//     console.log (`Edit todo ${id}`)
//   }
// }
// todo.delete = function (){
//   console.log ('Delete todo...');
// }
// todo.add()
// todo.edit(22)
// todo.delete()


// // // 19 Loops
// // // initial value; condition; increment by 1 until condition is no longer true
// // for (let i = 0; i < 10; i++){
  
// //   if (i===2){
// //     console.log('2 is my fav number')
// //     continue; // means keep going with the loop, so only i ===2 is shown
// //   }
// //   if (i ===5){
// //     console.log('stop the loop')
// //     break
// //   }
// //     console.log(`Number ${i}`) //return 0 to 9, since i <10

// // }
// // /// WHILE LOOP
// // let i = 0; // initate outside the lpp[]

// // while(i<10){
// //   console.log('number '+ i);
// //   i ++; // increment in the loop
// // } //only condition in here

// // /// DO WHILE LOOP
// // let i = 1000;

// // do { // do is always gonna run once, no matter the condition. here it will return 1000, even i >10, it will run once.
// //   console.log('number ' + i);
// //   i++;
// // }

// // while(i <10);

// /// LOOP THROUGH ARRAY
// const cars=['ford','honda','toyota','lexus']
// // for (let i = 0; i < cars.length; i++){
// //     console.log(cars[i]); //return the car one by one
// // }

// // /// FOR EACH to LOOP THROUGH ARRAY: EASIER, RECOMMENDED
// // /// iterator: car
// // cars.forEach(function(car){
// //   console.log(car)
// // })

// // // MAP
// // // return a different array
// // const users = [
// //   {id:1, name1:'john'},
// //   {id:2, name1:'sara'},
// //   {id:3, name1:'karen'}
// // ];
// // const ids = users.map(function(user){
// //   return user.id;
// // })
// // console.log(ids)

// // FOR IN LOOP
// const user={
//  firstName :'jone',
//  lastName:'doe',
//  age:40
// }

// for(let x in user){
//   //console.log(x) //gives the key
//   console.log(`${x} : ${user[x]}`) //gives key and name pair
// }

// // 20 WINDOW PROJECT
// // window methods
// // console.log (123)

// // // Alert
// // alert('hello world')

// // Prompt
// // const input  = prompt();

// // alert(input) // this alert back at us what ever we put in prompt

// // // confirm
// // if (confirm('are you sure')){
// //   console.log('YES') 
// // }else{
// //   console.log('NO')
// // }


// // Properties of the window
// let val;
// //outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// // inner height, width, within the scroll bars
// val = window.innerHeight;
// val = window.innerWidth;

// // scroll points gives where the scroll bar is
// val = window.scrollY

// //Location object: gives host, hose name, origin, path name, port, etc...
// val = window.location
// val = window.location.hostname // can print one of them
// val = window.location.href
// val = window.location.search

// // //redirect to some website or internal
// // window.location.href='http://google.com'

// // // reload: would use it in some function, not in global since it will keep reloading
// // window.location.reload();

// // History object: can get the browsing history
// //val= window.history.go(-2); // go back to the second last opened page
// //val= window.history.length; // show how many history sites have visited in total.

// //Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.language;

// console.log(val);

// // 21 Block Scope with let & const
// // Global scope
// var a=1
// let b=2
// const c=3

// // // Function scope
// // function test(){
// //   var a=4;
// //   let b=5;
// //   const c=6;
// //   console.log('Function Scope: ', a, b,c)
// // }

// // test();


// // Block scope
// // if(true){
// //   // Block scope
// //   var a =4;
// //   let b=5;
// //   const c=6;
// //   console.log('If Scope ', a, b,c) // notice in the gloabl scope var(a) is changed into 4, not 1. let and const (b and c) are still the same in the global scope
// // }

// for (let a=0; a<10; a ++){
//   console.log(`Loop: ${a}`)
// } // notice that since we are using let, gloabl scope a is still 1. If we use var here, the global scope a will be 10.
// console.log('Global Scope: ', a , b, c)

// //22 DOM
// // Document Object Model
// // Document -> html -> head -> elements
// //                  -> body-> elements

// // can use Jquery