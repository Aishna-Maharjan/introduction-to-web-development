// Javascript variables

var fullName='Aishna Maharjan';
let address='Kathmandu,Nepal';
const bloodGroup='B+';

console.log('Full Name:',fullName);
console.log('Address:',address);
console.log('Blood Group:',bloodGroup);

//Data Types
let name= 'Aishna';//string
let age=19; //Number
let isStudent= true; //Boolean
let hobbies=['Coding','Traveling','Cooking'];//Array

console.log(hobbies[0]);

let user={
    name:'Aishna',
    age:19, 
    isStudent: true,
    hobbies:['Coding','Traveling','Cooking']
};//object

console.log(user['name']);
console.log(user.name);

function greet(name){
    console.log('Welcome',name);
}
greet('Aishna');

//DOM Manipulation

const headingElementById=document.getElementById('heading-2');
console.log('Heading Element By Id',headingElementById);

const headingElementByQuery=document.querySelector('#heading-2');
console.log('heading element by query selector',headingElementByQuery);

headingElementByQuery.textContent='Get element by query selector';
headingElementByQuery.style.color='blue';
headingElementByQuery.style.fontsize='24px';

const buttonElement=document.querySelector('.btn');

buttonElement.addEventListener('click',function(){
    alert ('Button clicked');
    console.log('Button clicked');
})