
var attacker = {
    name: "",
    health: 100,
    combatMoves: {
        combatAction: true,
        slap: {
            slapCount: 0,
            slapDamage: 1,
        },
        punch: {
            punchCount: 0,
            punchDamage: 5,
        },
        kick: {
            kickCount: 0,
            kickDamage: 10,
        },
    },

    specialMoves: {
        specialAction:false,
        doubleSlap: {
            doubleSlapCount: 0,
            doubleSlapDamage: 2,
        },
        upperPunch: {
            upperPunchCount: 0,
            upperPunchDamage: 7,
        },
        flyingKick: {
            flyingKickCount: 0,
            flyingKickDamage: 15,
        },
    },
    hitCountTotal: 0,
}

var victim = {
    name: "",
    health: 100,
    hitCountTotal: 0,
    protection:
        [
            {
                headBlock: 4,
                bodyBlock: 2,
                dodge: 3
            }
        ],
    blockCount: 0,
    blockCountTotal: 0,
}

function attack(str) {
   // debugger
   
   if (str == "slap" || str == "kick" || str == "punch") {
     var combatAttack = attacker.combatMoves[str][str + 'Damage']; 
     var combatCount = attacker.combatMoves[str][str + 'Count'];
     actionResult()
    } else {
     var combatAttack = attacker.specialMoves[str][str + 'Damage']
     var combatCount = attacker.specialMoves[str][str + 'Count'];
    actionResult()
    }
   //var damageCounter = attacker.combatMoves[str][str + 'Damage'];
    //var damageSpecialCounter = attacker.combatMoves[str][str + 'Damage'];
    
    //var hitValue = attacker.combatMoves[str][str + 'Damage']; 

       function actionResult() {
        //var hitCountValue = 1;
        victim.hitCountTotal++ //= hitCountValue + victim.hitCountTotal;
        victim.health = (victim.health - combatAttack);
        
        

        //console.log(victim.hitCountTotal)
        //console.log(hitCountValue)
        //console.log()
        update()
    }
}
  //  else {
    //    console.log("no")
   //     return
   // }
//}

/*

var playerItems = []

function PlayerItems(attackMode, attackPower, attackDesc, attackFun) {
    this.attackMode = attackMode;
    this.attackPower = attackPower;
    this.attackDesc = attackDesc;
    this.attackFun = attackFun;
}

function addedItems() {
    doubleSlap = new PlayerItems("Double Slap", 2.5, "You just pulled off a double slap, while they were unguarded")
    upperPunch = new PlayerItems("Upper Punch", 8, "You just did a uppercut punch, that looked like it hurt")
    flyingKick = new PlayerItems("Flying Kick", 25, "You just did an amazing flying kick, how did you pull that off?")
    playerItems.push(doubleSlap, upperPunch, flyingKick)
}


/*
function draw() {
    var template = ''
    for (var i = 0; i < playerItems.length; i++) {
        var items = playerItems[i]
        var itemsmoves = (items.attackFun)
        template += `
        <button onclick="${itemsmoves}">${items.attackMode}</button>
        `


    }
    document.getElementById('PlayerItems').innerHTML = template
    update()
}


function specialMoves() {
    addedItems()
    var moves = ''
    moves += `
            
`
document.getElementById('PlayerItems').innerHTML = "template"
update()
}





function specailAttacks() {
    PlayerItems.attackMode[1] = punch()
    return
    health = (health - PlayerItems.attackMode.attackPower);
    punchCount++
    hitCounter()
    update()

}

function victimInfo() {
attacker.name = prompt("What your name?", "Web Stalker?");

   victim.name = prompt("Please enter the name of who you want to bring pain to?", "maybe Mr. Trump...?");
play()
}


function play() {
   var template = '' 
   template += `
   
`
document.getElementById("start").innerHTML = template
console.log("help")
}


function hitCounter() {
    attacker.hitCountTotal = (attacker.combatMoves.slapCount + attacker.combatMoves.punchCount + attacker.combatMoves.kickCount + attacker.specialMoves.doubleSlapCount + attacker.specialMoves.upperPunchCount + attacker.specialMoves.flyingKickCount)
    //var num = attacker.hitCountTotal
*/
    /*  if (num <= 0) {
          document.getElementById("hitCounter").innerHTML = "update()";
          alert("Hello")
  
      } else {
  
          alert("Breaking News..." + victim.name + " was just beaten to death, be on the out for the Web Stalker!");
          reset()
  
      }
  
    update()
}
*/
/*

function newFunction() {
    var vHitCountTotal = victim.hitCountTotal;
    return vHitCountTotal;
}

function upperPunch() {
    attacker.health = (attacker.health - 15);
    attacker.upperPunchCount++
    hitCounter()


}

function flyingKick() {
    attacker.health = (attacker.health - 20);
    attacker.flyingKickCount++
    hitCounter()


}
function slap() {
    attacker.health = (attacker.health - 1);
    attacker.slapCount++
    hitCounter()

}
function punch() {
    attacker.health = (attacker.health - 5);
    attacker.punchCount++
    hitCounter()


}

function kick() {
    attacker.health = (attacker.health - 10);
    attacker.kickCount++
    hitCounter()
}


function doubleSlap() {

    attacker.health = (attacker.health - 2);
    attacker.doubleSlapCount++
    hitCounter()


}

function upperPunch() {
    attacker.health = (attacker.health - 15);
    attacker.upperPunchCount++
    hitCounter()


}

function flyingKick() {
    attacker.health = (attacker.health - 20);
    attacker.flyingKickCount++
    hitCounter()


}
function slap() {
    attacker.health = (attacker.health - 1);
    attacker.slapCount++
    hitCounter()

}
function punch() {
    attacker.health = (attacker.health - 5);
    attacker.punchCount++
    hitCounter()


}

function kick() {
    attacker.health = (attacker.health - 10);
    attacker.kickCount++
    hitCounter()


}
*/
function reset() {
    victim.health = 100
    victim.hitCountTotal = 0
    attacker.slapCount = 0
    attacker.kickCount = 0
    attacker.punchCount = 0
    attacker.doubleSlapCount = 0
    attacker.flyingKickCount = 0
    attacker.upperPunchCount = 0
    update()

}
function update() {
    document.getElementById("healthDisplay").innerHTML = victim.health;
    document.getElementById("hitCounter").innerHTML = victim.hitCountTotal;
}


