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
    // Alert player that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// Subtract the value of 'playerAttack from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attack " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    //check enemy's health
    if (enemyHealth <= 0)  {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of 'enemyAttack' from the calue of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
    );
    // check players health 
    if (playerHealth <- 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes or (true), leave fight
    if (confirmSkip) {
        window,alert (playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        console.log(playerMoney = playerMoney - 2);
    }
    // if not or (false), ask question again by running fight() again
    else {
        fight();
    }
} else {
    window.alert ("You need to choose a valid option. Try again!");
}

};

for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
