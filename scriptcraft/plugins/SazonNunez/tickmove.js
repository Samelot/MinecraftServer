exports.tickmove = function() {
    var server = Packages.net.canarymod.Canary.getServer();

    var scheduler = Packages.org.bukkit.scheduler; 
    
    // var curTick = server.getCurrentTick();
    // var curTime = self.world.getRelativeTime();
    // var curTime = self.world.getRawTime(); 
    
    // var hours = Math.floor(curTime/1000);
    // var minutes = (curTime % 1000) / 1000 * 60;
    
    // var hours = ((curTime / 1000 + 8) % 24);
    // var minutes = (60 * (curTime % 1000) / 1000);
    
    // var timer = curTime / 20;
    // var remainder = timer % 3600;
    // var minutes = remainder / 60;
    // var seconds = remainder % 60;
    
    //  echo("minutes: " + minutes + " | seconds: " + seconds);
    events.on(Packages.net.canarymod.hook.player.BlockPlaceHook, function(event){
        // event.player.sendMessage("Examining block...");
        echo("hi");
        var blockType = event.getBlockPlaced().getTypeId();
        echo(blockType);
        scheduler.runTaskLater(__plugin,function(){
            
            if(blockType == '35'){
                event.player.sendMessage("You have unlocked the secret gate!");
            }
        }, 60);
    });
    
}