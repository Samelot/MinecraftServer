exports.WatchChicken = function() {
	events.on( Packages.net.canarymod.hook.entity.DamageHook, function( event, cancel ) { 
  		echo("oops, sorry");
	});
	events.itemTouchGround( function(event) {
		echo("hi,  " + event);
	});
}

exports.SpawnChicken = function() {
	var Canary = Packages.net.canarymod.Canary;
    var entityFactory = Canary.factory().entityFactory;
	var CHICKEN = Packages.net.canarymod.api.entity.EntityType.CHICKEN;	
	
    for (var i = 0; i < 1; i++) {
        var newLoc = self.location;
        var chicken = entityFactory.newEntity(CHICKEN, newLoc);
        chicken.spawn();
    }
}

exports.KillAll = function() {
	var utils = require('utils');
	var animals = self.world.getEntityLivingList();
	var items = self.world.getItemList();
	for(var i in animals) {
		animals[i].destroy();
	}
	for(var i in items) {
		items[i].destroy();
	}
}