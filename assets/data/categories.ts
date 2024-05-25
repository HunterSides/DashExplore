
const miles = Math.random() * 10;
const rating = Math.random() * 5;
const discount = Math.random() * 0.1;
const minutes = (miles * 20) % 60;

enum primary {
  Restaurants = 'Food & Drink',
  Stores = 'Stores'
}

enum secondary {
  Entertainment = 'Entertainment',
  Electronics = 'Electronics',
  HomeAndGarden = 'Home & Garden',
  Fashion = 'Fashion',
  Beauty = 'Beauty',
  Health = 'Health',
  Travel = 'Travel',
  Outdoor = 'Outdoor',
  Sports = 'Sports',
  Kids = 'Kids',
  Pets = 'Pets',
  Automotive = 'Automotive',
  Grocery = 'Grocery',
  Pharmacy = 'Pharmacy',
  FastFood = 'Fast Food',
  Healthy = 'Healthy',
  Other = 'Other'
}

enum sections {
  LocalFavorites = 'Local Favorites',
  PopularOnline = 'Popular Online',
  BestDiscounts = 'Best Discounts'
}


export const stores = [
  {
    id: '1',
    name: 'Walmart',
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
      secondary.Other
    ],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : '',
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : ''
    ]
  },
  {
    id: '2',
    name: 'Best Buy',
    discount: discount,
    rating: rating,
    distance: miles,
    time: minutes,
    category: [primary.Stores],
    subcategories: [secondary.Electronics, secondary.Entertainment],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : '',
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : ''
    ]
  },
  {
    id: '3',
    name: 'Home Depot',
    discount: discount,
    rating: rating,
    distance: miles,
    time: minutes,
    category: [primary.Stores],
    subcategories: [
      secondary.Other,
      secondary.Electronics,
      secondary.HomeAndGarden
    ],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : '',
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : ''
    ]
  }
];

export const restaurants = [
  {
    id: '1',
    name: 'Subway',
    category: primary.Restaurants,
    subcategories: [secondary.FastFood, secondary.Healthy],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : '',
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : ''
    ],
    distance: miles,
    time: minutes,
    rating: rating,
    discount: discount,
  },
  {
    id: '2',
    name: "Chili's",
    category: primary.Restaurants,
    subcategories: [secondary.Healthy],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : '',
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : ''
    ],
    distance: miles,
    time: minutes,
    rating: rating,
    discount: discount,
  },
  {
    id: '3',
    name: 'Jamba Juice',
    category: primary.Restaurants,
    subcategories: [secondary.Healthy, secondary.FastFood, secondary.Health],
    sections: [
      discount > 0.05 ? sections.BestDiscounts : '',
      miles > 0.5 && rating > 4.4 ? sections.LocalFavorites : ''
    ],
    distance: miles,
    time: minutes,
    rating: rating,
    discount: discount,
  }
];

export const CATEGORIES = {
  PRIMARY: primary,
  SECONDARY: secondary,
  SECTIONS: sections,
  RESTAURANTS: restaurants,
  STORES: stores
};

