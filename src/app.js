//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var details = [managerName, managerAge, currentTeam, trophiesWon];
  return details;
}
// console.log(details);

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length == 0)
    return null;
  else {
    let form = {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2]
    }
    return form;
  }
}
// console.log(form);

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var debutplayers = [];

  for (i = 0; i < players.length; i++) {
    if (players[i].debut === year)
      debutplayers.push(players[i]);
  }
  return debutplayers;
}
// console.log(debutplayers);

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var posplayers = [];
  for (i = 0; i < players.length; i++) {
    if (players[i].position === position)
      posplayers.push(players[i]);
  }
  return posplayers;
}
// console.log(posplayers);

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  var awardplayers = [];
  for (i = 0; i < players.length; i++) {
    for (j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName)
        awardplayers.push(players[i]);
    }
  }
  return awardplayers;
}
// console.log(players[i].awards[i].name);
// console.log(awardplayers);

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  var awardtimes = [];

  for (var i = 0; i < players.length; i++) {
    let count = 0;
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName)
        count++;
    }
    if (count == noOfTimes)
      awardtimes.push(players[i]);
  }
  return awardtimes;
}
// console.log(awardtimes);

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awardcont = [];
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName && players[i].country == country)
        awardcont.push(players[i]);
    }
  }
  return awardcont;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var agecount = [];
  for (var i = 0; i < players.length; i++) {
    if ((players[i].awards.length >= noOfAwards) && (players[i].team == team) && (players[i].age < age)) {
      agecount.push(players[i]);
    }
  }
  return agecount;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var sortAge = [];
  // for (var i = 0; i < players.length; i++) {
  //   if (players[i].age < players[i + 1].age) {
  //     players[i] = players[i + 1];
  //     players[i + 1] = players[i];
  //   }
  // }
  // return players;
  sortAge = players.sort(function (a, b) {
    return b - a;
  });
  return sortAge;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  var teamplayers = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      teamplayers.push(players[i]);
    }

  }

}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order