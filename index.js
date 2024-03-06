var numberOfKeyButtons = document.querySelectorAll(".key").length;
for(var i=0; i<numberOfKeyButtons; i++){
    document.querySelectorAll(".key")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        buttonAnimation(buttonInnerHTML);

        switch (buttonInnerHTML) {
            case "c":
                var audio = new Audio("./sounds/c.mp3");
                audio.play();                
                break;
        
            case "d":
                var audio = new Audio("./sounds/d.mp3");
                audio.play();                
                break;

            case "e":
                var audio = new Audio("./sounds/e.mp3");
                audio.play();                
                break;
            
            case "f":
                var audio = new Audio("./sounds/f.mp3");
                audio.play();                
                break;

            case "g":
                var audio = new Audio("./sounds/g.mp3");
                audio.play();                
                break;
            
            case "a":
                var audio = new Audio("./sounds/a.mp3");
                audio.play();                
                break;
    
            case "h":
                var audio = new Audio("./sounds/h.mp3");
                audio.play();                
                break;
            

        }

      });
}

document.addEventListener("keydown", function(event) {

    buttonAnimation(event.key)    
    var keyPress = event.key

    switch (keyPress) {
        case "c":
            var audio = new Audio("./sounds/d.mp3");
            audio.play();                
            break;
    
        case "d":
            var audio = new Audio("./sounds/d.mp3");
            audio.play();                
            break;

        case "e":
            var audio = new Audio("./sounds/e.mp3");
            audio.play();                
            break;
        
        case "f":
            var audio = new Audio("./sounds/f.mp3");
            audio.play();                
            break;

        case "g":
            var audio = new Audio("./sounds/g.mp3");
            audio.play();                
            break;
        
        case "a":
            var audio = new Audio("./sounds/a.mp3");
            audio.play();                
            break;

        case "h":
            var audio = new Audio("./sounds/h.mp3");
            audio.play();                
            break;
}
})

