
/*A local fitness coach and a mechanical engineer 
are building an IoT device that pops out a piece of candy every 
time a runner reaches 2 miles on a treadmill but stops 
giving candy out at mile 6. You're tasked with building the loop 
functionality to know when to give a piece of candy and when to stop.source:https://login.codingdojo.com/m/612/15813/115702*/

//we need a loop here because there is an increment(each mile) and we a counting something until the condition is no longer true
function isEven(num)
{ 
    num % 2 == 0;//if the remainder of dividing rMiles by 2 is 0 then the runner's miles is an even number
}

function isOdd(num)// function declaration passing in num which stands in for rMiles because rMiles is undefined as of line 9,14w
{
    num % 2 == 1;// if the remainder of dividing rMiles by 2 is 1 then the runner's miles is an odd number
}
var rSpeed = 0
for (var rMiles= 0 ;rMiles <= 6; rMiles++){
    //startpoint,end point, increment amount each iteration
    //loop knows to stop because when i gets to 6 the condition will no longer be true and it will exit the loop
    if(isEven(rMiles) && rSpeed == 5.5 ){ //checking for an even number because we want to reward a piece of candy every 2 miles
        console.log("have a piece of candy");
    }
    else if(isOdd(rMiles))//checking for odd numbers
    {
        console.log("run one more mile to get a piece of candy!");
    }
    else if(rMiles == 6)// checking for the end condition.
    {
        console.log("Im Sorry, you are at 6 miles, we cannot give you anymore candy")
    }
    //miles are incremented each time the loop iterates,each if statement is checked, and then exits once 6 miles are achieved and conditions arent met
    //1 variable was defined as rMiles for runner miles.
}