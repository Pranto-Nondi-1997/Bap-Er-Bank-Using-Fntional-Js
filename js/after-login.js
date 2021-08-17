 // deposit and main balance
 document.getElementById('deposit-btn').addEventListener('click', function() {
         let depositInput = document.getElementById('deposit-input');
         // console.log(depositInput.value);
         let depositBlance = document.getElementById('deposit-balance');
         // console.log(depositBlance.innerText);
         let depositTotalAmout = parseFloat(depositInput.value) + parseFloat(depositBlance.innerText);
         depositBlance.innerText = depositTotalAmout;
         let mainBalance = document.getElementById('main-balance');
         let mainBalanceTotal = parseFloat(mainBalance.innerText) + parseFloat(depositInput.value);
         mainBalance.innerText = mainBalanceTotal;
         depositInput.value = '';

     })
     // withdraw and main balance
 document.getElementById('withdraw-btn').addEventListener('click', function() {

     let withdrawInput = document.getElementById('withdraw-input');
     let withdrawBalance = document.getElementById('withdraw-balance');
     let withdrawTotalBalance = parseFloat(withdrawBalance.innerText) + parseFloat(withdrawInput.value);
     withdrawBalance.innerText = withdrawTotalBalance;
     let mainBalance = document.getElementById('main-balance');
     let mainBalanceTotal = parseFloat(mainBalance.innerText) - parseFloat(withdrawInput.value);
     mainBalance.innerText = mainBalanceTotal;
     withdrawInput.value = '';

 })