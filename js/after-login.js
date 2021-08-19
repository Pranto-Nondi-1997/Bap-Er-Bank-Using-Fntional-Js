 // deposit and main balance

 function inputField(input) {
     let inputGet = document.getElementById(input);
     let inputText = inputGet.value;
     let inputValue = parseFloat(inputText);
     inputGet.value = '';
     return inputValue;
 }

 function balanceField(balance, balanceInput) {
     let outputBlance = document.getElementById(balance);
     let outputTotalAmout = parseFloat(outputBlance.innerText) + balanceInput;
     outputBlance.innerText = outputTotalAmout;
 }

 function mainBalanceResult(originalBalance, isAdd, mainInput) {
     let mainBalance = document.getElementById(originalBalance);
     if (isAdd == true) {
         let mainBalanceTotal = parseFloat(mainBalance.innerText) + mainInput;
         mainBalance.innerText = mainBalanceTotal;
     } else {

         let mainBalanceTotal = parseFloat(mainBalance.innerText) - mainInput;
         mainBalance.innerText = mainBalanceTotal;

     }
 }

 function cuurentMomentBalance(currentTimeBalance) {
     let currentBalance = document.getElementById(currentTimeBalance);
     let currentBalanceValue = parseFloat(currentBalance.innerText);
     currentBalance.innerText = currentBalanceValue;
     return currentBalanceValue;
 }

 document.getElementById('deposit-btn').addEventListener('click', function() {
     let depositInput = inputField('deposit-input');
     if (depositInput > 0) {

         balanceField('deposit-balance', depositInput);

         mainBalanceResult('main-balance', true, depositInput)
     }
 })

 document.getElementById('withdraw-btn').addEventListener('click', function() {

     let withdrawInput = inputField('withdraw-input');
     let actualCurrentBalance = cuurentMomentBalance('main-balance');
     if (withdrawInput > 0 && withdrawInput <= actualCurrentBalance) {

         balanceField('withdraw-balance', withdrawInput);

         mainBalanceResult('main-balance', false, withdrawInput);
     }


 })