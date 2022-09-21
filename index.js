
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

//using drawImage to get images to play nice with canvas
makePolaroid();

function makePolaroid()
{
  polaroid = new Image();
  polaroid.src = 'images/polaroid.png';
  polaroid.onload = function(){
    ctx.drawImage(polaroid, 0, 0, 30, 30, 600, 45, 40, 40);
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
    ctx.drawImage(feather, 0, 0, 30, 30, 15, 300, 40, 40);
  }
}

makeTracks();

function makeTracks()
{
  tracks = new Image();
  tracks.src = 'images/Mothman Track-1.png.png';
  tracks.onload = function(){
    ctx.drawImage(tracks, 0, 0, 30, 30, 500, 600, 40, 40);
  }
}

makeBlood();

function makeBlood()
{
  blood = new Image();
  blood.src = 'images/blood stain.png';
  blood.onload = function(){
    ctx.drawImage(blood, 0, 0, 30, 30, 350, 370, 40, 40);
  }
}

const printMousePos = (game, event) => {
    const rect = game.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log('x: ' + x + ' y: ' + y) 
}
game.addEventListener('mousedown', function(e) {
    printMousePos(game,e)
})


// function simulateClick(target, x, y) {
//     let clickEvent = new MouseEvent(
//         "click",
//         {
//             clientX: x,
//             clientY: y,
//         }
//     );
//     target.dispatchEvent(clickEvent);
    
    
// }
// simulateClick(game, 600, 45);

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
