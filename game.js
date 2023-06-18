
var gamepattern = [];
userClickedPattern = [];

var buttoncolors =["red","blue","green","yellow"];

var i = 0;
var started = false;


    $(document).keypress(function() {
       if (!started) {
        $("#level-title").text("level " + i);
        nextsequnece();
       started = true;
       }
    
    })


    $(".btn").click(function () {
         var userChosenColour = $(this).attr("id");
         userClickedPattern.push(userChosenColour);

        //  console.log(userClickedPattern);
        playsound(userChosenColour);
        animatepress(userChosenColour);
        checkanswer(userClickedPattern.length-1);
        
    })


    function nextsequnece() { 

        userClickedPattern = [];

        i++; 
        $("#level-title").text("level " + i);


        var randomnumber = Math.floor(Math.random()*4);

        var randomchosencolor = buttoncolors[randomnumber];
    
        gamepattern.push(randomchosencolor);
    
        $("#"+ randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    
        playsound(randomchosencolor);
       
        // console.log(randomchosencolor)

        
    }

    function checkanswer(currentlevel) {

        if ( gamepattern[currentlevel]=== userClickedPattern[currentlevel] ) {
           
            console.log("success");
            
            if (userClickedPattern.length === gamepattern.length ) {
                setTimeout(function () {
                      nextsequnece();
                     // userClickedPattern = [];
                },1000)
            }
    
        }        
        else {
            console.log("wrong");
            playsound("wrong");
            
            $("body").addClass("game-over")
            
            setTimeout(function () {
                $("body").removeClass("game-over")
            },200);
            
            startover();
    
        }
    }
     
    
    function playsound(color) {
        var sound = new Audio("sounds/"+ color + ".mp3");
        sound.play();   
    }

    function animatepress(currentcolor) {
    $("#"+ currentcolor).addClass("pressed");
    setTimeout(function () {
        $("#"+ currentcolor).removeClass("pressed")   ; //remove the pressed class after a 100 milliseconds.
    },100);
    }    

  function startover() { 
    i = 0;
    gamepattern = [];
    started = false;
    
  }    
