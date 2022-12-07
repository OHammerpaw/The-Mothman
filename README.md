
# The Mothman!

## Intro
This is a cryptid themed clue collecting game. Players use their flashlight to look for clues in the dark woods. If they find all the clues before the hidden timer runs out, they win. If they fail to find all of the clues, they are caught by the Mothman and lose.

## Wireframes
![the mothman!](https://user-images.githubusercontent.com/112446901/191030635-d923f72b-28ba-41d2-bc2b-2c55aa2953b7.png)

![2](https://user-images.githubusercontent.com/112446901/190940311-0e4025c1-eb51-4359-8c74-2a2ec8fb7851.png)

![3](https://user-images.githubusercontent.com/112446901/190940334-e2e0b819-416b-4b2c-8f10-54e362afa8d6.png)

![4](https://user-images.githubusercontent.com/112446901/191009677-b48165df-406c-456c-b734-403ba27f1b1a.png)

![5](https://user-images.githubusercontent.com/112446901/191009709-8371be7c-2b8a-4e24-896f-fde936fec185.png)

## Code Info

Clue: {
  x: (x location on the canvas)
  y: (y location on the canvas)
  height: (should be smaller than "flashlight" and Mothman)
  width: (should be smaller than "flashlight" and Mothman)
  undetected: (a boolean that determines if game is in progress)
  render: (displays the clue on the screen)
}

Mothman: {
  x: (x location on the canvas)
  y: (y location on the canvas)
  height: (should be largest moving element)
  width: (should be largest moving element)
  undetected: (a boolean that determines if game is in progress)
  render: (displays Mothhman on the screen)
}

function - gameloop: holds the entire logic that runs the game
eventListener (onclick) - adds clues to clue bar
mothmanAttack- detects when mothman and player's cursor cross paths, displays Mothman on contact and ends game

## Growing Pains (Fixes for V2)

- Currently clues are stationary and do not appear in random location with each new game- this needs to be changed
- Would like to add a feature where if any movement is detected while Mothman sound cue is playing, the game is lost
- mothmanAttack function where users mouse movement is tracked not currently functional
- Players can still 'win' game after they are caught by The Mothman- this needs to be fixed
- Need to update wireframes

## View Live Site and Play
https://ohammerpaw.github.io/The-Mothman/
