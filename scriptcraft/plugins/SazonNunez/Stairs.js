exports.Jenga = function(height){
  var breadCrumb = 'hi';
  chkpt( breadCrumb );
  // min height per side should be 1!
  for(i = 1; i < 19; i = i + 1) {
    move( breadCrumb ).box0('5', 1, 1, 4).turn().fwd().up().mark( breadCrumb );  
  }
  
  //box('5').turn().right().up().box('5').turn().right().up().box('5').turn().right().up().box('5').turn().right().up();
}

exports.DroneTest = function() {
  var drone = new Drone(self);
  drone.chkpt('town-square');
  //
  // the drone can now go off on a long excursion
  //
  for ( i = 0; i< 100; i++) {  
      drone.fwd(12).box(6); 
  }
  //
  // return to the point before the excursion
  //
  drone.move('town-square');
}

exports.SimpleStairs = function(height){
  var drone = new Drone(self);

  drone.chkpt('town-square');
  // min height per side should be 1!
  for(i = 1; i < 5; i = i + 1) {
    drone.move('town-square').fwd(4).turn().up().chkpt( 'town-square' );
    drone.box0('5', 1, 1, 4);  
  }
}

exports.OldComplexStairs = function(numSidesPassed, lengthPassed, heightPassed){
  for(var i in arguments) {
    if(arguments[i]==null) {
      echo("error: missing params");
      break;
    }
  }
  
  var drone = new Drone(self);
  
  var numSides = numSidesPassed;
  var length = lengthPassed;
  var height = heightPassed;
  
  var sectionLen;
  var remainder;
  
  drone.chkpt('town-square');
  // min height per side should be 1!
  
  if(height > length) {
    echo("error: height musn't be greater than length... setting height to 1");
    height = 1; 
  }
  
  for(i = 0; i < numSides; i++) {
    remainder = length % height;
    if(remainder) {
      sectionLen = length / (height - remainder);
      // echo(sectionLen);
      // var x = 
      drone.move('town-square').back().chkpt( 'town-square' );
      for(j = 0; j < height-1; j++) {
        newSectionLen = sectionLen % height;
        drone.move('town-square').fwd(sectionLen).up().chkpt( 'town-square' );
        drone.box0('5', 1, 1, sectionLen);
      }
      drone.move('town-square').fwd(remainder+1).up().chkpt( 'town-square' );
      drone.box0('5', 1, 1, remainder);
    } else {
      sectionLen = length / height;
      for(j = 0; j < height; j++) {
        drone.move('town-square').fwd(sectionLen).turn().up().chkpt( 'town-square' );
        drone.box0('5', 1, 1, sectionLen);
      }   
    }    
  }
}

exports.ComplexSpiral = function(numSides, length, height) {  
  var drone = new Drone(self);
  drone.chkpt('town-square');
  // min height per side should be 1!
  
  for(i = 0; i < numSides; i++) {
    drone.move('town-square').turn().chkpt( 'town-square' );
    var boxHeight = 0;
    var stepUp = 0;
    var newBoxHeight;
    for(j = 0; j < length; j++) {
      newBoxHeight = 1+Math.floor(j*(height/length));
      stepUp = newBoxHeight - boxHeight;
      // echo(stepUp);
      drone.move('town-square').fwd().up(stepUp).chkpt( 'town-square' );
      drone.box('5');
      boxHeight = newBoxHeight;
      // drone.box0('5', 1, 1, stepUp);
    }   
  }
}

exports.SimpleSpiral = function(numSides) {  
  var drone = new Drone(self);
  drone.chkpt('town-square');
  // min height per side should be 1!
  
  for(i = 0; i < numSides; i++) {
    drone.move('town-square').turn().chkpt( 'town-square' );
      drone.move('town-square').fwd().up(1).chkpt( 'town-square' );
      drone.box('5');
  }
}

exports.SimpleStraight = function(numSides) {  
  var drone = new Drone(self);
  drone.chkpt('town-square');
  // min height per side should be 1!
  
  for(i = 0; i < numSides; i++) {
    // drone.move('town-square').chkpt( 'town-square' );
    drone.move('town-square').fwd().up(1).chkpt( 'town-square' );
    drone.box('5');
  }
}