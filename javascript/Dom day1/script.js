let h2 = document.querySelector('h2')
let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
let reset = document.querySelector('#reset')

let a = 0;

inc.addEventListener('click', function(){
    a++
    h2.innerHTML = `${a} - banana`
})

dec.addEventListener('click', function(){
    a--
    h2.innerHTML = `${a} - banana`
})

reset.addEventListener('click', function(){
    a = 0
    h2.innerHTML = `${a} - banana`
})

