
module.exports = function toReadable (number) {
  let firstArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let secondArr = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let thirdArr = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let forthArr = ['','one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']; 
   let NumberStr = '' + number;
 if(number <= 9){
    return firstArr[number];
 } else if(number >= 10 && number <=19){
   return secondArr[NumberStr[1]];
 } else if(number % 10 == 0 && number < 100){
  return thirdArr[NumberStr[0]];
 } else if(number % 10 !== 0 && number < 100){
  return thirdArr[NumberStr[0]] + ' ' + firstArr[NumberStr[1]];
 } else if(number % 100 === 0){
   return forthArr[NumberStr[0]];
  }else if(number % 10 === 0 && number > 100){
    return forthArr[NumberStr[0]] + ' ' + thirdArr[NumberStr[1]];
   } else {
     if(NumberStr[1] == 1){
       return forthArr[NumberStr[0]] + ' ' + secondArr[NumberStr[2]];
     } else if(NumberStr[1] == 0){
       return forthArr[NumberStr[0]] + ' ' + firstArr[NumberStr[2]];
     }
     return forthArr[NumberStr[0]] + ' ' + thirdArr[NumberStr[1]] + ' ' + firstArr[NumberStr[2]].trim();
   }
  }

  // if(number > 100 && number % 10 !==0)