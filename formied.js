const passRequired = document.querySelector('.passReq');
const cpassRequired = document.querySelector('.cpassReq');

const pField = document.querySelector('#password');
const cField = document.querySelector('#cpassword');
const form = document.querySelector('.formy');

pField.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (pField.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      passRequired.textContent = ''; // Reset the content of the message
      //emailError.className = 'error'; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

cField.addEventListener('input', function(event) {
    let p1 = pField.value;
    let p2 = cField.value;

    if(p1 == p2)
    {
        cpassRequired.textContent = '';
    }
    else {
        cpassRequired.textContent = 'The password does not match';
    }
});

  function showError() {
    if(pField.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      passRequired.textContent = 'You need to enter an password.';
    } 
     else if(pField.validity.tooShort) {
      // If the data is too short,
      // display the following error message.
      passRequired.textContent = 'A password of at least 6 characters is required';
    }};

    form.addEventListener('submit', function (event) {
        // if the email field is valid, we let the form submit
      
        if(!pField.validity.valid || cpassRequired.textContent != '') {
          // If it isn't, we display an appropriate error message
          showError();
          // Then we prevent the form from being sent by canceling the event
          event.preventDefault();
        }
      });