/***
    Vanilla
    /scoreboard objectives add Deaths deathCount Deaths
    /scoreboard objectives setDisplay sidebar Deaths
    /scoreboard players set SazonNunez Deaths 1
    
    /summon ArmorStand ~ ~ ~ {Marker:1b,Invisible:1b,NoGravity:1b,CustomNameVisible:1b,CustomName:<NAME>}
    /summon ArmorStand ~ ~ ~ {Marker:1b,Invisible:1b,NoGravity:1b,CustomNameVisible:1b,CustomName:{text:"You have killed: "}}

    /title @p times 20 60 20
    /title @p title {score:{name:"*",objective:"Deaths"}}

    /summon ArmorStand
    /entitydata @e[Type=ArmorStand] {CustomName:Derbuy,CustomNameVisible:1,I­nvisible:true}

    /summon WitherSkull ~ ~ ~ {direction:[0.0,0.0,0.0],ExplosionPower:­0,CustomName:"A Map by:",CustomNameVisible:true}

    /summon ArmorStand ~ ~1 ~ {CustomNameVisible:1,CustomName:abc,Sh­owArms:1,Equipment:[{},{},{},{},{id:397,­Damage:3,tag:{SkullOwner:"abc"}}]}

***/

/***
    API
    var scoreboardManager = Packages.net.canarymod.Canary.scoreboards();
    var scoreboard = scoreboardManager.getScoreboard(self.world.name);

    var SIDEBAR = Packages.net.canarymod.api.scoreboard.ScorePosition.SIDEBAR;
    var DUMMY = Packages.net.canarymod.api.scoreboard.CriteriaType.DUMMY;

    scoreboard.addScoreObjective("new");
    var newScore = scoreboard.getScoreObjective("new");
    echo(newScore.getDisplayName());

    scoreboard.setScoreObjectivePosition(SIDEBAR, newScore);

    var score = scoreboard.getScore(self.name, newScore);
    score.setScore(4);
    echo(score.getName()); 
***/

var utils = require("utils");

function execCommand( command ){
    server.executeVanillaCommand(server, command);
}

function createScoreboard( objectiveName, displayName ){
    execCommand('scoreboard objectives add ' + objectiveName + ' dummy ' + displayName);
    execCommand('scoreboard objectives setdisplay sidebar ' + objectiveName);
}

function updatePlayerScore( objectiveName, playerName, score ){
    execCommand('scoreboard players set ' + playerName + ' ' + objectiveName + ' ' + score);
}

function removeScoreboard( name ){
    execCommand('scoreboard objectives remove ' + name );
}

exports.score = function score() {
    var cursorPos = utils.getMousePos(self);
    var btnArray = [];
                     
    var teamArr = ['team_blue', 'team_red', 'green_team'];
    
    var stockValue = 0;
    var myStockUnits = 0;
    var myStockCash = 0;
    var myCash = 25;
    
    
    // updatePlayerScore("yo", self.name, 1);
    //KEYS!!!
    var stockInfo = [
        "your cat just died", 
        "the doctor said you have three weeks to live",
        "you found a piece of gold in your sandwich",
        "you've been selected to be a contestant for dancing with the stars"
    ];
        
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function CreateTeams() {
        // clears scoreboard
        // /scoreboard objectives setdisplay sidebar
        for(var i in teamArr) {
            // execCommand('scoreboard teams add ' + teamArr[i] + ' ' + teamArr[i]);
            // execCommand('scoreboard teams option ' + teamArr[i] + ' ' + teamArr[i]);
            // execCommand('scoreboard objectives add Score dummy');
            
            execCommand('scoreboard objectives add ' + teamArr[i] + ' dummy ' + teamArr[i]);
            execCommand('scoreboard players add ' + teamArr[i] + ' Score 0');
            execCommand('scoreboard objectives setdisplay sidebar Score');
        }
        execCommand('scoreboard objectives setdisplay sidebar Score');
    }
    CreateTeams();
    
    function CreateButton(d, dir) {
        var blockPos = new Packages.net.canarymod.api.world.position.Position(d.x, d.y, d.z);    
        
        self.world.setBlockAt(blockPos, Packages.net.canarymod.api.world.blocks.BlockType.PolishedGranite);
        
        var btnPos = self.world.getBlockAt(blockPos).getRelative(1, 0, 0).getPosition();
        var btnPosCoordsArray = [btnPos.x, btnPos.y, btnPos.z];
        
        btnArray.push(btnPosCoordsArray);
        
        self.world.setBlockAt(btnPos, Packages.net.canarymod.api.world.blocks.BlockType.StoneButton);
        self.world.getBlockAt(btnPos).setData(1);
    }

    function CreateArea() {
        var drone = new Drone(cursorPos);
        drone.box0( blocks.stone, 6, 1, 1).fwd().chkpt("base")
        .move("base").box0( blocks.stone, 6, 1, 1).fwd().chkpt("base").up().chkpt("btn")
        .move("base").box0( blocks.stone, 6, 1, 1).fwd().chkpt("base")
        .move("base").box0( blocks.stone, 6, 1, 1).fwd().chkpt("base")
        .move("base").box0( blocks.stone, 6, 1, 1).fwd().chkpt("base")
        .move("base").box0( blocks.stone, 6, 1, 1).fwd().chkpt("base");
        
        CreateButton(drone.move("btn"));
        CreateButton(drone.fwd());
    }
    CreateArea();

    function queryStock() {
        var rand = getRandomInt(0, stockInfo.length);
        echo(rand);
        //KEYS!!!
        if(rand == 0) {
            stockValue = stockValue - 7;
            myStockCash = myStockUnits * stockValue;
            execCommand('scoreboard players set ' + teamArr[0] + ' Score ' + stockValue);
            execCommand('scoreboard players set ' + teamArr[1] + ' Score ' + myStockCash);
        } else if(rand == 1) {
            stockValue = stockValue - 14;
            myStockCash = myStockUnits * stockValue;
            execCommand('scoreboard players set ' + teamArr[0] + ' Score ' + stockValue);
            execCommand('scoreboard players set ' + teamArr[1] + ' Score ' + myStockCash);
        } else if(rand == 2) {
            stockValue = stockValue + 5;
            myStockCash = myStockUnits * stockValue;
            execCommand('scoreboard players set ' + teamArr[0] + ' Score ' + stockValue);
            execCommand('scoreboard players set ' + teamArr[1] + ' Score ' + myStockCash);
        } else if(rand == 3) {
            stockValue = stockValue + 32;
            myStockCash = myStockUnits * stockValue;
            execCommand('scoreboard players set ' + teamArr[0] + ' Score ' + stockValue);
            execCommand('scoreboard players set ' + teamArr[1] + ' Score ' + myStockCash);
        }
    }    
    var timer = setInterval(queryStock, 1500);

    events.blockRightClick(function(event) {
        var btnBlock = event.getBlockClicked().getPosition();
        //USE KEYS!!! Make this neater.
        
        //block 2, sell
        if( btnBlock.x == btnArray[0][0] &&
            btnBlock.y == btnArray[0][1] &&
            btnBlock.z == btnArray[0][2] ) {
            echo("match2");
            // money = money - 1;
            // updatePlayerScore(valueOfStockScore, self.name, valueOfStock);
        }
        
        //block 1, buy    
        if( btnBlock.x == btnArray[1][0] &&
            btnBlock.y == btnArray[1][1] &&
            btnBlock.z == btnArray[1][2] ) {
            echo("match1");
            // money = money + 1;
            // updatePlayerScore(valueOfStockScore, self.name, valueOfStock);
            
        } 
    });
}