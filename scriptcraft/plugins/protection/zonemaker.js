var Drone = require('../drone/drone').Drone;
var zones = require('protection/zones');
function zonemaker( material, width, length ) {
  var startLoc = this.getLocation();
  this.chkpt('zonemaker');
  if (material != null){
    this.box0( material ,width, 1, length);
  }
  var endLoc = this
    .fwd(length - 1)
    .right(width - 1)
    .getLocation();
  zones.add(startLoc,endLoc);
  this.move('zonemaker');
  // echo(startLoc);
  // echo(endLoc);
}
Drone.extend(zonemaker);

exports.zonemakerSimple = function zonemakerSimple() {
	var utils = require('utils');
	var targetPos = utils.getMousePos(self);
    var block = self.world.getBlockAt(targetPos.x, targetPos.y, targetPos.z);
    zones.addSimple(block.getX(), block.getZ());
    //  zones.add(startLoc,endLoc);
}