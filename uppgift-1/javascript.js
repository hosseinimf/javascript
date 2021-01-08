class Person {
    constructor (id, firstName, lastName, email, phone, street, city, zipcode) {
        this.id = id;
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
        uuid(),
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

function renderLi(person) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const lbl = document.createElement('label');
    const btnEdit = document.createElement('button');
    const btnTrash = document.createElement('button');
    const divDetails = document.createElement('div');
    divDetails.classList.add('item-details');
    const divRow = document.createElement('div');
    divRow.classList.add('row');
    const divEmailPhone = document.createElement('div');
    divEmailPhone.classList.add('email-phone', 'col-md-5');
    const divemail = document.createElement('div');
    const divId = document.createElement('div');
    const lblId = document.createElement('label');
    const lblEmail = document.createElement('label');
    const lblPhone = document.createElement('label');
    const lblAddress = document.createElement('label');
    const divPhone = document.createElement('div');
    const divAddress = document.createElement('div');
    divAddress.classList.add('address', 'col-md-5');
    const divAdd = document.createElement('div');

    divId.innerText = 'Id : ';
    divemail.innerText = 'Email :  ';
    divPhone.innerText = 'Phone :  ';
    divAdd.innerText = 'Address :  ';

    lblAddress.innerText = `${person.Address()}`;
    lblPhone.innerText = `${person.phone}`;
    lblEmail.innerText = `${person.email}`;
    lblId.innerText = `${person.id}`;

    divId.append(lblId);
    divemail.append(lblEmail);
    divPhone.append(lblPhone);
    divAdd.append(lblAddress);
    divEmailPhone.append(divId, divemail, divPhone);
    divAddress.append(divAdd);
    divRow.append(divEmailPhone, divAddress);
    divDetails.append(divRow);

    li.classList.add('li');
    div.classList.add('item-name');
    btnEdit.classList.add('btn');
    btnTrash.classList.add('btn');
    btnEdit.innerHTML = '<i class="far fa-edit"></i>';
    btnTrash.innerHTML = '<i class="fa fa-trash"></i>';
    lbl.innerText = `${person.firstName} ${person.lastName}`;

    btnTrash.addEventListener('click', () => { removeFunc(person) });
    divDetails.addEventListener('click', () => { prepareEditFunc(person) });
    lbl.addEventListener('click', () => { prepareEditFunc(person) });
    btnEdit.addEventListener('click', () => { editFunc(person) });
    
    div.append(lbl, btnEdit, btnTrash);
    li.append(div, divDetails);

    $(document).ready(function(){
        $(divDetails).hide();
    });

    $(document).ready(function(){
        $(lbl).click(function(){
            $(divDetails).toggle();
        });
      });

    return li;
}

var personList = [];

var submit = document.getElementById("submit");
submit.addEventListener("click", submitFunc);

function submitFunc() {
    if (validateForm()) {
        person1 = CreatePerson();
        emailErrorElementt.innerText = '';
        if (compare(person1.email, personList)){
            emailErrorElementt.innerText = 'this email is already registered';
        }else {
            personList.push(person1);
            const orderList = document.getElementById('list');
            orderList.innerText = '';

            for (const item of personList) {
                orderList.append(renderLi(item));
            }
        } 
    }else{
        emailErrorElementt.innerText = '';
    }
}

const compare = (email, list) => {
    const exist = false;
    for (const item of list) {
        if (email === item.email) {
            return true;
        }
    }
    return exist;
}

const editFunc = (person) => {
    const index = personList.indexOf(person);
    if (validateForm()) {
        
        personList[index].firstName = fNameInput.value;
        personList[index].lastName = lNameInput.value;
        personList[index].email = emailInput.value;
        personList[index].phone = phoneInput.value;
        personList[index].street = streetInput.value;
        personList[index].city = cityInput.value;
        personList[index].zipcode = postalInput.value;
        
        const orderList = document.getElementById('list');
        orderList.innerText = '';

        for (const item of personList) {
            orderList.append(renderLi(item));
        }
    } 
}

function removeFunc(person) {
    const index = personList.indexOf(person);
    personList.splice(index, 1);

    const orderList = document.getElementById('list');
    orderList.innerText = '';

    for (const item of personList) {
        orderList.append(renderLi(item));
    }
}
 
const prepareEditFunc = (person) => {
    fNameInput.value = person.firstName;
    lNameInput.value = person.lastName;
    emailInput.value = person.email;
    phoneInput.value = person.phone;
    streetInput.value = person.street;
    cityInput.value = person.city;
    postalInput.value = person.zipcode;

    fNameInput.select();
    return personList.indexOf(person);
}




const fNameInput = document.getElementById('first-name');
const fNameErrorElement = document.getElementById('firstNameError');
const lNameInput = document.getElementById('last-name');
const lNameErrorElement = document.getElementById('lastNameError');
const emailInput = document.getElementById('email');
const emailErrorElement = document.getElementById('emailError');
const emailErrorElementt = document.getElementById('emailErrort');
const phoneInput = document.getElementById('phone');
const phoneErrorElement = document.getElementById('phoneError');
const streetInput = document.getElementById('street');
const streetErrorElement = document.getElementById('streetError');
const cityInput = document.getElementById('city');
const cityErrorElement = document.getElementById('cityError');
const postalInput = document.getElementById('zipcode');
const postalErrorElement = document.getElementById('zipcodeError');

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
        return true;
    }else {
        phoneErrorElement.innerText = 'invalid phone number! Phone number must have 10-12 digits!';
        return false;
    }
}

const validatePostal = (inputElement, errorElement, errorMessage) => {
    var n = inputElement.value.length;
    errorElement.innerText = '';
    if (n === 5){
        return true;
    }else {
        errorElement.innerText = errorMessage;
        return false;
    }
}

const validateForm = () => {
    var isName = validateInput(fNameInput, fNameErrorElement, 'name is required' );
    var isFamily = validateInput(lNameInput, lNameErrorElement, 'last name is required');
    var isEmail = validateEmail(emailInput, emailErrorElement, 'email is invalid');
    var isPhone = validatePhone(phoneInput.value, phoneErrorElement);
    var isStreet = validateInput(streetInput, streetErrorElement, 'street is required');
    var isCity = validateInput(cityInput, cityErrorElement, 'city is required');
    var isPostal = validatePostal(postalInput, postalErrorElement, 'postal code must have 5 digits');

    if (isName && isFamily && isEmail && isPhone && isStreet && isCity && isPostal){
        return true;
    }else{
        return false;
    }
}

function uuid() {
    return 'SExxxxx-Hxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 10 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(10);
    });
  }

  
  

