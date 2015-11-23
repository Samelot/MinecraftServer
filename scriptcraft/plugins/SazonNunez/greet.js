exports.introduce = function( player ) {
    echo( player, 'Hi ' + player.name);
}

exports.g1 = function( ) {
    // events.entityRightClick( function( event ) { 
    //     echo( event.player, 'You broke a block!'); 
    // });
    
    var utils = require('utils'); 
    var targetPos = utils.getMousePos(self);
    
    var hi = self.world.getAnimalList();
    for(var i in hi) {
        if( hi[i].x > (targetPos.x-1) && hi[i].x < (targetPos.x+1) &&
            hi[i].z > (targetPos.z-1) && hi[i].z < (targetPos.z+1) ) {
            echo("Match!");
        }
    }
}

exports.RightClickEvent = function( ) {
    // events.blockRightClick( function( event ) {
    //     echo( event.player, "block this");   
    // });
    
    // myData.json contents...
    // scsave() function
    
    events.entityRightClick( function( event ) { 
        echo( event.player, 'You broke a block!'); 
    });
}

exports.destroyedByNamedPlayer = function( ) {
    // events.entityRightClick();
    events.blockDestroy( function( event ) { 
        echo( event.player, 'You broke a block!'); 
    });
    //echo(targetPos);
    
    // var utils = require('utils'); var targetPos = utils.getMousePos(self);
    // targetPos.world.makeLightningBolt(targetPos);
    
    // echo( player, 'Hi ' + player.name);
}

exports.g1 = function(greetMsg) {
    echo("good afternoon");
}

exports.g2 = function(greetMsg) {
    echo("good day to you sir");
}

exports.g3 = function(greetMsg) {
    echo("hello, how are you!?");
}

exports.g4 = function(greetMsg) {
    echo("goot en tak");
}

exports.g5 = function(greetMsg) {
    echo("x " + greetMsg + " goot en tak " + greetMsg);
}



exports.q1 = function(questionMsg) {
    var playerList = self.world.getPlayerList();
    for(var i in playerList) {
        echo("hi " + playerList[i].name + "... " + questionMsg);
    }   
}

// exports.q1 = function(questionMsg) {
//     var hi = self.world.getAnimalList();
//     for(var i in hi) {
//         if( hi[i].x > (targetPos.x-1) && hi[i].x < (targetPos.x+1) &&
//             hi[i].z > (targetPos.z-1) && hi[i].z < (targetPos.z+1) ) {
//             echo("Match!");
//         }
//     }
// }