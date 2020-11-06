$("#greenButton").css({"backgroundColor": "green"});
$("#redButton").css({"backgroundColor": "red"});
$("#blueButton").css({"backgroundColor": "blue"}); // Couleur bouton
$("body button").css({"color": "#ffffff"}); // Pour texte blanc

$("#greenButton").mouseover(function(){ // Quand je clic, la fonction se déclenche.
    $("#text").css({"color": "green"})
});

$("#greenButton").mouseout(function(){ // Quand je clic, la fonction se déclenche.
    $("#text").css({"color": "#000000"})
});

$("#redButton").mouseover(function(){
    $("#text").css({"color": "red"})
});

$("#redButton").mouseout(function(){
    $("#text").css({"color": "#000000"})
});

$("#blueButton").mouseover(function(){
    $("#text").css({"color": "blue"})
});

$("#blueButton").mouseout(function(){
    $("#text").css({"color": "#000000"})
});