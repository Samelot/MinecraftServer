var zones = require('protection/zones');

function onPlace( event ) {
  if ( isOp(event.player) ) {
    return;
  }
  var block = event.blockPlaced;
  var boundingZones = zones.getBoundingZones(block.location);
  echo("onPlace");
  if (boundingZones.length == 0){
    return;
  }
  event.setCanceled();
}
function onBreak( event ){
  if ( isOp(event.player) ) {
    return;
  }
  var block = event.block;
  var boundingZones = zones.getBoundingZones(block.location);
  echo("onBreak");
  if (boundingZones.length == 0){
    return;
  }
  event.setCanceled();
}

function onPlaceSimple( event ) {
  var block = event.blockPlaced;
  var boundingZones = zones.getBoundingZonesSimple(block.location);
  echo("onPlace");
  if (boundingZones.length == 0){
    return;
  }
  event.setCanceled();
}
function onBreakSimple( event ){
  var block = event.block;
  echo(block.location);
  var boundingZones = zones.getBoundingZonesSimple(block.location);
  echo("onBreak");
  if (boundingZones.length == 0){
    return;
  }
  event.setCanceled();
}


events.blockPlace( onPlaceSimple );
events.blockDestroy( onBreakSimple );

// events.on( Packages.net.canarymod.hook.player.BlockDestroyHook, onBreak );

// events.on( Packages.net.canarymod.hook.player.BlockDestroyHook, function( evt, cancel ) { 
// 	echo(evt.player, evt.player.name + ' broke a block!');
// 	cancel();
// });