


var fight = function(enemy) {
    
    //repeat and execute as long as the enemy-robot is alive.
    while(enemy.health > 0 && playerInfo.health > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes or (true), leave fight
            if (confirmSkip) {
                window,alert (playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10)
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }
        // Subtract the value of 'playerInfo.attack from the value of 'enemy.health' and use that result to update the value in the 'enemy.health' variable.
        //generate random damage value based on player's attack
        var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + " attack " + enemy.name + " . " + enemy.name + " now has " + enemy.health + " health remaining."
        );
        //check enemy's health
        if (enemy.health <= 0)  {
            window.alert(enemy.name + " has died!");
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
        // leave while() loop since enemy is dead
        break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // Subtract the value of 'enemy.attack' from the calue of 'playerInfo.health' and use that result to update the value in the 'playerInfo.health' variable.
        var damage = randomNumber(enemy.attack -3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + " . " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
        // check player's health 
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            //leave while() loop if player is dead
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    } 

};
//functiont to get players name
var getPlayerName = function() {
    var name = "";

    //add loop with prompt & condition
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
};

// function to start a new game
var startGame = function() {
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            // tell player what round it is
            window.alert("Welcome to robot Gladiators! Round " + ( i + 1));
            debugger;
            // pick new enmy to fight
            var pickedEnemyObj = enemyInfo[i];
            //reset enemy health
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            // if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask player if they want ot use the store before teh enxt round?
                var storeConfirm = window.confirm("The fight is over, visit the store before your next round?");

                // if yes take them to the store.
                if (storeConfirm) {
                shop();
                }
            }
        
        } else {
            window.alert("you have lost your robot in battle! Gaem Over!");
            break;
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
    if (playerInfo.health > 0) {
        window.alert("Great job you survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;

        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            playerInfo.Info.upgradeAttack();
            break;
        
        case "leave":
        case "LEAVE":
        case "Leave":
            window.alert("Leaving the store.");
            // do nothing so function will end
            break;
        default:
        window.alert("You did not pick a valid option. Try again.");
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
};
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (playerInfo.money >= 7) {
            window.alert("refilling player's health by 20 for 7 dollars.");
            // increase healtha nd decres money
            this.health += 20;
            this.money -= 7;
            }
            else {
                window.alert("You don't have enough money!")
            }
        
    },
    upgradeAttack: function() {
        if (playerInfo.money > 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            // increase attacka nd decres money
            this.attack += 6;
            this.money -= 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
    }
    };
    
    //Game States
    
    //"WIN" - Player robot has defeated all enemy-robots
    //  * Fight all enemy-robots
    //  * Defeat each enemy robot
    
    // "LOSE" - Player robot's health is zero or less
    
    // You can also log multiple values at once like this
    console.log(playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money);
    
    var enemyInfo = [
        {
            name: "Roborto",
            attack: randomNumber(10, 14)
        },
        {
            name: "Amy Android",
            attack: randomNumber(10, 14)
        },
        {
            name: "Robo Trumble",
            attack: randomNumber(10, 14)
        }
    ];




// Start the game when the page loads
startGame();
