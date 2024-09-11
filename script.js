// Selecting necessary DOM elements
const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('custom-tip');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetButton = document.getElementById('reset');
const peopleError = document.getElementById('people-error');

let tipPercentage = 0; // set it to 0 will use it later in calculation

// Event listener for tip percentage buttons
tipButtons.forEach(btn=>{ //loop through each tip button
  
  btn.addEventListener('click',function(){//whichever button was clicked get its value turn it into number and set that to tip percentage
    tipPercentage=parseFloat(this.getAttribute('data-tip'))
    
    calculateTip()//call for this function
 
  });

})
// for the custom tip input add an event listener
customTipInput.addEventListener('input', function(){
  tipPercentage=parseFloat(this.value)|| 0; // make the value typed in, a number or if non is typed it is equal to 0
    
    calculateTip()//call for this function

})
// add event listener for both the bills and number of people
billInput.addEventListener('input',calculateTip)
peopleInput.addEventListener('input',calculateTip)

// reset button eventListener
resetButton.addEventListener('click', function(){
  // self explanatory i guess :::reset all the values to their original state
  billInput.value='';
  peopleInput.value='';
  customTipInput.value='';
  totalAmountDisplay.textContent="$0.00"
  tipAmountDisplay.textContent="$0.00"
  peopleError.classList.remove('active');// if the error message is displayed remove it using the active class
  
})

//  calculation logic
function calculateTip() {
  
const bill= parseFloat(billInput.value)// change whatever was typed into a number
const people= parseFloat(peopleInput.value)// change whatever was typed into a number
  
// error message when people == 0

if (people===0) {
  peopleError.classList.add('active')
  return;
} else{
  peopleError.classList.remove('active')
}
  // if number of people and bill and tip percent is above 0
  if(people >0 && bill >0 && tipPercentage >0){
    
    // then the tip amount will be 
     const tipAmount= (bill*(tipPercentage/100)) / people ;
    // and the total amount will be
     const totalAmount= (bill / people) + tipAmount;
    
    // display this calculation on two decimal place
   tipAmountDisplay.textContent=`$${tipAmount.toFixed(2)}`;         totalAmountDisplay.textContent=`$${totalAmount.toFixed(2)}`;
    
  }
  
  
}
