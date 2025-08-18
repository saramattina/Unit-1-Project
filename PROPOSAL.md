# Unit 1 Project Proposal


### Da Fare
+ review project reqs
+ user stories
+ MVP and stretch goals
+ wire frames 
+ psuedocode
+ any game-specific additional requirements
+ timeline



## *Yoot*

*Yunnori*, also known as *yutnori* or *yoot*, is a traditional South Korean game. Game history and rules can be found [here](https://en.wikipedia.org/wiki/Yunnori).

## Project Description

This project will be an online version of Yoot. Two people or two teams can play Yoot. Features will include: automatic score keeping, tracking turns with message alerts, game results, and an option to reset or play again. There will also be messages displayed for what each stick throw result is. 


## Wire Frames

**Initial Landing View**

![initial landing view](https://wireframe.cc/TLU4kt)

## User Stories

### MVP Goals

+ As an user, I would like to be able to clearly see the board, scores, and sticks
+ As an user, I'd like to have an game play rules available
+ As an user, I'd like to know whose turn it is
+ As an user, I'd like to be informed when the game has been won
+ As an user, I'd like to be able to reset the game


### Stretch Goals

+ As an user, if sticks are represented as dice or coins in MVP, I'd like to see sticks
+ As an user, I'd like the sticks to animate being tossed, as they would if played in real life
+ As an user, I'd like the diagonal paths on the game board
+ As an user, I'd like to play against the computer
+ As an user, I'd like to play with the back rule: one of the sticks is labeled back, and if it's the only stick facing down, I can move a piece one space backwards
+ As an user, I'd like to have all four pieces


## Psuedocode
```
// 1. Define variables
      -board & board spaces
      -sticks (or dice)
      -messages: turn message, winner message, stick roll results
      -player turn
      -game won 

   2. Handle game initialization
      -all pieces start at beginning of board
      -game score is set to zero : zero
      -sticks are all facing the same way or are blank

   3. Create sticks (or dice)
      -Player click
      -Have 4 sticks show on screen
      -Randomize stick results
      -calculate roll results (ie: how many spaces the player can move)

   4. Handle player turn
      -Player rolls sticks via pressing button, sees the results on the sticks and receives result message
      -Player moves piece on board. Pieces can occupy same board space. 
      (Stretch Goal: -handle if piece already occupies board space
         -if same player/team, can occupy same space
         -if different player/team, their piece moves back to start)
      -If player roll results in a *yut* or *do*, player takes another turn
      -end turn & switch player

   6. Render win message to winning player

   7. Handle reset to play again
```
## Timeline

| Day  |  Task |
|---|---|
| Mon  |  Create and present proposal |
|  Tues |  Build basic functioning |
| Wed  |  Continue building functioning & begin styling |
|  Thu | Finish stying, & finalize MVP  |
|  Fri |  Work on stretch goals |
| Sat/Sun  | Finish cleaning up code and any stretch goals  |