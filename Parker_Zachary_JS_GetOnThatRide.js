//Program Objective: To find out if a group of riders are eligible to ride a roller coaster.
var rHeight;//rider height,designate height with an input statement
var rAge;// rider Age, designate age with an input statement
/* using a if else statement, capture user input and 
use a comparator operator to make sure rAge is > 10 and 
rHeight > 42 inches*/
if (rHeight > 42 && rAge >= 10) {
    console.log("you are "+rHeight+"inches tall and are"
    +rAge ,"Years old, you may ride this ride");
}/*if height is greater than 42 in, AND age is greater than 10
they can ride*/ 
else {
    console.log("Im sorry, you cant ride this ride");
}// exception handle for all ages and heights lower than accepted conditions.   
