exports.teletoanimal = function teletoanimal() {
	var animals = self.world.getAnimalList();
	var animalLoc = null;
	for(var i in animals) {
		animalLoc = animals[i].getLocation();
		echo(i);
		break;
	}
	echo(animalLoc);
	self.teleportTo(animalLoc);
}