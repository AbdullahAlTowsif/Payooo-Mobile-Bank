// add money to the account

// add an event handler to the button
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;
    const inputPin = document.getElementById('input-pin-number').value;

    if(inputPin === '1234'){
        console.log('adding money to your account');
        // step 4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        // step 5: add balance
        const addMoneyNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;

        // step 6: update the account balance
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed to add money! Please try again!!!');
    }
});