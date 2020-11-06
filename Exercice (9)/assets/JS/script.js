$("#greenButton").css({"backgroundColor": "green"});
$("#redButton").css({"backgroundColor": "red"});
$("#blueButton").css({"backgroundColor": "blue"}); // Couleur bouton
$("body button").css({"color": "#ffffff"}); // Pour texte blanc

$("#greenButton").click(function(){ // Quand je clic, la fonction se déclenche.
    $("#text").css({"color": "green"})
});

$("#redButton").click(function(){
    $("#text").css({"color": "red"})
});

$("#blueButton").click(function(){
    $("#text").css({"color": "blue"})
});