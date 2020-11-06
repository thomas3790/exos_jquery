$("#button").click(function(){ // Quand je clic, la fonction se déclenche.
    var result = $("#result").val();
    if(result == 26){
        alert("C'est la bonne réponse !");
    }
    if(result < 26) {
        alert("C'est plus !");
    }
    if(result > 26) {
        alert("C'est moins !");
    }
});