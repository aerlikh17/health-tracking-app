# Project #2 - Health Tracking App 

### _Contents_

- App description
- Technologies used
- Getting started
- Next steps 

### _Game description_

Health Tracking App is made for people who want to keep track of various

:
1. The dealer gets closer to 21 points than the player at the end of the round.
2. If a player has more than 21 points.
3. If the dealer's hand value goes over 21 points.

It's a tie when:
1. Both players have the same points on their hands.

Values that are tracked: 
* BMI
* Weight
* Mood
* Exercise

Basic rules of the game:
1. Both players get 2 cards. Dealer's first card is hidden. 
2. Player goes first and they have an option to "hit" to get more cards or "stay" to skip the round. There is no limit on the number of cards you can take. 
3. Dealer flips the first card. If dealer's total hand value is 16 or under they have to take another card. If it is 17 or higher, they have to "stay" with their hand. 

### _Game screenshots:_

_This is how the game board looks when first cards are dealt:_
![Game Screenshot](/images/blackjack-game.png "Blackjack Game") 

&nbsp;

_An example of a lose situation (player lost as they got more than 21 points in the second round):_
![Game Screenshot](/images/blackjack-game-lost.png "Blackjack Game Loose Situation")

&nbsp;


### _Technologies used_

* HTMLS/CSS
* Node.js (Express.js)
* MongoDB

### _Getting started_

Instructions on how to use the app:

1. To start the game, click on the "DEAL" button. 
2. If both yours and dealer's score is below 21, you can choose to "HIT" or "STAY".
3. You can click "HIT" as many times as you want as long as your score is below 21. 
4. If you choose to "STAY" and dealer's score is below 17, dealer's first card will be revealed and they will take another card. 
5. Alternatively, if you choose to "STAY" and dealer's score is above 17, only dealer's first card will be revealed but they will not get a third card. 
6. Follow messages on the bottom of the game board. For example, press "RESET" to start the game again. 

The link to the app is below. 

Click [here](https://health-track-app.herokuapp.com/customers) to deploy the app

Click [here](https://trello.com/invite/b/Ygs4TPGJ/ATTIbbe3dc9ac223b1fbd95ac166b151a1d12792838E/project-2-health-tracking-app) to access my Trello board for this project

### _Next steps_

* Work on styling.
* Add an API for recipe search.
* Add features such as graphs for weight fluctuations and BMI graph. 
* Add a section for personalized suggestions. 
* Using something else instead of Materialize CSS.




