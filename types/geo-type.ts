export interface TopLevel {
  type: string;
  features: Feature[];
}

export interface Feature {
  type: FeatureType;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: GeometryType;
  coordinates: number[];
}

export enum GeometryType {
  Point = 'Point'
}

export interface Properties {
  paymentMethod: PaymentMethod;
  merchantId: string;
  name: Name;
  address1?: string;
  latitude: number;
  longitude: number;
  territory: Territory;
  city: string;
  country: Country;
  source: Source;
  sourceId: string;
  type: PropertiesType;
  redeemType: RedeemType;
  address2?: string;
  phone?: string;
  icon?: string;
}

export enum Country {
  Us = 'US'
}

export enum Name {
  AMCTheatres = 'AMC® Theatres',
  AerieUS = 'Aerie - US',
  AquariumUS = 'Aquarium US',
  Athleta = 'Athleta',
  AuntieAnneSUS = "Auntie Anne's - US",
  AutoZone = 'AutoZone',
  BabinSSeafoodHouseUS = 'Babin’s Seafood House US',
  BahamaBreeze = 'Bahama Breeze',
  BakersSquareUS = 'Bakers Square US',
  BananaRepublic = 'Banana Republic',
  BassProShopsUS = 'Bass Pro Shops US',
  BathBodyWorksUS = 'Bath & Body Works - US',
  BertucciSUS = "Bertucci's - US",
  BillSBarBurgerUS = "Bill's Bar & Burger US",
  BlazePizzaUS = 'Blaze Pizza - US',
  BobEvansRestaurantsUS = 'Bob Evans Restaurants® US',
  BostonMarketUS = 'Boston Market US',
  BrennerSSteakhouseUS = "Brenner's Steakhouse US",
  BrickHouseTavernTapUS = 'Brick House Tavern & Tap US',
  BubbaGumpRestaurant = 'Bubba Gump Restaurant',
  BuffaloWildWingsUS = 'Buffalo Wild Wings US',
  CabelaSUS = "Cabela's US",
  CadillacBarUS = 'Cadillac Bar US',
  CadillacRanchUS = 'Cadillac Ranch US',
  CarvelUS = 'Carvel US',
  ChartHouseRestaurant = 'Chart House Restaurant',
  CheddarsScratchKitchen = 'Cheddars Scratch Kitchen',
  ChicoSUS = "Chico's US",
  ChiliSGrillBarUS = "Chili's Grill & Bar US",
  Chipotle = 'Chipotle',
  ChristmasTreeShopsUS = 'Christmas Tree Shops US',
  CinemarkUS = 'Cinemark US',
  CinnabonUS = 'Cinnabon US',
  ClaimJumperRestaurant = 'Claim Jumper Restaurant',
  ClarksUS = 'Clarks US',
  ColdStoneCreameryUS = 'Cold Stone Creamery US',
  CostPlusWorldMarketUS = 'Cost Plus World Market US',
  CrackerBarrelUS = 'Cracker Barrel US',
  CuttersCrabhouseUS = 'Cutters Crabhouse US',
  DOSCaminosUS = 'Dos Caminos US',
  DaveBusterSUS = "Dave & Buster's US",
  DelFriscoSDoubleEagleSteakhouseUS = "Del Frisco's Double Eagle Steakhouse US",
  DelFriscoSGrilleUS = "Del Frisco's Grille US",
  EddieVSUS = "Eddie V's US",
  ExpressUS = 'Express - US',
  FamousDaveSUS = 'Famous Dave’s® US',
  FamousFootwearUS = 'Famous Footwear US',
  FishTalesUS = 'Fish tales US',
  FishermanSWharfUS = "Fisherman's Wharf US",
  Forever21US = 'Forever 21 US',
  FruitBouquets = 'Fruit Bouquets',
  GalvestonIslandHistoricPleasurePierUS = 'Galveston Island Historic Pleasure Pier US',
  GameStopUS = 'GameStop US',
  GanderOutdoorsUS = 'Gander Outdoors US',
  GandyDancerUS = 'Gandy Dancer US',
  GapUs = 'GAP US',
  GoldenNuggetCasino = 'Golden Nugget Casino',
  GrandConcourseUS = 'Grand Concourse US',
  GrottoUS = 'Grotto US',
  GuitarCenterUS = 'Guitar Center US',
  HarryDavid = 'Harry & David',
  HootersUS = 'Hooters US',
  HoratioSUS = "Horatio's US",
  JCPenneyUS = 'JCPenney US',
  JakeSFamousCrawfishUS = "Jake's Famous Crawfish US",
  JakesGrillUS = 'Jakes Grill US',
  JambaJuiceUS = 'Jamba Juice - US',
  JerseyMikeSUS = "Jersey Mike's - US",
  JoANNFabricAndCraftStoresUS = 'Jo-Ann Fabric and Craft Stores US',
  JoeSCrabShack = "Joe's Crab Shack",
  KemahBoardwalkUS = 'Kemah Boardwalk US',
  KincaidSFishChopSteakhouseUS = "Kincaid's Fish Chop & Steakhouse US",
  KrispyKremeUS = 'Krispy Kreme - US',
  LaGrigliaUS = 'LaGriglia US',
  LandrySRestaurants = 'Landry’s Restaurants',
  LandrySSeafoodHouse = 'Landry’s Seafood House',
  LegalSeaFoodsUS = 'Legal Sea Foods - US',
  LoganSRoadhouseUS = "Logan's Roadhouse US",
  LonghornSteakhouse = 'Longhorn Steakhouse',
  LoweS = "Lowe's",
  MaggianoSLittleItalyUS = "Maggiano's Little Italy US",
  MaggieBluffsUS = 'Maggie Bluffs US',
  MaiTaiBarUS = 'Mai Tai Bar US',
  MastroSUS = "Mastro's US",
  McAlisterSDeliUS = "McAlister's Deli US",
  McCormickSchmickSRestaurant = 'McCormick & Schmick’s Restaurant',
  MitchellSFishMarketRestaurant = 'Mitchell’s Fish Market Restaurant',
  MoeSSouthwestGrillUS = "Moe's Southwest Grill US",
  MortonSRestaurant = 'Morton’s Restaurant',
  NinetyNineRestaurantPubUS = 'Ninety Nine Restaurant & Pub - US',
  OCharleySUS = "O'Charley's - US",
  OldNavy = 'Old Navy',
  OmahaSteaksUS = 'Omaha Steaks US',
  PFChangS = 'P.F. Chang’s ',
  PalisadeUS = 'Palisade US',
  PapaJohnSUS = "Papa John's US",
  PeetSCoffeeUS = "Peet's Coffee US",
  PeoheSUS = "Peohe's US",
  PinkberryUS = 'Pinkberry® US',
  PotteryBarnUS = 'Pottery Barn US',
  RainforestCafeRestaurant = 'Rainforest Cafe Restaurant',
  RiverCrabBluewaterInnUS = 'River Crab/Bluewater Inn US',
  RubioSCoastalGrillUS = 'Rubio’s Coastal Grill US',
  RubyTuesdayUS = 'Ruby Tuesday US',
  SANLuisResortUS = 'San Luis Resort US',
  SaltgrassSteakHouseRestaurant = 'Saltgrass Steak House Restaurant',
  SchlotzkySUS = "Schlotzky's US",
  Seasons52 = 'Seasons 52® ',
  SephoraUS = 'Sephora US',
  SimmsSteakhouseUS = 'Simms Steakhouse US',
  SimonSeafortSSaloonGrillUS = "Simon & Seafort's Saloon & Grill US",
  SkatesOnTheBayUS = 'Skates on the Bay US',
  SomaUS = 'Soma US',
  StanleySeafortSUS = "Stanley & Seafort's US",
  StaplesUS = 'Staples US',
  SteakNShakeUS = "Steak 'n Shake US",
  StripHouseUS = 'Strip House US',
  SubwayUS = 'Subway US',
  TGIFridaysUS = 'TGI Fridays US',
  TRexCafeUS = 'T-Rex Cafe US',
  TexasRoadhouseUS = 'Texas Roadhouse US',
  The1800Flowers = '1800Flowers',
  TheCapitalGrilleUS = 'The Capital Grille US',
  TheChildrenSPlaceUS = "The Children's Place US",
  TheOceanaireRestaurant = 'The Oceanaire Restaurant',
  ThePopcornFactory = 'The Popcorn Factory',
  ThePostOakHotelAtUptownHoustonUS = 'The Post Oak Hotel at Uptown Houston US',
  TijuanaFlatsUS = 'Tijuana Flats-US',
  TopGolfUS = 'TopGolf US',
  TowerOfTheAmericasUS = 'Tower of the Americas US',
  TreviItalianRestaurantUS = 'Trevi Italian Restaurant US',
  UltaBeauty = 'Ulta Beauty',
  VicAnthonySRestaurant = 'Vic & Anthony’s Restaurant',
  VillageInnUS = 'Village Inn-US',
  WestElmUS = 'West Elm US',
  WhiteHouseBlackMarketUS = 'White House Black Market-US',
  WilliamsSonomaUS = 'Williams-Sonoma US',
  WillieGSUS = "Willie G's US",
  YakYetiRestaurantUS = 'Yak & Yeti Restaurant US',
  YardHouse = 'Yard House'
}

