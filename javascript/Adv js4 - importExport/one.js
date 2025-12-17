import us from "./two.js";
 console.log(us);

 // default import krte time naam se kuch lena dena ni hai export jiss bhi naam se ho import me zaruri ni h ki ussi naam se import bhi kare 

 import king from "./three.js";
 console.log(king);

 import { queen } from "./three.js"; 
 //named import, curly brackets are important here and is casesensitive if we miss it then it will act like default import 
 console.log(queen);

 import { maths } from "./two.js";
 import { chemistry } from "./two.js";
 import { computerScience } from "./two.js";
 import { physics } from "./two.js";
 import { english } from "./two.js";

 console.log('maths'+ maths);
 console.log('physics' + physics);
 console.log('chemistry' + chemistry);
 console.log('cs' + computerScience);
 console.log('english' + english);