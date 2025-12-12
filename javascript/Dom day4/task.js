var grow = 0
var btn = document.querySelector('button')
var main = document.querySelector('main')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')

btn.addEventListener(`click`,function(){
  
  var num = 50 + Math.floor(Math.random()*50)
  
  console.log('Your file will be downloaded in',num/10,'seconds');
  
  btn.pointerEvents = 'none'
  var int = setInterval(function(){
    grow++
    h2.innerHTML = grow+'%'
    inner.style.width = grow+'%'
  },num)
  
  setTimeout(() => {
    clearInterval(int)
    btn.innerHTML= 'Downloaded'
    btn.style.opacity = 0.5
  }, num*100);
})



// var btn = document.querySelector('button')
// var main = document.querySelector('main')
// var h2 = document.querySelector('h2')
// var inner = document.querySelector('.inner')

// btn.addEventListener('click', function () {
//   // prevent multiple starts
//   if (btn.disabled) return      // simple guard

//   // disable button immediately
//   btn.disabled = true
//   btn.style.pointerEvents = 'none'
//   btn.innerHTML = 'Downloading...'
//   btn.style.opacity = 1

//   // reset UI & progress
//   grow = 0
//   inner.style.width = '0%'
//   h2.innerHTML = '0%'

//   // timing
//   var num = 50 + Math.floor(Math.random() * 50) // interval delay (ms)
//   console.log('Your file will be downloaded in', num / 10, 'seconds')

//   // incrementer interval
//   var int = setInterval(function () {
//     grow++                      // increase
//     if (grow >= 100) {          // stop at 100
//       grow = 100
//       inner.style.width = grow + '%'
//       h2.innerHTML = grow + '%'
//       clearInterval(int)

//       // final UI
//       btn.innerHTML = 'Downloaded'
//       btn.style.opacity = 0.5
//       btn.disabled = true
//       btn.style.pointerEvents = 'none'
//       return
//     }

//     // normal update
//     h2.innerHTML = grow + '%'
//     inner.style.width = grow + '%'
//   }, num)

//   // fallback: ensure progress reaches 100 after expected total time
//   setTimeout(function () {
//     if (grow < 100) {
//       clearInterval(int)
//       grow = 100
//       inner.style.width = '100%'
//       h2.innerHTML = '100%'
//       btn.innerHTML = 'Downloaded'
//       btn.style.opacity = 0.5
//       btn.disabled = true
//       btn.style.pointerEvents = 'none'
//     }
//   }, num * 100)
// })
