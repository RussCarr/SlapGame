var health = 100
var slapCount = 0
var kickCount = 0
var punchCount = 0
var hitCountTotal = 0


function hitCounter() {
    hitCountTotal = (slapCount + punchCount + kickCount)
    
    document.getElementById("hitCounter").innerHTML = hitCountTotal;
    update()

}

function slap(){
    health = (health - 1);
    slapCount++
    hitCounter()
    update()

}

function punch(){
    health = (health - 5);
    punchCount++
    hitCounter()    
    update()

}

function kick(){
    health = (health - 10);
    kickCount++
    hitCounter()
    update()

}
function reset(){
    health = 100
    hitCountTotal = 0
    slapCount = 0
    kickCount = 0
    punchCount = 0
    update()

}

function update(){
       document.getElementById("healthDisplay").innerHTML = health;
       document.getElementById("hitCounter").innerHTML = hitCountTotal;
}

/*Jame Parrott  
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
Helga Tackitt  */