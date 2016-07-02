exports.wm = function wm() {
    // var entityFactory = Packages.net.canarymod.Canary.factory().entityFactory;
    
    // var wm = Packages.net.canarymod.api.world.WorldManager.getLoadedWorldNames(); //doesn't work?
    // var wm = Packages.net.canarymod.Canary.getServer().getWorldManager().getLoadedWorldNames(); //but this works?
    
    // var worldManager = Packages.net.canarymod.Canary.server.isRunning();
    // var worldManager = Packages.net.canarymod.Canary.server.getWorldManager();
    
    var NORMAL = Packages.net.canarymod.api.world.DimensionType.NORMAL;
    
    var worldManager = Packages.net.canarymod.Canary.getServer().getWorldManager().getExistingWorldsArray();
    // var worldManager = Packages.net.canarymod.Canary.getServer().getWorldManager().createWorld("sky", NORMAL);
    
    echo(worldManager);
    
    // for(var i in worldManager) {
    //     echo(worldManager[i]);
    // }
}

exports.wmload = function wmload() {
    var NORMAL = Packages.net.canarymod.api.world.DimensionType.NORMAL;
    var worldManager = Packages.net.canarymod.Canary.getServer().getWorldManager().loadWorld("sky_NORMAL", NORMAL);
}

exports.tpworld = function tpworld() {
    var worldSpawn = Packages.net.canarymod.Canary.getServer().getWorldManager().getWorld("map2_NORMAL", 0).getSpawnLocation();
    
    self.teleportTo(worldSpawn);
}

