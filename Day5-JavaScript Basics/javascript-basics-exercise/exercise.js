const txt=document.querySelector('.js-counter-text');
const incBtn=document.querySelector('.js-increment-btn');
const decBtn=document.querySelector('.js-decrement-btn');

let counter=0;

incBtn.addEventListener('click',function(){
    counter=counter+1;
    txt.textContent=counter;
})

decBtn.addEventListener('click',function(){
    if (counter>0){
        counter=counter-1;
        txt.textContent=counter;
    }
})

const ageInput=document.querySelector('.js-age-input');
const calculateBtn=document.querySelector('.js-calculate-btn');
const result=document.querySelector('.js-result');

calculateBtn.addEventListener('click',function(){
    let age=Number(ageInput.value);
    result.textContent=age*7;
})