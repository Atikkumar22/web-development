var arr = [{
    team: 'CSK' ,
    fname: 'Chennai Super Kings' ,
    captain: 'MS Dhoni',
    wins: 5,
    primary: 'yellow',
    secondary: 'blue',
},
{
    team: 'MI' ,
    fname: 'Mumbai Indians' ,
    captain: 'Rohit Sharma',
    wins: 5,
    primary: 'royalblue',
    secondary: 'darkblue',
},
{
    team: 'RCB' ,
    fname: 'Royal Challenger Bengaluru' ,
    captain: 'Virat Kholi',
    wins: 1,
    primary: 'red',
    secondary: 'black',
},
{
    team: 'PBKS' ,
    fname: 'Punjab Kings' ,
    captain: 'shreyas Iyer',
    wins: 0,
    primary: 'crimson',
    secondary: 'silver',
},
{
    team : 'SRH' ,
    fname : 'Sunrisers Hyderabad' ,
    captain : 'Pat Cummins',
    wins : 1,
    primary: 'orange',
    secondary: 'gold',
},
{
    team: 'GT' ,
    fname: 'Gujarat Titans' ,
    captain: 'Hardik Pandaya',
    wins: 1,
    primary: 'navyblue',
    secondary: 'gold',
},
{
    team: 'DC' ,
    fname: 'Delhi Capitals' ,
    captain: 'Axar Patel',
    wins: 0,
    primary: 'red',
    secondary: 'blue',
},
{
    team: 'RR' ,
    fname: 'Rajasthan Royales' ,
    captain: 'Sanju Samson',
    wins: 1,
    primary: 'pink',
    secondary: 'blue',
},
{
    team: 'KKR' ,
    fname: 'Kolkata Knight Riders' ,
    captain: 'Ajinkya Rahane',
    wins: 3,
    primary: 'purple',
    secondary: 'black',
},
{
    team: 'LSG' ,
    fname: 'Lucknow Super Giants' ,
    captain: 'Rishabh Pant',
    wins: 0,
    primary: 'darkblue',
    secondary: 'red',
},
]

var h1 = document.querySelector('h1')
var box = document.querySelector('#box')
var btn = document.querySelector('button')

btn.addEventListener(`click`, function(){
    
    var winner = arr[ Math.floor(Math.random()*arr.length)]

    h1.innerHTML = 
        ` ${winner.team} <br>
          ${winner.fname} <br>
         <strong>captain:</strong> ${winner.captain} <br>
         <strong>wins:</strong >${winner.wins}`

    h1.style.backgroundColor = winner.primary
    box.style.backgroundColor = winner.secondary
})