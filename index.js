const celToFeh = (val) => {
    const result = (val * 9 / 5) + 32;
    console.log( result);
}

const fehToCel = (val) => {
    const result = (val - 32) + 5 / 9;
    console.log( result);
}

const area = (val) => {
    const result = 3.14 * val * val;
    console.log( result);
}

const isOddEven = (val) => {
    if (val % 2 == 0)
        console.log ("Number is Even")
    else
        console.log("Number is Odd")

}

const isPrime = (val) => {
    for (i = 2; i < val / 2; i++) {
        if (val % i === 0) {
            console.log( "Number is not Prime");
        }
    }
    console.log("Number is Prime");
}

const isArmstrong = (val) => {
    len = val.toString().length;
    temp = val;
    sum = 0;
    while (temp > 0) {
        digit = temp % 10;
        sum = sum + Math.pow(digit, len);
        temp = parseInt(temp / 10);
    }
    if (sum == val)
        console.log( "Number is Armstrong");
    else
       console.log("Number is not Armstrong");
}

const noOfDigit = (val)=>{
    console.log( val.toString().length);
}

const sumOfDigit = (val)=>{
    str = val.toString();
    sum = 0;
    for(i of str){
        sum += parseInt(i);
    }
    console.log("Sum of Digits "+sum);
}

const checkPN = (val)=>{
    if(val<0)
        console.log( "Number is Negative")
    else
        console.log( "Number is Positive")
}

const max2=(val1,val2)=>{
    if (val1>val2) 
    {
        console.log( "grater number is "+val1)
    }
    else
    {
        console.log ("grater number is "+val2)
    }
}

const max3=(val1,val2,val3)=>{
    if (val1 >= val2 && val1 >= val3) {
        console.log( val1);
    } else if (val2 >= val1 && val2 >= val3) {
        console.log( val2);
    } else {
        console.log (val3);
    }
}

const pali=(val)=> {
    num= val.toString();
    reverse= num.split('').reverse().join('');
    if (val==num) {
        console.log("number is palidrome "+val)
    } else {
        console.log("number is not palidrome "+val)
    }
  }


module.exports = { celToFeh, fehToCel, area, isOddEven, isPrime, isArmstrong, noOfDigit, sumOfDigit,checkPN ,max2 ,max3,pali}
