var preTipTotal = 35;
var tipPerc = 0.10;


var billTip = preTipTotal * tipPerc;

var receipt = 'Meal: ' + preTipTotal + 'Tip: ' + billTip + 'Total: ' + (preTipTotal + billTip);

console.log(receipt);