export enum PaymentMethod {
  GiftCard = 'gift card'
}

export enum RedeemType {
  Barcode = 'barcode',
  URL = 'url'
}

export enum Source {
  DashSpend = 'DashSpend'
}

export enum Territory {
  Alabama = 'Alabama',
  Alaska = 'Alaska',
  Arizona = 'Arizona',
  Arkansas = 'Arkansas',
  California = 'California',
  Colorado = 'Colorado',
  Connecticut = 'Connecticut',
  Delaware = 'Delaware',
  Florida = 'Florida',
  Georgia = 'Georgia',
  Hawaii = 'Hawaii',
  Idaho = 'Idaho',
  Illinois = 'Illinois',
  Indiana = 'Indiana',
  Iowa = 'Iowa',
  Kansas = 'Kansas',
  Kentucky = 'Kentucky',
  Louisiana = 'Louisiana',
  Maine = 'Maine',
  Maryland = 'Maryland',
  Massachusetts = 'Massachusetts',
  Michigan = 'Michigan',
  Minnesota = 'Minnesota',
  Mississippi = 'Mississippi',
  Missouri = 'Missouri',
  Montana = 'Montana',
  Nebraska = 'Nebraska',
  Nevada = 'Nevada',
  NewHampshire = 'New Hampshire',
  NewJersey = 'New Jersey',
  NewMexico = 'New Mexico',
  NewYork = 'New York',
  NorthCarolina = 'North Carolina',
  NorthDakota = 'North Dakota',
  Ohio = 'Ohio',
  Oklahoma = 'Oklahoma',
  Oregon = 'Oregon',
  Pennsylvania = 'Pennsylvania',
  RhodeIsland = 'Rhode Island',
  SouthCarolina = 'South Carolina',
  SouthDakota = 'South Dakota',
  Tennessee = 'Tennessee',
  Texas = 'Texas',
  Utah = 'Utah',
  Vermont = 'Vermont',
  Virginia = 'Virginia',
  Washington = 'Washington',
  WestVirginia = 'West Virginia',
  Wisconsin = 'Wisconsin',
  Wyoming = 'Wyoming'
}

export enum PropertiesType {
  Online = 'online',
  Physical = 'physical'
}

export enum FeatureType {
  Feature = 'Feature'
}
