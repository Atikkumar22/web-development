/*..DESTRUCTURING..*/

//Reference of array 
// let arr = [10,20,30,40,];
    // let arr2 = arr; //in this case the issue is the when we copy an array into another array then any changes made into that array also reflects on to the og arr which not correct way 

// let arr2 = [arr[0],arr[1],arr[2],arr[3]];
    //but in this way where directly refrencing to the indexes of the array and not the whole arraky so any changes in arr2 will not be showed in arr thats why this is better but lenghty so we use spread , rest...
// arr2.push(50);
// console.log(arr2)


// let kyaray = ['vivek','samaji','hamza','rehman'];
// let haray = [kyaray[0],kyaray[1],...kyaray[kyaray.length-1]];
// console.log(haray)
    /*
    kyaray.length - 1 = 3
    kyaray[3] = "rehman"
    so the code becomes: let haray = ['vivek', 'samaji', ...'rehman'];
    Also SPREAD operator works on iterables and string in iterable
    ...rehman converts to 'r', 'e', 'h', 'm', 'a', 'n'
    giving output ['vivek', 'samaji', 'r', 'e', 'h', 'm', 'a', 'n']

    to overcome this we use slice() method , is slices the array from the index we provide it like here it slice the array from index2 
    */
// let naray = [kyaray[0],kyaray[1],...kyaray.slice(2)];
// console.log(naray)

/*
Spread vs Rest Operator (...)
| Feature    | **Spread**                             | **Rest**                                    |
| ---------- | -------------------------------------- | ------------------------------------------- |
| Purpose    | **Expands** elements                   | **Collects** elements                       |
| Position   | **Right side** of `=` or function call | **Left side** of `=` or function parameters |
| Meaning    | Breaks array/string into items         | Groups remaining items into array           |
| Output     | Individual values                      | An array                                    |
| Used with  | Arrays, strings, objects               | Arrays, function arguments , objects        |
| Common use | Copy, merge, pass values               | Destructuring, variable arguments           |
*/

//Rest operator
// let name = ['one','two','three','four','five']
// let [a,b,...rest] = name; //rest
// let copy = name;
// let book = [...name] //spread
// book.push('six')
// console.log(book);
// console.log(name);


//---------------Destructuring in objects--------------------
// var obj = {
//     name: 'atik',
//     age: 25,
//     height: 185+'cm' 
// }
// // console.log(obj.name);
// var {...obj2} = obj;
// // console.log(obj2);
// var {name,height} = obj;
// console.log(name,height);

var user = {
    naam: "kalyani",
    age: 28,
    skills: ['acting', 'action', 'dance', 'singing' ],
    roles: 'vampire' 
};

var {skills} = user; 
console.log(skills); //will prints array of strings

var {first,...skills} = user; 
console.log(skills);//will print whole object 1stkey in first and remaining in skills

// var [...allskills] = skills; 
// console.log(allskills);


// array Outputits = ["Apple", "Banana", "Mango"];

// Bina destructuring ke:
// let a = fruits[0];
// let b = fruits[1];

// Destructuring ke saath:
const [first, second] = fruits;

console.log(first); 
console.log(second); 



