//1	Create an array called ages that contains the following values: 
//3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log(ages);

    //1a Programmatically subtract the value of the first element in 
    //the array from the value in the last element of the array.
    var result = (ages[ages.length - 1] - ages[0]);
            console.log(result);

    //1b Add a new age to your array and repeat the step above to 
    //ensure it is dynamic. 
        ages.push(41);
            var result = (ages[ages.length - 1] - ages[0]);
                console.log(result);

    //1c Use a loop to iterate through the array and calculate the 
    //average age. 
    function getAverage (ages) {    
    for (var i = 0, sum = 0; i < ages.length; i++) {
        sum += ages[i];
      }
      console.log(sum / i);
    }
    getAverage(ages);

//2 Create an array called names that contains the following values: 
//‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

//2a Use a loop to iterate through the array and calculate the 
//average number of letters per name. 
function findAverageLetters(array){
    let charSum = 0;

    for (let i = 0; i < names.length; i++){
        charSum = charSum + array[i].length;
    } 
    console.log(charSum); //returns 23
    
    let averageLength = charSum / data.length;
    return Math.round(averageLength);

} console.log(findAverageLetters(names)); //returns 4 (unrounded value is 3.8333333)

//2b Use a loop to iterate through the array again and concatenate 
//all the names together, separated by spaces. 
let element = "";
for (let i = 0; i < names.length; i++){
    element = element + names[i] + " ";
}
console.log(element); //returns Sam Tommy Tim Sally Buck Bob

//3 How do you access the last element of any array?
//arrayName[arrayName.length - 1]
    console.log(names[names.length - 1]);

//4 How do you access the first element of any array?
//arrayName[0]
    console.log(names[0]);

//5 Create a new array called nameLengths. Write a loop to iterate 
//over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = names.map(function(element) {
    return element.length;
}); 
names.forEach(function(element) {
    console.log(element.length);
});
names.forEach(function(element) {
    console.log(element, element.length);
});

//6 Write a loop to iterate over the nameLengths array and calculate 
//the sum of all the elements in the array. 
var thisSum = 0;
    for (let i = 0; i < nameLengths.length; i++) {
        thisSum += nameLengths[i];
    }
    console.log(thisSum);

//7 Write a function that takes two parameters, word and n, as 
//arguments and returns the word concatenated to itself n number of 
//times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function 
//to return ‘HelloHelloHello’).
function myFunction (word, n) {
    let string = word.repeat(n);
    return string;
} 
console.log(helloWorld("Hello", 3)); //returns HelloHelloHello

//8 Write a function that takes two parameters, firstName and 
//lastName, and returns a full name.
function createFullName (firstName, lastName) {
    return firstName + ' ' + lastName; 
} 

console.log(createFullName('Julie', 'Ramos'));

//9 Write a function that takes an array of numbers and returns true 
//if the sum of all the numbers in the array is greater than 100.
function oneHundred(array){
    let sum = 0 
    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    if (sum > 100) {
    return true; 
    } else {
        return false;
    }
}
console.log(oneHundred(ages));

//10 Write a function that takes an array of numbers and returns the 
//average of all the elements in the array.
function averageOf(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return(sum / array.length);
}
    console.log (averageOf(ages));



// 11 Write a function that takes two arrays of numbers and returns 
//true if the average of the elements in the first array is greater 
//than the average of the elements in the second array.

function findAverage (arrayOne, arrayTwo) {
    var totalOne = 0; 
   for (var i = 0; i < arrayOne.length; i++) {
     totalOne += arrayOne[i];
   }
   var totalTwo = 0;
   for (var i = 0; i < arrayTwo.length; i++) {
       totalTwo += arrayTwo[i];
   }
   var averageOne = totalOne / arrayOne.length;
   var averageTwo = totalTwo / arrayTwo.length;
   if (averageOne > averageTwo) {
     return true;
   } 
   else {
     return false;
   }
 }

//12 Write a function called willBuyDrink that takes a boolean 
//isHotOutside, and a number moneyInPocket, and returns true if it 
//is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
} console.log(willBuyDrink(true, 11.00)); 
//returns true

// 13 Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

//Created a function if I will go outside depending on the weather and the temperature
//using notRainy and temperatureOutside
function willGoOutside (notRainy, temperatureOutside) {
    if (notRainy === true && temperatureOutside >= 65) {
        return true;
    } else {
        return false;
    }
} console.log(willGoOutside(true, 68)); 
//returns true