// http://docs.visualillusionsent.net/CanaryLib/1.0-RC-3/net/canarymod/api/world/blocks/Block.html
// http://docs.visualillusionsent.net/CanaryLib/1.0-RC-3/net/canarymod/api/world/blocks/BlockMaterial.html

exports.growth = function growth() {
    var utils = require('utils'); 
    var targetPos = utils.getMousePos(self);
    
    var targetBlock = self.world.getBlockAt(targetPos);
    var ass = Packages.net.canarymod.api.world.blocks.TileEntity;
    // echo(targetBlock.getTileEntity());
    echo(targetBlock.getBlockMaterial());
    // events.on( Packages.net.canarymod.hook.player.BlockDestroyHook, function( evt, cancel ) { 
  	// 	echo(evt.player, evt.player.name + ' broke a block!');
        
	// 	cancel();
	// });
}

utils = require('utils');
exports.a = function a() {
  var my_cursor = utils.getMousePos();
  var my_world = server.getDefaultWorld();
  var my_block = my_world.getBlockAt(my_cursor);
  var my_tile = my_block.getTileEntity();
  var my_time = my_world.totalTime.toString();
  for (i = 0; i < 4; i++ ) {
    my_tile.setTextOnLine(my_time, i);
    my_tile.update();
  }
}