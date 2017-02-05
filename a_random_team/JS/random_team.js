var teams = ["https://en.wikipedia.org/wiki/FC_Barcelona", "https://en.wikipedia.org/wiki/Manchester_United_F.C.", "https://en.wikipedia.org/wiki/Manchester_City_F.C.", "https://en.wikipedia.org/wiki/Real_Madrid_C.F.", "https://en.wikipedia.org/wiki/Chelsea_F.C.", "https://en.wikipedia.org/wiki/Liverpool_F.C."];

function team_replace(){
  window.open(teams[Math.floor(Math.random()*teams.length)]);
}
