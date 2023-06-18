// alert("hi")

var gamepattern = [];
userClickedPattern = [];

var buttoncolors =["red","blue","green","yellow"];

var i = 0;
var started = false;


 //we added document so that when a key pressed any where in document the game starts
    $(document).keypress(function() {
       if (!started) {
        $("#level-title").text("level " + i);
        nextsequnece();
       started = true;
       }
    
    })

// here a handler function is created - when clicked it performs the code in given function - a variable userchosencolor is created which when push gives id of button pushed - console log is used to check whether it is write or wrong.

    $(".btn").click(function () {
        // var userChosenColour = $(".btn").click().attr("id");  // ---> when console logged it does name the color but i only GREEN
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
           
            // var sound = new Audio ["wrong.mp3"];
           // sound.play(); // wrong way to play a sound
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

  function startover() { // this fubnctn is not working idk why not
    i = 0;
    gamepattern = [];
    started = false;
    
  }    