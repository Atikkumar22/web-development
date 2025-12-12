var box = document.querySelector('#box')

box.addEventListener('mouseenter', function(){
  console.log('entered mouse');
});

box.addEventListener('mouseleave', function(){
  console.log('entered left');
});

const cur = document.querySelector('#cursor')

document.addEventListener('mousemove', function(move){
    cur.style.left = move.clientX + 'px'
    cur.style.top = move.clientY + 'px'  
});