function changeBase(number, fromBase, toBase) {
    const prompt = require('prompt-sync')();
    var number = prompt("enter your  Number : ");
   var fromBase = prompt("enter your  fromBase : ");
   var toBase = prompt("enter your toBase : ");
   console.log("To Conversiton ",fromBase,toBase);
    if (fromBase == 10)
        return (parseInt(number)).toString(toBase)
    else if (toBase == 10)
        return parseInt(number, fromBase);
    else {
        var numberInDecimal = parseInt(number, fromBase);
        return parseInt(numberInDecimal).toString(toBase);
    }
}
var stored = changeBase()
console.log(stored)