function getInputField(space,cost,increase){

    const marsInput = document.getElementById(space + '-input');
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
    marsCostTotal = marsNumber * cost; 
    marsCost.innerText = marsCostTotal;

}

document.getElementById('mars-plus').addEventListener('click',function(){
    /* const marsInput = document.getElementById('mars-input');
    const marsNumber = parseInt(marsInput.value) + 1;
    marsInput.value = marsNumber; */
    getInputField('mars',1250,true)

});
document.getElementById('mars-minus').addEventListener('click',function(){
   /*  const marsInput = document.getElementById('mars-input');
    const marsNumber = parseInt(marsInput.value) - 1;
    marsInput.value = marsNumber; */
    getInputField('mars',1250,false)

});


document.getElementById('moon-plus').addEventListener('click',function(){
    /* const marsInput = document.getElementById('moon-input');
    const marsNumber = parseInt(marsInput.value) + 1;
    marsInput.value = marsNumber; */
    getInputField('moon',1000,true)

});
document.getElementById('moon-minus').addEventListener('click',function(){
    /* const marsInput = document.getElementById('moon-input');
    const marsNumber = parseInt(marsInput.value) - 1;
    marsInput.value = marsNumber; */
    getInputField('moon',1000,false)
    
})