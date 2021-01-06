class Person {
    constructor (firstName, lastName, email, phone, street, city, zipcode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.city = city;
        this.zipcode = zipcode;
    }
    Address() {
        return `${this.street}, ${this.city} ${this.zipcode}`;
    }
    FullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

function CreatePerson() {
    var person = new Person(
        document.getElementById("first-name").value, 
        document.getElementById("last-name").value, 
        document.getElementById("email").value,
        document.getElementById("phone").value,
        document.getElementById("street").value,
        document.getElementById("city").value,
        document.getElementById("zipcode").value,
        )
        return person;
}


const fNameInput = document.getElementById('first-name');
const fNameErrorElement = document.getElementById('firstNameError');
const lNameInput = document.getElementById('last-name');
const lNameErrorElement = document.getElementById('lastNameError');
const emailInput = document.getElementById('email');
const emailErrorElement = document.getElementById('emailError');
const phoneInput = document.getElementById('phone');
const phoneErrorElement = document.getElementById('phoneError');
const streetInput = document.getElementById('street');
const streetErrorElement = document.getElementById('streetError');


function validateInput(inputElement, errorElement, errorMessage) {
    errorElement.innerText = '';
    if (inputElement.value === '' || inputElement.value == null) {
        errorElement.innerText = errorMessage;
        return false;
    }else
    { return true; }
}

const validateEmail = (inputElement, errorElement, errorMessage)  => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(inputElement.value.toLowerCase())) {
        errorElement.innerText = '';
        return true;
    }else {
        errorElement.innerText = errorMessage;
        return false;
    }
}

const validatePhone = (phoneNumber, phoneErrorElement) => {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (re.test(phoneNumber)){
        phoneErrorElement.innerText = '';
    }else {
        phoneErrorElement.innerText = 'invalid phone number! Phone number must have 10-12 digits!';
    }
}



const addBtn = document.getElementById('add');
addBtn.addEventListener('click', () => {
    validateInput(fNameInput, fNameErrorElement, 'name is required' );
    validateInput(lNameInput, lNameErrorElement, 'last name is required');
    validateEmail(emailInput, emailErrorElement, 'email is invalid');
    validatePhone(phoneInput.value, phoneErrorElement);
    validateInput(streetInput, streetErrorElement, 'street is required');
})

