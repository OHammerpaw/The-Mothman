// grabbing elements from HTML
const featherBox = document.getElementById('feather-box')
const bloodBox = document.getElementById('blood-box')
const trackBox = document.getElementById('track-box')
const polaroidBox = document.getElementById('polaroid-box')
const foundFeather = document.getElementById('moth-feather')
const foundPic = document.getElementById('moth-polaroid')
const foundTracks = document.getElementById('moth-tracks')
const foundBlood = document.getElementById('moth-blood')

// const mothmanTwo = document.getElementById('take2')

// const darkness = document.getElementById('flashlight')
// ctx = darkness.getContext('2d')

const game = document.getElementById('canvas'),
ctx = game.getContext('2d');
// getting true height and width of canvas
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;


// CURRENT FUNCTIONAL FLASHLIGHT EFFECT
game.addEventListener('mousemove', function(e) {
    x = e.offsetX;
    y = e.offsetY;
    radius = 150;
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'black'
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);

    ctx.beginPath();
    radialGradient = ctx.createRadialGradient(x, y, 1, x, y, radius);
    radialGradient.addColorStop(0, 'rgba(255,255,255,1)');
    radialGradient.addColorStop(1, 'rgba(0,0,0,0)');
  
    ctx.globalCompositeOperation = "destination-out";
  
    ctx.fillStyle = radialGradient;
    ctx.arc(x, y, radius, 0, Math.PI*2, false);
    ctx.fill();
    ctx.closePath();

})

// OBJECTS TO HOLD COORDINATES OF CLUES FOR EASY REFERENCE

const polaroidCoord = {
    dHeight: 45,
    dWidth: 40,
    positionX: 647,
    positionY: 220  
}

const featherCoord = {
    dHeight: 40,
    dWidth: 40,
    positionX: 170,
    positionY: 436  
}

const tracksCoord = {
    dHeight: 40,
    dWidth: 40,
    positionX: 348,
    positionY: 685  
}

const bloodCoord = {
    dHeight: 40,
    dWidth: 40,
    positionX: 670,
    positionY: 585 
}

//CALCULATES AREA OF ENTIRE CLUE SO PLAYER DOES NOT HAVE TO CLICK THE EXACT CENTER TO COLLECT IT

const polaroidArea = {
    x: {
        start: polaroidCoord.positionX,
        end: polaroidCoord.positionX + polaroidCoord.dWidth
    },
    y: {
        start: polaroidCoord.positionY,
        end: polaroidCoord.positionY + polaroidCoord.dHeight
    }
}

const featherArea = {
    x: {
        start: featherCoord.positionX,
        end: featherCoord.positionX + featherCoord.dWidth
    },
    y: {
        start: featherCoord.positionY,
        end: featherCoord.positionY + featherCoord.dHeight
    }
}

const tracksArea = {
    x: {
        start: tracksCoord.positionX,
        end: tracksCoord.positionX + tracksCoord.dWidth
    },
    y: {
        start: tracksCoord.positionY,
        end: tracksCoord.positionY + tracksCoord.dHeight
    }
}

const bloodArea = {
    x: {
        start: bloodCoord.positionX,
        end: bloodCoord.positionX + bloodCoord.dWidth
    },
    y: {
        start: bloodCoord.positionY,
        end: bloodCoord.positionY + bloodCoord.dHeight
    }
}

//using drawImage to get images to play nice with canvas
makePolaroid();

function makePolaroid()
{
  polaroid = new Image();
  polaroid.src = 'images/polaroid.png';
  polaroid.onload = function(){
    ctx.drawImage(
        polaroid,
        polaroidCoord.positionX,
        polaroidCoord.positionY,
        polaroidCoord.dWidth,
        polaroidCoord.dHeight
    );
  }
}

makeFeather();

function makeFeather()
{
  feather = new Image();
  feather.src = 'images/feather copy.png';
  feather.onload = function(){
    ctx.drawImage(
        feather,
        featherCoord.positionX,
        featherCoord.positionY,
        featherCoord.dWidth,
        featherCoord.dHeight
    )
  }
}

makeTracks();

