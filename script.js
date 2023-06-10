/*1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
Use the if / else construct available in Javascript.*/

function maxOfTwoNumbers (num1, num2){
    let resultado 
    if (num1 > num2){
        resultado = "The largest number is " + num1
        return resultado
    } else if (num1 < num2){
        resultado = "The largest number is " + num2
        return resultado 
    } else {
        resultado = "Both numbers are equals" 
        return resultado
    }
}
console.log(maxOfTwoNumbers(3,3))

console.log("********************************************")

/*2. Define a function maxOfThree that takes three numbers as arguments and returns the largest.*/

    function maxOfThree (numI, numII, numIII){
        let maxNum = Math.max(numI,numII,numIII);
        return maxNum;
        /*let arrNumsSorted = [numI,numII,numIII].sort();
        console.log(arrNumsSorted)
        let maxNum = [arrNumsSorted[arrNumsSorted.length-1]].toString();
        return maxNum;*/
    }

    console.log(maxOfThree(-6, -1, -2000));