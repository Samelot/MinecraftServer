exports.kfc = function kfc() {
	// var chickenID = null;
	
	// events.on(Packages.net.canarymod.hook.entity.EntityDeathHook, function(evt, cancel) {
	// 	echo(evt.entity.getEntityType());
	// 	echo("chickendead");
	// });

	events.on(Packages.net.canarymod.hook.entity.ItemTouchGroundHook, function(evt, cancel) {
		var myItem = evt.entityItem;
		var chickenLoc = d.move('chicken').getLocation();
		
		if(myItem.getItem().getId() == 365) {
		
			// var chickenBlock = self.world.getBlockAt(chickenLoc.x, chickenLoc.y, chickenLoc.z);

			myItem.teleportTo(self.location);
			
			// if(chickenBlock == cookedChickenBlock) {
			// 	echo("inside water block!");
			// }
			
		}
		
		
	});
	
	var utils = require('utils');
	var targetPos = utils.getMousePos(self);
	
	var pan = blocks.brick.stone;
	var water = '9';
	var glass = blocks.glass;
	
	var d = new Drone(targetPos);
	d.up()
	 .box(pan).up()
	 .box(pan).up()
	 .box(pan).down(2).right(1)
	 .box(pan).up()
	 .box(pan).up()
	 .box(pan).down(2).right(1)
	 .box(pan).up()
	 .box(pan).up()
	 .box(pan).down(2).right(1);
	 
	d.move('start').fwd().up()
	 .box(pan).up()
	 .box(pan).up()
	 .box(pan).down(2).right(1)
	 .box(pan).up()
	 .box('8').chkpt('chicken').up()
     .box(pan).down(2).right(1)
	 .box(pan).up()
	 .box(pan).up()
	 .box(pan).down(2).right(1);	
	 
	 d.move('start').fwd(2).up()
	 .box(glass).up()
	 .box(glass).up()
	 .box(glass).down(2).right(1)
	 .box(glass).up()
	 .box(glass).up()
	 .box(glass).down(2).right(1)
	 .box(glass).up()
	 .box(glass).up()
	 .box(glass).down(2).right(1);
	 
	 function delay() {
		 var chickenLoc = d.move('chicken').getLocation();
		 
		 var entityFactory = Packages.net.canarymod.Canary.factory().entityFactory;
		 var CHICKEN = Packages.net.canarymod.api.entity.EntityType.CHICKEN;
		 var newChicken = entityFactory.newEntity(CHICKEN, chickenLoc);
		 newChicken.spawn();
		//  chickenID = newChicken.getID();
		 clearInterval(hi);
	 }
	//  clearInterval(hi);
	 var hi = setInterval(delay, 3000);
	
}