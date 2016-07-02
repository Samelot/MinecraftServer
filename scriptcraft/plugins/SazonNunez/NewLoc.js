exports.newloc = function newloc() {
   var EntityType = Packages.net.canarymod.api.entity.EntityType;
   var myAnimals = [EntityType.BUTCHER, EntityType.CREEPER, EntityType.CREEPER, EntityType.DONKEY];
   var entityFactory = Packages.net.canarymod.Canary.factory().entityFactory;
   
   var myLoc = self.location;
   echo(myLoc.x + " | " + myLoc.y + " | " + myLoc.z );
   var newLoc = self.world.location(myLoc.x, myLoc.y, myLoc.z);
    for(var i in myAnimals) {
        echo(i);
        
        var instantiateAnimal = entityFactory.newEntity(myAnimals[i], (0,0,0));
        instantiateAnimal.spawn();
    }
}

