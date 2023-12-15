
class Item{
    constructor(id, name, contents = []){
     this.id = id; 
     this.name = name;
     this.contents = contents;
    };
   };

  // Service Well ---------------------------------------------------------------------------------------------------------------------------------------------
  // Service Well Printer
  let sangriaBatchesSWP = new Item("SWPSB", "Sangria Batches", ["Red Sangria Batch", "White Sangria Batch", "Rosé Sangria Batch"]);
  let syrupsSWP = new Item("SWPS", "Syrups", ["Grenadine", "Pomegranate", "Watermelon"]);
  let glassRimmerSWP = new Item("SWPGR", "Glass Rimmer", ["Lime Juice", "Salt", "Sugar", "Hibiscus Salt", "Tajin"]);
  let sideRimBittersSWP = new Item("SWPSRB", "Side Rim & Bitters", ["Black Salt", "Classic Bitters", "Chocolate Bitters", "Orange Bitters"]);
  let mixersSWP = new Item("SWPM", "Mixers", ["Ginger Beer", "Ginger Ale", "Pineapple Juice"]);
  let tonicsSWP = new Item("SWPT", "Tonics", ["Classic Tonic", "Tiki Tonic", "Bloody Mary Mix"]);
  let printerStandSWP = new Item("SWPPS", "Printer Stand", ["Printer Paper", "Printer Ink", "Cocktail Picks", "Chocolate Bar"]);
  let extraGarnishSWP = new Item("SWPEG", "Extra Garnish", ["Coffee Beans", "Cinnamon Sugar"]);

  // Service Well Main
  let mainSWTRL = new Item("SWMTRL", "Top Rack Left", ["-- Click Here for Section --"]);
  let mainSWTRR = new Item("SWMTRR", "Top Rack Right", ["-- Click Here for Section --"]);
  let mainSWMLSM = new Item("SWMLSM", "Left Side Mixers", ["Simple Syrup", "Orange Juice", "Cranberry Juice"]);
  let mainSWMRSM = new Item("SWMRSM", "Right Side Mixers", ["Sour Mix", "Lime Juice", "Rocco's Lime Mix"]);
  let mainSWMF = new Item("SWMF", "Fruits", ["-- Click Here for Section --"]);
  let mainSWMSR = new Item("SWMSR", "Speed Rack", ["Upper Rack ( Left to Right ):", "Dos Hombres Mezcal", "Triple Sec", "Triple Sec", "Jose Cuervo Tradicional Plata", "Jose Cuervo Tradicional Plata", "Titos", "Finlandia Or Other Well Vodka Brand", "Lower Rack ( Left to Right ):", "Teremana Blanco", "J.F. Hayden Citrus", "1800 Anejo", "Fletcha Azul Blanco", " Santo Blanco", "Tanteo Jalapeno", "Bacardi"]);
  let mainSWSG = new Item("SWMSG", "Server Garnish", ["-- Click Here for Section --"]);

  // Service Well Top Rack Left
  let pureesTRL = new Item("SWTRLP", "Purées", ["Coconut Purée", "Strawberry Purée", "Mango Purée", "Black Cherry Purée", "Olive Juice"]);
  let jiggerTRL = new Item("SWTRLJ", "Jigger", ["Jiggers must be used when preparing all menu drinks to ensure accuracy."]);
  let altMixer1TRL = new Item("SWTRLT1", "Alt. Mixer #1", ["Using alternate mixing tins can help expedite the time required to complete service well tickets. For example, using one mixing tin exclusively for standard margaritas is less likely to impact the taste from one drink to another. However, if the same tin is used for a spicy drink, it may lead to the next non-spicy drink being sent back. Allocating separate tins for spicy drinks or those with muddled ingredients can be reused for similar drinks, reducing the need to rinse your tins as often."]);
  let altMixer2TRL = new Item("SWTRLT2", "Alt. Mixer #2", ["Using alternate mixing tins can help expedite the time required to complete service well tickets. For example, using one mixing tin exclusively for standard margaritas is less likely to impact the taste from one drink to another. However, if the same tin is used for a spicy drink, it may lead to the next non-spicy drink being sent back. Allocating separate tins for spicy drinks or those with muddled ingredients can be reused for similar drinks, reducing the need to rinse your tins as often."]);
  let altMixer3TRL = new Item("SWTRLT3", "Alt. Mixer #3", ["Using alternate mixing tins can help expedite the time required to complete service well tickets. For example, using one mixing tin exclusively for standard margaritas is less likely to impact the taste from one drink to another. However, if the same tin is used for a spicy drink, it may lead to the next non-spicy drink being sent back. Allocating separate tins for spicy drinks or those with muddled ingredients can be reused for similar drinks, reducing the need to rinse your tins as often."]);

  // Service Well Top Rack Right
  let mainMixerTRR = new Item("SWTRRMT", "Main Mixer", ["Used for mixing most of the drinks ordered."]);
  let agaveTRR = new Item("SWTRRA", "Agave", ["Agave syrup comes from the agave plant, a succulent that is native to dry regions in Mexico.", "Agave syrup predominantly consists of fructose and some glucose, along with water, as well as small amounts of other carbohydrates, fat, polyols and vitamins and minerals.", "The sugars in agave syrup comprise around 80% fructose and 20% glucose.", "Due to its high fructose concentration, agave syrup is sweeter than table sugar and has less of an impact on blood glucose levels.", "The U.S. Food and Drug Administration has established specific labeling requirements for the Nutrition Facts of single-ingredient sugars such as pure agave syrup, honey and maple syrup.", "Agave syrup is not healthier than other sugars, but there are a few differences that make it an appealing choice for some."]);
  let toolsTRR = new Item("SWTRRT", "Tools", ["Strainers", "Muddler", "Stir Spoon", "Peeler"]);
  let pureesTRR = new Item("SWTRRP", "Purées", ["Prickly Pear", "Passion Fruit"]);
  let rosemaryTRR = new Item("SWTRRR", "Rosemary", ["Rosemary is used in the", "Roseberry Mocktail."]);


  // Service Well Fruits
  let fruitsSWF = new Item("SWF", "Fruits", ["Basil", " Strawberries", "Limes", "Mint", "Jalapenos", "Oranges", "Lemons"]);

  // Service Well Server Garnish
  let lemonsLimesSWSG = new Item("SWSG", "Limes & Lemons", ["Servers will cut lemons and limes and stock the service area with them, while all other garnishes will be filled by the opening bartender."]);
  let bottomFruitCaddySWSG = new Item("SWSGBFC", "Bottom Fruit Caddy", ["Left to Right:", "Watermelon Slices", "Dehydrated Limes Wheel", "Dehydrated Pineapples & Chilis", "Coconut Powder", "Edible Rose Buds", "Cherries"]);
  let topFruitCaddySWSG = new Item("SWSGTFC", "Top Fruit Caddy", ["Left to Right:", "Blueberries", "Olives", "Oranges", "Strawberries", "Basil", "Mint"]);

  // Service Well Overstock
  let houseMargaritaStationSWO = new Item("SWOHMS", "House Margarita Station", ["2x - Large Store'N'Pour containers filled with House Margarita Batch", "Other commonly used ingredients:", "Jameson & Peach Schnapps for Green Tea Shots", "Kahlua and Creme De Cacao for Espresso Martinis"]);
  let topRowSWO = new Item("SWOTR", "Top Row", ["Lindeman's Merlot", "Lindeman's Cabernet", "Rocco Mango Batch"]);
  let topMiddleRowSWO = new Item("SWOTMR", "Top Middle Row", ["Casamigos Reposado", "Casamigos Blanco", "Ghost Tequila"]);
  let bottomMiddleRowSWO = new Item("SWOBMR", "Bottom Middle Row", ["Don Julio Blanco", "Herradura Silver", "El Jimador Blanco"]);
  let bottomRowSWO = new Item("SWOBR", "Bottom Row", ["Parton Silver", "Cazadores Reposado", "J.F. Haydens Coffee Liqueur"]);
  let topStorageCabinetSWO = new Item("SWOTSC", "Top Of Starge Cabinet", ["Grand Marnier", "Zero Ritual (Tequila Alt.)", "Hornitos Anejo", "1x - Large Store'N'Pour container of Sour Mix", "1x - Large Store'N'Pour container of Rocco's Lime Mix", "-- Leave room for other liquors you may pull from the wall for service tickets --"]);


  // 400 Well ------------------------------------------------------------------------------------------------------------------------------------------------


  itemList = [
    // Servie Well Printer
    sangriaBatchesSWP,
    syrupsSWP,
    glassRimmerSWP,
    sideRimBittersSWP,
    mixersSWP,
    tonicsSWP,
    printerStandSWP,
    extraGarnishSWP,

    // Service Well Main
    mainSWTRL,
    mainSWTRR,
    mainSWMLSM,
    mainSWMRSM,
    mainSWMF,
    mainSWMSR,
    mainSWSG,

    // Service Well Top Rack Left
    pureesTRL,
    jiggerTRL,
    altMixer1TRL,
    altMixer2TRL,
    altMixer3TRL,

    // Service Well Top Rack Left
    mainMixerTRR,
    agaveTRR,
    toolsTRR,
    pureesTRR,
    rosemaryTRR,

    // Service Well Fruits
    fruitsSWF,

    //Servise Well Server Garnish
    lemonsLimesSWSG,
    bottomFruitCaddySWSG,
    topFruitCaddySWSG,

    //Servise Well Overstock
    houseMargaritaStationSWO,
    topRowSWO,
    topMiddleRowSWO,
    bottomMiddleRowSWO,
    bottomRowSWO,
    topStorageCabinetSWO

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

    var serviceWellSection = document.getElementById("menuItem1");
    var well400Section = document.getElementById("menuItem9");
    var well500Section = document.getElementById("menuItem12");
    var well700Section = document.getElementById("menuItem17");
    if (event.target == serviceWellSection) {
      dropDownMenu.style.display = "block";
    };

    if (event.target == well400Section) {
      dropDownMenu.style.display = "block";
    };

    if (event.target == well500Section) {
      dropDownMenu.style.display = "block";
    };

    if (event.target == well700Section) {
      dropDownMenu.style.display = "block";
    };


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
    $(".service-well-items").hide();
    $(".well-400-items").hide();
    $(".well-500-items").hide();
    $(".well-700-items").hide();
  });

  
  $('.sub-menu-items').on('click', function(){
    $("#dropDownMenu").toggle();
    $(".setup-images").hide(400);
    $(".image-numbers").hide(400);
  });
  

  $("#menuItem1").on('click', function(){
    dropDownMenu.style.display = "block";
    $(".service-well-items").toggle();
  });

  $("#menuItem2").on('click', function(){
    $("#serviceWellPrinter").show(400);
    $(".service-well-printer").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem3").on('click', function(){
    $("#serviceWellMain").show(400);
    $(".service-well-main").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem4").on('click', function(){
    $("#serviceWellTopRackLeft").show(400);
    $(".service-well-top-rack-left").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem5").on('click', function(){
    $("#serviceWellTopRackRight").show(400);
    $(".service-well-top-rack-right").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem6").on('click', function(){
    $("#serviceWellFruit").show(400);
    $(".service-well-fruit").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem7").on('click', function(){
    $("#serviceWellServerGarnish").show(400);
    $(".service-well-server-garnish").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem8").on('click', function(){
    $("#serviceWellOverstock").show(400);
    $(".service-well-overstock").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem9").on('click', function(){
    dropDownMenu.style.display = "block";
    $(".well-400-items").toggle();
  });

  $("#menuItem10").on('click', function(){
    $("#well400Main").show(400);
    $(".well-400-main").show(500);
    selectedSection = document.getElementById("well400Main").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem11").on('click', function(){
    $("#well400SideStation").show(400);
    $(".well-400-side-station").show(500);
    selectedSection = document.getElementById("well400Main").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem12").on('click', function(){
    dropDownMenu.style.display = "block";
    $(".well-500-items").toggle();
  });
  
  $("#menuItem13").on('click', function(){
    $("#well500Main").show(400);
    $(".well-500-main").show(500);
    selectedSection = document.getElementById("well500Main").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem14").on('click', function(){
    $("#well500LeftSide").show(400);
    $(".well-500-left-side").show(500);
    selectedSection = document.getElementById("well500LeftSide").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem15").on('click', function(){
    $("#well500RightSide").show(400);
    $(".well-500-right-side").show(500);
    selectedSection = document.getElementById("well500RightSide").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem16").on('click', function(){
    $("#well500Garnish").show(400);
    $(".well-500-garnish").show(500);
    selectedSection = document.getElementById("well500Garnish").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem17").on('click', function(){
    dropDownMenu.style.display = "block";
    $(".well-700-items").toggle();
  });

  $("#menuItem18").on('click', function(){
    $("#well700Main").show(400);
    $(".well-700-main").show(500);
    selectedSection = document.getElementById("well700Main").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem19").on('click', function(){
    $("#well700LeftStation").show(400);
    $(".well-700-left-station").show(500);
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
            li.innerText = i;
            modalList.append(li);

            if(x.contents[0] === "-- Click Here for Section --"){
                modal.style.display = "none";
                $(".setup-images").hide(400);
                $(".image-numbers").hide(400);

                if(this.id === "btn1SWM"){
                  $("#serviceWellTopRackLeft").show(400);
                  $(".service-well-top-rack-left").show(500);
                } 
                
                if(this.id === "btn2SWM"){
                  $("#serviceWellTopRackRight").show(400);
                  $(".service-well-top-rack-right").show(500);
                }

                if(this.id === "btn5SWM"){
                  $("#serviceWellFruit").show(400);
                  $(".service-well-fruit").show(500);
                }

                /*
                if(this.id === "btn6SWM"){
                  $("#serviceWellFruit").show(400);
                  $(".service-well-fruit").show(500);
                }
                */

                if(this.id === "btn7SWM"){
                  $("#serviceWellServerGarnish").show(400);
                  $(".service-well-server-garnish").show(500);
                }
                
            }
          });
        }


      }
    });
    
  });

});
