exports.PosToPlayer = function() {
	// var utils = require('utils');
	// var players = utils.players();
	// utils.foreach( players, function( player ) { 
	// 	player.capabilities.setWalkSpeed(0.0);
	// 	player.updateCapabilities();
	// });	
	
	var animals = self.world.getEntityLivingList();
	var items = self.world.getItemList();
	var myPos = self.position;
	// echo(myLoc.x);
	for(var i in animals) {
		animals[i].teleportTo(myPos);
	}

}

exports.LineUp = function() {
	// var utils = require('utils');
	// var players = utils.players();
	// utils.foreach( players, function( player ) { 
	// 	player.capabilities.setWalkSpeed(0.0);
	// 	player.updateCapabilities();
	// });	
	
	var animals = self.world.getEntityLivingList();
	var items = self.world.getItemList();
	
	var Canary = Packages.net.canarymod.Canary;
    var entityFactory = Canary.factory().entityFactory;
	var CHICKEN = Packages.net.canarymod.api.entity.EntityType.CHICKEN;	
	
	var d = new Drone(self).chkpt('before');
	var droneLoc;
	
	var myPosX = self.position.getBlockX();
	var myPosY = self.position.y;
	var myPosZ = self.position.z;
	
	for(var i in animals) {
		var animalID = animals[i].getID();	
		events.entityMove( function( event ) {
			if (animalID == event.getEntity().getID()) {
				echo("match");	
			}
		});
		d.move('before').fwd().fwd().chkpt('before').up().up().box( '5' ).up();
		droneLoc = d.getLocation();
		// var chicken = entityFactory.newEntity(CHICKEN, droneLoc);
        // chicken.spawn();
		animals[i].teleportTo(droneLoc);
	}
	
	// for(var i in animals) {
		
	// 	d.move('before').fwd().fwd().chkpt('before').up().up().up().up().up().box( '5' ).chkpt('after');
		
	// 	droneLoc = d.getLocation();
		
	// 	animals[i].teleportTo(droneLoc);
		
	// }
}

exports.MobSpawner = function () {
	var mobSpawn = Packages.net.canarymod.api.MobSpawnerLogic;
	echo(typeof mobSpawn.getSpawnedEntities());
	
}

