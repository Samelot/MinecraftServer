exports.teamscores = function() {
	var utils = require("utils");

	function execCommand( command ){
		server.executeVanillaCommand(server, command);
	}
	
	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	// execCommand('scoreboard objectives remove ' + name );
	var teamArr = ['team_blue','team_red'];
	
	for(var i in teamArr) {
		execCommand('scoreboard teams add ' + teamArr[i] + ' ' + teamArr[i]);
		execCommand('scoreboard teams option ' + teamArr[i] + ' ' + teamArr[i]);
		execCommand('scoreboard objectives add Score dummy');
		execCommand('scoreboard players add ' + teamArr[i] + ' Score 1');
	}
	
	execCommand('scoreboard objectives setdisplay sidebar Score');
	
	function randNum() {
		var rand = getRandomInt(0, teamArr.length);
		echo(rand);
		for(var i in teamArr) {
			// echo(rand);
			if(i == rand) {
				execCommand('scoreboard players set ' + teamArr[i] + ' Score ' + 9);
			} else {
				execCommand('scoreboard players set ' + teamArr[i] + ' Score 5');
			}
		}	
	}
	
	var timer = setInterval(randNum, 3000);
}