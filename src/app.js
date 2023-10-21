const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];


// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (let i = 0; i < players.length; i++) {
        // console.log(PLAYERS[i])
        var currentPlayers = {
            image: `images/super-${i + 1}.png`,
            name: players[i],
            strength: getRandomStrength(),
            image: `images/super-${i + 1}.png`,
            type: getRandomType(i)
        }
        // console.log(currentPlayers)
        detailedPlayers.push(currentPlayers)
        console.log("detailedPlayers",detailedPlayers)
    }





    return detailedPlayers;
}

// getting random strength
// Return a random integer (0,100]
// Note: You can use Math.random() and Math.ceil()
function getRandomStrength() {
    return Math.floor(Math.random() * 101) 
}


var heroCount=0;
var villainCount=0;
var type = ["hero", "villain"]  
const getRandomType=(i) =>{
     if(i==0){
        heroCount++;
        return "hero";
     }



var ran = Math.floor(Math.random() * type.length);
var tempType=type[ran];
tempType=="hero"?heroCount++:villainCount++;
if(heroCount>=10){
    return "villain"; 
}
else if(villainCount>=10){
    return "hero"
}
return type[ran];
}


const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    if (type == "hero") {
        for (var i = 0; i < players.length; i++) {
            if (players[i].type == "hero") {
                fragment += `<div class="player">
    <img src="${players[i].image}" alt="">
    <div class="name">${players[i].name}</div>
    <div class="strength">${players[i].strength}</div>
 </div>`
            }
        }
    }
    else if (type == "villain") {
        for (var i = 0; i < players.length; i++) {
            if (players[i].type == "villain") {
                fragment += `<div class="player">
        <img src="${players[i].image}" alt="">
        <div class="name">${players[i].name}</div>
        <div class="strength">${players[i].strength}</div>
     </div>`
            }
        }
    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}
TEST_PLAYERS=["hero"]
window.onload = () => {
    viewPlayers(initPlayers(PLAYERS))
}