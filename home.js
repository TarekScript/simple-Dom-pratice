document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // get inputed money 
    const addMonetInput = document.getElementById('input-add-money').value;

    // get the pin number provided 
    const pinNumberInput = document.getElementById('input-pin-number').value;
    if (pinNumberInput === '1234') {

        // get balance 
        const balance = document.getElementById('account-balance').innerText;
        const addMoneyNumber = parseFloat(addMonetInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        // update the balance 
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Wrong pin! Try- 1234 :)')
    }
})

// cash out section 
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutInput = document.getElementById('input-cash-out').value;
    const cashOutInputNumber = parseFloat(cashOutInput);
    const cashOutPin = document.getElementById('cash-out-pin').value;
    if (cashOutPin === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutInputNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Wrong pin! Try- 1234 :)')
    }
})

// toggle between add money and cashOut 
// toggle to cash out 
document.getElementById('btn-show-cash-out').addEventListener('click', function () {
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden')
})
// toggle to add money
document.getElementById('btn-show-add-money').addEventListener('click', function () {
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})

// log out 
document.getElementById('log-out').addEventListener('click', function () {
    window.location.href = '/index.html'
})
