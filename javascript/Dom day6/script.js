// this is a object  
// var obj = {
//     user : "sarthak",
//     age : 27, 
//     city : 'Bhopal'
    
// }

// Lets create array of objects which is basically array that consist of different objects

// var arr =[10,20,30,40]
// var sum - 0
//  arr.forEach(function(elem){
//     sum = sum + elem
//     console.log(elem)
//  })

const user = [
  {
    image: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Aarav Sharma",
    city: "Mumbai",
    designation: "Software Engineer",
    experience: "3 years"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Priya Mehta",
    city: "Delhi",
    designation: "Data Analyst",
    experience: "5 years"
  },
  {
    image: "Gemini_Generated_Image_s0hhess0hhess0hh.png",
    name: "Shetal Musterya",
    city: "Bangalore",
    designation: "Marketing Manager",
    experience: "2 years"
  },
  {
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sneha Salami",
    city: "Hyderabad",
    designation: "UX Designer",
    experience: "4 years"
  },
  {
    image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vikram Singh",
    city: "Pune",
    designation: "DevOps Engineer",
    experience: "6 years"
  }
]

var sum = ''
user.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt=""></img>
            <h2>${elem.name}</h2>
            <h3>${elem.designation} <span>${elem.experience}</span></h3>
            <h4>${elem.city}</h4>
            <p>Lorem ipsum dolor sit amet  adipisicing elit. Vitae, tenetur!</p>
        </div> `   
})
var main = document.querySelector('main')
main.innerHTML = sum