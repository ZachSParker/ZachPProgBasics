/*Assignment: Apply what you've learned to predict the following.

Directions

Open a new VS Code file.
Save it as a .js type and name it LastName_FirstName_JSPredict
Using comments (use two forward slashes --> //), answer the predict questions.
Zip and upload the file. source: https://login.codingdojo.com/m/612/15814/115706 */

function myBirthYearFunc(){// code snippet 1
    console.log("I was born in" + 1980);// no " " between the string and year 
}
myBirthYearFunc();// on this line the function is called and "I was born in1980" will be output to the console

function myBirthYearFunc(birthYearInput){//function passes in a year parameter when the function is called
    console.log("I was born in" + birthYearInput);//birthYearInput has a value when the function is called and passed through as a parameter
}
myBirthYearFunc(1980);// function is called and "1980" is passed through the function myBirthYearFunc() . console will output "I was born in1980"

function add(num1, num2){//this function passes in 2 integers you want to add together 
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;// new variable that combines num1 and num2
    console.log(sum);//returns the sum value
}
add(10, 20);/*function is called and the integers 10 and 20 are passed though add(), console outputs : 
Summing Numbers!
num1 is: 10
num2 is: 20
30*/



