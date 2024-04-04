

//ajout d'un element a l'ecran

function appendToDisplay(v){
    document.getElementById('display').value += v;

}

//Suppression d'un element de l'ecran 
function clearDisplay(){
    document.getElementById('display').value = "";
}

// calcul 

function Calculate(){
    let expression = document.getElementById('display').value
    let result = eval(expression)
    document.getElementById('display').value = result
}