let teaLovers = ['green tea', 'oolong tea', 'white tea', 'herbal tea'];
let otherWay = new Array('green tea', 'oolong tea', 'white tea', 'herbal tea');
let firstTea = teaLovers[0];
// console.log(firstTea);

let cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
let favoriteCity = cities[2];

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

let citiesVisited = ["Mumbai", "Sydney"];;
citiesVisited.push("Berlin");
citiesVisited[citiesVisited.length] = "Tokyo";
// console.log(citiesVisited);

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// const lastOrder = teaOrders.pop();
// console.log(teaOrders);
// console.log(lastOrder);

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas.slice();
console.log(softCopyTeas);