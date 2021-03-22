var noOfWon = 0;
var noOfLoss = 0;
for( var i = 0; i < 5;i++)
    {
        var num1 = prompt("Enter a Number between 1 - 5 : ");

num1 = parseInt(num1);

if( num1 < 1 || num1 > 5 )
{
    document.write("Sorry, Out of Bound, try again <br>");
}
else
{
    
    var num2 = Math.floor(Math.random()*5) + 1;
    if( num1 == num2)
    {
        document.write("<br>You have Won");
        noOfWon ++;

    }
    else
    {
        document.write("<br>You have lost , random number was " + num2);
        noOfLoss++;
    }
    

}
    
    }
    document.write("<br>You have won " + noOfWon + " times");
    document.write("<br>You have lost " + noOfLoss + " times");