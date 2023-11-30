
class Item{
    constructor(name, contents = []/*, rim, liquor = [], liqueur = [], mixers = [], garnish = [], photo, batch, instructions = []*/){
     this.name = name;
     this.contents = contents;
     /*
     this.rim = rim;
     this.liquor = liquor;
     this.liqueur = liqueur;
     this.mixers = mixers;
     this.garnish = garnish;
     this.photo = photo;
     this.batch = batch;
     this.instructions = instructions;
     */
    };
   };



  let sangriaBatches = new Item("Sangria Batches", ["Red Sangria Batch", "White Sangria Batch", "Rosé Sangria Batch"]);
  let syrups = new Item("Syrups", ["Grenadine", "Pomegranate", "Watermelon"]);
  let glassRimmer = new Item("Glass Rimmer", ["Lime Juice", "Salt", "Sugar", "Hibiscus Salt", "Tajin"]);



  itemList = [
    sangriaBatches,
    syrups,
    glassRimmer
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

  // When the user clicks the button, open the modal
  $('body').on('click','.imageNumbers', function(){
    modal.style.display = "flex";

    // Resets Modal List
    $("#modalList").empty();
    
    console.log(this);
    

    itemList.map(x => {
      console.log(x["name"]);
      if(this.value === x["name"]){
        // Sets Modal Title
        let title = document.getElementById("modalTitle");
        title.innerText = x["name"];

        let modalList = document.getElementById("modalList");
    
        //console.log(x["contents"]);
        if(x.contents !== null){
          x.contents.map(i => {
            //console.log(i);
            let li = document.createElement('li');
            li.innerText= i;
            modalList.append(li);
          })
        }

      }
    });
    
  });

});



/*
if(x.similarBrands !== null){
  x.similarBrands.map(i => {
    //console.log(i);
    let p = document.createElement('p');
    p.append(i);
    similarBrandsElement.append(p);
  })
} else {
  $("#similarBrandsTitle").remove();
  $("#similarBrandsElement").remove();
}*/