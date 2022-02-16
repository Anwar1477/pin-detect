// Pin ke varify korbo 
function getPin(){
    const pin =Math.round(Math.random()*10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else{
        return getPin();
    }

}
// onClick ke dore anlam 
function genaratePin() {
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-pin').value =pin;
    
}

document.getElementById('clac-btn').addEventListener('click',function(event){
    const number =event.target.innerText;
    const calcNumber= document.getElementById('clac-input');

    if (isNaN(number)) {
        if (number == 'C') {
            calcNumber.value= '';
        }
    }
    else{
        const previousNumber = calcNumber.value;
        const newNumber = previousNumber + number ;
        calcNumber.value = newNumber;
    }
})

// verify Pin 

function verifyPin(){
    const generatePin = document.getElementById('display-pin').value;
    const btnInput = document.getElementById('clac-input').value;
    const successMessage = document.getElementById('success');
    const errorMessage = document.getElementById('failed');

    if(generatePin == btnInput){

        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';

    }
    else{
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}