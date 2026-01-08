
let num = 1;
let sum = 0;
while(num <= 5){
    // sum = sum + num;
    sum += num;
    num++;
}
// console.log(sum);

let i = 5;
let countdown = []
while(i >=1) {
    countdown.push(i);
    i--;
}
// console.log(countdown);

// let teaCollection = [];
// let tea;
// do {
//     tea = prompt("Enter your tea type (type stop to finish")
//     if(tea !== "stop") {
//         teaCollection.push(tea);
//     }  
// } while(tea !== "stop");
// console.log(teaCollection);

let j = 1;
let total = 0;
do {
    // total += j;
    total = total + j;
    j++;
} while (j<=3);
// console.log(total);

let multiples = [2, 4, 6];
let multipliedNumbers = [];
for(let k=0; k<=multiples.length-1; k++){
    // takeNumber = multiples[k] * 2;
    // multipliedNumbers.push(takeNumber);
    multipliedNumbers.push(multiples[k] * 2);
}
// console.log(multipliedNumbers);

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let cityList = [];
for(let l = 0; l <= cities.length-1; l++) {
    cityList.push(cities[l]);
}
console.log(cityList);


 