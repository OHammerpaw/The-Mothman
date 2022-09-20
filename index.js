
// include properties to aid movement (smooth and in random directions)

//add eventlisteners fo click on clue objects

//add event Listener for mouse movement when mothman is on revealed

//create gameloop to ensure game stops when player obtains all four clues or 
//is taken by the Mothman

// grab elements to use them here
const game = document.getElementById('canvas')
// const polaroid = document.getElementById('polaroid')

// establishing game as 2d
const ctx = game.getContext('2d')

const makePolaroid = () => {
    const polaroid = new Image();
    polaroid.src = 'images/polaroid.png'
    polaroid.addEventListener('load', (e) => {
    ctx.drawImage(polaroid, 0, 0, 32, 32, 600, 40, 32, 32);
});
} 

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

// const image = new Image(60, 45); 
// image.onload = drawImageActualSize; 
// image.src = '';

// const featherimg = new Image();
// featherimg.src = 'https://imgur.com/iA6eynf'



// const tracksimg = new Image();
// tracksimg.src = 'https://imgur.com/wfp5h8W'

// const bloodimg = new Image();
// bloodimg.src = 'https://imgur.com/A6w6XSR'


//create a class for all of the clue objects
class Clue {
    constructor(x, y, image, width, height, undetected) {
        this.x = x,
        this.y = y,
        this.image = image;
        this.width = width,
        this.height = height,
        this.undetected = undetected,
        this.render = () => {
            ctx.fillStyle = this.image
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
}

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



const feather = new Clue(15, 300, 'tan', 10, 10, true)
const photo = new Clue(600, 40, 'tan', 10, 10, true)
const tracks = new Clue(500, 170, 'tan', 10, 10, true)
const blood = new Clue(350, 300, 'tan', 10, 10, true)
const mothman = new Mothman(randomGenMothX(game.width), randomGenMothY(game.height), 'pink', 75, 100)


const gameloop = () => {
    ctx.clearRect(0, 0, game.width, game.height)

    if(feather.undetected) {
        feather.render()
    } if(photo.undetected) {
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







