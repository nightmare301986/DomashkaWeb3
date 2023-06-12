const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('input');
const confirmBtn = favDialog.querySelector('#confirmBtn');


showButton.addEventListener('click', () => {
    favDialog.showModal();
});

// "
selectEl.addEventListener('change', (e) => {
    confirmBtn.value = selectEl.value;
});


favDialog.addEventListener('close', (e) => {
    outputBox.value = favDialog.returnValue === 'default' ? "No return value." : `Приветствуем вас на нашей странице: ${favDialog.returnValue}.`; 
});


confirmBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    favDialog.close(selectEl.value); 
});

