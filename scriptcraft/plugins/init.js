'use strict';
/*global require, events, server, Packages*/
var slash = require('slash');
slash([
  'groupmod permission add visitors canary.world.build',
  'groupmod permission add visitors scriptcraft.evaluate'
],server);
/*
 WARNING: The following code makes all players ops.
 Only use this for local servers .
*/
function makePlayerOp(event){
  console.log(event.player + ' connected');
  var Canary = Packages.net.canarymod.Canary;
  Canary.ops().addPlayer(event.player.name);
}
events.connection(makePlayerOp);