document.getElementById('button-login').addEventListener('click', function (event) {
    // prevent reloading 
    event.preventDefault();

    // get phone number 
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if (phoneNumber === '01812345678' && pinNumber === '1234') {
        window.location.href = '/home.html'
    }
    else {
        alert("Wrong pin or number ! Try- number - 01812345678 PIn - 1234 :)")
    }

})