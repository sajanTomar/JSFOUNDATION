
let user = {
  id: "101",
  name: "Aman",
  age: "25",
  isActive: "true"
};
Number("user.id"); // converts to number
Number("user.age"); // converts to number
Boolean("user.isActive"); // converts to boolean
// console.log(user);


let cart = ["199", "299", 499, "149"];
let total = 0;
for(let i=0; i<cart.length; i++) {
    cart[i] = Number(cart[i]);
    total += cart[i]; 
}
console.log(cart);
console.log(total);

// Alternate way
let cart2 = ["199", "299", 499, "149"];
let numbers = cart2.map(function(item) {
    return Number(item);
});
let total2 = numbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
console.log(numbers);
console.log(total2);

let formData = {
  name: "   Aman   ",
  phone: "  9876543210 ",
  age: " 24 "
};

formData.name = formData.name.trim();
formData.phone = Number(formData.phone.trim());
formData.age = Number(formData.age.trim());

console.log(formData);


let response = {
  status: "200",
  success: "true",
  data: null
};

let type1 = typeof(response.status);
let type2 = typeof(response.success);
let type3 = typeof(response.data);
response.status = Number(response.status);
response.success = Boolean(response.success);

console.log(type1, type2, type3, response);


let attendance = [true, "true", false, "false", 1, 0];
let count = 0;
for(let i = 0; i<attendance.length; i++) {
    if(attendance[i] === true) {
        count++;
    }
}
console.log(count);


function getRealType(value) {
  if (value === null) {
    return "null";
  } 
  else if (Array.isArray(value)) {
    return "array";
  } 
  else if (typeof value === "object") {
    return "object";
  } 
  else {
    return typeof value;
  }
}
