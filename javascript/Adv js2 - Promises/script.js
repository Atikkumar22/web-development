//PROMISE in JS
    /* promise js me ek object hota h jo future me milne wale result ko represent krta h 
    isme teen conditions rehti h 
    - pending(kaam chal raha h result ayega)
    - fulfilled(kaam successful) {RESOLVED}
    - rejected(kaam failed ya error) {REJECT}  */

// let promise = new Promise((resolve, reject) => {
//     let internet = true;
    
//     if (internet){
//         resolve("Data mil gya");
//     }else{
//         reject("internet nahi hai");
//     }
// });
// console.log(promise)

//CHaining in promises
fetch("https://api.github.com/users")
.then(
    (response)=> {
        return response.json()
    }
)
.then((data) => {
    console.log(data);
})