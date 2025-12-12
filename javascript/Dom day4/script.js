// setTimeout ka use hum krte h delay lane ke liye , iske under fucntion hum jo bhi time denge uske baad wo impliment hoga - time milisecond me dete h

// setTimeout(function(){
//     console.log('hello');
    
// },5000)

var user = 'Atik'

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')

btn.addEventListener(`click`, function() {
    setTimeout(() => {
        h1.innerHTML = 'hello im Atik'
        
    },2000);
    
})

// setInterval 

let a = 0

var int = setInterval(() => {
 console.log('hello');
 
},100)