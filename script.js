/*declanche apres chargement html*/
document.addEventListener("DOMContentLoaded", function (){



})

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


/** 
objet js, encapsuler tout le code d'une fonctionnalité et limiter le nbres de variables globales; namespace
*/

document.addEventListener("DOMContentLoaded", function (){
  Modale.init();
  })

const Modale = {
  init: function () {
      this.modale = document.getElementById('modale')
      this.modaleOpen = document.getElementById('modaleOpen')
      this.modaleClose = document.getElementById('modaleClose')
      this.body = document.body
      this.event()
  },
  event: function () {
      const that = this
      this.modaleOpen.addEventListener('click', function () {
          that.modale.classList.add('modale_show')
          that.body.classList.add('overlay')
      })
      this.modaleClose.addEventListener('click', function () {
          that.modale.classList.remove('modale_show')
          that.body.classList.remove('overlay')
      })
  } 
}

