var blockArr = [];

exports.BlockAdd = function () {
	var WORLD = Packages.net.canarymod.api.world;
	var utils = require('utils'); 
   	var targetPos = utils.getMousePos(self);	
	// echo(targetPos);
	var newBlock = self.world.getBlockAt(targetPos).getTypeId();
	blockArr.push(newBlock);
	echo(blockArr.length + " inside block array");
}

exports.BlockCalc = function() {
	var calc = 0;
	for(var i in blockArr) {
		calc += blockArr[i];
	}
	echo("current block id = " + calc);
	box(calc);
}