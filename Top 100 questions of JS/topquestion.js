
// 8

// let data = {name : "Sandeep"}
//  console.log(delete data.name);
//  console.log(data)

// 9
// let data = { name: "Amit"}
// console.log(delete data)
// console.log(data)

// 10
// const data = [ "peter" , "Heater" , "meter"]
// const [y,z ]= data;
// console.log(y , z);

// 11

// const data = ["pater" , "jeter" , "jmeter" , "cheater"]
// const [,,,y] = data;
// console.log(y)

// 12 
// const data = { name: "Madhurika" , age : 27 , Skills : "yoga"}
// // console.warn(data.name)
// // const {name} = data;
// // console.warn(name) 
// const {age} = data;
// console.warn(age)

// 13 
// let data = { name : "deepak kala" , age : 34 , skills : " mobile repair"}
// let info = { city : 'noida', email: 'deepak.kale@test.com'}
//  data = {...data,...info}
//  console.warn(data)

// 14 
// let data = { name : "deepak kala" , age : 34 , skills : " mobile repair"}
// let info = { city : 'noida', email: 'deepak.kale@test.com'}
// let finaldata = {data,...info}
// console.log(finaldata)

// 15 
// const name = " Shyam"
// console.log(name())

// 16
// const result = false || {} || null;
// if({}){
//     console.warn("yes")
// }
// console.log(result)

// 17
// const result = null || '' || 'false';
// console.log(result)
 
// 18
// const result = [] || '' || 'false';
// console.log(result)
 
// 19
// console.warn(Promise.resolve(5))

// 20
// let name = "Sindhu River"
// function getName(){
//     let name = "divyank"
//     console.log(name)
// }
// getName();

// 21 
// let name = "singh is king"
//  getName=()=>{
//     console.log(name)
// }
// getName();

// 22
// console.log(`${(x=>x)('I Love My India')} AND I proud on it `)

// 23
// function sumValues(x,y,z) {
//     return x + y + z;
// }
// console.warn(sumValues(...[12,24,38]))

// 24
// const name = " My name is sandeep , and I had my b tech from amity university"
// console.warn(!typeof name === "object")
// console.warn(!typeof name === "string")
// console.warn(!typeof name === false)

// 25
// let person  = {name: "Suneet"}
// Object.seal(person)
// person.name = "Saxena"
// console.warn(person)

// 26

// let data = [2,4,5,6,]
// data.shift()
// console.warn(data)

// 27
// let data = [3,90,46]
// data.pop()
// console.warn(data)

// 28

// let a = 300
// console.log(a%2)

// 29
// let data = "true"
// console.log(!typeof data )

// 30
// let data = "true"
// console.log(!!data)

// 31
// let data = ["peter", "meter", "heater"]
// delete data [1]
// console.log(data)

// 32
// let data = ["peter", "meter", "heater"]
// delete data [1]
// console.log(data.length)

// 33
// let a =[1,2,3,4]
// let b =[4,5,6]
// let c = [...a,...b]
// console.warn(c)

// 34

// let a = 5
// setTimeout(()=>{
//     console.warn(a)
// },0)
// a=100

// 35
// let a = 25
// let A = 26
// console.warn(A)

// 36
// let a = 1;
// let c = 2;
// console.warn(--c === a)

// 37
// let a = 1
// let b = 1
// let c = 2
// console.log(a === b === --c)

// 38
// console.warn(a)
// var a

// 39
// console.log([[[[]]]])

// 40

// function fruit(){
//     console.log(name)
//     console.log(price)
//     var name = "Mango"
//     let price = 45
// }
// fruit()

// 41
// for( var i = 0 ; i < 5; i++){
//     setTimeout(()=>{console.log(i)},1)
// }

// 42
// for( let i = 0 ; i < 10; i++){
//     setTimeout(()=>{console.log(i)},1)
// }

// 43
// console.warn(+true)
// console.warn(typeof +true)

// 44
// let data = "size";
// const bird ={
//     size : "Large"
// }
// console.warn(bird[data])
// console.warn(bird.size)
// console.warn(bird.data)
// console.warn(bird["size"])

// 45
// let c = {name: "Kunal"}
// let d ;
// d = c;
// c.name="sunil"
// console.log(d.name)

// 46
// let a =3;
// let b = new Number(3)
// console.log(a == b);
// console.log(a === b)

// 47
// function fruit(){
//     console.log("woos!")
// }
// fruit.name="woof"
// fruit()

// 48
// function sum(a,b){
//     return a + b
// }
// console.log(sum(1,"12"))

// 49
// let a = 0
// console.log(a++)
// console.log(a++)
// console.log(++a)
// console.log(a)

// 50
// function getAge(...args){
//     console.log(typeof args)
// }
// getAge(21)

// 51
// function getAge(){
//     'use strict'
//      let age = 27
//     console.log(age)
// }
// getAge()

// 52
// const sum = eval('10*10+7')
// console.log(sum)

// 53
// for(let i = 1; i < 5; i++){
//     if(i === 3) continue;
//     console.log(i)
// }

// 54
// const person = {name:"Rajat"}
// function sayHi(age){
//     return `${this.name} is ${age}` 
// }
// console.log(sayHi.call(person,25))
// console.log(sayHi.bind(person,25)())

// 55
// const numbers=[1,2,3]
// numbers[6]=12;
// console.log(numbers)

// 56
// let person = { name :"Rakesh"}
// const members = [person]
// person = null
// console.log(members)

// 57

// const person ={ 
//     name:'Dinesh',
//     age: '30',
//     branch : "IT"
// }
// for(const item in person){
//     console.log(item)
// }

// 58

// const data = [2,3,4,5].map(num=>{
//     if (typeof num === 'number')return;
//     return num*2;
// })
// console.warn(data)

// 59

function getInfo(employee){
    // console.log(employee)   
    employee.name = 'Anil',
    employee.lastname = 'Singh'
}
const person = {name:'Tarun ' , lastname:'Kumar'}
console.log(person)
getInfo(person)
// console.log(person)

// 60
// Hello world

// let name  = "Hello World Sandeep "
// console.log(name);
// var alert
// alert('hello Sandeep');

// 61
let a = prompt("Please Enter the value of a ", "");
let b = prompt("please entewr the value of b", "");
var c = a + b;
console.log("The Sum of "+a+" and " +b+" is :" +c);
