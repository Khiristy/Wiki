/*declanche apres chargement html*/
document.addEventListener("DOMContentLoaded", function (){})

/*dechanche apres que l'ensemble des fichiers du site soit chargé*/
window.addEventListener("load",function(){

})

// Stockage des informations dans le localStorage
window.localStorage.setItem("pieces", valeurPieces);

// Récupération des pièces éventuellement stockées dans le localStorage
const pieces = window.localStorage.getItem("pieces");

// Ajout du listener pour mettre à jour des données du localStorage
const boutonMettreAJour = document.querySelector(".btn-maj");
boutonMettreAJour.addEventListener("click", function () {
  window.localStorage.removeItem("pieces");
});

