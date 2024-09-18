document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashoutPin = document.getElementById('cash-out-pin').value;

    if(cashoutPin === '1234'){
        console.log('Your cashout successful');
        const cashoutAmount = document.getElementById('input-cash-out').value;
        const accountBalance = document.getElementById('account-balance').innerText;

        const cashoutAmountNumber = parseFloat(cashoutAmount);
        const accountBalanceNumber = parseFloat(accountBalance);

        const cashoutNewBalance = accountBalanceNumber - cashoutAmountNumber;
        document.getElementById('account-balance').innerText = cashoutNewBalance;
    }
    else{
        alert('please provide correct pin number');
    }
});