$(function () {
    setInterval(f, 1000);
    
    function f() {
        var tLeft = Math.floor(Math.random()*1000),
            tTop  = Math.floor(Math.random()*1000);

        var style = "position: absolute; left:" +  tLeft + "; top: " + tTop + "";
        document.getElementById("container").innerHTML += "<div style='" + style + "'><img src='images/cat.ico'/> <span class='mew'>мяф </span></div>";
    }
});

