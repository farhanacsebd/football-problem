document.getElementById('mars-plus').addEventListener('click',function(){
    const marsInput = document.getElementById('mars-input');
    const marsNumber = parseInt(marsInput.value)+1;
    marsInput.value = marsNumber;
})