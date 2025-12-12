// Math.random()
//     - math.random random values dega 
//     - isme M or r as it is likhne honge wrna ye kaam ni karega 
//     - iski range 0-1 ke beech me hi rahegi  
//     - isme hum koi bhi number se multiply kr ke iski range chamge kr skte h ' Math.random()*100 => range 0-100 
// var a = Math.random()*100
// console.log(a)

// Math.floor
//      -iske istemal se hum Math.random se milne wali value ko whole no m convert kr skte history

var btn = document.querySelector('#btn')
var box = document.querySelector('#box')

btn.addEventListener('click', function(){
    var c1 =  Math.floor(Math.random()*256)
    var c2 =  Math.floor(Math.random()*256)
    var c3 =  Math.floor(Math.random()*256)

    box.style.backgroundColor = `rgb(${c1},${c2},${c3})` 
    box.innerHTML = `rgb(${c1},${c2},${c3})`
})
