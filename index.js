
// include properties to aid movement (smooth and in random directions)

//add eventlisteners fo click on clue objects

//add event Listener for mouse movement when mothman is on revealed

//create gameloop to ensure game stops when player obtains all four clues or 
//is taken by the Mothman

// grabbing elements from HTML
const game = document.getElementById('canvas'),
ctx = game.getContext('2d');
// getting true height and width of canvas
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight

const polaroidCoord = {
    dHeight: 40,
    dWidth: 40,
    positionX: 600,
    positionY: 45  
}

const featherCoord = {
    dHeight: 40,
    dWidth: 40,
    positionX: 15,
    positionY: 300  
}

const tracksCoord = {
    dHeight: 40,
    dWidth: 40,
    positionX: 500,
    positionY: 600  
}

const bloodCoord = {
    dHeight: 40,
    dWidth: 40,
    positionX: 350,
    positionY: 370  
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
//     addEventListener('mousedown', (event) => {
//     alert('clue clicked')
//   })
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

const printMousePos = (game, event) => {
    const rect = game.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return { x: x, y: y }
}

game.addEventListener('mousedown', function(e) {
    const coordinate = printMousePos(game,e);
    console.log(coordinate) 

    if((polaroidArea.x.start <= coordinate.x && coordinate.x <= polaroidArea.x.end) 
    && (polaroidArea.y.start <= coordinate.y && coordinate.y <= polaroidArea.y.end)) {
        console.log('photo area clicked')
    } else if ((featherArea.x.start <= coordinate.x && coordinate.x <= featherArea.x.end)
    && (featherArea.y.start <= coordinate.y && coordinate.y <= featherArea.y.end)) {
        console.log('feather area clicked')
    } else if ((tracksArea.x.start <= coordinate.x && coordinate.x <= tracksArea.x.end) 
    && (tracksArea.y.start <= coordinate.y && coordinate.y <= tracksArea.y.end)) {
        console.log('tracks area clicked')
    } else if ((bloodArea.x.start <= coordinate.x && coordinate.x <= bloodArea.x.end) 
    && (bloodArea.y.start <= coordinate.y && coordinate.y <= bloodArea.y.end)) {
        console.log('blood area clicked')
    }
})

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


//game functionality
const gameloop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
// rendering images onto canvas
    if(feather.undetected) {
        feather.render()
     if(photo.undetected) {
        photo.render()
    } if(tracks.undetected) {
        tracks.render()
    } if(blood.undetected) {
        blood.render()
    } 
    mothman.render()
}

const gameInterval = setInterval(gameloop, 60)


document.addEventListener('DOMContentLoaded', function () {
    gameInterval
})

}
