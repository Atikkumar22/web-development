// Getting started with react in js. 
// using cdn files to work in react in html and js

import tit from "./tit.js";

//document ki jagah react likh hai : 1st- elements , 2nd- attributes, 3rd- children
let h1 = React.createElement('h1' ,null, 'Main hu insaan' );
let h2 = React.createElement('h2' ,null, 'Main hu danav' );

//let container = document.querySelector('#container');

//let root = ReactDOM.createRoot(container)

let div = React.createElement('div', {id:'parent' , className:'elem'}, [h1,h2])

    //merging line container and root
let root = ReactDOM.createRoot(document.querySelector('#container'));

    //root.render(h1,h2) //root only accepts one argument otherwise it give error
// root.render(h2)

    //multiple cheeze agr root me render krni ho to , hum unko ek single div me rkhte h qki root single arg. based h
root.render(div)   




//let render = ReactDOM.createRoot(document.querySelector('#container'));
let render = ReactDOM.createRoot(document.querySelector('#container2'));

render.render(tit()) // Ek DOM container (#container) ke liye sirf EK React root ho sakta hai.same container pe do baar createRoot() bana rahe ho, isliye last wala root pehle wale ko overwrite kar deta hai.