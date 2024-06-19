const miles = Math.random() * 10;
const rating = Math.random() * 5;
const discount = Math.random() * 0.1;
const minutes = (miles * 20) % 60;

enum primary {
  Restaurants = "Food & Drink",
  Stores = "Stores",
}

enum secondary {
  Entertainment = "Entertainment",
  Electronics = "Electronics",
  HomeAndGarden = "Home & Garden",
  Fashion = "Fashion",
  Beauty = "Beauty",
  Health = "Health",
  Travel = "Travel",
  Outdoor = "Outdoor",
  Sports = "Sports",
  Kids = "Kids",
  Pets = "Pets",
  Automotive = "Automotive",
  Grocery = "Grocery",
  Pharmacy = "Pharmacy",
  FastFood = "Fast Food",
  Healthy = "Healthy",
  Other = "Other",
}

enum sections {
  LocalFavorites = "Local Favorites",
  PopularOnline = "Popular Online",
  BestDiscounts = "Best Discounts",
}
export const uuid = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const merchants = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "1800Flowers",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Aerie - US",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "AMC Theatres",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Auntie Anne's - US",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "AutoZone",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Aquarium US",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Athleta",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Bahama Breeze",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Bakers Square US",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Banana Republic",
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Bass Pro Shops US",
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Bath & Body Works - US",
  },
  {
    id: 13,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Bertucci's - US",
  },
  {
    id: 14,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Bill's Bar & Burger US",
  },
  {
    id: 15,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Blaze Pizza - US",
  },
  {
    id: 16,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Bob Evans Restaurants - US",
  },
  {
    id: 17,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Boston Market US",
  },
  {
    id: 18,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Brick House Tavern & Tap US",
  },
  {
    id: 19,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Bubba Gump Restaurant",
  },
  {
    id: 20,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Buffalo Wild Wings US",
  },
  {
    id: 21,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Cabela's US",
  },
  {
    id: 22,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Cadillac Bar US",
  },
  {
    id: 23,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Cadillac Ranch US",
  },
  {
    id: 24,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Carvel US",
  },
  {
    id: 25,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Cheddars Scratch Kitchen",
  },
  {
    id: 26,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Chico's US",
  },
  {
    id: 27,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Chili's Grill & Bar US",
  },
  {
    id: 28,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Chipotle",
  },
  {
    id: 29,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Christmas Tree Shops US",
  },
  {
    id: 30,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Cinemark US",
  },
  {
    id: 31,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Claim Jumper Restaurant",
  },
  {
    id: 32,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Clarks US",
  },
  {
    id: 33,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Cold Stone Creamery US",
  },
  {
    id: 34,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Cost Plus World Market US",
  },
  {
    id: 35,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Cracker Barrel US",
  },
  {
    id: 36,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Cutters Crabhouse US",
  },
  {
    id: 37,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Dave & Buster's US",
  },
  {
    id: 38,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Del Frisco's Double Eagle Steakhouse US",
  },
  {
    id: 39,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Del Frisco's Grille US",
  },
  {
    id: 40,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Dos Caminos US",
  },
  {
    id: 41,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Eddie V's US",
  },
  {
    id: 42,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Express - US",
  },
  {
    id: 43,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Famous Dave's - US",
  },
  {
    id: 44,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Famous Footwear US",
  },
  {
    id: 45,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Fish tales US",
  },
  {
    id: 46,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Fisherman's Wharf US",
  },
  {
    id: 47,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Forever 21 US",
  },
  {
    id: 48,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Fruit Bouquets",
  },
  {
    id: 49,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Gandy Dancer US",
  },
  {
    id: 50,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Gander Outdoors US",
  },
  {
    id: 51,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "GAP US",
  },
  {
    id: 52,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Galveston Island Historic Pleasure Pier US",
  },
  {
    id: 53,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "GameStop US",
  },
  {
    id: 54,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Golden Nugget Casino",
  },
  {
    id: 55,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Grand Concourse US",
  },
  {
    id: 56,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Grotto US",
  },
  {
    id: 57,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Guitar Center US",
  },
  {
    id: 58,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Hooters US",
  },
  {
    id: 59,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Horatio's US",
  },
  {
    id: 60,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "JCPenney US",
  },
  {
    id: 61,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Jakes Grill US",
  },
  {
    id: 62,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Jamba Juice - US",
  },
  {
    id: 63,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Jake's Famous Crawfish US",
  },
  {
    id: 64,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Jersey Mike's - US",
  },
  {
    id: 65,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Jo-Ann Fabric and Craft Stores US",
  },
  {
    id: 66,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Kemah Boardwalk US",
  },
  {
    id: 67,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Kincaid's Fish Chop & Steakhouse US",
  },
  {
    id: 68,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Krispy Kreme - US",
  },
  {
    id: 69,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "LaGriglia US",
  },
  {
    id: 70,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Landry's Restaurants",
  },
  {
    id: 71,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Landry's Seafood House",
  },
  {
    id: 72,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Lowe's",
  },
  {
    id: 73,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Longhorn Steakhouse",
  },
  {
    id: 74,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Logan's Roadhouse US",
  },
  {
    id: 75,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Maggiano's Little Italy US",
  },
  {
    id: 76,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Maggie Bluffs US",
  },
  {
    id: 77,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Maggie Bluffs US",
  },
  {
    id: 78,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Mai Tai Bar US",
  },
  {
    id: 79,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Mastro's US",
  },
  {
    id: 80,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "McCormick & Schmick's Restaurant",
  },
  {
    id: 81,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "McAlister's Deli US",
  },
  {
    id: 82,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Mitchell's Fish Market Restaurant",
  },
  {
    id: 83,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Moe's Southwest Grill US",
  },
  {
    id: 84,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Morton's Restaurant",
  },
  {
    id: 85,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Ninety Nine Restaurant & Pub - US",
  },
  {
    id: 86,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "O'Charley's - US",
  },
  {
    id: 87,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Old Navy",
  },
  {
    id: 88,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Omaha Steaks US",
  },
  {
    id: 89,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "P.F. Chang's ",
  },
  {
    id: 90,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Palisade US",
  },
  {
    id: 91,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Papa John's US",
  },
  {
    id: 92,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Peet's Coffee US",
  },
  {
    id: 93,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Peohe's US",
  },
  {
    id: 94,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Pinkberry - US",
  },
  {
    id: 95,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Pottery Barn US",
  },
  {
    id: 96,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Rainforest Cafe Restaurant",
  },
  {
    id: 97,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "River Crab/Bluewater Inn US",
  },
  {
    id: 98,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Rubio's Coastal Grill US",
  },
  {
    id: 99,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Ruby Tuesday US",
  },
  {
    id: 100,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Saltgrass Steak House Restaurant",
  },
  {
    id: 101,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "San Luis Resort US",
  },
  {
    id: 102,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Schlotzky's US",
  },
  {
    id: 103,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Seasons 52",
  },
  {
    id: 104,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Sephora US",
  },
  {
    id: 105,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Simms Steakhouse US",
  },
  {
    id: 106,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Simon & Seafort's Saloon & Grill US",
  },
  {
    id: 107,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Soma US",
  },
  {
    id: 108,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Stanley & Seafort's US",
  },
  {
    id: 109,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Staples US",
  },
  {
    id: 110,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Steak 'n Shake US",
  },
  {
    id: 112,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Strip House US",
  },
  {
    id: 113,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Subway US",
  },
  {
    id: 114,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "T-Rex Cafe US",
  },
  {
    id: 115,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "TGI Fridays US",
  },
  {
    id: 116,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "Tijuana Flats-US",
  },
  {
    id: 117,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "The Capital Grille US",
  },
  {
    id: 118,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "The Children's Place US",
  },
  {
    id: 119,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "The Oceanaire Restaurant",
  },
  {
    id: 120,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "The Popcorn Factory",
  },
  {
    id: 121,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "The Post Oak Hotel at Uptown Houston US",
  },
  {
    id: 122,
    image:
      "https://res.cloudinary.com/dtovvjurl/image/upload/v1718736688/bestbuy_xrggtq.png",
    logo: "",
    map_pin: "",
    name: "BestBuy",
  },
];

