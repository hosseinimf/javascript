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
    emailPhone() {
        return `${this.email} ${this.phone}`;
    }
}
var personList = [];

 
var submit = document.getElementById("submit");
submit.addEventListener("click", submitFunc);

function addToList(list, person) {
    list.push(person);
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
    const lblEmail = document.createElement('label');
    const lblPhone = document.createElement('label');
    const lblAddress = document.createElement('label');
    const divPhone = document.createElement('div');
    const divAddress = document.createElement('div');
    divAddress.classList.add('address', 'col-md-5');
    const divAdd = document.createElement('div');

    divemail.innerText = 'Email :  ';
    divPhone.innerText = 'Phone :  ';
    divAdd.innerText = 'Address :  ';

    lblAddress.innerText = `${person.Address()}`;
    lblPhone.innerText = `${person.phone}`;
    lblEmail.innerText = `${person.email}`;

    divemail.append(lblEmail);
    divPhone.append(lblPhone);
    divAdd.append(lblAddress);
    divEmailPhone.append(divemail, divPhone);
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
    
    div.append(lbl, btnEdit, btnTrash);
    li.append(div, divDetails);

    return li;
}

function submitFunc() {
    person1 = CreatePerson();

    
    const maindiv = document.getElementById('list-style');

    const orderList = document.createElement('ol');
    orderList.classList.add('list');
    orderList.append(renderLi(person1));
    maindiv.append(orderList);
    
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











// const item = document.getElementById("first-name").value
// function createList(it) {
    
//     var text = document.createTextNode(it)
//     var newItem = document.createElement("li")
//     newItem.appendChild(text)
//     document.getElementById("lists").appendChild(newItem)
// }





// var firstName = document.getElementById("first-name").value
// var lastName = document.getElementById("last-name").value
// var email = document.getElementById("email").value
// var phone = document.getElementById("phone").value
// var street = document.getElementById("street").value
// var city = document.getElementById("city").value
// var zipcode = document.getElementById("zipcode").value











