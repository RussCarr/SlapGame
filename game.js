
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
        specialAction: false,
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
    damageAttack: 0,
}

var victim = {
    name: "",
    health: 100,
    hitCountTotal: 0,
    protection:
        [
            {
                headBlock: 1,
                bodyBlock: 2,
                dodge: 5,
                standStill: 0,
            }
        ],
    blockCount: 0,
    blockCountTotal: 0,
}

function attack(str) {
    if (str == "slap" || str == "kick" || str == "punch") {
        attacker.damageAttack = attacker.combatMoves[str][str + 'Damage'];
        var hitCounter = attacker.combatMoves[str][str + 'Count'];
        getRanMod()
    } else {
        attacker.damageAttack = attacker.specialMoves[str][str + 'Damage']
        var hitCounter = attacker.specialMoves[str][str + 'Count'];
        getRanMod()
    }
}
function getRanMod() {
    
    var test = attacker.damageAttack
    var choices = [1, 2, 5, 0];
    var compChoice = choices[Math.floor(Math.random() * 3)]

     
   /* 
    for (var i = 0; i < victim.protection.length; i++) {
        compChoice = victim.protection[i];
    }
    */
    
    var damageAttackMath = (test - compChoice);
    attacker.damageAttack = damageAttackMath
    console.log(damageAttackMath)
    actionResult()
}




function actionResult() {
    var test = attacker.damageAttack
    console.log(test)
    victim.hitCountTotal++
    victim.health = (victim.health - test);
    update()

}


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



