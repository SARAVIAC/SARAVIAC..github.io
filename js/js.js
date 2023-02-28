
function mostrar(idtext, idbotonM, idbotonO){
    document.getElementById(idtext).style.display = 'block';
    document.getElementById(idbotonM).style.display = 'none';
    document.getElementById(idbotonO).style.display = 'block';
}

function ocultar(idtext, idbotonM, idbotonO){
    document.getElementById(idtext).style.display = 'none';
    document.getElementById(idbotonO).style.display = 'none';
    document.getElementById(idbotonM).style.display = 'block';
}

