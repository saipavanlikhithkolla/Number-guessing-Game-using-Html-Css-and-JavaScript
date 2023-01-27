var msg1=document.getElementById("msg1");
var msg2=document.getElementById("msg2");
var msg3=document.getElementById("msg3");
var msg4=document.getElementById("msg4");
var ans=Math.floor(Math.random()*100)+1;
var no_of_guess=0;
var gussed_nums=[];
function numberguessing(){
    var user_guess=document.getElementById("guess").value;
    if(user_guess<1 || user_guess>100){
        alert("Please Enter Valid Number between 1 to 100.");
    }
    else{
        gussed_nums.push(user_guess);
        no_of_guess+=1;
        if(user_guess<ans){
            msg1.textContent="Your guess is low";
            msg2.textContent="No. of guesses: "+no_of_guess;
            msg3.textContent="Guessed numbers are"+gussed_nums;
        }
        else if(user_guess>ans){
            msg1.textContent="Your guess is high";
            msg2.textContent="No. of guesses: "+no_of_guess;
            msg3.textContent="Guessed numbers are"+gussed_nums;
        }
        else if(user_guess==ans){
            msg1.textContent="Hurry! You Won the Task";
            msg2.textContent="The number was "+ans;
            msg3.textContent="You guessed in"+no_of_guess+" guesses";
        }
    }
    if(no_of_guess<=10){
        msg4.textContent="You Simply Amazing!";
    }
    else if(no_of_guess>10 && no_of_guess<=25){
        msg4.textContent="Good Work and try to find fast";
    }
    else if(no_of_guess>25 && no_of_guess<=50){
        msg4.textContent="Intermediate Level try again and again you win.";
    }
    else{
        msg4.textContent="You must improve your guessing Ability";
    }
}