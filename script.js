
class Item{
    constructor(id, name, contents = []){
     this.id = id; 
     this.name = name;
     this.contents = contents;
    };
   };


   // Service Well Printer
  let sangriaBatches = new Item("SWPSB", "Sangria Batches", ["Red Sangria Batch", "White Sangria Batch", "Rosé Sangria Batch"]);
  let syrups = new Item("SWPS", "Syrups", ["Grenadine", "Pomegranate", "Watermelon"]);
  let glassRimmer = new Item("SWPGR", "Glass Rimmer", ["Lime Juice", "Salt", "Sugar", "Hibiscus Salt", "Tajin"]);
  let sideRimBitters = new Item("SWPSRB", "Side Rim & Bitters", ["Black Salt", "Classic Bitters", "Chocolate Bitters", "Orange Bitters"]);
  let mixers = new Item("SWPM", "Mixers", ["Ginger Beer", "Ginger Ale", "Pineapple Juice"]);
  let tonics = new Item("SWPT", "Tonics", ["Classic Tonic", "Tiki Tonic", "Bloody Mary Mix"]);
  let printerStand = new Item("SWPPS", "Printer Stand", ["Printer Paper", "Printer Ink", "Cocktail Picks", "Chocolate Bar"]);
  let extraGarnish = new Item("SWPEG", "Extra Garnish", ["Coffee Beans", "Cinnamon Sugar"]);

  // Service Well Top Rack Left
  let purees = new Item("SWTRLP", "Purées", ["Coconut Purée", "Strawberry Purée", "Mango Purée", "Black Cherry Purée", "Olive Juice"]);
  let jigger = new Item("SWTRLJ", "Jigger", ["Jiggers must be used when preparing all menu drinks to ensure accuracy."]);
  let altMixer1 = new Item("SWTRLT1", "Alt. Mixer #1", ["Using alternate mixing tins can help expedite the time required to complete service well tickets. For example, using one mixing tin exclusively for standard margaritas is less likely to impact the taste from one drink to another. However, if the same tin is used for a spicy drink, it may lead to the next non-spicy drink being sent back. Allocating separate tins for spicy drinks or those with muddled ingredients can be reused for similar drinks, reducing the need to rinse your tins as often."]);
  let altMixer2 = new Item("SWTRLT2", "Alt. Mixer #2", ["Using alternate mixing tins can help expedite the time required to complete service well tickets. For example, using one mixing tin exclusively for standard margaritas is less likely to impact the taste from one drink to another. However, if the same tin is used for a spicy drink, it may lead to the next non-spicy drink being sent back. Allocating separate tins for spicy drinks or those with muddled ingredients can be reused for similar drinks, reducing the need to rinse your tins as often."]);
  let altMixer3 = new Item("SWTRLT3", "Alt. Mixer #3", ["Using alternate mixing tins can help expedite the time required to complete service well tickets. For example, using one mixing tin exclusively for standard margaritas is less likely to impact the taste from one drink to another. However, if the same tin is used for a spicy drink, it may lead to the next non-spicy drink being sent back. Allocating separate tins for spicy drinks or those with muddled ingredients can be reused for similar drinks, reducing the need to rinse your tins as often."]);



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

    // Service Well Top Rack Left
    purees,
    jigger,
    altMixer1,
    altMixer2,
    altMixer3,

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
var dropDownMenu = document.getElementById("dropDownMenu");
var icon = document.getElementById("icon");
var iconActual = document.getElementById("iconActual");

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

  if (event.target !== dropDownMenu) {
    dropDownMenu.style.display = "none";
  }

  if (event.target == icon || event.target == iconActual) {
    dropDownMenu.style.display = "block";
  }
}

var mainTitle = document.getElementById("mainTitle");
var selectedSection = document.getElementById("serviceWellPrinter").alt;
mainTitle.innerText = selectedSection;


$(document).ready(function(){
  // Initialize
  $("#serviceWellPrinter").show();
  $(".service-well-printer").show();

  $('body').on('click','#icon', function(){
    $("#dropDownMenu").toggle();
  });

  $('.menu-items').on('click', function(){
    $("#dropDownMenu").toggle();
    $(".setup-images").hide(400);
    $(".image-numbers").hide(400);
  });

  $("#menuItem1").on('click', function(){
    $("#serviceWellPrinter").show(400);
    $(".service-well-printer").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem2").on('click', function(){
    $("#serviceWellMain").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem3").on('click', function(){
    $("#serviceWellTopRackLeft").show(400);
    $(".service-well-top-rack-left").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem4").on('click', function(){
    $("#serviceWellTopRackRight").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem5").on('click', function(){
    $("#serviceWellFruit").show(400);
    $(".service-well-fruit").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem6").on('click', function(){
    $("#serviceWellServerGarnish").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem7").on('click', function(){
    $("#serviceWellOverstock").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem8").on('click', function(){
    $("#well400Main").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("well400Main").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem9").on('click', function(){
    $("#well400SideStation").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("well400Main").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem10").on('click', function(){
    $("#well500Main").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("well500Main").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem11").on('click', function(){
    $("#well500LeftSide").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("well500LeftSide").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem12").on('click', function(){
    $("#well500RightSide").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("well500RightSide").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem13").on('click', function(){
    $("#well500Garnish").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("well500Garnish").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem14").on('click', function(){
    $("#well700Main").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("well700Main").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem15").on('click', function(){
    $("#well700LeftStation").show(400);
    //$(".service-well-printer").show(500);
    selectedSection = document.getElementById("well700LeftStation").alt;
    mainTitle.innerText = selectedSection;
  });



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
