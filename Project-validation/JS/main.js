// const myForm = document.querySelector('#form-pg');
// const nameInput = document.querySelector('#Fullname');
// const emailInput = document.querySelector('#mail');
// const passwordInput = document.querySelector('#pword');
// const rePasswordInput = document.querySelector('#repword');
// const msg = document.querySelector('.msg')

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {  
    

//     if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === ''|| rePasswordInput.value === '') {
//         // alert('Enter the required fields');
//         e.preventDefault();
//         msg.classList.add('error')
//         msg.innerHTML = 'Please enter all Fields'

//         setTimeout(() => {
//             msg.remove()
//         }, 1000);
//     } else {
//        console.log('success');
//     }
// }

let username =  document.getElementById('Fullname');
let email = document.getElementById('mail');
let password = document.getElementById('pword');
let rePassword = document.getElementById('repword');
let form = document.getElementById('form-pg')
let errorMsg = document.getElementsByClassName('msg');
let failureIcon = document.getElementsByClassName('failure-icon');
let successIcon = document.getElementsByClassName('success-icon');


//EASIER WAY TO AVOID REPETITION OF WORDS
// let id = (id) => {
//     return document.getElementById(id);
// };

// let classes = (classes) => {
//     return document.getElementsByClassName(classes);
// }

// let username =  id('Fullname'),
//     email = id('mail'),
//     password = id('pword'),
//     rePassword = id('repword'),
//     form = id('form-pg'),
//     errorMsg = classes('msg');
//     failureIcon = classes('failure-icon');
//     successIcon = classes('success-icon');


    form.addEventListener('submit', (e) =>{
        e.preventDefault();   //To avoid unexpected flickering
        
        engine(username, 0, 'Username cannot be blank')
        engine(email, 1, 'Email cannot be blank')
        engine(password, 2, 'Password cannot be blank')
        engine(rePassword, 3, 'Confirm the above password')
    });

    let engine = (id, serial, message) =>{
        if(id.value === ''){
            errorMsg[serial].classList.add('error');
            errorMsg[serial].innerHTML = message;
            failureIcon[serial].style.opacity = 1;
            successIcon[serial].style.opacity = 0;

        }else{
            errorMsg[serial].innerHTML = "";
            failureIcon[serial].style.opacity = 0;
            successIcon[serial].style.opacity = 1;
        }
    }
      

       
