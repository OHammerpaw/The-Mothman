# The Mothman!

![1](https://user-images.githubusercontent.com/112446901/190940296-f6ad277f-2407-476b-8114-f9bdaf7630a5.png)

![2](https://user-images.githubusercontent.com/112446901/190940311-0e4025c1-eb51-4359-8c74-2a2ec8fb7851.png)

![3](https://user-images.githubusercontent.com/112446901/190940334-e2e0b819-416b-4b2c-8f10-54e362afa8d6.png)

![4](https://user-images.githubusercontent.com/112446901/191009677-b48165df-406c-456c-b734-403ba27f1b1a.png)

![5](https://user-images.githubusercontent.com/112446901/191009709-8371be7c-2b8a-4e24-896f-fde936fec185.png)


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

- clues will be placed at random locations on game load
- mothman will begin at random location and change position throughout game (looking for player)
- all elements are hidden in individual divs that are revealed on hover
- "flashlight" will be a semi opaque custom cursor that is being manipulated by player
