// Descending oder of price

var mobiles = [
{brand: "walton", price: 6500, camera: 9},
{brand: "sympony", price: 5500, camera: 11},
{brand: "walton", price: 4000, camera: 6},
{brand: "samsung", price: 24500, camera: 13},
{brand: "LG", price: 9500, camera: 12},
{brand: "apple", price: 45500, camera: 8},
{brand: "walton", price: 4500, camera: 5},
];
// Descending oder of price
function sortComparisonDescending(first, second) {
  return -1*(first.price - second.price);
}

mobiles.sort(sortComparisonDescending);
console.log(mobiles);
