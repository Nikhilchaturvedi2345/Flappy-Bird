// Declayer All Variables 

let up_pillar = document.getElementById("up_pillar");
let down_pillar = document.getElementById("down_pillar");

const Option1 = document.getElementById("Option1");
const startingPage = document.getElementById("starting-Page");
const Playon = document.getElementById("Play-on");
const bird = document.getElementById("bird");

const cancle = document.getElementById("cancle");
const Option3 = document.getElementById("Option3");
const PlayScore = document.getElementById("PlayScore");
const mainscore = document.getElementById("mainscore");
const heigscore = document.getElementById("heigscore");

let valuu = 150;
let score = 0;
let kill;
let up = 1;
let GameOver;

document.body.addEventListener("click", function (e) {
    let fbT = parseInt(window.getComputedStyle(bird, null).getPropertyValue("top"));
    let gg = fbT - valuu;
    if (fbT > 200) {

        bird.style.top = `${gg}px`;
    }

});


document.addEventListener("touchstart", function () {
    let flyfly = setInterval(() => {
        let fbT = parseInt(window.getComputedStyle(bird, null).getPropertyValue("top"));
        if (fbT > 200) {

            bird.style.top = `${fbT - up}px`;
        }
        up += 2.5;
    }, 100);
    window.flyfly = flyfly;
})
document.addEventListener("touchend", function () {
    clearInterval(flyfly);
})



window.onload = function run() {
    if (localStorage.getItem("FBG_Highest_Score")) {       
        heigscore.innerText = localStorage.getItem("FBG_Highest_Score");
    }
    let bird = document.getElementById("bird");
    let One = 40;

    setInterval(() => {
        if (kill == true) {

            let birdTop = parseInt(window.getComputedStyle(bird, null).getPropertyValue("top"));

            if (birdTop < (screen.height * 0.90)) {
                bird.style.top = `${birdTop + One}px`;
            }
        }
    }, 150);

}



// Making an Pillars 
let PChange = true;
function RandomHeight() {
    return Math.round(Math.random() * (50 - 10 + 1) + 10);
}
function SecondPillarValue(x) {
    return 100 - (x + 40);
}


// score Function 
function scoreFunc() {
    let Sinterval = setInterval(() => {
        score++;
        PlayScore.innerText = `${score}`;
        mainscore.innerText = `${score}`;
        // console.log(score);
        HScoreFunc(score);
        heigscore.innerText = localStorage.getItem("FBG_Highest_Score");
        if (GameOver == false) {
            clearInterval(Sinterval);
            return;
        }

    }, 100);
    // return;
}
// scoreFunc();






// Making Logoic 

function GamePlay() {
    PChange = true;
    let Runn = setInterval(() => {
        kill = true;
        // Bird Position 
        const BirdTopPosition = parseInt(window.getComputedStyle(bird, null).getPropertyValue("top"));
        const BirdLeftPosition = parseInt(window.getComputedStyle(bird, null).getPropertyValue("left"));

        // Up Pillar Position 
        const UPpillarTopPosition = parseInt(window.getComputedStyle(up_pillar, null).getPropertyValue("height"));
        const UPpillarLeftPosition = parseInt(window.getComputedStyle(up_pillar, null).getPropertyValue("left"));

        // Down Pillar Position 
        const DownpillarTopPosition = parseInt(window.getComputedStyle(down_pillar, null).getPropertyValue("top"));
        const DownpillarLeftPosition = parseInt(window.getComputedStyle(down_pillar, null).getPropertyValue("left"));

        // Differences between Positions 
        const DIFFTopleft = ((BirdLeftPosition + 100) - UPpillarLeftPosition);
        const DIFFTopTOP = ((BirdTopPosition) - UPpillarTopPosition);

        const DIFFBottomleft = ((BirdLeftPosition + 100) - DownpillarLeftPosition);
        const DIFFBottomTOP = (DownpillarTopPosition - (BirdTopPosition + 100));


        if (DIFFTopleft > 5 && DIFFTopleft < 100 && DIFFTopTOP < 0 || DIFFBottomleft > 0 && DIFFBottomleft < 100 && DIFFBottomTOP < 0) {
            clearInterval(Runn);
            startingPage.style.display = "flex";
            // bird.style.display = "none";
            bird.style.cssText = `    display: none;top: 20px; `
            up_pillar.style.display = "none";
            down_pillar.style.display = "none";
            clearInterval(aa)
            kill = false;
            PChange = false;
            GameOver = false;
            PlayScore.style.display = "none";
        }
    }, 50);

}



Option1.addEventListener("click", function () {
    PlayScore.style.display = "block";
    startingPage.style.display = "none";
    bird.style.display = "block";
    up_pillar.style.cssText = `display: block; animation: krs 3s ease-in infinite;`
    down_pillar.style.cssText = `display: block; animation: krs 3s ease-in infinite;`
    Playon.style.display = "block";
    GamePlay();
    scoreFunc();
    GameOver = true;
    score = 0;
    window.aa = setInterval(() => {
        const TopPillarValue = RandomHeight();
        const BottomPillarValue = SecondPillarValue(TopPillarValue);

        down_pillar.style.height = `${BottomPillarValue}%`;
        up_pillar.style.height = `${TopPillarValue}%`;


    }, 3000);
});




// How to Play pop-up 
cancle.addEventListener("click", function () {
    const HTP = document.getElementById("HTP");
    HTP.style.display = "none";
})

Option3.addEventListener("click", function () {
    HTP.style.display = "block";
})


// Set The Highest Score 
function HScoreFunc(scoreX) {
    if (localStorage.getItem("FBG_Highest_Score")) {
        if (scoreX > parseInt(localStorage.getItem("FBG_Highest_Score"))) {
            localStorage.setItem("FBG_Highest_Score", `${scoreX}`);
        }

    }
    else {
        localStorage.setItem("FBG_Highest_Score", `${scoreX}`);

    }

}
// localStorage.removeItem("FBG_Highest_Score")