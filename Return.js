
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
/* 
     hello 
     dojo */

function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
/*
     variables    Datos
     result       hello(15)   
     */

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
/* 
     variables     datos
     result        numPlus(18)
*/

var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
/*     
     variables   datos
     num         15
     result      logAndReturn(12)
*/

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
/* 
     variables   datos
     num         15
     result      timesTwo(14)
*/

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
/* 
     variables   datos
      y          num*2
     result      timesTwoAgain(8)
*/

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))


 function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))


 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNumscopy(3,5);
console.log('result is', result);
/*
     variables   datos
     var sum     num1 + num2;
     result      sumNums(2,3) + sumNumscopy(3,5)
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
/*
     variables   datos
     var sum     num1 + num2;
     result      sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
*/
