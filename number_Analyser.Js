var theNumber = -22;

fill(0, 0, 0);
textSize(30);
text("Analysis of: " + theNumber, 10, 36);

text("It's positive", 10, 90);
text("It's negative", 10, 140);
text("It's zero", 10, 190);
noFill(); 

var theNumber = true;
if (theNumber > 0) {
 rect(5, 59, 200, 40); 
}
if (theNumber < 0) {
 rect(5, 117, 200, 40);
}
if (theNumber === 0) {
rect(5, 163, 200, 40);
}