// // Q1 -part1
//     let user1 = {
//         name : "atik",
//         rollno : "99",
//         login: function(){
//             console.log("logged in"); 
//         }
//     }
//     console.log(user1);
// // part2
//     let user2 = {
//         name : "atik",
//         rollno : "99",
//         login: function(){
//             console.log("logged in"); 
//         }
//     }
//     console.log(user3);
//         let user1 = {
//         name : "atik",
//         rollno : "99",
//         login: function(){
//             console.log("logged in"); 
//         }
//     }
//     console.log(user4);
//         let user1 = {
//         name : "atik",
//         rollno : "99",
//         login: function(){
//             console.log("logged in"); 
//         }
//     }
//     console.log(user5);
//         let user1 = {
//         name : "atik",
//         rollno : "99",
//         login: function(){
//             console.log("logged in"); 
//         }
//     }
//     console.log(user5);

// part3
// let product = {
//     name: "cap",
//     price: 5000,
//     discountPrice: function(){
//         return this.price - 500;
//     }
// };
// console.log(product.discountPrice());

// // Q2
// class car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         return this.brand + "-" + this.speed
//     }
// }
// let car1 = new car("hyundai" , 160)
// console.log(car1);

// Q3


// CALLBACK
function abc(fn){
    fn(function(fn3){
        fn3()
    });
}

abc(function(fn2){
    fn2(function(){
        console.log('dsfas')
    })
});   //funtion call me fuction ka naam ni likthe bs fun likhte h