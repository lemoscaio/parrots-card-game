<div align="center"><img style = "width:100%;"src="https://i.imgur.com/PiC6Oqo.png"></img></div>
<hr>
<h2 align=center>Parrots Card Game - Concentration/Memory game</h2>
<h3 align=center>Web development Project</h3>
<hr>
<div align=center>
<h4>A concentration/memory card game web-app made with HTML, SASS and Vanilla JavaScript.</h4>
<h4>The game consists in finding the matches for all cards in the fewest attempts. The player turns 2 cards at a time, trying to find a match. If the cards are different, they get back in the original position and the player proceeds to try again.</h4>
<h4>This was the fourth project of the Driven full stack web development bootcamp.</h4>
</div>
<br>
<div align=center style="display:flex; justify-content: center;">
    <img style = "height:250px;" src="https://media1.giphy.com/media/JFBbC2PrDLQIezoYYE/giphy.gif?cid=790b761155ad6e39f3e25fa17c53c872ecc650cdc545be46&rid=giphy.gif&ct=g" alt="Game demo">
    
</div>
<br><hr>

## Features

- User can choose the number of pairs
- Cards put randomly on the table
- CSS animations for turning the cards
- Time counter
- Attempts counter
- You can restart the game after finishing it, choosing another number of pairs

## Requirements

-  General
    - [x]  Use vanilla JavaScript only
    - [x]  The project must be stored in a public repository on GitHub
    - [x]  Commit every new feature
- Layout
    - [x]  Apply the mobile and desktop layout as provided on Figma.
- Card distribution
    - [x]  On entering the game, the player must be asked how many cards they want
    - [x]  The cards number can only be even, from 4 to 14. Any number that doesn't match these must not be accepted and the prompt must repeat until receiving a valid input
    - [x]  After answering a valid number of cards, the game must show the cards for a short time and then flip them over.       
- Card click
    - [x]  On clicking a card, it must be turned
    - [x]  If it's the first card of the round, the card must remain turned until the second card is choose
    - [x]  When the second card is chose, there will be 2 situations
        - [x]  If the second card matches the first, both of them must remain turned for the last of the game 
        - [x]  If the second card is different from the first, it means the player is wrong. The game must wait 1 second before turning the cards back to the original position
- End of the game
  - [x] When all the cards are turned correctly, there must be an alert on the browser with the message "You won in X attempts", being X the number of the attempts that the player has made.
        

### Built with

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/caiodeoliveiralemos/
