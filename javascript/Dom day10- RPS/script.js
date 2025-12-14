
const Rock = 0;
const Paper = 1;
const Scissor = 2;

let player = Math.floor(Math.random()*3);
let computer = Math.floor(Math.random()*3);

const choices =['Rock' , 'Paper', 'Scissor']

console.log( `Player picked: ${choices[player]}`)
console.log( `Computer picked: ${choices[computer]}`)

if(player===computer){
  console.log("Its a Draw")
}
else if(player === 0 && computer === 2 ||
        player === 1 && computer === 0 ||
        player === 2 && computer === 1  )
{
  console.log("Player won!")
}
else{
  console.log('Computer won!')
}