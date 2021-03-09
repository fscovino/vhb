
const alertName = document.querySelector("#nameError");
alertName.style.display = 'none';
const alertEmail = document.querySelector("#emailError");
alertEmail.style.display = 'none';
const alertMessage = document.querySelector("#messageError");
alertMessage.style.display = 'none';


//Get the button tag and assing it to variable button
const button = document.querySelector('#submit');

//Validation function 
function formValidation(e) {
  //input full name
  const nameInput = document.querySelector('#name').value;
  //input field for email
  const emailInput = document.querySelector('#email').value;
  //input field for message
  const messageInput = document.querySelector('#comments').value;

 e.preventDefault(); //prevent default behaviour of the form

    if (nameInput === "") {
      alertName.style.display = 'block';
    }

    if (emailInput === "") {
      alertEmail.style.display = 'block';
    }

    if (messageInput === "") {
      alertMessage.style.display = 'block';
    }
}

button.addEventListener('click', formValidation);

