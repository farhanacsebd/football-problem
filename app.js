function getInputField(increase){

    const marsInput = document.getElementById('mars-input');
    let marsNumber = marsInput.value;
    if(increase){
         marsNumber = parseInt(marsInput.value) + 1;
    }
    else if(marsNumber>0){
        marsNumber = parseInt(marsInput.value) - 1;
    }
    marsInput.value = marsNumber;


    const marsCost = document.getElementById('mars-cost');
    let marsCostTotal = parseInt(marsCost.innerText);
    marsCostTotal = marsNumber*1200; 
    marsCost.innerText = marsCostTotal;

}

document.getElementById('mars-plus').addEventListener('click',function(){
    /* const marsInput = document.getElementById('mars-input');
    const marsNumber = parseInt(marsInput.value) + 1;
    marsInput.value = marsNumber; */
    getInputField(true)
});
document.getElementById('mars-minus').addEventListener('click',function(){
   /*  const marsInput = document.getElementById('mars-input');
    const marsNumber = parseInt(marsInput.value) - 1;
    marsInput.value = marsNumber; */
    getInputField(false)
});


document.getElementById('moon-plus').addEventListener('click',function(){
    const marsInput = document.getElementById('moon-input');
    const marsNumber = parseInt(marsInput.value) + 1;
    marsInput.value = marsNumber;
    // getInputField(true)
});