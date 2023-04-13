let display = document.getElementById('display')


document.getElementById('input-box').addEventListener('keypress', function(x){
    display.innerText ="You have pressed this key :  " + x.key
})