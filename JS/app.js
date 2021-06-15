//FORM
const form = document.getElementById('form')
const name = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const textArea = document.getElementById('message')

const inputArr = [name, email, phone, textArea]

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${input.name} is required`)
        }else {
            showSuccess(input)
        }
    })
}

function validateName(input, message) {
    let re = /^[a-zA-Z]$/;
    if(re.test(input.value)){
        showSuccess(input);
    }else {
        showError(input, 'Name is not valid')
    }
}

function validateEmail(input, message) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showSuccess(input);
    }else {
        showError(input, 'Email is not valid')
    }
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${input.name} has to be at least ${min} characters long`)
    }else if(input.value.length > max){
        showError(input, `${input.name} has a maximum of ${max} characters`)
    }else {
        showSuccess(input)
    }
}

function validatePhone(input, message){
    let re = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
    if(re.test(input.value)){
        showSuccess(input)
    }else {
        showError(input, 'Phone number is not valid')
    }
}



form.addEventListener('submit', e => {
    e.preventDefault()
    
   checkRequired([name, email, phone, textArea]);
   validateName(name);
   checkLength(name, 3, 20);
   checkLength(textArea, 5, 200);
   validateEmail(email);
   validatePhone(phone);
})



//INTERSECTION OBSERVER//HEADINGS//
document.addEventListener('DOMContentLoaded', () => {
    let options = {
        root: null,
        threshold: 0.05
    };
    let obeserver = new IntersectionObserver(beTouching, options);
    document.querySelectorAll('.up').forEach(heading => {
        obeserver.observe(heading);
    })

});

function beTouching(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }else{
            entry.target.classList.remove('active')
        }
    })
}


document.addEventListener('DOMContentLoaded', () => {
    let options = {
        root: null,
        threshold: 0.5
    };
    let obeserver = new IntersectionObserver(leftSlide, options);
    document.querySelectorAll('.left').forEach(el => {
        obeserver.observe(el);
    })
});


function leftSlide(entries){
   entries.forEach(entry => {
       if(entry.isIntersecting){
           entry.target.classList.add('left');
       }else{
           entry.target.classList.remove('left')
       }
   })
}

document.addEventListener('DOMContentLoaded', () => {
    let options = {
        root: null,
        threshold: 0.5
    };
    let obeserver = new IntersectionObserver(rightSide, options);
    document.querySelectorAll('.right').forEach(el => {
        obeserver.observe(el)
    })
})

function rightSide(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('right')
        }else{
            entry.target.classList.remove('right')
        }
    })
}

//NAVIGATION//
const nav = document.querySelector('.navigation');
const burger = document.querySelector('.burger__btn');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
})
