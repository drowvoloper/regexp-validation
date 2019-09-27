function validation () {
  const firstName  = document.getElementById('firstName').value;
  const lastName  = document.getElementById('lastName').value;
  const username  = document.getElementById('username').value;
  const phoneNumber  = document.getElementById('phoneNumber').value;
  const email  = document.getElementById('email').value;
  const password  = document.getElementById('password').value;
  const repeatPassword  = document.getElementById('repeatPassword').value;
  const errorsOutput  = document.getElementById('errorsOutput');

  if (firstName.match(/[^a-zA-Z]/) || !firstName.match(/[a-zA-Z]{3,}/)) {
    errorsOutput.innerText = 'Please, enter a valid First name';
    errorsOutput.style.backgroundColor = 'coral';
    return false;
  } else {
    errorsOutput.innerText = '';
    errorsOutput.style.backgroundColor = '';
  }

  if (lastName.match(/[^a-zA-Z]/) || !lastName.match(/[a-zA-Z]{3,}/)) {
    errorsOutput.innerText = 'Please, enter a valid Last name';
    errorsOutput.style.backgroundColor = 'coral';
    return false;
  } else {
    errorsOutput.innerText = '';
    errorsOutput.style.backgroundColor = '';
  }
    
  if (username.match(/[^\w\_]/) || !username.match(/[a-zA-Z]/)) {
    errorsOutput.innerText = 'Username must contain only letters (at least one), numbers and uderscores.';
    errorsOutput.style.backgroundColor = 'coral';
    return false;
  } else {
    errorsOutput.innerText = '';
    errorsOutput.style.backgroundColor = '';
  }
    
  if (phoneNumber.match(/\D/) || !phoneNumber.match(/^[\d]{9}$/)) { 
    errorsOutput.innerText = 'Please enter a valid phone number';
    errorsOutput.style.backgroundColor = 'coral';
    return false;
  } else {
    errorsOutput.innerText = '';
    errorsOutput.style.backgroundColor = '';
  }
    
  
  if (!email.match(/[\w|\.]+\@\w+\.\w+/)) {
    errorsOutput.innerText = 'Please enter a valid email';
    errorsOutput.style.backgroundColor = 'coral';
    return false;
  } else {
    errorsOutput.innerText = '';
    errorsOutput.style.backgroundColor = '';
  }
    
  if (!password.match(/(?:[a-z]+)(?:\d+)(?:[^a-z0-9]+)/gi)
    || password.length < 8) {
    errorsOutput.innerText = 'Password must contain lower and uppercase letters, numbers and special characters and be at least 8 characters long.';
    errorsOutput.style.backgroundColor = 'coral';
    return false;
  } else {
    errorsOutput.innerText = '';
    errorsOutput.style.backgroundColor = '';
  }
    
  if (repeatPassword !== password) {
    errorsOutput.innerText = 'Please, repeat password';
    errorsOutput.style.backgroundColor = 'coral';
    return false;
  } else {
    errorsOutput.innerText = '';
    errorsOutput.style.backgroundColor = '';
  }
}

