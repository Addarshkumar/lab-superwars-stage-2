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
    for (var i = 0; i < PLAYERS.length; i++) {
        // console.log(PLAYERS[i])
        const players = {
            name: PLAYERS[i],
            strength: getRandomStrength(),
            image: `images/super-${i + 1}.png`,
            type: getRandomType(),
        }
        detailedPlayers.push(players)
    }





    return detailedPlayers;
}

// getting random strength
// Return a random integer (0,100]
// Note: You can use Math.random() and Math.ceil()
function getRandomStrength() {
    return Math.ceil(Math.random() * 100)
}

var type = ["hero", "villain"]
function getRandomType() {
    var ran = Math.floor(Math.random() * type.length);
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
    <img src="${players[i].image}">
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
        <img src="${players[i].image}">
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

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}