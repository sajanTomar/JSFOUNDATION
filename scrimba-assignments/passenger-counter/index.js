let counter = 0;

function showPopup() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

function increase() {
    counter++;
    document.getElementById("count").innerText = counter;
}

function decrease() {
    if(counter > 0) {
        counter--;
        document.getElementById("count").innerText = counter;
    } else {
        alert("Counter cannot go below zero");
    }
}

function reset() {
    if (counter > 0) {
        counter = 0;
        document.getElementById("count").innerText = counter;
    } else {
        alert("Counter is already at zero");
    }
}

function showModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}