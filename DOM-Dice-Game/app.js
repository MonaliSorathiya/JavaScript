/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/


/************************* 
Step 1 : First DOM Access and Manipulation 
**************************/
/*		
		//create a variables
var score,roundScore,activePlayer,dice ;
score = [0,0];
roundScore = 0;
activePlayer = 1;
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice); // 1 5 4 3 6 2

		//DOM Manipulation
	//1. we change our current value. 
document.querySelector('#current-').textContent = dice; 
	//2. store value in activePlayer(current). 
document.querySelector('#current-' + activePlayer).textContent = dice; 
	//3. You can use innerHTML also instead of textContent,both are works same. 
document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //italic text
	//4. We can use querySelectormethod to actually only read elements from a webpage(index.html) and then store them in some variable. 
var x = document.querySelector('#score-0').textContent;
console.log(x); //43 (display global score)
	//5. we can also use querySelector to change the CSS element for example Let's hide the dice. 
document.querySelector('.dice').style.display = 'none' ; //output removes the dice from interface.
*/

/************************* 
Step 2 : Events and Event Handling Rolling the Dice
**************************/
// Next step would be to actually display the value each time that we click on the roll dice button.
// So first step is to select the element in which the event will happen.so in this case,it will be the button,where we will roll the dice.

/*
var score, roundScore, activePlayer;
score = [0, 0];
roundScore = 0;
activePlayer = 0;
        
        //hide the dice
document.querySelector('.dice').style.display = 'none';
        
        //Set all values of score and current to zero
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
        
        //EventListener function
document.querySelector('.btn-roll').addEventListener('click', function () {

        //1.random number
        var dice = Math.floor(Math.random() * 6) + 1;
        
        //2.display the result (1.first we have to set dice visible. 2. we also need to set the correct dice number. 3. set the dice image)
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3.Update the round score, but only if the rolled number was not one.    

});
*/

/************************* 
Step 3 : Updating Scores and Changing the Active Player
**************************/
/*So we will continue developing our game logic here according to the number that our user rolls.So if the 
user rolls a number diffrent from one, then the score gets added to his round score,and he/she can continue to play
and otherwise, if he rolls a one ,then it's next player turn */
/*
var score, roundScore, activePlayer;
score = [0, 0];
roundScore = 0;
activePlayer = 0;

        //hide the dice
document.querySelector('.dice').style.display = 'none';

        //Set all values of score and current to zero
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

        //EventListener function
document.querySelector('.btn-roll').addEventListener('click', function () {

        //1.random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2.display the result (1.first we have to set dice visible. 2. we also need to set the correct dice number. 3. set the dice image)
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3.Update the round score, but only if the rolled number was not one.    
        if (dice !== 1) {
                //Add score
                roundScore += dice; //roundScore = roundScore + dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
                //Next player
                activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                roundScore = 0;

                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-1').textContent = '0';

                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');

                //document.querySelector('.player-0-panel').classList.remove('active');
                //document.querySelector('.player-1-panel').classList.add('active');

                document.querySelector('.dice').style.display = 'none';
        }
});
*/

/************************* 
Step 4 : Implementing Our 'Hold' Function and the DRY Principle
**************************/

/** So this is where we left after the last Step 3 .So for we can roll the dice and add our scores in active player,
but there is no way to hold our points and update our score in the interface. So for that we are going to 
implementing our HOLD function */

/*
var score, roundScore, activePlayer;
score = [0, 0];
roundScore = 0;
activePlayer = 0;

//hide the dice
document.querySelector('.dice').style.display = 'none';

//Set all values of score and current to zero
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//EventListener function
document.querySelector('.btn-roll').addEventListener('click', function () {

        //1.random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2.display the result (1.first we have to set dice visible. 2. we also need to set the correct dice number. 3. set the dice image)
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3.Update the round score, but only if the rolled number was not one.    
        if (dice !== 1) {
                //Add score
                roundScore += dice; //roundScore = roundScore + dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
                //Next player
                activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                roundScore = 0;

                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-1').textContent = '0';

                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');

                //document.querySelector('.player-0-panel').classList.remove('active');
                //document.querySelector('.player-1-panel').classList.add('active');

                document.querySelector('.dice').style.display = 'none';
        }
});
document.querySelector('.btn-hold').addEventListener('click', function () {

        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
        } else {
                //Next player
                nextPlayer();
        }

});

function nextPlayer() {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
}
*/

/************************* 
Step 5 : Creating a Game Initialization Function
**************************/

/** Now implementing NEW GAME functionality, when we hit this button that the game starts from the beginning. */
/*
var score, roundScore, activePlayer;
init();

//EventListener function for rolling the dice.
document.querySelector('.btn-roll').addEventListener('click', function () {

        //1.random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2.display the result (1.first we have to set dice visible. 2. we also need to set the correct dice number. 3. set the dice image)
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3.Update the round score, but only if the rolled number was not one.    
        if (dice !== 1) {
                //Add score
                roundScore += dice; //roundScore = roundScore + dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
                //Next player
                activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                roundScore = 0;

                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-1').textContent = '0';

                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');

                //document.querySelector('.player-0-panel').classList.remove('active');
                //document.querySelector('.player-1-panel').classList.add('active');

                document.querySelector('.dice').style.display = 'none';
        }
});

//Event Listener function for the HOLD button.
document.querySelector('.btn-hold').addEventListener('click', function () {

        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
        } else {
                //Next player
                nextPlayer();
        }

});

//EventListener function for NEW GAME button.
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
}

function init() {
        scores = [0, 0];
        activePlayer = 0;
        roundScore = 0;
        gamePlaying = true;

        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
}
*/

/************************* 
Step 6 : Finishing Touches State Variables 
**************************/
                           
						   
						/* this is our final code for DOM pig game*/


var scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function () {
        if (gamePlaying) {
                // 1. Random number
                var dice = Math.floor(Math.random() * 6) + 1;

                //2. Display the result
                var diceDOM = document.querySelector('.dice');
                diceDOM.style.display = 'block';
                diceDOM.src = 'dice-' + dice + '.png';


                //3. Update the round score IF the rolled number was NOT a 1
                if (dice !== 1) {
                        //Add score
                        roundScore += dice;
                        document.querySelector('#current-' + activePlayer).textContent = roundScore;
                } else {
                        //Next player
                        nextPlayer();
                }
        }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
        if (gamePlaying) {
                // Add CURRENT score to GLOBAL score
                scores[activePlayer] += roundScore;

                // Update the UI
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

                // Check if player won the game
                if (scores[activePlayer] >= 100) {
                        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                        document.querySelector('.dice').style.display = 'none';
                        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                        gamePlaying = false;
                } else {
                        //Next player
                        nextPlayer();
                }
        }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
}

function init() {
        scores = [0, 0];
        activePlayer = 0;
        roundScore = 0;
        gamePlaying = true;

        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
}