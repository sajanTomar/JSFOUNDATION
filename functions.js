function makeTea(typeOfTea) {
    return "Making " + typeOfTea;
}
let teaOrder = makeTea("green tea");
// console.log(teaOrder);

function orderTea(teaType) {
    function confirmOrder() {
        return "Order confirmed for chai"
    }
    return confirmOrder();
}
let orderConfirmation = orderTea("green tea");
// console.log(orderConfirmation);

const calculateTotal = (price, quantity) => {
    let totalCost = price * quantity;
    return totalCost;
}
let res1 = calculateTotal(4, 5);
// console.log(res1);

function makeTea(typeOfTea) {
    return `maketea: ${typeOfTea}`;
}
function processTeaOrder(teaFunction) {
    return teaFunction("earl grey");
}
let order = processTeaOrder(makeTea);
// console.log(order);

function firstFunc(teaType) {
    return `Making: ${teaType}`;
}
function createTeaMaker() {
    return typeFunc("green tea");
}
let teaMaker = createTeaMaker(firstFunc);
console.log(teaMaker);