const team= {
_players : [{firstName: 'Bukayo', lastName: 'Saka', age: 22}, {firstName: 'Martin', lastName:'Odegaard', age: 24}, {firstName: 'Leo', LastName: 'Trossard', age: 29}],

_games: [{opponent:'Man Utd', teamPoints: 3, opponentPoints: 0}, {opponent:'Brighton', teamPoints: 3, opponentPoints: 0}, {opponent:'Man City', teamPoints: 1, opponentPoints: 1}],

get players() {
  return this._players;
},

get games() {
  return this._games;
},

addPlayer (newFirstName, newLastName, newAge) {
   let player = {
   firstName: newFirstName,
    lastName: newLastName,
    age: newAge}
  
this._players.push(player);
},

addGame (newOpponent, newTeamPoints, newOpponentPoints) {
 
 let game = {
  opponent: newOpponent,
  teamPoints: newTeamPoints,
  opponentPoints: newOpponentPoints}

  this._games.push(game);
}

}


team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Chelsea FC', 3, 0);
console.log(team._players);
console.log(team._games);
