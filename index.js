
// include properties to aid movement (smooth and in random directions)

//add event Listener for mouse movement when mothman is on revealed

//create gameloop to ensure game stops when player obtains all four clues or 
//is taken by the Mothman

// grabbing elements from HTML
const featherBox = document.getElementById('feather-box')
const bloodBox = document.getElementById('blood-box')
const trackBox = document.getElementById('track-box')
const polaroidBox = document.getElementById('polaroid-box')
const foundFeather = document.getElementById('moth-feather')
const foundPic = document.getElementById('moth-polaroid')
const foundTracks = document.getElementById('moth-tracks')
const foundBlood = document.getElementById('moth-blood')

const game = document.getElementById('canvas'),
ctx = game.getContext('2d');
// getting true height and width of canvas
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

// flashlight effect
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

// get coordinates of area clicked
const printMousePos = (game, event) => {
    const rect = game.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return { x: x, y: y }
}


// eventListener for clues
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

// class sound (src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function(){
//         this.sound.play();
//     }
//     this.stop = function() {
//         this.sound.pause();
//     }
// }



game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])



// create a class for Mothman
class Mothman {
    constructor(x, y, color, width, height) {
        this.x = x,
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height,
        this.speed = 10,
        this.render = () => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

// randomly generate Mothman's location on the board
const randomGenMothX = (max) => {
    return Math.floor(Math.random() * max)
}

const randomGenMothY = (max) => {
    return Math.floor(Math.random() * max)
}

const mothman = new Mothman(randomGenMothX(game.width), randomGenMothY(game.height), 'pink', 75, 100)



const gameloop = () => {
    if(foundPic.style.visibility == 'visible'
    && foundFeather.style.visibility == 'visible'
    && foundTracks.style.visibility == 'visible' 
    && foundBlood.style.visibility == 'visible') {
        document.getElementById('message').innerText="You survived!"
    }
}

const gameInterval = setInterval(gameloop, 60)


document.addEventListener('DOMContentLoaded', function () {
    gameInterval
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'black'
    mothman.render()
})


