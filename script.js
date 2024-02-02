
class Item{
    constructor(id, name, contents = []){
     this.id = id; 
     this.name = name;
     this.contents = contents;
    };
   };

  // Service Well ---------------------------------------------------------------------------------------------------------------------------------------------
  // Service Well Printer
  let sangriaBatchesSWP = new Item("SWPSB", "Sangria", ["Red Sangria Batch", "Equal parts:", "E & J Brandy / Blackberry Brandy", "-----------------------------------------------", "White Sangria Batch", "Equal parts:", "- E & J Brandy / Amaretto", "-----------------------------------------------", "Rosé Sangria Batch", "Equal parts:", "E & J Brandy / Peach Schnapps"]);
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
  let altMixer1TRL = new Item("SWTRLT1", "Alt. Mixer #1", ["Spicy Drinks Mixer", "Using alternate mixing tins can help expedite the time required to complete service well tickets. For example, using one mixing tin exclusively for standard margaritas is less likely to impact the taste from one drink to another. However, if the same tin is used for a spicy drink, it may lead to the next non-spicy drink being sent back. Allocating separate tins for spicy drinks or those with muddled ingredients can be reused for similar drinks, reducing the need to rinse your tins as often."]);
  let altMixer2TRL = new Item("SWTRLT2", "Alt. Mixer #2", ["Strawberry Basil Mixer", "Using alternate mixing tins can help expedite the time required to complete service well tickets. For example, using one mixing tin exclusively for standard margaritas is less likely to impact the taste from one drink to another. However, if the same tin is used for a spicy drink, it may lead to the next non-spicy drink being sent back. Allocating separate tins for spicy drinks or those with muddled ingredients can be reused for similar drinks, reducing the need to rinse your tins as often."]);
  let altMixer3TRL = new Item("SWTRLT3", "Alt. Mixer #3", ["Mezcal Mixer", "Using alternate mixing tins can help expedite the time required to complete service well tickets. For example, using one mixing tin exclusively for standard margaritas is less likely to impact the taste from one drink to another. However, if the same tin is used for a spicy drink, it may lead to the next non-spicy drink being sent back. Allocating separate tins for spicy drinks or those with muddled ingredients can be reused for similar drinks, reducing the need to rinse your tins as often."]);

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
  let topRowSWO = new Item("SWOTR", "Top Row", ["Lindeman's Merlot", "(Happy Hour Merlot & used in the Red Sangria)", "----------------------------------------", "Lindeman's Cabernet", "(Happy Hour Cabernet)", "----------------------------------------","Rocco Mango Batch", "Used in the Rocco Mango"]);
  let topMiddleRowSWO = new Item("SWOTMR", "Top Middle Row", ["Casamigos Reposado", "(Frequently used tequila)", "----------------------------------------", "Casamigos Blanco", "(Frequently used tequila)", "----------------------------------------", "Ghost Tequila", "(Used in the Spicy Mango)"]);
  let bottomMiddleRowSWO = new Item("SWOBMR", "Bottom Middle Row", ["Don Julio Blanco", "(Frequently used tequila)", "----------------------------------------", "Herradura Silver", "(Used in the Skinny senorita)", "----------------------------------------", "El Jimador Blanco", "(Used in the Watermelon Kiss & Two)"]);
  let bottomRowSWO = new Item("SWOBR", "Bottom Row", ["Parton Silver", "(Frequently used tequila)", "----------------------------------------", "Cazadores Reposado", "(Used in the Mexitini)", "----------------------------------------", "J.F. Haydens Coffee Liqueur", "(Used in the Mexitini)"]);
  let topStorageCabinetSWO = new Item("SWOTSC", "Top Of Starge Cabinet", ["Grand Marnier", "Zero Ritual (Tequila Alt.)", "Hornitos Anejo", "1x - Large Store'N'Pour container of Sour Mix", "1x - Large Store'N'Pour container of Rocco's Lime Mix", "-- Leave room for other liquors you may pull from the wall for service tickets. Replace when no longer needed. --"]);
  let storageCabinetSWO = new Item("SWOSC", "Storage Cabinet", ["-- Click Here for Section --"]);

  // Service Well Overstock Storage
  let tanteoSWOS = new Item("SWOST", "Tanteo", ["Habanero or Chipotle", "You will Likely go through more Habanero."]);
  let herraduraSilverSWOS = new Item("SWOSHS", "Herradura Silver", ["Used in the Skinny Senorita"]);
  let dosHombresJovenSWOS = new Item("SWOSDHJ", "Dos Hombres Joven", ["Used in the Two Tango, Smokey Mule & Dos Homb-Rise"]);
  let anejo1800SWOS = new Item("SWOS1800A", "1800 Anejo", ["Used in the Cadillac Margarita & the Mexican Mule"]);
  let fletchaAzulSWOS = new Item("SWOSFAB", "Fletcha Azul Blanco", ["Used in the Strawberry Basil"]);
  let santoBlancoSWOS = new Item("SWOSSB", "Santo Blanco", ["Used in the Black Diamond"]);
  let joseCuervoTradicionalSWOS = new Item("SWOSJCT", "Jose Cuervo Tradicional", ["Used in the House Margarita & in a number of other menu drinks"]);
  let tripleSecSWOS = new Item("SWOSTS", "Triple Sec", ["Used in:", "House Margarita", "Spicy Jalapeno", "Strawberry Basil", "Watermelon Kiss", "Happy Hour Margaritas"]);
  let titosSWOS = new Item("SWOSTITOS", "Tito's", ["Used in the American Mule"]);
  let wellVodkaSWOS = new Item("SWOSWV", "Well Vodka", ["Happy Hour Vodka"]);
  let ghostInfusedSWOS = new Item("SWOSGI", "Ghost Infused", ["Used in the Spicy Mango"]);
  let tanteoJalapenoSWOS = new Item("SWOSTJ", "Tanteo Jalapeno", ["Used in the Spicy Jalapeno"]);
  let bacardiSWOS = new Item("SWOSB", "Bacardi", ["Used as Well Rum"]);



  // 400 Well ------------------------------------------------------------------------------------------------------------------------------------------------
  let toolsW4M = new Item("W4MAMT", "Tools & etc.", ["Agave", "Olive Juice", "Coconut Purée", "Strainers", "Muddler", "Stir Spoon", "Peeler", "Alt. Mixers"]);
  let leftSideMixersW4M = new Item("W4MLSM", "Left Side Mixers", ["Simple Syrup", "Orange Juice", "Cranberry Juice"]);
  let rightSideMixersW4M = new Item("W4MRSM", "Right Side Mixers", ["Sour Mix", "Lime Juice", "Rocco's Lime Mix"]);
  let pureesW4M = new Item("W4MP", "Purées", ["Strawberry", "Mango", "Black Cherry", "Prickly Pear", "Passion Fruit"]);
  let muddleGarnishW4M = new Item("W4MMG", "Muddle Garnish", ["Strawberries", "Basil", "Jalapenos", "Mint"]);
  let limesW4M = new Item("W4ML", "Limes", ["Make sure limes are fresh and rotated when necessary."]);
  let topRowW4M = new Item("W4MSRTR", "Speed Rack Top Row", ["Rocco Mango Batch", "Hornitos Anejo", "Dos Hombres Joven", "J. F. Hayden Citrus", " Teremana Blanco", "Triple Sec", "Triple Sec", "Jose Cuervo Tradicional", "Jose Cuervo Tradicional", "Tito's", "Well Vodka", "( i.e. Finlandia or Sky )", "Call Vodka", "( i.e. Kettle One or Grey Goose )"]);
  let bottomRowW4M = new Item("W4MSRBR", "Speed Rack Bottom Row", ["Jack Daniels", "Bombay Gin", "Zero Ritual Tequila Alt.", "Cointreau", "El Jimador", "Herradura Silver", "1800 Anejo", "Santo Blanco", "Fletcha Azul", "Tanteo Jalapeno", "Tanteo Habanero", "Tanteo Chipotle", "Ghost Infused", "Bacardi"]);

  // 400 Well Side Station ------------------------------------------------------------------------------------------------------------------------------------------------
  let glassRimmerW4SS = new Item("W4SSGR", "Glass Rimmer", ["Lime Juice", "Salt", "Sugar", "Hibiscus Salt", "Tajin"]);
  let lemonsOrangesW4SS = new Item("W4SSLO", "Lemons & Oranges", ["Useful for making sangrias and drink garnishes."]);
  let dryGarnishW4SS = new Item("W4SSDG", "Dry Garnish", ["Dehydrated Lime Wheels", "Dehydrated Pineapple Wedges / Chile Peppers", "Rose Buds", "Coconut Powder"]);
  let sidePlatesW4SS = new Item("W4SSSP", "Side Plates", ["Side plates & silverware should be placed in front each guest that plans on eating."]);
  let silverwareW4SS = new Item("W4SSS", "Silverware", ["Side plates & silverware should be placed in front each guest that plans on eating."]);

  // 500 Well Main ------------------------------------------------------------------------------------------------------------------------------------------------
  let toolsW5M = new Item("W5MAMT", "Tools & etc.", ["Agave", "Coconut Purée", "Strainers", "Muddler", "Stir Spoon", "Peeler", "Alt. Mixers"]);
  let leftSideMixersW5M = new Item("W5MLSM", "Left Side Mixers", ["Simple Syrup", "Orange Juice", "Cranberry Juice"]);
  let rightSideMixersW5M = new Item("W5MRSM", "Right Side Mixers", ["Sour Mix", "Lime Juice", "Rocco's Lime Mix"]);
  let topRowW5M = new Item("W5MSRTR", "Speed Rack Top Row", ["Rocco Mango Batch", "Hornitos Anejo", "Dos Hombres Joven", "J. F. Hayden Citrus", " Teremana Blanco", "Triple Sec", "Triple Sec", "Jose Cuervo Tradicional", "Jose Cuervo Tradicional", "Tito's", "Well Vodka", "( i.e. Finlandia or Sky )", "Call Vodka", "( i.e. Kettle One or Grey Goose )"]);
  let bottomRowW5M = new Item("W5MSRBR", "Speed Rack Bottom Row", ["Jack Daniels", "Bombay Gin", "Zero Ritual Tequila Alt.", "Cointreau", "El Jimador", "Herradura Silver", "1800 Anejo", "Santo Blanco", "Fletcha Azul", "Tanteo Jalapeno", "Tanteo Habanero", "Tanteo Chipotle", "Ghost Infused", "Bacardi"]);
  let mainMixerW5M = new Item("W5MMMT", "Main Mixer & Tools", ["Used for mixing most of the drinks ordered.", "Jiggers must be used when preparing all menu drinks to ensure accuracy."]);

  // 500 Well Left Side ------------------------------------------------------------------------------------------------------------------------------------------------
  let mixersW5LS = new Item("W5LSTM", "Tonics & Mixers", ["Classic Tonic", "Tiki Tonic", "Ginger Beer", "Ginger Ale", "Pineapple Juice"]);
  let pureesW5LS = new Item("W5LSP", "Side Well", ["Strawberry", "Mango", "Black Cherry", "Prickly Pear", "Passion Fruit", "Watermelon", "Pomegranate", "Grenadine", "Olive Juice", "Bloody Mary Mix"]);

  // 500 Well Right Side ------------------------------------------------------------------------------------------------------------------------------------------------
  let glassRimmerW5RS = new Item("W5RSGR", "Glass Rimmer", ["Lime Juice", "Salt", "Sugar", "Hibiscus Salt", "Tajin"]);
  let limesW5RS = new Item("W5RSL", "Limes", ["Make sure limes are fresh and rotated when necessary."]);
  let dryGarnishW5RS = new Item("W5RSDG", "Dry Garnish", ["Dehydrated Lime Wheels", "Dehydrated Pineapple Wedges", "Chile Peppers", "Rose Buds", "Coconut Powder", "Cherries"]);
  let sideRimW5RS = new Item("W5RSSR", "Side Rims", ["Black Salt", "Other side rims such as jalapeno salt can be set up where space permits."]);
  let grandMarnierW5RS = new Item("W5RSGM", "Grand Marnier", ["Grand Marnier is used in our Cadillac Margarita and should be readily available."]);
  let extraGarnishW5RS = new Item("W5RSEG", "Extra Garnish", ["Jalapenos", "- jalapenos get used quite often and should be kept close by. -", "Whole Orange", "- Some drinks require an orange peel as a garnish. such as the Old Fashioned -"]);

  // 500 Well Garnish ------------------------------------------------------------------------------------------------------------------------------------------------
  let topRowW5G = new Item("W5GGTR", "Top Row", ["Basil", "Strawberries", "Lemons", "Watermelons", "Rosemary"]);
  let bottomRowW5G = new Item("W5GGBR", "Bottom Row", ["Mint", "Blueberries", "Oranges", "Peeled Cucumbers", "Olives"]);
  let platesSilverwareW5G = new Item("W5GPS", "Plates & Silverware", ["Side plates & silverware should be placed in front each guest that plans on eating."]);

  // 500 Well Overstock ------------------------------------------------------------------------------------------------------------------------------------------------
  let joseCuervoW5O = new Item("W5OJCT", "Jose Cuervo Tradicional", ["2 Rows", "----------------------", "12 Bottles Total"]);
  let tripleSecW5O = new Item("W5OTS", "Triple Sec", ["2 Rows", "----------------------", "12 Bottles Total"]);
  let tanteoJalapenoW5O = new Item("W5OTJ", "Tanteo Jalapeno", ["1 Row", "----------------------", "6 Bottles Total"]);

  // 700 Well Main ------------------------------------------------------------------------------------------------------------------------------------------------
  let glassRimmerW7M = new Item("W7MGR", "Glass Rimmer", ["Lime Juice", "Salt", "Sugar", "Hibiscus Salt", "Tajin"]);
  let limesW7M = new Item("W7ML", "Limes", ["Make sure limes are fresh and rotated when necessary."]);
  let dryGarnishW7M = new Item("W7MDG", "Dry Garnish", ["Dehydrated Lime Wheels", "Dehydrated Pineapple Wedges / Chile Peppers", "Rose Buds", "Coconut Powder"]);
  let sideRimGrandMarnierW7M = new Item("W7MSRGM", "Side Rim & Grand Marnier", ["Black Salt", "- Other side rims such as jalapeno salt can be set up where space permits.", "- Grand Marnier is used in our Cadillac Margarita and should be readily available."]);
  let toolsW7M = new Item("W7MAMT", "Tools & etc.", ["Strainers", "Muddler", "Stir Spoon", "Peeler", "Alt. Mixers"]);
  let muddleGarnishW7M = new Item("W7MMG", "Muddle Garnish", ["Oranges", "Lemons","Basil", "Strawberries", "Mint", "Jalapenos"]);
  let mainMixerW7M = new Item("W7MMM", "Main Mixer & Tools", ["Used for mixing most of the drinks ordered.", "Jiggers must be used when preparing all menu drinks to ensure accuracy."]);
  let rightSideMixersW7M = new Item("W7MRSM", "Right Side Mixers", ["Sour Mix", "Lime Juice", "Rocco's Lime Mix"]);

  // 700 Well Left Station --------------------------------------------------------------------------------------------------------------------------------------------
  let mixersW7LS = new Item("W7LSTM", "Tonics & Mixers", ["Classic Tonic", "Tiki Tonic", "Ginger Beer", "Ginger Ale", "Pineapple Juice"]);
  let pureesW7LS = new Item("W7LSP", "Side Well", ["Strawberry", "Mango", "Black Cherry", "Prickly Pear", "Passion Fruit", "Watermelon", "Pomegranate", "Grenadine", "Olive Juice", "Bloody Mary Mix"]);
  let leftSideMixersW7LS = new Item("W7LSLSM", "Left Side Mixers", ["Simple Syrup", "Orange Juice", "Cranberry Juice"]);

  // 700 Well Overstock ------------------------------------------------------------------------------------------------------------------------------------------------
  let ghostInfusedW7O = new Item("W5OGI", "Ghost Infused", ["1 Row", "----------------------", "6 Bottles Total"]);
  let teremanaW7O = new Item("W5OT", "Teremana", ["1 Row", "----------------------", "6 Bottles Total"]);
  let wellVodkaW7O = new Item("W5OWV", "Well Vodka", ["1 Row", "----------------------", "7 Bottles Total"]);
  let herraduraSilverW7O = new Item("W5OHS", "Herradura Silver", ["1 Row", "----------------------", "5 Bottles Total"]);
  let elJimadorW7O = new Item("W5OEJ", "El Jimador", ["1 Row", "----------------------", "6 Bottles Total"]);

  // Server Pickup ------------------------------------------------------------------------------------------------------------------------------------------------
  let rightSideSP = new Item("SPLL", "Lemons & Limes", ["Also:", "Garnish Picks", "Ticket Holder", "Tall Straws", "Short Straws", "Tiny Clothes Pins"]);
  let leftSide1SP = new Item("SPSGL", "Dry Garnish", ["Dehydrated Lime Wheels", "Dehydrated Pineapples / Peppers", "Rose Buds", "Coconut Powder", "Olives", "Cherries"]);
  let leftSide2SP = new Item("SPSGR", "Muddle Garnish", ["Oranges", "Watermelon", "Basil", "Strawberries", "Mint", "Jalapenos", "Blueberries", "( Garnishes can be placed on the side if there's no room in the fruit caddy. )"]);



  // Batch Recipes ------------------------------------------------------------------------------------------------------------------------------------------------------
  let houseMargaritaBR = new Item("HMBR", "House Margarita", ["House Margarita Batch", "--------------------------------------------------", "- Use 22 liter container", "- 6 Bottles Jose Cuervo Tradicional", "- 3 Bottles of Triple Sec", "- 9 Liters of Sour Mix", "--------------------------------------------------", "Please make sure to measure out 9 liters of the sour mix. Do not pour 9 bottles."]);
  let roccoLimeBR = new Item("RLBR", "Rocco Lime", ["Rocco Lime Batch", "--------------------------------------------------", "Coming Soon..."]);
  let roccoMangoBR = new Item("RMBR", "Rocco Mango", ["Rocco Mango Batch", "--------------------------------------------------", "Jose Cuervo Tradicional Silver:", "1500ml", "--------------------------------------------------", "Rock & Roll Mango Tequila:", "1500ml", "--------------------------------------------------", "J.F. Hayden's Mango Liqueur:", "1500ml"]);
  let sourMixBR = new Item("SMBR", "Sour Mix", ["Sour Mix Batch", "--------------------------------------------------", "- Use 22 liter container", "- Add 2 gallons of sour mix", "- Mix 1 Tablespoon of Aqua Faba with 8oz of water", "- Add Aqua Faba Mix", "- Stir until dissolved"]);




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
    topStorageCabinetSWO,
    storageCabinetSWO,

    // Service Well Overstock Storage
    tanteoSWOS,
    herraduraSilverSWOS,
    dosHombresJovenSWOS,
    anejo1800SWOS,
    fletchaAzulSWOS,
    santoBlancoSWOS,
    joseCuervoTradicionalSWOS,
    tripleSecSWOS,
    titosSWOS,
    wellVodkaSWOS,
    ghostInfusedSWOS,
    tanteoJalapenoSWOS,
    bacardiSWOS,


    
    // Well 400 Main
    toolsW4M,
    leftSideMixersW4M,
    rightSideMixersW4M,
    pureesW4M,
    muddleGarnishW4M,
    limesW4M,
    topRowW4M,
    bottomRowW4M,

    // Well 400 Side Station
    glassRimmerW4SS,
    lemonsOrangesW4SS,
    dryGarnishW4SS,
    sidePlatesW4SS,
    silverwareW4SS,

    // Well 500 Main
    toolsW5M,
    leftSideMixersW5M,
    rightSideMixersW5M,
    topRowW5M,
    bottomRowW5M,
    mainMixerW5M,

    // Well 500 Left Side
    mixersW5LS,
    pureesW5LS,
    glassRimmerW5RS,
    limesW5RS,
    dryGarnishW5RS,
    sideRimW5RS,
    grandMarnierW5RS,
    extraGarnishW5RS,
    topRowW5G,
    bottomRowW5G,
    platesSilverwareW5G,

    // Well 500 Overstock
    joseCuervoW5O,
    tripleSecW5O,
    tanteoJalapenoW5O,

    // Well 700 Main
    glassRimmerW7M,
    limesW7M,
    dryGarnishW7M,
    sideRimGrandMarnierW7M,
    toolsW7M,
    muddleGarnishW7M,
    mainMixerW7M,
    rightSideMixersW7M,
    mixersW7LS,
    pureesW7LS,
    leftSideMixersW7LS,

    // Well 700 Overstock
    ghostInfusedW7O,
    teremanaW7O,
    wellVodkaW7O,
    herraduraSilverW7O,
    elJimadorW7O,

    // Server Pickup
    rightSideSP,
    leftSide1SP,
    leftSide2SP,

    // Batch Recipes
    houseMargaritaBR,
    roccoLimeBR,
    roccoMangoBR,
    sourMixBR

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
    var well700Section = document.getElementById("menuItem18");
    var batchRecipes = document.getElementById("menuItem22");
    var menuItemClosingDuties = document.getElementById("menuItemClosingDuties");


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

    if (event.target == batchRecipes) {
      dropDownMenu.style.display = "block";
    };

    if (event.target == menuItemClosingDuties) {
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


  $('body').on('click','#icon','#iconActual', function(){
    $("#dropDownMenu").toggle();
    $(".service-well-items").hide();
    $(".well-400-items").hide();
    $(".well-500-items").hide();
    $(".well-700-items").hide();
    $(".batch-recipes").hide();
    $(".closing-duties").hide();
  });

  
  $('.sub-menu-items').on('click', function(){
    $("#dropDownMenu").toggle();
    $(".setup-images").hide(400);
    $(".image-numbers").hide(400);
    $("#batchRecipesDiv").hide();
    $("#batchRecipesDiv").empty();
  });
  

  $("#menuItem1").on('click', function(){
    dropDownMenu.style.display = "block";
    $(".service-well-items").toggle();
  });

  $("#menuItem2").on('click', function(){
    $(".photo-containers").show();
    $("#serviceWellPrinter").show(400);
    $(".service-well-printer").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem3").on('click', function(){
    $(".photo-containers").show();
    $("#serviceWellMain").show(400);
    $(".service-well-main").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem4").on('click', function(){
    $(".photo-containers").show();
    $("#serviceWellTopRackLeft").show(400);
    $(".service-well-top-rack-left").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem5").on('click', function(){
    $(".photo-containers").show();
    $("#serviceWellTopRackRight").show(400);
    $(".service-well-top-rack-right").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem6").on('click', function(){
    $(".photo-containers").show();
    $("#serviceWellFruit").show(400);
    $(".service-well-fruit").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem7").on('click', function(){
    $(".photo-containers").show();
    $("#serviceWellServerGarnish").show(400);
    $(".service-well-server-garnish").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem8").on('click', function(){
    $(".photo-containers").show();
    $("#serviceWellOverstock").show(400);
    $(".service-well-overstock").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItemServiceWellOverstockStorage").on('click', function(){
    $(".photo-containers").show();
    $("#serviceWellOverstockStorage").show(400);
    $(".service-well-overstock-storage").show(500);
    selectedSection = document.getElementById("serviceWellPrinter").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem9").on('click', function(){
    dropDownMenu.style.display = "block";
    $(".well-400-items").toggle();
  });

  $("#menuItem10").on('click', function(){
    $(".photo-containers").show();
    $("#well400Main").show(400);
    $(".well-400-main").show(500);
    selectedSection = document.getElementById("well400Main").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem11").on('click', function(){
    $(".photo-containers").show();
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
    $(".photo-containers").show();
    $("#well500Main").show(400);
    $(".well-500-main").show(500);
    selectedSection = document.getElementById("well500Main").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem14").on('click', function(){
    $(".photo-containers").show();
    $("#well500LeftSide").show(400);
    $(".well-500-left-side").show(500);
    selectedSection = document.getElementById("well500LeftSide").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem15").on('click', function(){
    $(".photo-containers").show();
    $("#well500RightSide").show(400);
    $(".well-500-right-side").show(500);
    selectedSection = document.getElementById("well500RightSide").alt;
    mainTitle.innerText = selectedSection;
  });
  
  $("#menuItem16").on('click', function(){
    $(".photo-containers").show();
    $("#well500Garnish").show(400);
    $(".well-500-garnish").show(500);
    selectedSection = document.getElementById("well500Garnish").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem17").on('click', function(){
    $(".photo-containers").show();
    $("#well500Overstock").show(400);
    $(".well-500-overstock").show(500);
    selectedSection = document.getElementById("well500Overstock").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem18").on('click', function(){
    dropDownMenu.style.display = "block";
    $(".well-700-items").toggle();
  });

  $("#menuItem19").on('click', function(){
    $(".photo-containers").show();
    $("#well700Main").show(400);
    $(".well-700-main").show(500);
    selectedSection = document.getElementById("well700Main").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem20").on('click', function(){
    $(".photo-containers").show();
    $("#well700LeftStation").show(400);
    $(".well-700-left-station").show(500);
    selectedSection = document.getElementById("well700LeftStation").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItemW7SRR").on('click', function(){
    $(".photo-containers").show();
    $("#well700SpeedRackRight").show(400);
    $(".well-700-speedrack-right").show(500);
    selectedSection = document.getElementById("well700SpeedRackRight").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItemW7SRL").on('click', function(){
    $(".photo-containers").show();
    $("#well700SpeedRackLeft").show(400);
    $(".well-700-speedrack-left").show(500);
    selectedSection = document.getElementById("well700SpeedRackLeft").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem21").on('click', function(){
    $(".photo-containers").show();
    $("#well700Overstock").show(400);
    $(".well-700-overstock").show(500);
    selectedSection = document.getElementById("well700Overstock").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItemSP").on('click', function(){
    $(".setup-images").hide(400);
    $(".image-numbers").hide(400);
    $("#batchRecipesDiv").hide();
    $("#batchRecipesDiv").empty();
    $(".photo-containers").show();
    $("#serverPickup").show(400);
    $(".server-pickup").show(500);
    selectedSection = document.getElementById("serverPickup").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItem22").on('click', function(){
    dropDownMenu.style.display = "block";
    $(".batch-recipes").toggle();
  });

  $("#menuItemClosingDuties").on('click', function(){
    dropDownMenu.style.display = "block";
    $(".closing-duties").toggle();
  });
  
  $("#menuItemsBusTubs").on('click', function(){
    $(".photo-containers").show();
    $("#busTubsCD").show(400);
    //$(".well-700-speedrack-left").show(500);
    selectedSection = document.getElementById("busTubsCD").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItemsServiceWellPrinterCD").on('click', function(){
    $(".photo-containers").show();
    $("#serviceWellPrinterCD").show(400);
    //$(".well-700-speedrack-left").show(500);
    selectedSection = document.getElementById("serviceWellPrinterCD").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItemsServiceWellMainCD").on('click', function(){
    $(".photo-containers").show();
    $("#serviceWellMainCD").show(400);
    //$(".well-700-speedrack-left").show(500);
    selectedSection = document.getElementById("serviceWellMainCD").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItemsServiceWellOverstockCD").on('click', function(){
    $(".photo-containers").show();
    $("#serviceWellOverstockCD").show(400);
    //$(".well-700-speedrack-left").show(500);
    selectedSection = document.getElementById("serviceWellOverstockCD").alt;
    mainTitle.innerText = selectedSection;
  });

  $("#menuItemsWell400MainCD").on('click', function(){
    $(".photo-containers").show();
    $("#well400MainCD").show(400);
    //$(".well-700-speedrack-left").show(500);
    selectedSection = document.getElementById("well400MainCD").alt;
    mainTitle.innerText = selectedSection;
  });


  // -----------------------------------------------------------------------------------------------------------------------------------------

  $(".batch-recipes").on('click', function(){
    $(".photo-containers").hide();
    $("#batchRecipesDiv").show(300);
    mainTitle.innerText = "Batch Recipes";
    
    itemList.map(x => {
      if(this.innerText === x["name"]){
        let modalList = document.getElementById("batchRecipesDiv");
    
        if(x.contents !== null){
          x.contents.map(i => {
            let li = document.createElement('li');
            li.innerText = i;
            modalList.append(li);
          });
        }
      }
    });
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

                if(this.id === "btn7SWO"){
                  $("#serviceWellOverstockStorage").show(400);
                  $(".service-well-overstock-storage").show(500);
                  console.log("yay")
                }
                
            }
          });
        }


      }
    });
    
  });

});