/*

Step 5 - REDUCE THE DAMAGE!... almost
How are you at math?
Create a function that will be called, addMods().

Using a "for loop", calculate the combined value of modifiers in the target.items array.

this may be tricky, but think it through before reading the following hints. ##HINTS
We need to create a variable to hold the running modifier total
This variable should be outside of the loop
Inside the loop, increase the running total by the 'current items' modifier value
Arrays need to be accessed by index. [i]
Have the function return the total.

Step 6 - REDUCE THE DAMAGE!... for real this time.
Before you begin this step, remember math in javascript is the same as on paper. Order of operations matters: 5 * .3 = 1.5
Stuck?
Look at the hit function()
Total damage done = damage + [sum of all modifiers]
Did you get it? Try this:
this.health -= damage * this.addMods();
If there are no mods the total should be 1
Step 7 - Let the user select the Items.
Add a div in the body with an id="items" and put a button for each item
Write a function that will allow the user to click each button and giveItem("item") to the target
This shouldn't move the items from the items object but make a copy of them in the target.items array.
Lastly make your game pretty, this will likely be in your portfolio so add a background, move things around with bootstrap etc.



Requirements
Visualization:
Three additional items displayed for users to add
Functionality:
Items affect the current health or the damage rate




Bonus Challenges
Draw items to screen dynamically; can you write a function that will itterate over your items list and create a button for each one?
K.O. Notification: Make a notification apear on the screen once the target's health reaches 0
Damage Indicator: Most games have not only a number but a health bar, how could you create one for your target (checkout Bootstraps Progress Bars)
Hit Animation: How could you make something happen everytime you clicked to hit your target? A pop up animation or maybe the picture moves?
Reset: Your user should have a way to start the game over without having to refresh the page.
Limit items being used: How could you only allow so many items to be used at a time to prevent users stacking up 100 modifiers
Randomize damage: Maybe each hit does a damage within a certain range instead of a static number?
Limit each items number of uses: Should each shield be permenant or does it break after so many hits?
GUI for what items are active: How does the user know what modifiers are active and their total affect?
*/

/* 
Jame Parrott  
Stephania Proctor  
Maritza Stoddart  
Collette Molino  
Antoine Penaloza  
Adela Michelsen  
Pok Herrell  
Sonny Devore  
Suzan Weatherwax  
Tobie Deville  
Humberto Bregman  
Chastity Gathright  
Thora Dubay  
Lory Kirschner  
Melonie Room  
Dina Binder  
Kimberley Bettinger  
Marylou Whipple  
Amy Halls  
Dylan Show  
Delana Dudgeon  
Heidi Bugbee  
Elvera Noble  
Rolanda Zuniga  
Petronila Brooker  
Charmaine Brockway  
Starr Sproull  
Yee Mehler  
Violette Clover  
Clifton Novick  
Dominic Pettigrew  
Isabel Aceto  
Otilia Vanhoose  
Valentin Kervin  
Gabriel Kosinski  
Christene Knipe  
Rosaline Tabor  
Laureen Both  
Lavera Lenhardt  
Bryant Mukai  
Percy Petzold  
Jama Finnen  
Janessa Derossett  
Joselyn Short  
Lorretta Stefanski  
Elenora Leeper  
Delfina Redick  
Hulda Rowton  
Lashaun Ryberg  
Helga Tackitt  
*/