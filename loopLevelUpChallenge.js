// let teas = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeas = [];
// for(let i=0; i < teas.length; i++) {
//     if(teas[i] === 'chai'){
//         break;
//     }
//     selectedTeas.push(teas[i]);
// }
// console.log(selectedTeas);

let teasOne = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeasOne = [];
for(let i=0; i < teasOne.length; i++) {
    if(teasOne[i] != 'chai'){
        selectedTeasOne.push(teasOne[i]);
    }
}
// console.log(selectedTeasOne);

// let teasTwo = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedTeasTwo = [];
// for(let i=0; i < teasTwo.length; i++) {
//     if(teasTwo[i] != 'chai'){
//         selectedTeasTwo.push(teasTwo[i]);
//     } else {
//         continue;
//     }
// }
// console.log(selectedTeasTwo);


let teasTwo = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeasTwo = [];
for(let i=0; i < teasTwo.length; i++) {
    if(teasTwo[i] != 'chai'){
        selectedTeasTwo.push(teasTwo[i]);
    } else {
        break;
    }
}
// console.log(selectedTeasTwo);

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for(let i=0; i < teas.length; i++) {
    if(teas[i] === 'chai'){
        continue;
    }
    selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let smallNumbers = [];
for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

let chais = ["chai", "green tea", "herbal tea", "black tea"];
let remainingChais = [];
for (const ch of chais) {
    if(ch === "herbal tea") {
        continue;
    }
    remainingChais.push(ch);
}
console.log(remainingChais);

