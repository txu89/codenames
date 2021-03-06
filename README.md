# Codenames
![Codenames app](https://raw.githubusercontent.com/txu89/codenames/master/images/codenames.png)
This is a randomly generated game board for Codenames. It will be a virtual representation of the game and track cards/winner. Cluegiving will be done verbally and not entered in game itself.

## Usage
### Requirement
 * Node 
```
npm install
npm start
```

## Game Design
### Game Board
  * 25 card displayed in 5x5 pattern
  * Each card has a randomly generated word (black color) from the word list (cannot repeat words)
  * Each card belongs to a group (Team 1, Team 2, Neutral, Bomb)
  
### Teams
  * 2 teams
  * Teams will be differentiated by color
  * Each team has Cluegiver
    * Cluegiver can click reveal/hide board button to highlight card border colors
    
### Gameplay
  * Random team will go first
    * Will show on top which team's turn
  * Team 1 has 9 words and Team 2 has 8 words
  * Players can guess words by clicking on the card
    * Card will change to the team color it belongs to (word will change to white)
    * Team can continue if guessed correctly
    * _Guesses per turn will be tracked by player, not game (maybe feature to be implemented later)_
    * Card that has been selected cannot be clicked on again
  * Turn ends when the player guesses incorrectly or clicks end turn button
    * End turn button switches message on top denoting team's turn
  * Game end when all words belonging to one team is selected or bomb card is selected
    * Team that picks bomb card loses
    
### Miscellaneous
  * New game button will reset and randomize game board
  * Change the color of cards using css
  * Each card will have a prop value stored to determine color/team
  * Need to track number of correct words for each team
    * Win condition: Check if all words for one team is selected
  
