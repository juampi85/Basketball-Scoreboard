let homePoints = document.getElementById("home--points");
let guestPoints = document.getElementById("guest--points");
let homeCounter = document.getElementById("homeCounter");
let guestCounter = document.getElementById("guestCounter");
let gameResult = document.getElementById("game-result");

gameResult.textContent = "The game it´s beginning, guys...!!";

let homePointsCount = 0;
let guestPointsCount = 0;

function parcialResult(){
    if(homePointsCount > guestPointsCount){
        gameResult.textContent = "Homies are winning...!!";
        homeCounter.classList.add("winner");
        guestCounter.classList.remove("winner");
    } else if(homePointsCount < guestPointsCount){
        gameResult.textContent = "The visitors are winning...!!";
        homeCounter.classList.remove("winner");
        guestCounter.classList.add("winner");
    } else {
        gameResult.textContent = "There is a draw, ladies and gentleman...!!!";
        homeCounter.classList.remove("winner");
        guestCounter.classList.remove("winner");
    }
}

function add1ToHome(){
    homePointsCount++;
    parcialResult();
    homePoints.textContent = homePointsCount;
}

function add2ToHome(){
    homePointsCount += 2;
    parcialResult();
    homePoints.textContent = homePointsCount;
}

function add3ToHome(){
    homePointsCount += 3;
    parcialResult();
    homePoints.textContent = homePointsCount;
}

function add1ToGuest(){
    guestPointsCount++;
    parcialResult();
    guestPoints.textContent = guestPointsCount;
}

function add2ToGuest(){
    guestPointsCount += 2;
    parcialResult();
    guestPoints.textContent = guestPointsCount;
}

function add3ToGuest(){
    guestPointsCount += 3;
    parcialResult();
    guestPoints.textContent = guestPointsCount;
}

function newGame(){
    homePointsCount = 0;
    guestPointsCount = 0;
    homePoints.textContent = homePointsCount;
    guestPoints.textContent = guestPointsCount;
    homeCounter.classList.remove("winner");
    guestCounter.classList.remove("winner");
    gameResult.textContent = "Ready for a new game???";
}