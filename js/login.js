// search: form submit reloading the page

// step 1: set event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step 2: prevent default behaviour (reloading browser)
    event.preventDefault();
    // step 3: get the phone & pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // step 4: validate phone and pin
    // this is not the ideal way
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in!');
        window.location.href = 'home.html'
    }
    else{
        alert('Wrong phone number or pin');
    }

});