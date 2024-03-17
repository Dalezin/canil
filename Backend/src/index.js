const express = require('express');
const app = express();
const cors = require('cors');
// Use CORS middleware
app.use(cors());
// Define the petshops and their prices
const petshops = {
  "Meu Canino Feliz": {
    distance: 2,
    prices: {
      weekday: { small: 20, large: 40 },
      weekend: { small: 20 * 1.2, large: 40 * 1.2 },
    },
  },
  "Vai Rex": {
    distance: 1.7,
    prices: {
      weekday: { small: 15, large: 50 },
      weekend: { small: 20, large: 55 },
    },
  },
  ChowChawgas: {
    distance: 0.8,
    prices: {
      weekday: { small: 30, large: 45 },
      weekend: { small: 30, large: 45 },
    },
  },
};

// Calculate total price for each petshop
function calculateTotalPrice(smallDogs, largeDogs) {
  const totalPrice = {};
  Object.keys(petshops).forEach((name) => {
    const petshop = petshops[name];
    const priceSmall = petshop.prices.weekday.small * smallDogs + petshop.prices.weekday.large * largeDogs;
    const priceLarge = petshop.prices.weekday.small * smallDogs + petshop.prices.weekday.large * largeDogs;
    totalPrice[name] = priceSmall + priceLarge;
  });
  return totalPrice;
}

// Express route
app.get('/', (req, res) => {
  const { date, smallDogs, largeDogs } = req.query;

  // Calculate total price for each petshop
  const totalPrice = calculateTotalPrice(parseInt(smallDogs), parseInt(largeDogs));

  // Sort petshops by total price and distance
  const sortedPetshops = Object.keys(totalPrice).sort((a, b) => {
    if (totalPrice[a] !== totalPrice[b]) {
      return totalPrice[a] - totalPrice[b];
    } else {
      return petshops[a].distance - petshops[b].distance;
    }
  });

  // Return the best petshop
  res.json({ bestPetshop: sortedPetshops[0], totalPrice: totalPrice[sortedPetshops[0]] });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
