var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Game States

//"WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy robot

// "LOSE" - Player robot's health is zero or less

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive.
    while(enemyHealth > 0 && playerHealth > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes or (true), leave fight
            if (confirmSkip) {
                window,alert (playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = Math.max(0, playerMoney - 10)
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // Subtract the value of 'playerAttack from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        //generate random damage value based on player's attack
        var damage = randomNumber(playerAttack-3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
            playerName + " attack " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //check enemy's health
        if (enemyHealth <= 0)  {
            window.alert(enemyName + " has died!");
        // award player money for winning
        playerMoney = playerMoney + 20;
        // leave while() loop since enemy is dead
        break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Subtract the value of 'enemyAttack' from the calue of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
        var damage = randomNumber(playerAttack -3, playerAttack);
        playerHealth = Math.max( 0, playerHealth - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
        );
        // check player's health 
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            //leave while() loop if player is dead
            
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 

};

// function to start a new game
var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // tell player what round it is
            window.alert("Welcome to robot Gladiators! Round " + ( i + 1));
            // pick new enmy to fight
            var pickedEnemyName = enemyNames[i];
            //reset enemy health
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);
            // if we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask player if they want ot use the store before teh enxt round?
                var storeConfirm = window.confirm("The fight is over, visit the store before your next round?");

                // if yes take them to the store.
                if (storeConfirm) {
                shop();
                }
            }
        
        }   
    }
endGame();
};
// randon number functin
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min - 1) + min);

    return value;
};
// End Game funciton
var endGame = function() {
    // if player is still alive player wins!
    if (playerHealth > 0) {
        window.alert("Great job you survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?")
    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}
// Shop Function
var shop = function() {
    // ask player what theyw ould like to do.
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
        case "Refill":
            if (playerMoney >= 7) {
            window.alert("refilling player's health by 20 for 7 dollars.");
            // increase healtha nd decres money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!")
            }
            break;

        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            if (playerMoney > 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            // increase attacka nd decres money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        
        case "leave":
        case "LEAVE":
        case "Leave":
            window.alert("Leaving the store.");
            // do nothing so function will end
            break;
        default:
        window.alert("You did not piack a valid option. Try again.");
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
};


// Start the game when the page loads
startGame();
