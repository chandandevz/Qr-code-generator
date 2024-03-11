
//Qr code script

const getInput = document.getElementById('my-input');
const btn = document.getElementById('btn');
const qrArea = document.querySelector('.qr-area');
const qrImg = document.getElementById('qr-img');
const containers = document.querySelector('.container');
const themeChanger = document.getElementById('theme-changer');
const Msg = document.querySelector('.msg');

btn.addEventListener('click', () => {
    
    if(getInput.value==""){
        Msg.classList.add('show-error');
        Msg.innerText = "Please enter valid link";
        Msg.classList.remove('show-success');
        qrImg.src = "";
        setTimeout(()=>{
            Msg.classList.remove('show-error');
        },5000)
    }else{
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${getInput.value}`;
        Msg.classList.remove('show-error');
        Msg.innerText = "Qr successfully generated";
        Msg.classList.add('show-success');
    }
    
    setTimeout(()=>{
        Msg.classList.remove('show-success');
    }, 5000)
})

themeChanger.addEventListener('click', () => {
      document.body.classList.toggle("darkbg")
      containers.classList.toggle("dark-mode")
      
      if(themeChanger.innerText == "Dark Mode"){
          themeChanger.innerText = "Light Mode"
      }else {
          themeChanger.innerText = "Dark Mode"
      }
})
