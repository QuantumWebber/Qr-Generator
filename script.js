let button=document.querySelector('.qr');
let qrImage=document.querySelector('.qr-image');
let qrText=document.querySelector('#qr-text');


function generateQR(){
 qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value
}

button.addEventListener('click',()=>{
    generateQR();
});