 //Login button event handler
 const loginArea = document.getElementById("login-area");
 const loginBtn = document.getElementById("login");
 loginBtn.addEventListener('click',()=>{
   loginArea.style.display = 'none';
   const transactionArea = document.getElementById("transaction-area");
   transactionArea.style.display = 'block';
 })

//Deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click',()=>{
 const depositNumber = getInputAmount("deposite-Amount");
 if (depositNumber < 0) {
   alert("Deposite number is not negative!")
 }else{
  UpdateSpanText("currentDeposit",depositNumber);
  UpdateSpanText("currentBalance",depositNumber);
  document.getElementById("deposite-Amount").value = "";
 }

 // const depositeAmount = document.getElementById("deposite-Amount").value;
 // const depositNumber = parseFloat(depositeAmount);

 // const currentDeposit = document.getElementById("currentDeposit").innerText;
 // const currentDepositNumber = parseFloat(currentDeposit);
 // const totalDeposit = depositNumber + currentDepositNumber;
 // document.getElementById("currentDeposit").innerText = totalDeposit;



})
//withdraw btn event handler
const withDrawBtn = document.getElementById("addWithdraw");
withDrawBtn.addEventListener('click', ()=>{
 const withdrawNumber = getInputAmount("withdrawAmount");
 if (withdrawNumber < 0) {
  alert("withdraw number is not negative!")
}else{
  UpdateSpanText("currentWithdraw",withdrawNumber);
  UpdateSpanText("currentBalance",-1 * withdrawNumber);
}

 // const currentNumber = document.getElementById("currentBalance").innerText;
 // debitBalance(withdrawNumber,currentNumber)


 document.getElementById("withdrawAmount").value = "";
 
})
//debit amount from main balance
// function debitBalance(withdrawNumber,currentNumber ) {
//   const updateBalance = currentNumber - withdrawNumber;
//   const newBalance = document.getElementById("currentBalance").innerText = updateBalance;
// }

//deposit and withdraw input amount
function getInputAmount(id) {
 const Amount =document.getElementById(id).value;
 const withdrawNumber = parseFloat(Amount);
 return withdrawNumber;
}

//deposit and current balance function
function UpdateSpanText(id,depositNumber) {
 const current = document.getElementById(id).innerText;
 const currentNumber = parseFloat(current);
 const total = depositNumber + currentNumber;
 document.getElementById(id).innerText = total;
}
