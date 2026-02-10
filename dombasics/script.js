const changeButton = document.getElementById('change-button');
const textModal = document.getElementById('text-change-modal');
const textPara = document.getElementById('paragraph-one');
const textInput = document.getElementById('new-text-input');
const saveButtton = document.getElementById('change-text-button');
changeButton.addEventListener('click', function() {
    textModal.style.display = 'block';
    textInput.value = textPara.textContent;
});
saveButtton.addEventListener('click', function() {
    textPara.textContent = textInput.value;
    textModal.style.display = 'none';
});