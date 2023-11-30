
class Item{
    constructor(id, name, contents = []){
     this.id = id; 
     this.name = name;
     this.contents = contents;
    };
   };


   // Servie Well Printer
  let sangriaBatches = new Item("SWPSB", "Sangria Batches", ["Red Sangria Batch", "White Sangria Batch", "Rosé Sangria Batch"]);
  let syrups = new Item("SWPS", "Syrups", ["Grenadine", "Pomegranate", "Watermelon"]);
  let glassRimmer = new Item("SWPGR", "Glass Rimmer", ["Lime Juice", "Salt", "Sugar", "Hibiscus Salt", "Tajin"]);
  let sideRimBitters = new Item("SWPSRB", "Side Rim & Bitters", ["Black Salt", "Classic Bitters", "Chocolate Bitters", "Orange Bitters"]);
  let mixers = new Item("SWPM", "Mixers", ["Ginger Beer", "Ginger Ale", "Pineapple Juice"]);
  let tonics = new Item("SWPT", "Tonics", ["Classic Tonic", "Tiki Tonic", "Bloody Mary Mix"]);
  let printerStand = new Item("SWPPS", "Printer Stand", ["Printer Paper", "Printer Ink", "Cocktail Picks", "Chocolate Bar"]);
  let extraGarnish = new Item("SWPEG", "Extra Garnish", ["Coffee Beans", "Cinnamon Sugar"]);

  // Service Well Fruits
  let fruitsSWF = new Item("SWF", "Fruits", ["Basil", " Strawberries", "Limes", "Mint", "Jalapenos", "Oranges", "Lemons"])


  itemList = [
    // Servie Well Printer
    sangriaBatches,
    syrups,
    glassRimmer,
    sideRimBitters,
    mixers,
    tonics,
    printerStand,
    extraGarnish,

    // Service Well Fruits
    fruitsSWF
  ];




   function myFunction() {
    var elem = document.getElementsByTagName("BODY")[0];
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }





// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]; 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var mainTitle = document.getElementById("mainTitle");
var selectedSection = document.getElementById("serviceWellPrinter").alt;
mainTitle.innerText = selectedSection;


$(document).ready(function(){

  $('body').on('click','.icon', function(){
    $("#dropDownMenu").toggle();
  });

  $('.menu-items').on('click', function(){
    $("#dropDownMenu").toggle();
    $(".setup-images").hide(200);
    $(".image-numbers").hide(200);
  });

  $("#menuItem1").on('click', function(){
    $("#serviceWellPrinter").show(200);
    $(".service-well-printer").show(200);
  })

  $("#menuItem2").on('click', function(){
    $("#serviceWellFruit").show(200);
    $(".service-well-fruit").show(200);
  })
  


  
  




  // When the user clicks the button, open the modal
  $('body').on('click','.image-numbers', function(){
    modal.style.display = "flex";

    // Resets Modal List
    $("#modalList").empty();
    $("#modalTitle").empty();
    

    itemList.map(x => {
      if(this.name === x["id"]){
        // Sets Modal Title
        let title = document.getElementById("modalTitle");
        title.innerText = x["name"];

        let modalList = document.getElementById("modalList");
    
        //console.log(x["contents"]);
        if(x.contents !== null){
          x.contents.map(i => {
            let li = document.createElement('li');
            li.innerText= i;
            modalList.append(li);
          })
        }

      }
    });
    
  });

});
