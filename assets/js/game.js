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
                playerMoney = playerMoney - 10
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        // Subtract the value of 'playerAttack from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        enemyHealth = enemyHealth - playerAttack;
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
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
        );
        // check player's health 
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            //leave while() loop if player isa dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 

};

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // tell player what round it is
        window.alert("Welcome to robot Gladiators! Round " + ( i + 1));
        // pick new enmy to fight
        var pickedEnemyName = enemyNames[i];
        //reset enemy health
        enemyHealth = 50;

        fight(pickedEnemyName);
}   else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
}
}
