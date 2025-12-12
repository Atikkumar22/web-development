const para = document.querySelector('p')
const text = para.innerText

const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

let iteration = 0

para.addEventListener(`mouseenter`, function(){
    function randomText(){
        const str = text.split("").map((char , index)=>{
            if(index < iteration){
                return char
            }
            return character.split('')[Math.floor(Math.random()*53)]
        }).join("")
        para.innerText = str
    
        iteration +=0.25
    }
    setInterval(randomText,30)
})


