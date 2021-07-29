let valuu = 200;
let score = 0;
let up_pillar = document.getElementById("up_pillar");
let down_pillar = document.getElementById("down_pillar");
const startingPage = document.getElementById("starting-Page");
const Playon = document.getElementById("Play-on");

const bird = document.getElementById("bird");
document.body.addEventListener("click", function (e) {
    let fbT = parseInt(window.getComputedStyle(bird, null).getPropertyValue("top"));
    let gg = fbT - valuu;
    if (fbT > 50) {

        bird.style.top = `${gg}px`;
    }

});
window.onload = function run() {

    let bird = document.getElementById("bird");

    let One = 30;
    setInterval(() => {
        let birdTop = parseInt(window.getComputedStyle(bird, null).getPropertyValue("top"));

        if (birdTop < (screen.height - 100)) {
            bird.style.top = `${birdTop + One}px`;            
        }
    }, 100);

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
        setInterval(() => {
            score++;
            console.log(score);
            
        }, 100);
    }
// scoreFunc();
    





// Making Logoic 

function GamePlay() {
PChange = true;
    let Runn = setInterval(() => {
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
            bird.style.display = "none";
            up_pillar.style.display = "none";
            down_pillar.style.display = "none";
            clearInterval(aa)
            PChange = false;
        }
    }, 50);

}



const Option1 = document.getElementById("Option1");
Option1.addEventListener("click", function () {
    startingPage.style.display = "none";
    bird.style.display = "block";
    up_pillar.style.cssText = `display: block; animation: krs 3s ease-in infinite;`
    down_pillar.style.cssText = `display: block; animation: krs 3s ease-in infinite;`
    Playon.style.display = "block";
    GamePlay();
    window.aa = setInterval(() => {
            const TopPillarValue = RandomHeight();
            const BottomPillarValue = SecondPillarValue(TopPillarValue);
            
            down_pillar.style.height = `${BottomPillarValue}%`;
            up_pillar.style.height = `${TopPillarValue}%`;
            
        
    }, 3000);
});