function buttonAnimation(currentKey) {

    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

function buttonAnimationG1000() {

    var G1000 = document.querySelector(".g");

    G1000.classList.add("pressed");

    setTimeout(function() {
        G1000.classList.remove("pressed");
    }, 990);

}

function buttonAnimationE1000() {

    var E1000 = document.querySelector(".e");

    E1000.classList.add("pressed");

    setTimeout(function() {
        E1000.classList.remove("pressed");
    }, 990);

}

function buttonAnimationG500() {

    var G500 = document.querySelector(".g");

    G500.classList.add("pressed");

    setTimeout(function() {
        G500.classList.remove("pressed");
    }, 490);

}

function buttonAnimationA500() {

    var A500 = document.querySelector(".a");

    A500.classList.add("pressed");

    setTimeout(function() {
        A500.classList.remove("pressed");
    }, 490);

}

function buttonAnimationF500() {

    var F500 = document.querySelector(".f");

    F500.classList.add("pressed");

    setTimeout(function() {
        F500.classList.remove("pressed");
    }, 490);

}

function buttonAnimationF3500() {

    var F3500 = document.querySelector(".f");

    F3500.classList.add("pressed");

    setTimeout(function() {
        F3500.classList.remove("pressed");
    }, 3490);

}

function buttonAnimationF1000() {

    var F1000 = document.querySelector(".f");

    F1000.classList.add("pressed");

    setTimeout(function() {
        F1000.classList.remove("pressed");
    }, 990);

}

function buttonAnimationD1000() {

    var D1000 = document.querySelector(".d");

    D1000.classList.add("pressed");

    setTimeout(function() {
        D1000.classList.remove("pressed");
    }, 990);

}

function buttonAnimationE500() {

    var E500 = document.querySelector(".e");

    E500.classList.add("pressed");

    setTimeout(function() {
        E500.classList.remove("pressed");
    }, 490);

}

function buttonAnimationD500() {

    var D500 = document.querySelector(".d");

    D500.classList.add("pressed");

    setTimeout(function() {
        D500.classList.remove("pressed");
    }, 490);

}

function buttonAnimationE2000() {

    var E2000 = document.querySelector(".e");

    E2000.classList.add("pressed");

    setTimeout(function() {
        E2000.classList.remove("pressed");
    }, 1990);

}

function buttonAnimationE3000() {

    var E3000 = document.querySelector(".e");

    E3000.classList.add("pressed");

    setTimeout(function() {
        E3000.classList.remove("pressed");
    }, 2990);

}

function buttonAnimationC500() {

    var C500 = document.querySelector(".c");

    C500.classList.add("pressed");

    setTimeout(function() {
        C500.classList.remove("pressed");
    }, 490);

}

function buttonAnimationA1000() {

    var A1000 = document.querySelector(".a");

    A1000.classList.add("pressed");

    setTimeout(function() {
        A1000.classList.remove("pressed");
    }, 990);

}

function buttonAnimationA2000() {

    var A2000 = document.querySelector(".a");

    A2000.classList.add("pressed");

    setTimeout(function() {
        A2000.classList.remove("pressed");
    }, 1990);

}

function buttonAnimationH2000() {

    var H2000 = document.querySelector(".h");

    H2000.classList.add("pressed");

    setTimeout(function() {
        H2000.classList.remove("pressed");
    }, 1990);

}

function buttonAnimationH1000() {

    var H1000 = document.querySelector(".h");

    H1000.classList.add("pressed");

    setTimeout(function() {
        H1000.classList.remove("pressed");
    }, 990);

}

function buttonAnimationC2000() {

    var C2000 = document.querySelector(".c");

    C2000.classList.add("pressed");

    setTimeout(function() {
        C2000.classList.remove("pressed");
    }, 1990);

}



document.querySelector(".play").addEventListener("click", function() {
    var c = new Audio("./sounds/c.mp3");
    var d = new Audio("./sounds/d.mp3");
    var e = new Audio("./sounds/e.mp3");
    var f = new Audio("./sounds/f.mp3");
    var g = new Audio("./sounds/g.mp3");
    var a = new Audio("./sounds/a.mp3");
    var h = new Audio("./sounds/h.mp3");
    var c2 = new Audio("./sounds/c.mp3");
    var d2 = new Audio("./sounds/d.mp3");
    var e2 = new Audio("./sounds/e.mp3");
    var f2 = new Audio("./sounds/f.mp3");
    var g2 = new Audio("./sounds/g.mp3");
    var a2 = new Audio("./sounds/a.mp3");
    var h2 = new Audio("./sounds/h.mp3");
    
    setTimeout(function() {
        g.play();
        buttonAnimationG1000()
    }, 0);

    setTimeout(function() {
        e.play();
        buttonAnimationE1000()
    }, 1000);

    setTimeout(function() {
        g2.play();
        buttonAnimationG1000()
    }, 2000);

    setTimeout(function() {
        e2.play();
        buttonAnimationE1000()
    }, 3000);

    setTimeout(function() {
        g.play();
        buttonAnimationG500()
    }, 4000);

    setTimeout(function() {
        a.play();
        buttonAnimationA500()
    }, 4500);

    setTimeout(function() {
        g2.play();
        buttonAnimationG500()
    }, 5000);

    setTimeout(function() {
        f.play();
        buttonAnimationF500()
    }, 5500);

    setTimeout(function() {
        e.play();
        buttonAnimationE1000()
    }, 6000);

    setTimeout(function() {
        f2.play();
        buttonAnimationF3500()
    }, 7000);

    setTimeout(function() {
        f.play();
        buttonAnimationF1000()
    }, 10500);

    setTimeout(function() {
        d.play();
        buttonAnimationD1000()
    }, 11500);

    setTimeout(function() {
        f2.play();
        buttonAnimationF1000()
    }, 12500);

    setTimeout(function() {
        d.play();
        buttonAnimationD1000()
    }, 13500);

    setTimeout(function() {
        f.play();
        buttonAnimationF500()
    }, 14500);

    setTimeout(function() {
        g.play();
        buttonAnimationG500()
    }, 15000);

    setTimeout(function() {
        f2.play();
        buttonAnimationF500()
    }, 15500);

    setTimeout(function() {
        e.play();
        buttonAnimationE500()
    }, 16000);

    setTimeout(function() {
        d.play();
        buttonAnimationD500()
    }, 16500);

    setTimeout(function() {
        e2.play();
        buttonAnimationE2000()
    }, 17000);

    setTimeout(function() {
        e.play();
        buttonAnimationE3000()
    }, 19000);

    setTimeout(function() {
        g.play();
        buttonAnimationG500()
    }, 22000);

    setTimeout(function() {
        g2.play();
        buttonAnimationG500()
    }, 22500);

    setTimeout(function() {
        e.play();
        buttonAnimationE1000()
    }, 23000);

    setTimeout(function() {
        g.play();
        buttonAnimationG500()
    }, 24000);

    setTimeout(function() {
        g2.play();
        buttonAnimationG500()
    }, 24500);

    setTimeout(function() {
        e.play();
        buttonAnimationE1000()
    }, 25000);

    setTimeout(function() {
        g.play();
        buttonAnimationG1000()
    }, 26000);

    setTimeout(function() {
        c.play();
        buttonAnimationC500()
    }, 27000);

    setTimeout(function() {
        c2.play();
        buttonAnimationC500()
    }, 27500);

    setTimeout(function() {
        a.play();
        buttonAnimationA500()
    }, 28000);

    setTimeout(function() {
        g.play();
        buttonAnimationG500()
    }, 28500);

    setTimeout(function() {
        a.play();
        buttonAnimationA1000()
    }, 29000);

    setTimeout(function() {
        a2.play();
        buttonAnimationA2000()
    }, 30000);

    setTimeout(function() {
        h.play();
        buttonAnimationH2000()
    }, 32000);

    setTimeout(function() {
        h2.play();
        buttonAnimationH1000()
    }, 34000);

    setTimeout(function() {
        h.play();
        buttonAnimationH1000()
    }, 35000);

    setTimeout(function() {
        c.play();
        buttonAnimationC2000()
    }, 36000);

    setTimeout(function() {
        c2.play();
        buttonAnimationC2000()
    }, 38000);


})


