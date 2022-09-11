let num = -1367;
let temp = num;
let lastDigit;
let reverseNumber = 0;

while (temp>0 || temp<0){
    lastDigit = temp % 10;
    //console.log(lastDigit);
    temp = (temp-lastDigit)/10;
    reverseNumber = (reverseNumber * 10) + lastDigit;
}
console.log(reverseNumber);