export const alphabet = [
  "#",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export const stores = [
  {
    id: "1",
    name: "Walmart",
    discount: discount,
    rating: rating,
    distance: miles,
    time: minutes,
    category: [primary.Stores],
    subcategories: [
      secondary.Electronics,
      secondary.HomeAndGarden,
      secondary.Fashion,
      secondary.Beauty,
      secondary.Health,
      secondary.Pets,
      secondary.Grocery,
      secondary.Pharmacy,
      secondary.Other,
    ],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : "",
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : "",
    ],
  },
  {
    id: "2",
    name: "Best Buy",
    discount: discount,
    rating: rating,
    distance: miles,
    time: minutes,
    category: [primary.Stores],
    subcategories: [secondary.Electronics, secondary.Entertainment],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : "",
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : "",
    ],
  },
  {
    id: "3",
    name: "Home Depot",
    discount: discount,
    rating: rating,
    distance: miles,
    time: minutes,
    category: [primary.Stores],
    subcategories: [
      secondary.Other,
      secondary.Electronics,
      secondary.HomeAndGarden,
    ],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : "",
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : "",
    ],
  },
];

export const restaurants = [
  {
    id: "1",
    name: "Subway",
    category: primary.Restaurants,
    subcategories: [secondary.FastFood, secondary.Healthy],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : "",
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : "",
    ],
    distance: miles,
    time: minutes,
    rating: rating,
    discount: discount,
  },
  {
    id: "2",
    name: "Chili's",
    category: primary.Restaurants,
    subcategories: [secondary.Healthy],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : "",
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : "",
    ],
    distance: miles,
    time: minutes,
    rating: rating,
    discount: discount,
  },
  {
    id: "3",
    name: "Jamba Juice",
    category: primary.Restaurants,
    subcategories: [secondary.Healthy, secondary.FastFood, secondary.Health],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : "",
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : "",
    ],
    distance: miles,
    time: minutes,
    rating: rating,
    discount: discount,
  },
];

export const CATEGORIES = {
  PRIMARY: primary,
  SECONDARY: secondary,
  SECTIONS: sections,
  RESTAURANTS: restaurants,
  STORES: stores,
};
