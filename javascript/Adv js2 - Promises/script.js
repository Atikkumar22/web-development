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
/*fetch("https://api.github.com/users")
.then(
    (response)=> {
        return response.json()
    }
)
.then((data) => {
    console.log(data);
})
*/

/*
//JSON:- Javascript Object Notation , it is different then JS object where as JSO can only be
    understood by the js but the json files can be understood by any language. the data in json 
    is in the form of object but key-value both are in string form also are in `..`and after the end of a member
    in object it cant have any ',' whereas same is acceptable in js  
    
    //converting js object into json 
    const obj = {
        name: "Atik",
        height: "185cm",
        locations: "Greater Noida",
    }
    const jsonFormat = JSON.stringify(obj);
    console.log(jsonFormat); 

    //viceversa
    const jsonFormat = `{
        "name": "Atik",
        "height": "185cm",
        "locations": "Greater Noida"
    }`
    
    const jsObj = JSON.parse(jsonFormat);
    console.log(jsObj);

*/