function makeTracks()
{
  tracks = new Image();
  tracks.src = 'images/Mothman Track-1.png.png';
  tracks.onload = function(){
    ctx.drawImage(
        tracks,
        tracksCoord.positionX,
        tracksCoord.positionY,
        tracksCoord.dWidth,
        tracksCoord.dHeight
    );
  }
}

makeBlood();

function makeBlood()
{
  blood = new Image();
  blood.src = 'images/blood stain.png';
  blood.onload = function(){
    ctx.drawImage(
        blood,
        bloodCoord.positionX,
        bloodCoord.positionY,
        bloodCoord.dWidth,
        bloodCoord.dHeight
    )
  }
}


// GETS COORDINATES OF MOUSE CLICK
const printMousePos = (game, event) => {
    const rect = game.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return { x: x, y: y }
}


// DETECTS WHEN CLUE IS CLICKED AND REVEALS HIDDEN CLUE IN CLUE BOX
game.addEventListener('mousedown', function(e) {
    const coordinate = printMousePos(game,e);
    console.log(coordinate) 

    if((polaroidArea.x.start <= coordinate.x && coordinate.x <= polaroidArea.x.end) 
    && (polaroidArea.y.start <= coordinate.y && coordinate.y <= polaroidArea.y.end)) {
        // const foundPic = document.getElementById('moth-polaroid');
        foundPic.style.visibility = 'visible';
    } else if ((featherArea.x.start <= coordinate.x && coordinate.x <= featherArea.x.end)
    && (featherArea.y.start <= coordinate.y && coordinate.y <= featherArea.y.end)) {
        // const foundFeather = document.getElementById('moth-feather');
        foundFeather.style.visibility = 'visible';
    } else if ((tracksArea.x.start <= coordinate.x && coordinate.x <= tracksArea.x.end) 
    && (tracksArea.y.start <= coordinate.y && coordinate.y <= tracksArea.y.end)) {
        // const foundTracks = document.getElementById('moth-tracks');
        foundTracks.style.visibility = 'visible';
    } else if ((bloodArea.x.start <= coordinate.x && coordinate.x <= bloodArea.x.end) 
    && (bloodArea.y.start <= coordinate.y && coordinate.y <= bloodArea.y.end)) {
        // const foundBlood = document.getElementById('moth-blood');
        foundBlood.style.visibility = 'visible';

    }
})

// ADDING AUDIO ELEMENT ON 17 SECOND INTERVAL

 const playAudio =(url) => {
        mothmanDanger = document.createElement('audio');
        mothmanDanger.src = 'Sound/horror-whoosh-99988.mp3';
        mothmanDanger.style.display = "none"; 
        mothmanDanger.play();
        mothmanDanger.autoplay = false
        document.getElementById('message').innerText="DON'T MOVE..."
        mothmanDanger.onended = function(){
        mothmanDanger.remove(); 
        document.getElementById('message').innerText=''
        };
        document.body.appendChild(mothmanDanger);
      }
     
    const mothInterval = setInterval(playAudio, 17000)


// GETS TRUE CANVAS SIZE 
game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])


// GAMELOOP THAT TRACKS WIN CONDITION AND CONTROLS TRY AGAIN BUTTON

const gameloop = () => {
    if(foundPic.style.visibility == 'visible'
    && foundFeather.style.visibility == 'visible'
    && foundTracks.style.visibility == 'visible' 
    && foundBlood.style.visibility == 'visible') {
        document.getElementById('message').innerText="You made it out alive with all the clues";
        document.getElementById('button').style.visibility = "visible";
    } document.getElementById('button').addEventListener('click', stopGameLoop)
}

const gameInterval = setInterval(gameloop, 60)

//HOLDS STOPGAME, RE-HIDES CLUES AND TRY AGAIN BUTTON
const stopGameLoop = () => {
    clearInterval(gameInterval)
    foundPic.style.visibility = 'hidden'
    foundFeather.style.visibility = 'hidden'
    foundTracks.style.visibility = 'hidden'
    foundBlood.style.visibility = 'hidden'
    document.getElementById('message').innerText=''
    document.getElementById('button').style.visibility = "hidden"

}

// STARTS GAME AS BLACK ON LOAD
document.addEventListener('DOMContentLoaded', function () {
    gameInterval
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'black'
})


