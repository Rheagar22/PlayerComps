$.getJSON(
    "https://api.collegefootballdata.com/games/players?year=2019&seasonType=regular&team=Oklahoma&category=passing", 
    function(data) {
    console.log(data);
})