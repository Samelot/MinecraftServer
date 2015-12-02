exports.CancelBreak = function() {
	events.on( Packages.net.canarymod.hook.player.BlockDestroyHook, function( evt, cancel ) { 
  		echo(evt.player, evt.player.name + ' broke a block!');
		cancel();
	});
}